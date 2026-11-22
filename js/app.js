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
    menu: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>',
    arrowLeft: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m12 19-7-7 7-7"/><path d="M19 12H5"/></svg>',
    eye: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>',
    eyeOff: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M9.88 9.88a3 3 0 1 0 4.24 4.24"/><path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68"/><path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61"/><line x1="2" x2="22" y1="2" y2="22"/></svg>',
    cart: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg>'
  },

  PET_TYPE_SVGS: {
    Cat: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5c.67 0 1.35.09 2 .26 1.78-2 5.03-2.84 6.42-2.26 1.4.58-.42 7-.42 7 .57 1.07 1 2.24 1 3.44C21 17.9 16.97 21 12 21s-9-3.1-9-7.56c0-1.25.5-2.4 1-3.44 0 0-1.89-6.42-.5-7 1.39-.58 4.72.23 6.5 2.23A9.04 9.04 0 0 1 12 5Z"/><path d="M8 14v.5"/><path d="M16 14v.5"/><path d="M11.25 16.25h1.5L12 17l-.75-.75Z"/></svg>',
    Dog: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M10 5.172C10 3.782 8.423 2.679 6.5 3c-2.823.47-4.113 6.006-4 7 .08.703 1.725 1.722 3.656 1 1.261-.472 1.96-1.45 2.344-2.5"/><path d="M14.267 5.172c0-1.39 1.577-2.493 3.5-2.172 2.823.47 4.113 6.006 4 7-.08.703-1.725 1.722-3.656 1-1.261-.472-1.855-1.45-2.239-2.5"/><path d="M8 14v.5"/><path d="M16 14v.5"/><path d="M11.25 16.25h1.5L12 17l-.75-.75Z"/><path d="M4.42 11.247A13.152 13.152 0 0 0 4 14.556C4 18.728 7.582 21 12 21s8-2.272 8-6.444c0-1.061-.162-2.2-.493-3.309m-9.243-6.082A8.801 8.801 0 0 1 12 5c.78 0 1.5.108 2.161.306"/></svg>',
    Rabbit: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M13 16a3 3 0 0 1 2.24 5"/><path d="M18 12h.01"/><path d="M18 21h-8a4 4 0 0 1-4-4 7 7 0 0 1 7-7h.2L9.6 6.4a1 1 0 1 1 2.8-2.8L15.8 7h.2c3.3 0 6 2.7 6 6v1a2 2 0 0 1-2 2h-1a3 3 0 0 0-3 3"/><path d="M20 8.54V4a2 2 0 1 0-4 0v3"/><path d="M7.612 12.524a3 3 0 1 0-1.6 4.3"/></svg>',
    Hamster: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="7" cy="7" r="2.5"/><circle cx="17" cy="7" r="2.5"/><path d="M5 13a7 7 0 0 1 14 0c0 4-3 7-7 7s-7-3-7-7Z"/><path d="M9.5 13h.01"/><path d="M14.5 13h.01"/><path d="M11 16h2"/></svg>',
    Bird: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M16 7h.01"/><path d="M3.4 18H12a8 8 0 0 0 8-8V7a4 4 0 0 0-7.28-2.3L2 20"/><path d="m20 7 2 .5-2 .5"/><path d="M10 18v3"/><path d="M14 17.75V21"/></svg>',
    Other: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="4" r="2"/><circle cx="18" cy="8" r="2"/><circle cx="20" cy="16" r="2"/><path d="M9 10a5 5 0 0 1 5 5v3.5a3.5 3.5 0 0 1-6.84 1.045Q6.52 17.48 4.46 16.84A3.5 3.5 0 0 1 5.5 10Z"/></svg>'
  },

  getPetIcon(type) {
    return this.PET_TYPE_SVGS[type] || this.PET_TYPE_SVGS.Other;
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

  initPasswordToggles(root = document) {
    root.querySelectorAll(".pw-toggle-btn").forEach(btn => {
      if (btn.dataset.bound === "true") return;
      btn.dataset.bound = "true";
      const targetId = btn.dataset.target;
      const input = document.getElementById(targetId);
      if (!input) return;
      btn.innerHTML = this.ICONS.eyeOff;
      btn.setAttribute("aria-label", "Show password");
      btn.addEventListener("click", () => {
        const isHidden = input.type === "password";
        input.type = isHidden ? "text" : "password";
        btn.innerHTML = isHidden ? this.ICONS.eye : this.ICONS.eyeOff;
        btn.setAttribute("aria-label", isHidden ? "Hide password" : "Show password");
      });
    });
  },

  _attachKeylessTiles(mapInstance) {
    let fallbackAdded = false;
    const esri = L.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}", {
      maxZoom: 18,
      attribution: "Tiles &copy; Esri"
    });
    esri.on("tileerror", () => {
      if (fallbackAdded) return;
      fallbackAdded = true;
      mapInstance.removeLayer(esri);
      L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 19,
        attribution: "&copy; OpenStreetMap contributors"
      }).addTo(mapInstance);
    });
    esri.addTo(mapInstance);
  },

  _createPinIcon() {
    return L.divIcon({
      className: "animedic-map-pin",
      html: '<svg width="32" height="32" viewBox="0 0 24 24" fill="#EA580C" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3" fill="#FFFFFF"/></svg>',
      iconSize: [32, 32],
      iconAnchor: [16, 32],
      tooltipAnchor: [0, -28]
    });
  },

  formatIDR(amount) {
    return "Rp\u00A0" + Math.round(amount).toLocaleString("id-ID");
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

  isPublicPage() {
    const body = document.body;
    if (!body) return false;
    const page = body.dataset.page || "";
    return (
      body.dataset.public === "true" ||
      page === "index" ||
      page === "auth" ||
      Boolean(document.getElementById("landing-screen"))
    );
  },

  requireAuth() {
    const user = AnimedicState.getCurrentUser();
    if (!user || !user.onboarded) {
      if (!this.isPublicPage()) {
        window.location.replace("auth.html");
      }
      return null;
    }
    this.initPasswordToggles();
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
      { id: "home-visit", href: "home-visit.html", label: "Home Visit", icon: this.ICONS.stethoscope },
      { id: "pet-hotel", href: "pet-hotel.html", label: "Pet Hotel", icon: this.ICONS.hotel },
      { id: "pharmacy", href: "pharmacy.html", label: "Pharmacy", icon: this.ICONS.pill },
      { id: "bookings", href: "bookings.html", label: "My Bookings", icon: this.ICONS.calendar },
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
          <button type="button" class="mobile-menu-btn" id="open-mobile-menu-btn" aria-label="Open menu">
            ${this.ICONS.menu}
          </button>
          <a href="index.html" class="mobile-brand">
            <span class="brand-mark" style="width:30px;height:30px;">${this.ICONS.paw}</span>
            <span>Animedic</span>
          </a>
          <button type="button" class="location-pill" id="open-location-info-btn" title="Simulated Location">
            ${this.ICONS.pin}
            <span class="location-text">${ANIMEDIC_DATA.baseLocation.name}</span>
          </button>
        </div>
        <div class="header-right">
          <button type="button" class="mobile-loc-btn" id="open-location-mobile-btn" title="Simulated Location" aria-label="Simulated Location">
            ${this.ICONS.pin}
          </button>
          <button type="button" class="demo-pill-btn" id="open-demo-info-btn" title="Demo Info">
            ${this.ICONS.info}
            <span class="demo-text">Demo Info</span>
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
        navItems[3],
        navItems[4]
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

    this.injectMobileDrawer(navItems, activePage);
    this.injectLocationModal();
    this.injectDemoModal();

    const menuBtn = document.getElementById("open-mobile-menu-btn");
    if (menuBtn) {
      menuBtn.addEventListener("click", () => {
        const dr = document.getElementById("mobile-nav-drawer");
        if (dr) dr.classList.add("open");
      });
    }
    const openLocModal = () => {
      const lm = document.getElementById("location-info-modal");
      if (lm) {
        lm.classList.add("open");
        setTimeout(() => this._initStaticLocationMap(), 180);
      }
    };
    const locBtn = document.getElementById("open-location-info-btn");
    if (locBtn) locBtn.addEventListener("click", openLocModal);
    const mobileLocBtn = document.getElementById("open-location-mobile-btn");
    if (mobileLocBtn) mobileLocBtn.addEventListener("click", openLocModal);
    const demoBtn = document.getElementById("open-demo-info-btn");
    if (demoBtn) {
      demoBtn.addEventListener("click", () => this.openDemoModal());
    }
    if (AnimedicState.shouldShowDemoModal()) {
      setTimeout(() => this.openDemoModal(), 180);
    }

    this.initPasswordToggles();
    return user;
  },

  injectMobileDrawer(navItems, activePage) {
    if (document.getElementById("mobile-nav-drawer")) return;
    const drawer = document.createElement("div");
    drawer.id = "mobile-nav-drawer";
    drawer.className = "mobile-drawer-backdrop";
    drawer.innerHTML = `
      <div class="mobile-drawer-panel">
        <div class="flex-between" style="padding:4px 4px 18px;">
          <a href="index.html" class="brand-logo" style="padding:0;">
            <span class="brand-mark">${this.ICONS.paw}</span>
            <span>Animedic</span>
          </a>
          <button type="button" class="btn btn-outline btn-sm" id="close-mobile-drawer-btn" aria-label="Close menu">${this.ICONS.close}</button>
        </div>
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
          <div>Verified Pet Care</div>
        </div>
      </div>
    `;
    document.body.appendChild(drawer);
    document.getElementById("close-mobile-drawer-btn").onclick = () => drawer.classList.remove("open");
    drawer.addEventListener("click", (e) => {
      if (e.target === drawer) drawer.classList.remove("open");
    });
  },

  injectLocationModal() {
    if (document.getElementById("location-info-modal")) return;
    const modal = document.createElement("div");
    modal.id = "location-info-modal";
    modal.className = "modal-backdrop";
    modal.innerHTML = `
      <div class="modal-box">
        <button type="button" class="modal-close" id="close-loc-x" aria-label="Close">${this.ICONS.close}</button>
        <span class="badge badge-orange mb-2">Simulated Location</span>
        <h2 style="font-size:1.28rem;margin-bottom:10px;">Active Demo Location</h2>
        <div id="location-leaflet-map"></div>
        <p style="font-size:0.9rem;color:var(--navy-800);font-weight:600;margin-bottom:6px;">
          ${ANIMEDIC_DATA.baseLocation.name}
        </p>
        <p style="font-size:0.82rem;color:var(--slate-600);margin-bottom:18px;">
          Coordinates are anchored to Rawamangun (-6.1944, 106.8892) for prototype demonstration. Your real GPS location is not tracked.
        </p>
        <button type="button" class="btn btn-primary btn-block" id="close-loc-cta">Close</button>
      </div>
    `;
    document.body.appendChild(modal);
    const closeFn = () => modal.classList.remove("open");
    document.getElementById("close-loc-x").onclick = closeFn;
    document.getElementById("close-loc-cta").onclick = closeFn;
    modal.addEventListener("click", (e) => {
      if (e.target === modal) closeFn();
    });
  },

  _initStaticLocationMap() {
    if (typeof L === "undefined") return;
    const mapEl = document.getElementById("location-leaflet-map");
    if (!mapEl) return;

    if (!this._locationMap) {
      this._locationMap = L.map(mapEl, {
        zoomControl: false,
        attributionControl: false
      }).setView([-6.1944, 106.8892], 14);

      this._attachKeylessTiles(this._locationMap);

      L.marker([-6.1944, 106.8892], { icon: this._createPinIcon() })
        .addTo(this._locationMap)
        .bindTooltip("Rawamangun, East Jakarta", { direction: "top", offset: [0, -4] })
        .openTooltip();
    }

    this._locationMap.invalidateSize(true);
    this._locationMap.setView([-6.1944, 106.8892], 14, { animate: false });
  },

  injectDemoModal() {
    if (document.getElementById("demo-mode-modal")) return;
    const modal = document.createElement("div");
    modal.id = "demo-mode-modal";
    modal.className = "modal-backdrop";
    modal.innerHTML = `
      <div class="modal-box">
        <button type="button" class="modal-close" id="close-demo-x" aria-label="Close">${this.ICONS.close}</button>

        <!-- Slide 1: Prototype Overview -->
        <div id="demo-slide-1" class="demo-slide">
          <span class="badge badge-orange mb-2">Demo Mode</span>
          <h2 style="font-size:1.35rem;margin-bottom:12px;">Prototype Demo Mode Active</h2>
          <div style="display:flex;flex-direction:column;gap:10px;font-size:0.9rem;color:var(--slate-600);margin-bottom:22px;">
            <p>This is an interactive <strong>Prototype Demo</strong> built strictly for presentation and testing purposes.</p>
            <p>All provider listings, prices, consultations, and bookings use <strong>fictional sample data</strong> so you can explore the full experience freely.</p>
          </div>
          <button type="button" class="btn btn-primary btn-block" id="demo-next-btn">Next</button>
        </div>

        <!-- Slide 2: Simulated Location & Animated Map -->
        <div id="demo-slide-2" class="demo-slide" style="display:none;opacity:0;">
          <span class="badge badge-orange mb-2">Simulated Location</span>
          <h2 style="font-size:1.28rem;margin-bottom:10px;">Rawamangun, East Jakarta</h2>
          <div id="demo-leaflet-map"></div>
          <div style="display:flex;flex-direction:column;gap:6px;font-size:0.86rem;color:var(--slate-600);margin-bottom:18px;">
            <p>Your location is automatically set to Rawamangun, East Jakarta, Indonesia (-6.1944, 106.8892).</p>
            <p>This prototype does not track or use your actual current location.</p>
          </div>
          <div class="flex-between" style="gap:10px;">
            <button type="button" class="btn btn-outline" id="demo-back-btn">Back</button>
            <button type="button" class="btn btn-primary" style="flex:1;" id="close-demo-cta">Got It, Explore Animedic</button>
          </div>
        </div>

        <!-- 2-Dot Progress Indicator -->
        <div class="demo-dots" aria-hidden="true">
          <span class="demo-dot active" id="demo-dot-1"></span>
          <span class="demo-dot" id="demo-dot-2"></span>
        </div>
      </div>
    `;
    document.body.appendChild(modal);

    const closeFn = () => {
      clearTimeout(this._mapFlyTimer);
      modal.classList.remove("open");
      AnimedicState.markDemoModalSeen();
    };

    document.getElementById("close-demo-x").onclick = closeFn;
    document.getElementById("close-demo-cta").onclick = closeFn;
    modal.addEventListener("click", (e) => {
      if (e.target === modal) closeFn();
    });

    document.getElementById("demo-next-btn").onclick = () => this._showDemoSlide(2);
    document.getElementById("demo-back-btn").onclick = () => this._showDemoSlide(1);
  },

  _showDemoSlide(slideNum) {
    const s1 = document.getElementById("demo-slide-1");
    const s2 = document.getElementById("demo-slide-2");
    const d1 = document.getElementById("demo-dot-1");
    const d2 = document.getElementById("demo-dot-2");
    if (!s1 || !s2) return;

    clearTimeout(this._mapFlyTimer);

    if (slideNum === 1) {
      s2.style.opacity = "0";
      setTimeout(() => {
        s2.style.display = "none";
        s1.style.display = "block";
        requestAnimationFrame(() => { s1.style.opacity = "1"; });
      }, 150);
      d1.classList.add("active");
      d2.classList.remove("active");
    } else {
      s1.style.opacity = "0";
      setTimeout(() => {
        s1.style.display = "none";
        s2.style.display = "block";
        requestAnimationFrame(() => {
          s2.style.opacity = "1";
          this._initAndAnimateDemoMap();
        });
      }, 150);
      d1.classList.remove("active");
      d2.classList.add("active");
    }
  },

  _initAndAnimateDemoMap() {
    if (typeof L === "undefined") return;
    const mapEl = document.getElementById("demo-leaflet-map");
    if (!mapEl) return;

    if (!this._demoMap) {
      this._demoMap = L.map(mapEl, {
        zoomControl: false,
        attributionControl: false
      }).setView([-2.5, 118.0], 4);

      this._attachKeylessTiles(this._demoMap);

      this._demoMarker = L.marker([-6.1944, 106.8892], { icon: this._createPinIcon() })
        .addTo(this._demoMap)
        .bindTooltip("Rawamangun, East Jakarta", { direction: "top", offset: [0, -4] });
    }

    // Reset to full Indonesia view and invalidate size once visible
    this._demoMap.invalidateSize(true);
    this._demoMap.setView([-2.5, 118.0], 4, { animate: false });
    if (this._demoMarker) this._demoMarker.closeTooltip();

    this._mapFlyTimer = setTimeout(() => {
      if (!this._demoMap) return;
      this._demoMap.invalidateSize(true);
      this._demoMap.flyTo([-6.1944, 106.8892], 14, { duration: 2.2 });
      setTimeout(() => {
        if (this._demoMarker) this._demoMarker.openTooltip();
      }, 2250);
    }, 500);
  },

  openDemoModal() {
    const modal = document.getElementById("demo-mode-modal");
    if (!modal) return;
    // Always reset cleanly to Slide 1 on open
    clearTimeout(this._mapFlyTimer);
    const s1 = document.getElementById("demo-slide-1");
    const s2 = document.getElementById("demo-slide-2");
    const d1 = document.getElementById("demo-dot-1");
    const d2 = document.getElementById("demo-dot-2");
    if (s1 && s2) {
      s2.style.display = "none";
      s2.style.opacity = "0";
      s1.style.display = "block";
      s1.style.opacity = "1";
    }
    if (d1 && d2) {
      d1.classList.add("active");
      d2.classList.remove("active");
    }
    modal.classList.add("open");
  },

  renderGenderBadge(gender) {
    if (gender === "Male") {
      return `<span class="badge badge-male">${this.ICONS.male} Male</span>`;
    }
    return `<span class="badge badge-female">${this.ICONS.female} Female</span>`;
  }
};
