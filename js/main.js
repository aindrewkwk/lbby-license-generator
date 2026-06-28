// ── R Studio — Main JavaScript ───────────────────────────────────
// Theme toggle, language toggle, scroll reveal, nav behavior
// ─────────────────────────────────────────────────────────────────
(function() {
  'use strict';

  var reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var isMobile = window.innerWidth < 768;

  // ── Theme Toggle ──────────────────────────────────────────────
  var html = document.documentElement;
  var themeToggle = document.getElementById('theme-toggle');
  var favicon = document.getElementById('favicon');
  var savedTheme = null;
  try { savedTheme = localStorage.getItem('rs-theme'); } catch(e) {}
  var currentTheme = savedTheme || 'dark';

  function setTheme(theme) {
    currentTheme = theme;
    html.setAttribute('data-theme', theme);
    try { localStorage.setItem('rs-theme', theme); } catch(e) {}
    // Update toggle aria-label
    if (themeToggle) {
      themeToggle.setAttribute('aria-label', theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode');
    }
    // Update favicon
    if (favicon) {
      favicon.href = theme === 'dark' ? '/assets/favicon-white.png' : '/assets/favicon-black.png';
    }
  }

  setTheme(currentTheme);

  if (themeToggle) {
    themeToggle.addEventListener('click', function() {
      setTheme(currentTheme === 'light' ? 'dark' : 'light');
    });
  }

  // ── Nav ───────────────────────────────────────────────────────
  var nav = document.getElementById('nav');
  var hamburger = document.getElementById('hamburger');
  var dropdown = document.getElementById('nav-dropdown');

  window.addEventListener('scroll', function() {
    if (nav) nav.classList.toggle('scrolled', window.scrollY > 50);
  }, { passive: true });

  if (hamburger && dropdown) {
    hamburger.addEventListener('click', function() {
      hamburger.classList.toggle('active');
      dropdown.classList.toggle('open');
    });
    // Close on link click
    dropdown.querySelectorAll('a').forEach(function(link) {
      link.addEventListener('click', function() {
        hamburger.classList.remove('active');
        dropdown.classList.remove('open');
      });
    });
  }

  // Active link tracking
  var sections = document.querySelectorAll('section[id]');
  var navLinks = document.querySelectorAll('.nav__link[href^="#"]');

  function updateActiveLink() {
    var scrollY = window.scrollY + 120;
    sections.forEach(function(s) {
      if (scrollY >= s.offsetTop && scrollY < s.offsetTop + s.offsetHeight) {
        navLinks.forEach(function(l) {
          l.classList.toggle('active', l.getAttribute('href') === '#' + s.id);
        });
      }
    });
  }
  window.addEventListener('scroll', updateActiveLink, { passive: true });
  updateActiveLink();

  // ── Kinetic page variables ───────────────────────────────────
  function updateKineticVars() {
    var max = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
    var progress = Math.min(1, Math.max(0, window.scrollY / max));
    html.style.setProperty('--scroll-y', String(Math.round(window.scrollY)));
    html.style.setProperty('--scroll-progress', progress.toFixed(4));
  }

  if (!reducedMotion) {
    updateKineticVars();
    window.addEventListener('scroll', updateKineticVars, { passive: true });
    window.addEventListener('resize', updateKineticVars);
  }

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
    var revealEls = document.querySelectorAll('.reveal, .reveal-stagger');
    var obs = new IntersectionObserver(function(entries) {
      entries.forEach(function(e) {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -30px 0px' });
    revealEls.forEach(function(el) { obs.observe(el); });
  } else {
    // Show everything immediately
    document.querySelectorAll('.reveal, .reveal-stagger').forEach(function(el) {
      el.classList.add('visible');
    });
  }

  // ── Hero Parallax ─────────────────────────────────────────────
  if (!reducedMotion && !isMobile) {
    var heroContent = document.querySelector('.hero__content');
    var hero = document.querySelector('.hero');
    if (heroContent && hero) {
      hero.addEventListener('mousemove', function(e) {
        var r = hero.getBoundingClientRect();
        var x = (e.clientX - r.left - r.width / 2) / r.width;
        var y = (e.clientY - r.top - r.height / 2) / r.height;
        heroContent.style.transform = 'translate(' + (x * -4) + 'px, ' + (y * -4) + 'px)';
      });
      hero.addEventListener('mouseleave', function() {
        heroContent.style.transform = 'translate(0,0)';
        heroContent.style.transition = 'transform 0.4s ease-out';
        setTimeout(function() { heroContent.style.transition = ''; }, 400);
      });
    }
  }

})();
