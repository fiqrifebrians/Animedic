// Animedic Central localStorage State Manager (Strict Device-Local Storage)
const STATE_KEYS = {
  USERS: "animedic_users_v1",
  SESSION: "animedic_session_v1",
  BOOKINGS: "animedic_bookings_v1",
  RECORDS: "animedic_records_v1",
  CART: "animedic_cart_v1",
  DEMO_PENDING: "animedic_demo_pending_v1"
};

const AnimedicState = {
  _read(key, fallback) {
    try {
      const raw = localStorage.getItem(key);
      return raw ? JSON.parse(raw) : fallback;
    } catch (e) {
      return fallback;
    }
  },
  _write(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  },

  getUsers() {
    return this._read(STATE_KEYS.USERS, []);
  },
  saveUsers(users) {
    this._write(STATE_KEYS.USERS, users);
  },

  getSession() {
    return this._read(STATE_KEYS.SESSION, null);
  },
  setSession(email, triggerDemo = true) {
    this._write(STATE_KEYS.SESSION, { email, loggedInAt: new Date().toISOString() });
    if (triggerDemo) {
      try { sessionStorage.setItem(STATE_KEYS.DEMO_PENDING, "true"); } catch (e) {}
    }
  },
  clearSession() {
    localStorage.removeItem(STATE_KEYS.SESSION);
    try { sessionStorage.removeItem(STATE_KEYS.DEMO_PENDING); } catch (e) {}
  },

  getCurrentUser() {
    const session = this.getSession();
    if (!session || !session.email) return null;
    const users = this.getUsers();
    return users.find(u => u.email.toLowerCase() === session.email.toLowerCase()) || null;
  },

  isMonthlyPlanActive() {
    const user = this.getCurrentUser();
    return Boolean(user && user.plan === "Monthly Pet Plan");
  },

  updateCurrentUser(updaterFn) {
    const session = this.getSession();
    if (!session) return null;
    const users = this.getUsers();
    const idx = users.findIndex(u => u.email.toLowerCase() === session.email.toLowerCase());
    if (idx === -1) return null;
    users[idx] = updaterFn(users[idx]);
    this.saveUsers(users);
    return users[idx];
  },

  updateAccountDetails({ fullName, email, newPassword, photo }) {
    const session = this.getSession();
    if (!session) return { ok: false, error: "No active session." };
    const users = this.getUsers();
    const idx = users.findIndex(u => u.email.toLowerCase() === session.email.toLowerCase());
    if (idx === -1) return { ok: false, error: "Account not found." };

    const oldEmail = users[idx].email;
    const cleanEmail = email.trim().toLowerCase();
    if (cleanEmail !== oldEmail && users.some(u => u.email.toLowerCase() === cleanEmail)) {
      return { ok: false, error: "Another account on this device already uses this email." };
    }

    users[idx] = {
      ...users[idx],
      fullName: fullName.trim(),
      email: cleanEmail,
      password: newPassword ? newPassword : users[idx].password,
      photo: photo !== undefined ? photo : users[idx].photo
    };
    this.saveUsers(users);

    // Keep bookings and records linked if email changed
    if (cleanEmail !== oldEmail) {
      const bookings = this._read(STATE_KEYS.BOOKINGS, []).map(b =>
        b.userEmail === oldEmail ? { ...b, userEmail: cleanEmail } : b
      );
      this._write(STATE_KEYS.BOOKINGS, bookings);
      const records = this._read(STATE_KEYS.RECORDS, []).map(r =>
        r.userEmail === oldEmail ? { ...r, userEmail: cleanEmail } : r
      );
      this._write(STATE_KEYS.RECORDS, records);
      this.setSession(cleanEmail, false);
    }

    return { ok: true, user: users[idx] };
  },

  registerUser({ fullName, email, password }) {
    const users = this.getUsers();
    if (users.some(u => u.email.toLowerCase() === email.toLowerCase())) {
      return { ok: false, error: "An account with this email already exists on this device." };
    }
    const newUser = {
      id: "usr-" + Date.now(),
      fullName: fullName.trim(),
      email: email.trim().toLowerCase(),
      password,
      photo: "",
      onboarded: false,
      pets: [],
      plan: "Pay-Per-Visit",
      rxUnlocked: false,
      paidConsultVets: [],
      createdAt: new Date().toISOString()
    };
    users.push(newUser);
    this.saveUsers(users);
    this.setSession(newUser.email, true);
    return { ok: true, user: newUser };
  },

  loginUser(email, password) {
    const users = this.getUsers();
    const user = users.find(
      u => u.email.toLowerCase() === email.trim().toLowerCase() && u.password === password
    );
    if (!user) {
      return { ok: false, error: "Invalid email or password. Please try again or Sign Up." };
    }
    this.setSession(user.email, true);
    return { ok: true, user };
  },

  completeOnboarding(pets) {
    return this.updateCurrentUser(user => ({
      ...user,
      onboarded: true,
      pets
    }));
  },

  addPet(pet) {
    return this.updateCurrentUser(user => ({
      ...user,
      pets: [...(user.pets || []), pet]
    }));
  },

  updatePet(petId, fields) {
    return this.updateCurrentUser(user => ({
      ...user,
      pets: (user.pets || []).map(p => (p.id === petId ? { ...p, ...fields } : p))
    }));
  },

  deletePet(petId) {
    return this.updateCurrentUser(user => ({
      ...user,
      pets: (user.pets || []).filter(p => p.id !== petId)
    }));
  },

  setPlan(planName) {
    return this.updateCurrentUser(user => ({ ...user, plan: planName }));
  },

  unlockRx() {
    return this.updateCurrentUser(user => ({ ...user, rxUnlocked: true }));
  },

  unlockConsultVet(vetId) {
    return this.updateCurrentUser(user => {
      const list = user.paidConsultVets || [];
      if (list.includes(vetId)) return user;
      return { ...user, paidConsultVets: [...list, vetId] };
    });
  },

  isConsultVetUnlocked(vetId) {
    const user = this.getCurrentUser();
    if (!user) return false;
    if (user.plan === "Monthly Pet Plan") return true;
    return (user.paidConsultVets || []).includes(vetId);
  },

  getBookings() {
    const user = this.getCurrentUser();
    if (!user) return [];
    const all = this._read(STATE_KEYS.BOOKINGS, []);
    return all.filter(b => b.userEmail === user.email);
  },

  addBooking(booking) {
    const user = this.getCurrentUser();
    if (!user) return null;
    const all = this._read(STATE_KEYS.BOOKINGS, []);
    const defaultScheduled = new Date(Date.now() + 6 * 3600 * 1000).toISOString();
    const item = {
      id: "BK-" + Math.floor(100000 + Math.random() * 900000),
      userEmail: user.email,
      createdAt: new Date().toISOString(),
      scheduledAt: booking.scheduledAt || defaultScheduled,
      status: "Ongoing",
      // activeStep: 2 (waiting confirm), 3 (on the way), 4 (being treated), 5 (all 4 steps complete)
      activeStep: 2,
      ...booking
    };
    all.unshift(item);
    this._write(STATE_KEYS.BOOKINGS, all);
    return item;
  },

  advanceBookingStep(bookingId) {
    const all = this._read(STATE_KEYS.BOOKINGS, []);
    let target = null;
    const updated = all.map(b => {
      if (b.id === bookingId && b.status !== "Cancelled") {
        const current = b.activeStep || 2;
        const nextStep = Math.min(5, current + 1);
        const isDone = nextStep >= 5;
        target = {
          ...b,
          activeStep: nextStep,
          status: isDone ? "Completed" : "Ongoing",
          completedAt: isDone ? new Date().toISOString() : b.completedAt
        };
        return target;
      }
      return b;
    });
    this._write(STATE_KEYS.BOOKINGS, updated);

    if (target && target.status === "Completed" && (target.type === "Home Visit Vet" || target.type === "Home-Visit Vet")) {
      this.unlockRx();
      this.addMedicalRecord({
        petId: target.petId,
        petName: target.petName,
        providerName: target.providerName,
        service: target.serviceName,
        notes: "Physical home visit examination completed. Vital signs stable, preventive guidance provided, and digital prescription clearance activated in Animedic Pharmacy."
      });
    }
    return target;
  },

  cancelBooking(bookingId, reason) {
    const all = this._read(STATE_KEYS.BOOKINGS, []);
    let cancelled = null;
    const updated = all.map(b => {
      if (b.id === bookingId) {
        cancelled = {
          ...b,
          status: "Cancelled",
          cancelReason: reason,
          cancelledAt: new Date().toISOString()
        };
        return cancelled;
      }
      return b;
    });
    this._write(STATE_KEYS.BOOKINGS, updated);
    return cancelled;
  },

  getMedicalRecords() {
    const user = this.getCurrentUser();
    if (!user) return [];
    const all = this._read(STATE_KEYS.RECORDS, []);
    return all.filter(r => r.userEmail === user.email);
  },

  addMedicalRecord(record) {
    const user = this.getCurrentUser();
    if (!user) return null;
    const all = this._read(STATE_KEYS.RECORDS, []);
    const entry = {
      id: "MED-" + Math.floor(10000 + Math.random() * 90000),
      userEmail: user.email,
      date: new Date().toISOString(),
      ...record
    };
    all.unshift(entry);
    this._write(STATE_KEYS.RECORDS, all);
    return entry;
  },

  getCart() {
    return this._read(STATE_KEYS.CART, []);
  },
  saveCart(cart) {
    this._write(STATE_KEYS.CART, cart);
  },

  shouldShowDemoModal() {
    try { return sessionStorage.getItem(STATE_KEYS.DEMO_PENDING) === "true"; } catch (e) { return false; }
  },
  markDemoModalSeen() {
    try { sessionStorage.setItem(STATE_KEYS.DEMO_PENDING, "false"); } catch (e) {}
  }
};
