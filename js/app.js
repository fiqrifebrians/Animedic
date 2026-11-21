// Animedic Shared UI Utilities & Page Controllers
const AnimedicApp = {
  ICONS: {
    paw: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="4" r="2"/><circle cx="18" cy="8" r="2"/><circle cx="20" cy="16" r="2"/><path d="M9 10a5 5 0 0 1 5 5v3.5a3.5 3.5 0 0 1-6.84 1.045Q6.52 17.48 4.46 16.84A3.5 3.5 0 0 1 5.5 10Z"/></svg>',
    home: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>',
    chat: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>',
    stethoscope: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M4.8 2.3A.3.3 0 1 0 5 2H4a2 2 0 0 0-2 2v5a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6V4a2 2 0 0 0-2-2h-1a.2.2 0 1 0 .3.3"/><path d="M8 15v1a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6v-4"/><circle cx="20" cy="10" r="2"/></svg>',
    hotel: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M18 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2Z"/><path d="m9 16 .348-.24c1.465-1.013 3.84-1.013 5.304 0L15 16"/><path d="M8 7h.01"/><path d="M16 7h.01"/><path d="M12 7h.01"/><path d="M12 11h.01"/><path d="M16 11h.01"/><path d="M8 11h.01"/></svg>',
    pill: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="m10.5 20.5 10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7Z"/><path d="m8.5 8.5 7 7"/></svg>',
    calendar: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/></svg>',
    user: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>',
    pin: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>',
    star: '<svg width="14" height="14" viewBox="0 0 24 24" fill="#F97316" stroke="#F97316" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>',
    shield: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg>',
    scissors: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><circle cx="6" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><line x1="20" x2="8.12" y1="4" y2="15.88"/><line x1="14.47" x2="20" y1="14.48" y2="20"/><line x1="8.12" x2="12" y1="8.12" y2="12"/></svg>',
    lock: '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>',
    close: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>',
    info: '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>',
    male: '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round"><circle cx="10" cy="14" r="5"/><path d="M19 5l-5.4 5.4"/><path d="M15 5h4v4"/></svg>',
    female: '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="9" r="5"/><path d="M12 14v7"/><path d="M9 18h6"/></svg>',
    paperclip: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48"/></svg>',
    cart: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg>'
  },

  compressImage(file, maxDim = 256) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = (e) => {
        const img = new Image();
        img.onload = () => {
          const canvas = document.createElement("canvas");
          let w = img.width;
          let h = img.height;
          if (w > h && w > maxDim) {
            h = Math.round((h * maxDim) / w);
            w = maxDim;
          } else if (h >= w && h > maxDim) {
            w = Math.round((w * maxDim) / h);
            h = maxDim;
          }
          canvas.width = w;
          canvas.height = h;
          const ctx = canvas.getContext("2d");
          ctx.drawImage(img, 0, 0, w, h);
          resolve(canvas.toDataURL("image/jpeg", 0.78));
        };
        img.onerror = reject;
        img.src = e.target.result;
      };
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  },

  formatIDR(amount) {
    return "Rp " + Math.round(amount).toLocaleString("id-ID");
  },

  calculateTravelFee(distanceKm) {
    // Dynamic Jakarta distance-based travel fee: base Rp 15.000 + Rp 5.000/km
    return 15000 + Math.round(distanceKm * 5000);
  },

  estimateTravelMinutes(distanceKm) {
    return Math.max(10, Math.round(distanceKm * 4.5 + 8));
  },

  haversineKm(lat1, lon1, lat2, lon2) {
    const R = 6371;
    const dLat = ((lat2 - lat1) * Math.PI) / 180;
    const dLon = ((lon2 - lon1) * Math.PI) / 180;
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos((lat1 * Math.PI) / 180) *
        Math.cos((lat2 * Math.PI) / 180) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    return Number((R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))).toFixed(1));
  },

  showToast(message) {
    let el = document.getElementById("animedic-toast");
    if (!el) {
      el = document.createElement("div");
      el.id = "animedic-toast";
      el.className = "toast";
      document.body.appendChild(el);
    }
    el.textContent = message;
    el.classList.add("show");
    clearTimeout(this._toastTimer);
    this._toastTimer = setTimeout(() => el.classList.remove("show"), 3200);
  },

  requireAuth() {
    const user = AnimedicState.getCurrentUser();
    if (!user || !user.onboarded) {
      window.location.replace("auth.html");
      return null;
    }
    return user;
  },

  initShell(activePage) {
    const user = this.requireAuth();
    if (!user) return null;

    const initials = user.fullName
      .split(" ")
      .map(s => s[0])
      .join("")
      .substring(0, 2)
      .toUpperCase();

    const navItems = [
      { id: "index", href: "index.html", label: "Dashboard", icon: this.ICONS.home },
      { id: "consultation", href: "consultation.html", label: "Consultation", icon: this.ICONS.chat },
      { id: "home-visit", href: "home-visit.html", label: "Home-Visit", icon: this.ICONS.stethoscope },
      { id: "pet-hotel", href: "pet-hotel.html", label: "Pet Hotel", icon: this.ICONS.hotel },
      { id: "pharmacy", href: "pharmacy.html", label: "Pharmacy", icon: this.ICONS.pill },
      { id: "bookings", href: "bookings.html", label: "Bookings", icon: this.ICONS.calendar },
      { id: "profile", href: "profile.html", label: "Profile", icon: this.ICONS.user }
    ];

    const sidebarEl = document.getElementById("app-sidebar");
    if (sidebarEl) {
      sidebarEl.innerHTML = `
        <a href="index.html" class="brand-logo">
          <span class="brand-mark">${this.ICONS.paw}</span>
          <span>Animedic</span>
        </a>
        <nav class="sidebar-nav">
          ${navItems
            .map(
              item => `
            <a href="${item.href}" class="nav-link ${activePage === item.id ? "active" : ""}">
              ${item.icon}
              <span>${item.label}</span>
            </a>`
            )
            .join("")}
        </nav>
        <div class="sidebar-footer">
          <div><strong>Greater Jakarta MVP</strong></div>
          <div>PDHI & UU PDP Compliant</div>
        </div>
      `;
    }

    const headerEl = document.getElementById("app-header");
    if (headerEl) {
      headerEl.innerHTML = `
        <div class="header-left">
          <a href="index.html" class="mobile-brand">
            <span class="brand-mark" style="width:30px;height:30px;">${this.ICONS.paw}</span>
            <span>Animedic</span>
          </a>
          <div class="location-pill" title="Simulated GPS Anchor">
            ${this.ICONS.pin}
            <span>${ANIMEDIC_DATA.baseLocation.name}</span>
          </div>
        </div>
        <div class="header-right">
          <button type="button" class="demo-pill-btn" id="open-demo-info-btn">
            ${this.ICONS.info}
            <span>Demo Info</span>
          </button>
          <a href="profile.html" class="avatar-btn" id="header-avatar-btn" title="${user.fullName}">${user.photo ? `<img src="${user.photo}" alt="${user.fullName}">` : initials}</a>
        </div>
      `;
    }

    const bottomEl = document.getElementById("app-bottom-nav");
    if (bottomEl) {
      const mobileItems = [
        navItems[0],
        navItems[1],
        navItems[2],
        navItems[4],
        navItems[5]
      ];
      bottomEl.innerHTML = mobileItems
        .map(
          item => `
        <a href="${item.href}" class="${activePage === item.id ? "active" : ""}">
          ${item.icon}
          <span>${item.label}</span>
        </a>`
        )
        .join("");
    }

    this.injectDemoModal();
    const demoBtn = document.getElementById("open-demo-info-btn");
    if (demoBtn) {
      demoBtn.addEventListener("click", () => this.openDemoModal());
    }
    if (AnimedicState.shouldShowDemoModal()) {
      setTimeout(() => this.openDemoModal(), 180);
    }

    return user;
  },

  injectDemoModal() {
    if (document.getElementById("demo-mode-modal")) return;
    const modal = document.createElement("div");
    modal.id = "demo-mode-modal";
    modal.className = "modal-backdrop";
    modal.innerHTML = `
      <div class="modal-box">
        <button type="button" class="modal-close" id="close-demo-x" aria-label="Close">${this.ICONS.close}</button>
        <span class="badge badge-orange mb-2">Demo Mode</span>
        <h2 style="font-size:1.35rem;margin-bottom:12px;">Prototype Demo Mode Active</h2>
        <div style="display:flex;flex-direction:column;gap:10px;font-size:0.9rem;color:var(--slate-600);margin-bottom:22px;">
          <p>This is an interactive <strong>Prototype Demo</strong> built for presentation and testing purposes.</p>
          <p>Your location is automatically set to <strong>Rawamangun, East Jakarta, Indonesia (-6.1944, 106.8892)</strong>.</p>
          <p>This prototype does <strong>not</strong> track or use your actual current location.</p>
        </div>
        <button type="button" class="btn btn-primary btn-block" id="close-demo-cta">Got It, Explore Animedic</button>
      </div>
    `;
    document.body.appendChild(modal);

    const closeFn = () => {
      modal.classList.remove("open");
      AnimedicState.markDemoModalSeen();
    };
    document.getElementById("close-demo-x").onclick = closeFn;
    document.getElementById("close-demo-cta").onclick = closeFn;
    modal.addEventListener("click", (e) => {
      if (e.target === modal) closeFn();
    });
  },

  openDemoModal() {
    const modal = document.getElementById("demo-mode-modal");
    if (modal) modal.classList.add("open");
  },

  renderGenderBadge(gender) {
    if (gender === "Male") {
      return `<span class="badge badge-male">${this.ICONS.male} Male</span>`;
    }
    return `<span class="badge badge-female">${this.ICONS.female} Female</span>`;
  }
};
