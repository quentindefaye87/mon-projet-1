/* Site Meillat Paysage — content.js (seule zone réécrite ; l'injection en bas est celle du template, inchangée) */

window.SITE_CONTENT = {

  brand: {
    name: 'Meillat Paysage',
    title: 'Meillat Paysage — Entretien, plantation & élagage',
    description: 'Meillat Paysage : tonte, taille, débroussaillage, élagage et plantation. Entretien ponctuel ou régulier de vos extérieurs. Devis gratuit.',
    kicker: 'MEILLAT PAYSAGE — ENTRETIEN & PAYSAGE',
    copyright: '© 2026 — MEILLAT PAYSAGE',
    signature: 'TAILLE · TONTE · ÉLAGAGE · PLANTATION',
    socials: [
      { label: '06 23 91 84 16 ↗', url: 'tel:+33623918416' }
    ]
  },

  nav: { proof: 'TRAVAUX', universes: 'MÉTHODE', cta: 'DEVIS' },

  hook: {
    line1: 'Vos extérieurs,',
    line2a: 'remis au',
    line2b: 'propre.',
    image: 'images/hook.jpg',
    imageAlt: 'Jardin paysager entretenu, allée et massifs taillés',
    floaters: [
      'images/fl-1.jpg', 'images/fl-2.jpg', 'images/fl-3.jpg', 'images/fl-4.jpg', 'images/fl-5.jpg',
      'images/fl-6.jpg', 'images/fl-7.jpg', 'images/fl-8.jpg', 'images/fl-9.jpg', 'images/fl-10.jpg'
    ]
  },

  positioning: 'Entretien, plantation, élagage.',

  manifesto: {
    text: 'Un jardin soigné, c’est un jardin qui respire. Nous remettons vos extérieurs au propre avec [[soin et régularité]], en intervention ponctuelle ou tout au long de l’année.'
  },

  proof: {
    layout: 'masonry',
    kicker: 'TRAVAUX CHOISIS',
    title: 'Des extérieurs qui respirent',
    sub: 'Du geste précis à la remise en état complète.',
    meta: 'HUIT CHANTIERS — ENTRETIEN & PAYSAGE',
    projects: [
      { img: 'images/projet-1.jpg', title: 'Taille de haie', meta: 'TAILLE — HAIE' },
      { img: 'images/projet-2.jpg', title: 'Élagage', meta: 'ÉLAGAGE — ARBRE' },
      { img: 'images/projet-3.jpg', title: 'Tonte', meta: 'TONTE — PELOUSE' },
      { img: 'images/projet-4.jpg', title: 'Plantation', meta: 'PLANTATION — MASSIF' },
      { img: 'images/projet-5.jpg', title: 'Allées de jardin', meta: 'ENTRETIEN — ALLÉES' },
      { img: 'images/projet-6.jpg', title: 'Coupe & abattage', meta: 'ÉLAGAGE — COUPE' },
      { img: 'images/projet-7.jpg', title: 'Massif paysager', meta: 'PLANTATION — VIVACES' },
      { img: 'images/projet-8.jpg', title: 'Pelouse & bordures', meta: 'TONTE — FINITIONS' }
    ]
  },

  motto: {
    kicker: 'CE QUI GUIDE CHAQUE CHANTIER',
    words: [
      { word: 'Soin', hint: 'Chaque haie, chaque arbre mérite le bon geste.' },
      { word: 'Régularité', hint: 'Ponctuel ou suivi à l’année : vous choisissez le rythme.' },
      { word: 'Propreté', hint: 'Chantier nettoyé, déchets évacués, jardin impeccable.' }
    ]
  },

  universes: {
    introA: 'Un',
    introB: 'jardin,',
    introC: '3 étapes.',
    cta: 'Demander un devis →',
    image: 'images/process.jpg',
    items: [
      { name: 'Visite & devis', meta: 'ÉTAPE — 01', desc: 'Nous venons voir votre jardin, écoutons vos envies et vous remettons un devis clair, gratuit et sans engagement.' },
      { name: 'Intervention', meta: 'ÉTAPE — 02', desc: 'Taille, tonte, débroussaillage, élagage ou plantation : le chantier est mené avec le matériel et le geste adaptés.' },
      { name: 'Finitions', meta: 'ÉTAPE — 03', desc: 'Déchets évacués, abords nettoyés : vous retrouvez un extérieur net. Puis, si vous le souhaitez, un entretien régulier.' }
    ]
  },

  /* avis client retiré : la scène a été supprimée de index.html ; l'objet reste vide car l'injection le lit */
  testimonial: { kicker: '', figure: '', unit: '', quote: '', author: '' },

  objections: {
    items: ['Pas de devis flou.', 'Pas de chantier laissé sale.', 'Pas de mauvaise surprise.'],
    finale: 'Juste un travail',
    pill: 'bien fait.'
  },

  contact: {
    kicker: 'UN PROJET EN TÊTE ?',
    email: 'meillat.paysage@gmail.com',
    reassurance: 'DEVIS GRATUIT — 06 23 91 84 16'
  },

  trail: [
    'images/trail-1.jpg',
    'images/trail-2.jpg',
    'images/trail-3.jpg',
    'images/trail-4.jpg',
    'images/trail-5.jpg',
    'images/trail-6.jpg',
    'images/trail-7.jpg',
    'images/trail-8.jpg',
    'images/trail-9.jpg',
    'images/trail-10.jpg',
    'images/trail-11.jpg',
    'images/trail-12.jpg',
    'images/trail-13.jpg',
    'images/trail-14.jpg',
    'images/trail-15.jpg',
    'images/trail-16.jpg',
    'images/trail-17.jpg',
    'images/trail-18.jpg',
    'images/trail-19.jpg',
    'images/trail-20.jpg'
  ]
};

/* ═══════════════════════════════════════════════════════════
   INJECTION — NE PAS MODIFIER (remplit le DOM avant app.js)
   ═══════════════════════════════════════════════════════════ */
(() => {
  const C = window.SITE_CONTENT;
  const $ = (s) => document.querySelector(s);
  const $$ = (s) => [...document.querySelectorAll(s)];
  const set = (sel, txt) => { const el = $(sel); if (el) el.textContent = txt; };

  document.title = C.brand.title;
  const md = document.querySelector('meta[name="description"]');
  if (md) md.setAttribute('content', C.brand.description);

  // chrome
  set('.loader-wordmark', C.brand.name);
  set('.dock-wordmark', C.brand.name);
  set('.dock-link[href="#travaux"]', C.nav.proof);
  set('.dock-link[href="#explorer"]', C.nav.universes);
  set('.dock-cta', C.nav.cta);

  // 1 · accroche
  set('#heroKicker', C.brand.kicker);
  set('#heroLine1', C.hook.line1);
  const hls = $$('#heroLine2 .hl');
  if (hls.length === 2) { hls[0].textContent = C.hook.line2a; hls[1].textContent = C.hook.line2b; }
  const g1 = $('#grow1 img');
  if (g1) { g1.src = C.hook.image; g1.alt = C.hook.imageAlt; }
  $$('.floaters .fl img').forEach((img, i) => { if (C.hook.floaters[i]) img.src = C.hook.floaters[i]; });

  // 2 · positionnement (un span par mot)
  const intro = $('#spotIntro');
  if (intro) intro.innerHTML = C.positioning.split(' ').map((w) => `<span>${w}</span>`).join(' ');

  // 3 · démarche
  const fill = $('#fillText');
  if (fill) {
    fill.innerHTML = C.manifesto.text.replace(
      /\[\[(.+?)\]\]/,
      '<span class="boxed" id="boxedPhrase">$1<svg class="box-svg" viewBox="0 0 100 100" preserveAspectRatio="none"><path id="boxPath" d="M50,6 C88,4 98,22 97,50 C96,82 76,96 49,95 C16,94 3,76 4,48 C5,18 20,7 50,6 Z"/></svg></span>'
    );
  }

  // 4 · preuve : masonry (8 photos) ou bento (4 features big/tall/tall/big)
  const head = $$('.coll-head > *');
  if (head.length === 4) {
    head[0].textContent = C.proof.kicker;
    head[1].textContent = C.proof.title;
    head[2].textContent = C.proof.sub;
    head[3].textContent = C.proof.meta;
  }
  const grid = $('#collGrid');
  if (grid && C.proof.layout === 'bento') {
    grid.className = 'bento-grid';
    grid.innerHTML = C.proof.features.map((f) =>
      `<figure class="card${f.size ? ' b-' + f.size : ''}"><div class="card-img"><img src="${f.illu}" alt="${f.title}"></div><figcaption>${f.title}<span class="mono">${f.meta}</span></figcaption></figure>`
    ).join('');
  } else if (grid) {
    grid.className = 'coll-grid';
    const SPEEDS = [-0.05, 0.06, -0.028, 0.085];
    grid.innerHTML = SPEEDS.map((s, ci) =>
      `<div class="col" data-pspeed="${s}">` +
      C.proof.projects.slice(ci * 2, ci * 2 + 2).map((p) =>
        `<figure class="card"><div class="card-img"><img src="${p.img}" alt="${p.title} — ${p.meta}"></div><figcaption>${p.title}<span class="mono">${p.meta}</span></figcaption></figure>`
      ).join('') + '</div>'
    ).join('');
  }

  // 5 · devise (train de mots-clés)
  set('#mottoKicker', C.motto.kicker);
  const mtrack = $('#mottoTrack');
  if (mtrack) mtrack.innerHTML = C.motto.words.map((w) => `<span class="mw">${w.word}</span>`).join('');

  // 6-7 · processus immersif (visuels posés un à un)
  set('#nw1', C.universes.introA);
  set('#nw2', C.universes.introB);
  set('#nw3', C.universes.introC);
  const g2 = $('#grow2 img');
  if (g2) g2.src = C.universes.image || (C.universes.items[0] || {}).img || g2.src;
  const psteps = $('#psteps');
  if (psteps) {
    psteps.innerHTML = C.universes.items.map((u) =>
      `<div class="pstep"><span class="pstep-meta mono ash">${u.meta}</span><h3>${u.name}</h3><p>${u.desc || ''}</p></div>`
    ).join('');
  }
  const sCta = $('#stepsCtaLink');
  if (sCta) sCta.childNodes[0].textContent = C.universes.cta;

  // 8 · preuve sociale — le chiffre qui frappe
  set('#figKicker', C.testimonial.kicker || '');
  const figM = String(C.testimonial.figure || '').trim().match(/^([^\d.,+-]*[+\u2212-]?)\s*(-?[\d.,]+)/);
  set('#figPre', figM ? figM[1] : '');
  set('#figVal', figM ? figM[2] : '');
  set('#figUnit', C.testimonial.unit || '');
  set('#quoteText', C.testimonial.quote);
  set('#quoteAuthor', C.testimonial.author);

  // 9 · objections
  C.objections.items.forEach((t, i) => set('#fs' + (i + 1), t));
  const fs4 = $('#fs4');
  if (fs4) {
    fs4.innerHTML = `${C.objections.finale} <span class="pill" id="pillPhrase">${C.objections.pill}<svg class="pill-svg" viewBox="0 0 100 100" preserveAspectRatio="none"><path id="pillPath" d="M50,6 C88,4 98,22 97,50 C96,82 76,96 49,95 C16,94 3,76 4,48 C5,18 20,7 50,6 Z"/></svg></span>`;
  }
  $$('#trail img').forEach((img, i) => { img.src = C.trail[i % C.trail.length]; });

  // 10 · conversion
  set('.footer-kicker', C.contact.kicker);
  const mail = $('.footer-mail');
  if (mail) { mail.href = 'mailto:' + C.contact.email; mail.querySelector('.footer-mail-text').textContent = C.contact.email; }
  set('.footer-reassurance', C.contact.reassurance);
  const fname = $('#footerName');
  if (fname) { fname.textContent = C.brand.name; fname.setAttribute('aria-label', C.brand.name); }
  const bottom = $$('.footer-bottom > p');
  if (bottom.length === 3) {
    bottom[0].textContent = C.brand.copyright;
    bottom[1].innerHTML = C.brand.socials.map((s) => `<a href="${s.url}" target="_blank" rel="noopener">${s.label}</a>`).join('&nbsp;&nbsp;&nbsp;');
    bottom[2].textContent = C.brand.signature;
  }
})();
