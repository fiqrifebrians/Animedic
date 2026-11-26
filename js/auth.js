// Animedic Authentication & Dynamic Post-Login Pet Onboarding Wizard
(function () {
  const existingUser = AnimedicState.getCurrentUser();
  if (existingUser && existingUser.onboarded) {
    window.location.replace("index.html");
    return;
  }

  const authCard = document.getElementById("auth-card");
  const authView = document.getElementById("auth-view");
  const wizardView = document.getElementById("wizard-view");
  const signinForm = document.getElementById("signin-form");
  const signupForm = document.getElementById("signup-form");
  const authTitle = document.getElementById("auth-title");
  const authSubtitle = document.getElementById("auth-subtitle");

  const EYE_SVG = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>';
  const EYE_OFF_SVG = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M9.88 9.88a3 3 0 1 0 4.24 4.24"/><path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68"/><path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61"/><line x1="2" x2="22" y1="2" y2="22"/></svg>';
  document.querySelectorAll(".pw-toggle-btn").forEach(btn => {
    const input = document.getElementById(btn.dataset.target);
    if (!input) return;
    btn.innerHTML = EYE_OFF_SVG;
    btn.addEventListener("click", () => {
      const isHidden = input.type === "password";
      input.type = isHidden ? "text" : "password";
      btn.innerHTML = isHidden ? EYE_SVG : EYE_OFF_SVG;
      btn.setAttribute("aria-label", isHidden ? "Hide password" : "Show password");
    });
  });

  const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  function fadeNavigate(url) {
    authCard.classList.add("fade-out");
    setTimeout(() => {
      window.location.replace(url);
    }, 220);
  }

  const urlParams = new URLSearchParams(window.location.search);
  if (urlParams.get("mode") === "signup") {
    signinForm.style.display = "none";
    signupForm.style.display = "block";
    authTitle.textContent = "Create your Animedic account";
    authSubtitle.textContent = "Sign up to manage your pets and book verified home visit care.";
  }

  document.getElementById("switch-to-signup").addEventListener("click", (e) => {
    e.preventDefault();
    signinForm.style.display = "none";
    signupForm.style.display = "block";
    authTitle.textContent = "Create your Animedic account";
    authSubtitle.textContent = "Sign up to manage your pets and book verified home visit care.";
  });

  document.getElementById("switch-to-signin").addEventListener("click", (e) => {
    e.preventDefault();
    signupForm.style.display = "none";
    signinForm.style.display = "block";
    authTitle.textContent = "Sign in to Animedic";
    authSubtitle.textContent = "Access your pet health records, consultations, and home visit bookings.";
  });

  signinForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = document.getElementById("signin-email").value.trim();
    const password = document.getElementById("signin-password").value;
    const errEl = document.getElementById("signin-error");
    errEl.style.display = "none";

    if (!email || !EMAIL_REGEX.test(email)) {
      errEl.textContent = "Please enter a valid email address.";
      errEl.style.display = "block";
      return;
    }
    if (!password) {
      errEl.textContent = "Please enter your password.";
      errEl.style.display = "block";
      return;
    }

    const res = AnimedicState.loginUser(email, password);
    if (!res.ok) {
      errEl.textContent = res.error;
      errEl.style.display = "block";
      return;
    }

    if (res.user.onboarded) {
      fadeNavigate("index.html");
    } else {
      transitionToWizard(res.user);
    }
  });

  signupForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const fullName = document.getElementById("signup-name").value.trim();
    const email = document.getElementById("signup-email").value.trim();
    const password = document.getElementById("signup-password").value;
    const confirm = document.getElementById("signup-confirm").value;
    const listEl = document.getElementById("signup-validation-list");

    const errors = [];
    if (!fullName) errors.push("Name is required.");
    if (!EMAIL_REGEX.test(email)) errors.push("Enter a valid email format (name@domain.com).");
    if (password.length < 8) errors.push("Password must be at least 8 characters.");
    if (!/[a-z]/.test(password)) errors.push("Password must include at least 1 lowercase letter.");
    if (!/[A-Z]/.test(password)) errors.push("Password must include at least 1 uppercase letter.");
    if (!/[0-9]/.test(password)) errors.push("Password must include at least 1 number.");
    if (password !== confirm) errors.push("Passwords must match.");

    if (errors.length > 0) {
      listEl.innerHTML = errors.map(err => `<li>${err}</li>`).join("");
      listEl.style.display = "block";
      return;
    }
    listEl.style.display = "none";

    const res = AnimedicState.registerUser({ fullName, email, password });
    if (!res.ok) {
      listEl.innerHTML = `<li>${res.error}</li>`;
      listEl.style.display = "block";
      return;
    }
    transitionToWizard(res.user);
  });

  // --- Post-Login Pet Onboarding Wizard ---
  let wizardState = {
    user: null,
    step: 0, // 0: greet1, 1: greet2, 2: petCount, 3+: pet loops (3 sub-steps per pet)
    petCount: 1,
    pets: []
  };

  const PET_TYPE_SVGS = {
    Cat: '<svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5c.67 0 1.35.09 2 .26 1.78-2 5.03-2.84 6.42-2.26 1.4.58-.42 7-.42 7 .57 1.07 1 2.24 1 3.44C21 17.9 16.97 21 12 21s-9-3.1-9-7.56c0-1.25.5-2.4 1-3.44 0 0-1.89-6.42-.5-7 1.39-.58 4.72.23 6.5 2.23A9.04 9.04 0 0 1 12 5Z"/><path d="M8 14v.5"/><path d="M16 14v.5"/><path d="M11.25 16.25h1.5L12 17l-.75-.75Z"/></svg>',
    Dog: '<svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M10 5.172C10 3.782 8.423 2.679 6.5 3c-2.823.47-4.113 6.006-4 7 .08.703 1.725 1.722 3.656 1 1.261-.472 1.96-1.45 2.344-2.5"/><path d="M14.267 5.172c0-1.39 1.577-2.493 3.5-2.172 2.823.47 4.113 6.006 4 7-.08.703-1.725 1.722-3.656 1-1.261-.472-1.855-1.45-2.239-2.5"/><path d="M8 14v.5"/><path d="M16 14v.5"/><path d="M11.25 16.25h1.5L12 17l-.75-.75Z"/><path d="M4.42 11.247A13.152 13.152 0 0 0 4 14.556C4 18.728 7.582 21 12 21s8-2.272 8-6.444c0-1.061-.162-2.2-.493-3.309m-9.243-6.082A8.801 8.801 0 0 1 12 5c.78 0 1.5.108 2.161.306"/></svg>',
    Rabbit: '<svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M13 16a3 3 0 0 1 2.24 5"/><path d="M18 12h.01"/><path d="M18 21h-8a4 4 0 0 1-4-4 7 7 0 0 1 7-7h.2L9.6 6.4a1 1 0 1 1 2.8-2.8L15.8 7h.2c3.3 0 6 2.7 6 6v1a2 2 0 0 1-2 2h-1a3 3 0 0 0-3 3"/><path d="M20 8.54V4a2 2 0 1 0-4 0v3"/><path d="M7.612 12.524a3 3 0 1 0-1.6 4.3"/></svg>',
    Hamster: '<svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="7" cy="7" r="2.5"/><circle cx="17" cy="7" r="2.5"/><path d="M5 13a7 7 0 0 1 14 0c0 4-3 7-7 7s-7-3-7-7Z"/><path d="M9.5 13h.01"/><path d="M14.5 13h.01"/><path d="M11 16h2"/></svg>',
    Bird: '<svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M16 7h.01"/><path d="M3.4 18H12a8 8 0 0 0 8-8V7a4 4 0 0 0-7.28-2.3L2 20"/><path d="m20 7 2 .5-2 .5"/><path d="M10 18v3"/><path d="M14 17.75V21"/></svg>',
    Other: '<svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="4" r="2"/><circle cx="18" cy="8" r="2"/><circle cx="20" cy="16" r="2"/><path d="M9 10a5 5 0 0 1 5 5v3.5a3.5 3.5 0 0 1-6.84 1.045Q6.52 17.48 4.46 16.84A3.5 3.5 0 0 1 5.5 10Z"/></svg>'
  };

  const MALE_SVG = '<svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="10" cy="14" r="5"/><path d="M19 5l-5.4 5.4"/><path d="M15 5h4v4"/></svg>';
  const FEMALE_SVG = '<svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="9" r="5"/><path d="M12 14v7"/><path d="M9 18h6"/></svg>';

  function transitionToWizard(user) {
    authView.classList.add("fade-out");
    setTimeout(() => {
      authView.style.display = "none";
      wizardView.style.display = "block";
      wizardState.user = user;
      wizardState.step = 0;
      wizardState.petCount = 1;
      wizardState.pets = [];
      renderWizardStep();
      requestAnimationFrame(() => {
        wizardView.style.opacity = "1";
      });
    }, 220);
  }

  function ensurePetsArray(count) {
    while (wizardState.pets.length < count) {
      wizardState.pets.push({
        id: "pet-" + Date.now() + "-" + wizardState.pets.length,
        type: "",
        name: "",
        gender: ""
      });
    }
    wizardState.pets = wizardState.pets.slice(0, count);
  }

  function computeProgressPercent() {
    // Fixed monotonic milestones for Welcome + Pet Count phase (never jumps when changing pet count)
    if (wizardState.step === 0) return 12;
    if (wizardState.step === 1) return 24;
    if (wizardState.step === 2) return 36;
    // Dynamically apportion remaining 64% across pet detail steps
    const totalPetSteps = wizardState.petCount * 3;
    const completedPetSteps = wizardState.step - 2; // 1 .. totalPetSteps
    return Math.min(100, Math.round(36 + (completedPetSteps / totalPetSteps) * 64));
  }

  function renderWizardStep() {
    document.getElementById("wizard-progress").style.width = computeProgressPercent() + "%";
    const container = document.getElementById("wizard-body");
    const step = wizardState.step;
    container.dataset.wizardStep = String(step);

    if (step === 0) {
      const firstName = wizardState.user.fullName.split(" ")[0];
      container.innerHTML = `
        <span class="badge badge-orange mb-2">Welcome</span>
        <h2 style="font-size:1.45rem;margin-bottom:10px;">Welcome to Animedic, ${firstName}.</h2>
        <p style="color:var(--slate-600);font-size:0.95rem;margin-bottom:24px;">
          Stress-free veterinary care, grooming, and boarding delivered straight to your home. Let us set up your pet profiles in less than a minute.
        </p>
        <div class="flex-between">
          <span></span>
          <button class="btn btn-primary" id="wiz-next">Next</button>
        </div>
      `;
      document.getElementById("wiz-next").onclick = () => { wizardState.step++; renderWizardStep(); };
      return;
    }

    if (step === 1) {
      container.innerHTML = `
        <span class="badge badge-orange mb-2">How Animedic Works</span>
        <h2 style="font-size:1.38rem;margin-bottom:12px;">Built for safety and transparency.</h2>
        <div style="display:flex;flex-direction:column;gap:12px;margin-bottom:24px;">
          <div style="padding:12px 14px;border-radius:12px;background:var(--bg-page);border:1px solid var(--slate-200);">
            <strong style="font-size:0.9rem;">Verified Practitioners</strong>
            <p style="font-size:0.82rem;color:var(--slate-600);">Every veterinarian and groomer is verified for safety and professional credentials.</p>
          </div>
          <div style="padding:12px 14px;border-radius:12px;background:var(--bg-page);border:1px solid var(--slate-200);">
            <strong style="font-size:0.9rem;">Protected Payments</strong>
            <p style="font-size:0.82rem;color:var(--slate-600);">Your payment is held safely and released to the provider only after service completion.</p>
          </div>
          <div style="padding:12px 14px;border-radius:12px;background:var(--bg-page);border:1px solid var(--slate-200);">
            <strong style="font-size:0.9rem;">Digital Health Records</strong>
            <p style="font-size:0.82rem;color:var(--slate-600);">Keep visit notes, vaccinations, and prescription eligibility in one place.</p>
          </div>
        </div>
        <div class="flex-between">
          <button class="btn btn-outline" id="wiz-back">Back</button>
          <button class="btn btn-primary" id="wiz-next">Next</button>
        </div>
      `;
      document.getElementById("wiz-back").onclick = () => { wizardState.step--; renderWizardStep(); };
      document.getElementById("wiz-next").onclick = () => { wizardState.step++; renderWizardStep(); };
      return;
    }

    if (step === 2) {
      container.innerHTML = `
        <span class="badge badge-orange mb-2">Your Household</span>
        <h2 style="font-size:1.38rem;margin-bottom:6px;">How many pets do you have at home?</h2>
        <p style="color:var(--slate-600);font-size:0.88rem;">We will create an individual profile for each pet.</p>
        <div class="num-grid">
          ${[1, 2, 3, 4, 5].map(n => `
            <button type="button" class="num-btn ${wizardState.petCount === n ? "selected" : ""}" data-num="${n}">${n}</button>
          `).join("")}
        </div>
        <div class="flex-between">
          <button class="btn btn-outline" id="wiz-back">Back</button>
          <button class="btn btn-primary" id="wiz-next">Next</button>
        </div>
      `;
      container.querySelectorAll(".num-btn").forEach(btn => {
        btn.onclick = () => {
          wizardState.petCount = parseInt(btn.dataset.num, 10);
          container.querySelectorAll(".num-btn").forEach(b => b.classList.remove("selected"));
          btn.classList.add("selected");
        };
      });
      document.getElementById("wiz-back").onclick = () => { wizardState.step--; renderWizardStep(); };
      document.getElementById("wiz-next").onclick = () => {
        ensurePetsArray(wizardState.petCount);
        wizardState.step++;
        renderWizardStep();
      };
      return;
    }

    // Dynamic Pet Loop Steps (3 sub-steps per pet)
    const offset = step - 3;
    const petIdx = Math.floor(offset / 3);
    const subStep = offset % 3;
    const pet = wizardState.pets[petIdx];
    const isSingle = wizardState.petCount === 1;
    const ORDINALS = ["First", "Second", "Third", "Fourth", "Fifth"];
    const ordLabel = ORDINALS[petIdx] || `Pet ${petIdx + 1}`;
    const petBadge = isSingle ? "Your Pet" : `${ordLabel} Pet`;

    if (subStep === 0) {
      const heading = isSingle ? "What type of pet is it?" : `What type of pet is your ${ordLabel.toLowerCase()} pet?`;
      container.innerHTML = `
        <span class="badge badge-navy mb-2">${petBadge}</span>
        <h2 style="font-size:1.35rem;margin-bottom:6px;">${heading}</h2>
        <div class="select-card-grid-3">
          ${["Cat", "Dog", "Rabbit", "Hamster", "Bird", "Other"].map(t => `
            <button type="button" class="select-option-card ${pet.type === t ? "selected" : ""}" data-type="${t}">
              ${PET_TYPE_SVGS[t]}
              <span>${t}</span>
            </button>
          `).join("")}
        </div>
        <div class="form-error" id="wiz-err">Please select a pet type to continue.</div>
        <div class="flex-between mt-2">
          <button class="btn btn-outline" id="wiz-back">Back</button>
          <button class="btn btn-primary" id="wiz-next">Next</button>
        </div>
      `;
      container.querySelectorAll(".select-option-card").forEach(card => {
        card.onclick = () => {
          pet.type = card.dataset.type;
          container.querySelectorAll(".select-option-card").forEach(c => c.classList.remove("selected"));
          card.classList.add("selected");
          const err = document.getElementById("wiz-err");
          if (err) err.style.display = "none";
        };
      });
      document.getElementById("wiz-back").onclick = () => { wizardState.step--; renderWizardStep(); };
      document.getElementById("wiz-next").onclick = () => {
        if (!pet.type) {
          document.getElementById("wiz-err").style.display = "block";
          return;
        }
        wizardState.step++;
        renderWizardStep();
      };
      return;
    }

    if (subStep === 1) {
      const heading = isSingle ? "What is your pet's name?" : `What is your ${pet.type.toLowerCase()}'s name?`;
      container.innerHTML = `
        <span class="badge badge-navy mb-2">${petBadge}</span>
        <h2 style="font-size:1.35rem;margin-bottom:14px;">${heading}</h2>
        <div class="form-group">
          <input type="text" id="pet-name-input" class="form-input" placeholder="Enter your pet's name" value="${pet.name || ""}" autocomplete="off">
          <div class="form-error" id="wiz-err">Please enter your pet's name.</div>
        </div>
        <div class="flex-between mt-2">
          <button class="btn btn-outline" id="wiz-back">Back</button>
          <button class="btn btn-primary" id="wiz-next">Next</button>
        </div>
      `;
      const input = document.getElementById("pet-name-input");
      input.focus();
      document.getElementById("wiz-back").onclick = () => {
        pet.name = input.value.trim();
        wizardState.step--;
        renderWizardStep();
      };
      document.getElementById("wiz-next").onclick = () => {
        const val = input.value.trim();
        if (!val) {
          document.getElementById("wiz-err").style.display = "block";
          return;
        }
        pet.name = val;
        wizardState.step++;
        renderWizardStep();
      };
      return;
    }

    if (subStep === 2) {
      const isLastPet = petIdx === wizardState.petCount - 1;
      container.innerHTML = `
        <span class="badge badge-navy mb-2">${petBadge}</span>
        <h2 style="font-size:1.35rem;margin-bottom:6px;">What is ${pet.name}'s gender?</h2>
        <div class="select-card-grid">
          <button type="button" class="select-option-card gender-male ${pet.gender === "Male" ? "selected" : ""}" data-gender="Male">
            ${MALE_SVG}
            <span>Male</span>
          </button>
          <button type="button" class="select-option-card gender-female ${pet.gender === "Female" ? "selected" : ""}" data-gender="Female">
            ${FEMALE_SVG}
            <span>Female</span>
          </button>
        </div>
        <div class="form-error" id="wiz-err">Please select a gender to continue.</div>
        <div class="flex-between mt-2">
          <button class="btn btn-outline" id="wiz-back">Back</button>
          <button class="btn btn-primary" id="wiz-next">${isLastPet ? "Finish Setup" : "Next Pet"}</button>
        </div>
      `;
      container.querySelectorAll(".select-option-card").forEach(card => {
        card.onclick = () => {
          pet.gender = card.dataset.gender;
          container.querySelectorAll(".select-option-card").forEach(c => c.classList.remove("selected"));
          card.classList.add("selected");
          const err = document.getElementById("wiz-err");
          if (err) err.style.display = "none";
        };
      });
      document.getElementById("wiz-back").onclick = () => { wizardState.step--; renderWizardStep(); };
      document.getElementById("wiz-next").onclick = () => {
        if (!pet.gender) {
          document.getElementById("wiz-err").style.display = "block";
          return;
        }
        if (isLastPet) {
          AnimedicState.completeOnboarding(wizardState.pets);
          fadeNavigate("index.html");
        } else {
          wizardState.step++;
          renderWizardStep();
        }
      };
    }
  }

  // If user is logged in but not yet onboarded, jump straight to wizard
  if (existingUser && !existingUser.onboarded) {
    authView.style.display = "none";
    wizardView.style.display = "block";
    wizardView.style.opacity = "1";
    wizardState.user = existingUser;
    renderWizardStep();
  }
})();
