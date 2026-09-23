/* ==========================================================================
   SCAL — Script principal
   Menu mobile, header au scroll, animations reveal, galerie + lightbox,
   validation du formulaire de contact avec protection anti-spam basique.
   ========================================================================== */
(function () {
  "use strict";

  /* ---------- Année du footer ---------- */
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---------- Header au scroll ---------- */
  var header = document.getElementById("siteHeader");
  function onScrollHeader() {
    if (!header) return;
    if (window.scrollY > 24) header.classList.add("is-scrolled");
    else header.classList.remove("is-scrolled");
  }
  onScrollHeader();
  window.addEventListener("scroll", onScrollHeader, { passive: true });

  /* ---------- Menu mobile ---------- */
  var navToggle = document.getElementById("navToggle");
  var mobileNav = document.getElementById("mobileNav");
  var mobileNavClose = document.getElementById("mobileNavClose");

  function openMobileNav() {
    mobileNav.classList.add("is-open");
    navToggle.setAttribute("aria-expanded", "true");
    document.body.style.overflow = "hidden";
  }
  function closeMobileNav() {
    mobileNav.classList.remove("is-open");
    navToggle.setAttribute("aria-expanded", "false");
    document.body.style.overflow = "";
  }
  if (navToggle) navToggle.addEventListener("click", openMobileNav);
  if (mobileNavClose) mobileNavClose.addEventListener("click", closeMobileNav);
  if (mobileNav) {
    mobileNav.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", closeMobileNav);
    });
  }
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") closeMobileNav();
  });

  /* ---------- Animations au scroll (reveal) ---------- */
  var revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" }
    );
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add("is-visible"); });
  }

  /* ---------- Navigation active au scroll ---------- */
  var navLinks = document.querySelectorAll(".nav-desktop a");
  var sections = Array.prototype.slice.call(document.querySelectorAll("main section[id], .hero[id]"));
  function onScrollNav() {
    var pos = window.scrollY + 140;
    var current = sections[0] && sections[0].id;
    sections.forEach(function (sec) {
      if (pos >= sec.offsetTop) current = sec.id;
    });
    navLinks.forEach(function (link) {
      link.classList.toggle("active", link.getAttribute("href") === "#" + current);
    });
  }
  onScrollNav();
  window.addEventListener("scroll", onScrollNav, { passive: true });

  /* ---------- Galerie de réalisations ---------- */
  var galleryData = [
    { category: "menuiserie", title: "Fenêtres PVC", desc: "Pose de menuiseries PVC — maison individuelle" },
    { category: "menuiserie", title: "Baie aluminium", desc: "Baie vitrée coulissante aluminium" },
    { category: "veranda", title: "Véranda sur-mesure", desc: "Extension véranda — séjour" },
    { category: "fermeture", title: "Volets roulants", desc: "Rénovation de volets roulants motorisés" },
    { category: "menuiserie", title: "Porte d'entrée alu", desc: "Porte d'entrée aluminium sur-mesure" },
    { category: "fermeture", title: "Portail aluminium", desc: "Portail coulissant motorisé" },
    { category: "veranda", title: "Véranda toit plat", desc: "Véranda contemporaine, toit plat" },
    { category: "menuiserie", title: "Fenêtres aluminium", desc: "Rénovation complète de fenêtres" }
  ];

  var galleryGrid = document.getElementById("galleryGrid");
  var galleryIcon = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="M21 15l-5-5L5 21"/></svg>';

  if (galleryGrid) {
    galleryData.forEach(function (item, i) {
      var btn = document.createElement("button");
      btn.className = "gallery-item";
      btn.type = "button";
      btn.dataset.category = item.category;
      btn.dataset.index = i;
      btn.innerHTML =
        '<span class="img-slot">' + galleryIcon + '</span>' +
        '<span class="zoom-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3"/></svg></span>' +
        '<span class="gallery-caption"><strong>' + item.title + "</strong><span>" + item.desc + "</span></span>";
      galleryGrid.appendChild(btn);
    });
  }

  /* Filtres */
  var filterBtns = document.querySelectorAll(".filter-btn");
  filterBtns.forEach(function (btn) {
    btn.addEventListener("click", function () {
      filterBtns.forEach(function (b) {
        b.classList.remove("is-active");
        b.setAttribute("aria-selected", "false");
      });
      btn.classList.add("is-active");
      btn.setAttribute("aria-selected", "true");
      var filter = btn.dataset.filter;
      document.querySelectorAll(".gallery-item").forEach(function (item) {
        var show = filter === "all" || item.dataset.category === filter;
        item.hidden = !show;
      });
    });
  });

  /* Lightbox */
  var lightbox = document.getElementById("lightbox");
  var lightboxTitle = document.getElementById("lightboxTitle");
  var lightboxDesc = document.getElementById("lightboxDesc");
  var currentIndex = 0;

  function visibleItems() {
    return Array.prototype.filter.call(document.querySelectorAll(".gallery-item"), function (el) {
      return !el.hidden;
    });
  }

  function openLightbox(index) {
    currentIndex = index;
    var item = galleryData[index];
    if (!item) return;
    lightboxTitle.textContent = item.title;
    lightboxDesc.textContent = item.desc;
    lightbox.classList.add("is-open");
    document.body.style.overflow = "hidden";
  }
  function closeLightbox() {
    lightbox.classList.remove("is-open");
    document.body.style.overflow = "";
  }
  function stepLightbox(dir) {
    var items = visibleItems();
    if (!items.length) return;
    var indices = items.map(function (el) { return parseInt(el.dataset.index, 10); });
    var pos = indices.indexOf(currentIndex);
    pos = (pos + dir + indices.length) % indices.length;
    openLightbox(indices[pos]);
  }

  if (galleryGrid) {
    galleryGrid.addEventListener("click", function (e) {
      var item = e.target.closest(".gallery-item");
      if (!item) return;
      openLightbox(parseInt(item.dataset.index, 10));
    });
  }
  var lbClose = document.getElementById("lightboxClose");
  var lbPrev = document.getElementById("lightboxPrev");
  var lbNext = document.getElementById("lightboxNext");
  if (lbClose) lbClose.addEventListener("click", closeLightbox);
  if (lbPrev) lbPrev.addEventListener("click", function () { stepLightbox(-1); });
  if (lbNext) lbNext.addEventListener("click", function () { stepLightbox(1); });
  if (lightbox) {
    lightbox.addEventListener("click", function (e) {
      if (e.target === lightbox) closeLightbox();
    });
  }
  document.addEventListener("keydown", function (e) {
    if (!lightbox || !lightbox.classList.contains("is-open")) return;
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowRight") stepLightbox(1);
    if (e.key === "ArrowLeft") stepLightbox(-1);
  });

  /* ---------- Formulaire de contact ---------- */
  var form = document.getElementById("contactForm");
  var formStatus = document.getElementById("formStatus");

  function setFieldError(field, message) {
    var wrapper = field.closest(".field");
    var errorEl = wrapper.querySelector(".field-error");
    if (message) {
      wrapper.classList.add("has-error");
      errorEl.textContent = message;
    } else {
      wrapper.classList.remove("has-error");
      errorEl.textContent = "";
    }
  }

  function isValidEmail(value) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  }
  function isValidPhone(value) {
    var digits = value.replace(/[\s.\-]/g, "");
    return /^(\+33|0)[0-9]{9}$/.test(digits);
  }

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      formStatus.className = "form-status";
      formStatus.textContent = "";

      // Protection anti-spam : champ honeypot rempli => probable robot
      var honeypot = form.querySelector("#website");
      if (honeypot && honeypot.value.trim() !== "") {
        return;
      }

      var isValid = true;
      var requiredFields = form.querySelectorAll("[required]");
      requiredFields.forEach(function (field) {
        var value = field.value.trim();
        if (!value) {
          setFieldError(field, "Ce champ est obligatoire.");
          isValid = false;
        } else if (field.type === "email" && !isValidEmail(value)) {
          setFieldError(field, "Adresse e-mail invalide.");
          isValid = false;
        } else if (field.type === "tel" && !isValidPhone(value)) {
          setFieldError(field, "Numéro de téléphone invalide.");
          isValid = false;
        } else {
          setFieldError(field, "");
        }
      });

      if (!isValid) {
        formStatus.classList.add("is-error");
        formStatus.textContent = "Merci de corriger les champs signalés en rouge avant d'envoyer votre demande.";
        return;
      }

      // NOTE POUR L'INTÉGRATEUR : ce formulaire est validé côté client uniquement.
      // Avant mise en ligne, connecter la soumission à un service d'envoi réel
      // (API interne, Formspree, Netlify Forms, etc.) pour que les demandes
      // soient effectivement transmises à SCAL.
      formStatus.classList.add("is-success");
      formStatus.textContent = "Merci ! Votre demande a bien été enregistrée. Notre équipe vous recontactera rapidement.";
      form.reset();
    });

    form.querySelectorAll("[required]").forEach(function (field) {
      field.addEventListener("blur", function () {
        if (field.value.trim()) setFieldError(field, "");
      });
    });
  }
})();
