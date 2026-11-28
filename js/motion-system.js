// Animedic Lightweight Component Motion & Smooth Scroll Engine (Lenis + GSAP ScrollTrigger + Motion)
(function () {
  const prefersReducedMotion =
    window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const hasGSAP = typeof window.gsap !== "undefined";
  const hasScrollTrigger = typeof window.ScrollTrigger !== "undefined";
  const hasLenis = typeof window.Lenis !== "undefined";
  const hasMotion = typeof window.Motion !== "undefined" && typeof window.Motion.animate === "function";

  if (hasGSAP && hasScrollTrigger) {
    window.gsap.registerPlugin(window.ScrollTrigger);
  }

  const AnimedicMotion = {
    lenis: null,
    _observer: null,
    _refreshTimer: null,
    _resizeTimer: null,
    _lastWizardStep: null,
    _visitedWizardSteps: new Set(),

    init() {
      this._markInternalScrollContainers();
      this._initLenis();
      this._observeModalsAndDrawers();
      this._observeDynamicGrids();

      requestAnimationFrame(() => {
        this.animatePage(document);
        this.bindHovers(document);
        if (hasScrollTrigger) window.ScrollTrigger.refresh();
      });

      window.addEventListener("resize", () => {
        clearTimeout(this._resizeTimer);
        this._resizeTimer = setTimeout(() => {
          if (this.lenis) this.lenis.resize();
          if (hasScrollTrigger) window.ScrollTrigger.refresh();
        }, 160);
      });
    },

    _markInternalScrollContainers() {
      const selectors = [
        ".modal-box",
        ".drawer-panel",
        ".mobile-drawer-panel",
        ".chat-messages",
        ".pets-strip",
        "#consult-vet-list",
        "#cart-items",
        "#demo-leaflet-map",
        "#location-leaflet-map"
      ];
      document.querySelectorAll(selectors.join(",")).forEach(el => {
        el.setAttribute("data-lenis-prevent", "");
      });
    },

    _initLenis() {
      if (prefersReducedMotion || !hasLenis) return;

      this.lenis = new window.Lenis({
        lerp: 0.1,
        duration: 1.0,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: "vertical",
        gestureOrientation: "vertical",
        smoothWheel: true,
        wheelMultiplier: 0.95,
        touchMultiplier: 1.4,
        prevent: (node) => {
          if (!node || !node.closest) return false;
          return Boolean(
            node.closest("[data-lenis-prevent]") ||
            node.closest(".modal-backdrop.open") ||
            node.closest(".drawer-backdrop.open") ||
            node.closest(".mobile-drawer-backdrop.open")
          );
        }
      });

      if (hasGSAP && hasScrollTrigger) {
        this.lenis.on("scroll", window.ScrollTrigger.update);
        window.gsap.ticker.add((time) => {
          if (this.lenis) this.lenis.raf(time * 1000);
        });
        window.gsap.ticker.lagSmoothing(0);
      } else {
        const raf = (time) => {
          if (this.lenis) this.lenis.raf(time);
          requestAnimationFrame(raf);
        };
        requestAnimationFrame(raf);
      }
    },

    _isVisible(el) {
      if (!el || el.nodeType !== 1) return false;
      const style = window.getComputedStyle(el);
      if (style.display === "none" || style.visibility === "hidden") return false;
      return el.offsetParent !== null || style.position === "fixed";
    },

    /* Lightweight Component-Only Fade-In Entrances (Zero Text Animations, First-Appearance Only) */
    animateComponents(root = document) {
      if (prefersReducedMotion || !hasGSAP) return;

      const groupSelectors = [
        ".grid-5",
        ".grid-3",
        ".grid-2",
        ".pets-strip",
        ".landing-chips",
        "#bookings-list",
        "#medical-records-list",
        "#dash-nearby-list",
        "#consult-vet-list",
        "#prof-pets-list",
        ".service-card-list"
      ];

      const groups = root.matches && root.matches(groupSelectors.join(","))
        ? [root]
        : Array.from(root.querySelectorAll(groupSelectors.join(",")));

      groups.forEach(group => {
        if (!this._isVisible(group)) return;
        if (group.closest(".modal-backdrop:not(.open)")) return;
        if (group.dataset.initialRevealDone === "true") return;

        const children = Array.from(group.children).filter(
          c => c.nodeType === 1 && c.dataset.staggerDone !== "true" && this._isVisible(c)
        );
        if (children.length === 0) return;

        group.dataset.initialRevealDone = "true";
        children.forEach(c => {
          c.dataset.staggerDone = "true";
          c.dataset.motionEntering = "true";
        });

        const rect = group.getBoundingClientRect();
        const inViewport = rect.top < window.innerHeight * 0.94;

        const toVars = {
          opacity: 1,
          y: 0,
          duration: 0.46,
          stagger: 0.045,
          ease: "power2.out",
          force3D: true,
          clearProps: "transform,willChange",
          onStart: () => {
            children.forEach(c => { c.style.willChange = "transform, opacity"; });
          },
          onComplete: () => {
            children.forEach(c => { delete c.dataset.motionEntering; });
          }
        };

        if (!inViewport && hasScrollTrigger) {
          toVars.scrollTrigger = {
            trigger: group,
            start: "top 92%",
            once: true
          };
        }

        window.gsap.fromTo(children, { opacity: 0, y: 10 }, toVars);
      });

      /* Standalone UI Component Panels (Never plain text elements) */
      const soloSelectors = [
        ".hero-banner",
        ".landing-showcase",
        ".landing-cta-group",
        ".notice-banner",
        ".auth-card",
        ".chat-box"
      ];
      const solos = Array.from(root.querySelectorAll(soloSelectors.join(","))).filter(
        el => el.dataset.soloDone !== "true" && this._isVisible(el)
      );

      if (solos.length > 0) {
        solos.forEach(el => {
          el.dataset.soloDone = "true";
          el.dataset.motionEntering = "true";
        });
        window.gsap.fromTo(
          solos,
          { opacity: 0, y: 8 },
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            stagger: 0.055,
            ease: "power2.out",
            force3D: true,
            clearProps: "transform,willChange",
            onComplete: () => {
              solos.forEach(el => { delete el.dataset.motionEntering; });
            }
          }
        );
      }
    },

    /* Light & Natural Motion Hover / Press Micro-Interactions */
    bindHovers(root = document) {
      if (prefersReducedMotion || !hasMotion) return;

      const cardTargets = root.querySelectorAll(
        ".card-hover, .pillar-card, .pet-chip-card, .service-option-card, .select-option-card"
      );
      cardTargets.forEach(el => {
        if (el.dataset.hoverBound === "true") return;
        el.dataset.hoverBound = "true";

        el.addEventListener("pointerenter", (e) => {
          if (e.pointerType === "touch" || el.dataset.motionEntering === "true") return;
          window.Motion.animate(
            el,
            { y: -2.5 },
            { duration: 0.22, easing: [0.22, 1, 0.36, 1] }
          );
        });

        el.addEventListener("pointerleave", () => {
          if (el.dataset.motionEntering === "true") return;
          window.Motion.animate(
            el,
            { y: 0 },
            { duration: 0.22, easing: [0.22, 1, 0.36, 1] }
          ).finished.then(() => {
            if (!el.matches(":hover")) el.style.transform = "";
          }).catch(() => {});
        });
      });

      const btnTargets = root.querySelectorAll(
        ".btn:not(:disabled), .landing-cta-btn, .chip-btn"
      );
      btnTargets.forEach(el => {
        if (el.dataset.hoverBound === "true") return;
        el.dataset.hoverBound = "true";

        el.addEventListener("pointerenter", (e) => {
          if (e.pointerType === "touch" || el.disabled || el.dataset.motionEntering === "true") return;
          window.Motion.animate(
            el,
            { y: -1, scale: 1.01 },
            { duration: 0.18, easing: [0.22, 1, 0.36, 1] }
          );
        });

        el.addEventListener("pointerleave", () => {
          if (el.dataset.motionEntering === "true") return;
          window.Motion.animate(
            el,
            { y: 0, scale: 1 },
            { duration: 0.18, easing: [0.22, 1, 0.36, 1] }
          ).finished.then(() => {
            if (!el.matches(":hover")) el.style.transform = "";
          }).catch(() => {});
        });

        el.addEventListener("pointerdown", () => {
          if (el.disabled || el.dataset.motionEntering === "true") return;
          window.Motion.animate(
            el,
            { scale: 0.985 },
            { duration: 0.1, easing: "ease-out" }
          );
        });

        el.addEventListener("pointerup", () => {
          if (el.disabled || el.dataset.motionEntering === "true") return;
          window.Motion.animate(
            el,
            { scale: 1 },
            { duration: 0.16, easing: [0.22, 1, 0.36, 1] }
          ).finished.then(() => {
            if (!el.matches(":hover")) el.style.transform = "";
          }).catch(() => {});
        });
      });

      root.querySelectorAll(".sidebar-nav .nav-link").forEach(el => {
        if (el.dataset.hoverBound === "true") return;
        el.dataset.hoverBound = "true";

        el.addEventListener("pointerenter", (e) => {
          if (e.pointerType === "touch") return;
          window.Motion.animate(
            el,
            { x: 2.5 },
            { duration: 0.18, easing: [0.22, 1, 0.36, 1] }
          );
        });
        el.addEventListener("pointerleave", () => {
          window.Motion.animate(
            el,
            { x: 0 },
            { duration: 0.18, easing: [0.22, 1, 0.36, 1] }
          ).finished.then(() => {
            if (!el.matches(":hover")) el.style.transform = "";
          }).catch(() => {});
        });
      });
    },

    /* Sync Lenis & Lightweight Modal Entrance */
    _observeModalsAndDrawers() {
      const syncScrollLock = () => {
        const anyOpen = Boolean(
          document.querySelector(".modal-backdrop.open, .drawer-backdrop.open, .mobile-drawer-backdrop.open")
        );
        if (this.lenis) {
          if (anyOpen) this.lenis.stop();
          else this.lenis.start();
        }
      };

      const classObserver = new MutationObserver((mutations) => {
        let stateChanged = false;
        mutations.forEach(m => {
          if (m.type === "attributes" && m.attributeName === "class") {
            const target = m.target;
            if (
              target.classList.contains("modal-backdrop") ||
              target.classList.contains("drawer-backdrop") ||
              target.classList.contains("mobile-drawer-backdrop")
            ) {
              stateChanged = true;
              if (target.classList.contains("open")) {
                this._markInternalScrollContainers();
                this.bindHovers(target);
                const box = target.querySelector(".modal-box");
                if (box && hasMotion && !prefersReducedMotion) {
                  window.Motion.animate(
                    box,
                    { opacity: [0, 1], y: [8, 0], scale: [0.99, 1] },
                    { duration: 0.26, easing: [0.22, 1, 0.36, 1] }
                  ).finished.then(() => {
                    box.style.transform = "";
                  }).catch(() => {});
                }
              }
            }
          }
        });
        if (stateChanged) {
          syncScrollLock();
          if (hasScrollTrigger) setTimeout(() => window.ScrollTrigger.refresh(), 220);
        }
      });

      classObserver.observe(document.body, {
        subtree: true,
        attributes: true,
        attributeFilter: ["class"]
      });
    },

    /* Only Animate Dynamic Lists on First Appearance; Rebind Hovers Only on Filter/Search/Click */
    _observeDynamicGrids() {
      const dynamicIds = [
        "hv-grid",
        "hv-service-list",
        "hotel-grid",
        "pharmacies-grid",
        "pharmacy-grid",
        "bookings-list",
        "medical-records-list",
        "consult-vet-list",
        "prof-pets-list",
        "wizard-body"
      ];

      this._observer = new MutationObserver((mutations) => {
        const toAnimate = new Set();
        const toHoverOnly = new Set();
        mutations.forEach(m => {
          if (m.type === "childList" && m.addedNodes.length > 0 && m.target && m.target.id) {
            if (dynamicIds.includes(m.target.id)) {
              const target = m.target;
              if (target.id === "wizard-body") {
                const stepKey = target.dataset.wizardStep || "";
                if (!stepKey || this._visitedWizardSteps.has(stepKey)) {
                  toHoverOnly.add(target);
                  return;
                }
                this._visitedWizardSteps.add(stepKey);
                this._lastWizardStep = stepKey;
                toAnimate.add(target);
                return;
              }
              if (target.dataset.initialRevealDone === "true") {
                toHoverOnly.add(target);
              } else {
                toAnimate.add(target);
              }
            }
          }
        });
        if (toAnimate.size > 0 || toHoverOnly.size > 0) {
          clearTimeout(this._refreshTimer);
          this._refreshTimer = setTimeout(() => {
            toAnimate.forEach(el => {
              this.animatePage(el);
              this.bindHovers(el);
            });
            toHoverOnly.forEach(el => {
              this.bindHovers(el);
            });
            if (this.lenis) this.lenis.resize();
            if (hasScrollTrigger) window.ScrollTrigger.refresh();
          }, 35);
        }
      });

      this._observer.observe(document.body, { childList: true, subtree: true });
    },

    animatePage(root = document) {
      this.animateComponents(root);
    },

    refresh(root = document) {
      this._markInternalScrollContainers();
      this.animatePage(root);
      this.bindHovers(root);
      if (this.lenis) this.lenis.resize();
      if (hasScrollTrigger) window.ScrollTrigger.refresh();
    }
  };

  window.AnimedicMotion = AnimedicMotion;

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => AnimedicMotion.init());
  } else {
    AnimedicMotion.init();
  }
})();
