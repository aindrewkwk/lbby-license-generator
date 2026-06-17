// ── R Studio — Main JavaScript ───────────────────────────────────
(function() {
  'use strict';

  var reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var isMobile = window.innerWidth < 768;

  // ── Theme Toggle ──────────────────────────────────────────────
  var html = document.documentElement;
  var themeToggle = document.getElementById('theme-toggle');
  var savedTheme = localStorage.getItem('rs-theme');
  var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  var currentTheme = savedTheme || (prefersDark ? 'dark' : 'light');

  function setTheme(theme) {
    currentTheme = theme;
    html.setAttribute('data-theme', theme);
    localStorage.setItem('rs-theme', theme);
  }

  setTheme(currentTheme);

  if (themeToggle) {
    themeToggle.addEventListener('click', function() {
      setTheme(currentTheme === 'light' ? 'dark' : 'light');
    });
  }

  // ── Nav ───────────────────────────────────────────────────────
  var nav = document.getElementById('nav');
  var navToggle = document.getElementById('nav-toggle');
  var navLinks = document.getElementById('nav-links');

  window.addEventListener('scroll', function() {
    if (nav) nav.classList.toggle('scrolled', window.scrollY > 50);
  }, { passive: true });

  if (navToggle && navLinks) {
    navToggle.addEventListener('click', function() {
      navLinks.classList.toggle('open');
    });
  }

  var sections = document.querySelectorAll('section[id]');
  var navAnchors = document.querySelectorAll('.nav-links a[href^="#"]');

  function updateActiveLink() {
    var scrollY = window.scrollY + 120;
    sections.forEach(function(s) {
      if (scrollY >= s.offsetTop && scrollY < s.offsetTop + s.offsetHeight) {
        navAnchors.forEach(function(l) {
          l.classList.toggle('active', l.getAttribute('href') === '#' + s.id);
        });
      }
    });
  }
  window.addEventListener('scroll', updateActiveLink, { passive: true });
  updateActiveLink();

  document.querySelectorAll('.nav-links a').forEach(function(l) {
    l.addEventListener('click', function() { if (navLinks) navLinks.classList.remove('open'); });
  });

  // ── Language Toggle ───────────────────────────────────────────
  var currentLang = 'en';
  var langToggle = document.getElementById('lang-toggle');
  var langLabel = langToggle ? langToggle.querySelector('.lang-label') : null;

  function setLang(lang) {
    currentLang = lang;
    html.lang = lang === 'vi' ? 'vi' : 'en';
    document.querySelectorAll('[data-vi]').forEach(function(el) {
      if (lang === 'vi') {
        if (!el.dataset.en) el.dataset.en = el.textContent;
        el.textContent = el.dataset.vi;
      } else {
        if (el.dataset.en) el.textContent = el.dataset.en;
      }
    });
    if (langLabel) langLabel.textContent = lang === 'vi' ? 'EN' : 'VI';
  }

  if (langToggle) {
    langToggle.addEventListener('click', function() {
      setLang(currentLang === 'en' ? 'vi' : 'en');
    });
  }

  // ── Scroll Reveal ─────────────────────────────────────────────
  if (!reducedMotion) {
    var els = document.querySelectorAll('.product-card, .stat-card, .team-card, .contact-card, .about-text, .section-header');
    els.forEach(function(el, i) {
      el.classList.add('reveal');
      el.style.transitionDelay = (i % 4) * 60 + 'ms';
    });
    var obs = new IntersectionObserver(function(entries) {
      entries.forEach(function(e) { if (e.isIntersecting) e.target.classList.add('visible'); });
    }, { threshold: 0.1, rootMargin: '0px 0px -30px 0px' });
    els.forEach(function(el) { obs.observe(el); });
  }

  // ── Hero Parallax ─────────────────────────────────────────────
  if (!reducedMotion && !isMobile) {
    var heroContent = document.getElementById('hero-content');
    var hero = document.getElementById('hero');
    if (heroContent && hero) {
      hero.addEventListener('mousemove', function(e) {
        var r = hero.getBoundingClientRect();
        var x = (e.clientX - r.left - r.width / 2) / r.width;
        var y = (e.clientY - r.top - r.height / 2) / r.height;
        heroContent.style.transform = 'translate(' + (x * -6) + 'px, ' + (y * -6) + 'px)';
      });
      hero.addEventListener('mouseleave', function() {
        heroContent.style.transform = 'translate(0,0)';
        heroContent.style.transition = 'transform 0.4s ease-out';
        setTimeout(function() { heroContent.style.transition = ''; }, 400);
      });
    }
  }

})();
