// ── R Studio — Main JavaScript ───────────────────────────────────
(function() {
  'use strict';

  var reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var isMobile = window.innerWidth < 768;

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
    sections.forEach(function(section) {
      var top = section.offsetTop;
      var height = section.offsetHeight;
      var id = section.getAttribute('id');
      if (scrollY >= top && scrollY < top + height) {
        navAnchors.forEach(function(link) {
          link.classList.toggle('active', link.getAttribute('href') === '#' + id);
        });
      }
    });
  }

  window.addEventListener('scroll', updateActiveLink, { passive: true });
  updateActiveLink();

  document.querySelectorAll('.nav-links a').forEach(function(link) {
    link.addEventListener('click', function() {
      if (navLinks) navLinks.classList.remove('open');
    });
  });

  // ── Language Toggle ───────────────────────────────────────────
  var currentLang = 'en';
  var langToggle = document.getElementById('lang-toggle');
  var langLabel = langToggle ? langToggle.querySelector('.lang-label') : null;

  function setLang(lang) {
    currentLang = lang;
    document.documentElement.lang = lang === 'vi' ? 'vi' : 'en';

    document.querySelectorAll('[data-vi]').forEach(function(el) {
      if (lang === 'vi') {
        if (!el.dataset.en) el.dataset.en = el.textContent;
        el.textContent = el.dataset.vi;
      } else {
        if (el.dataset.en) el.textContent = el.dataset.en;
      }
    });

    if (langLabel) {
      langLabel.textContent = lang === 'vi' ? 'EN' : 'VI';
    }
  }

  if (langToggle) {
    langToggle.addEventListener('click', function() {
      setLang(currentLang === 'en' ? 'vi' : 'en');
    });
  }

  // ── Scroll Reveal ─────────────────────────────────────────────
  if (!reducedMotion) {
    var revealElements = document.querySelectorAll('.product-card, .stat-card, .team-card, .contact-card, .about-text, .section-header');

    revealElements.forEach(function(el, i) {
      el.classList.add('reveal');
      el.style.transitionDelay = (i % 4) * 80 + 'ms';
    });

    var revealObserver = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

    revealElements.forEach(function(el) { revealObserver.observe(el); });
  }

  // ── Product Card Hover Glow ───────────────────────────────────
  if (!isMobile) {
    document.querySelectorAll('.product-card').forEach(function(card) {
      var glow = card.querySelector('.card-glow');
      if (!glow) return;

      card.addEventListener('mousemove', function(e) {
        var rect = card.getBoundingClientRect();
        var x = ((e.clientX - rect.left) / rect.width * 100).toFixed(1);
        var y = ((e.clientY - rect.top) / rect.height * 100).toFixed(1);
        card.style.setProperty('--mouse-x', x + '%');
        card.style.setProperty('--mouse-y', y + '%');
      });
    });
  }

  // ── Hero Parallax ─────────────────────────────────────────────
  if (!reducedMotion && !isMobile) {
    var heroContent = document.getElementById('hero-content');
    if (heroContent) {
      var heroSection = document.getElementById('hero');
      heroSection.addEventListener('mousemove', function(e) {
        var rect = heroSection.getBoundingClientRect();
        var x = (e.clientX - rect.left - rect.width / 2) / rect.width;
        var y = (e.clientY - rect.top - rect.height / 2) / rect.height;
        heroContent.style.transform = 'translate(' + (x * -8) + 'px, ' + (y * -8) + 'px)';
      });

      heroSection.addEventListener('mouseleave', function() {
        heroContent.style.transform = 'translate(0, 0)';
        heroContent.style.transition = 'transform 0.5s ease-out';
        setTimeout(function() { heroContent.style.transition = ''; }, 500);
      });
    }
  }

})();
