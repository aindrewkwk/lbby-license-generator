// ── Nav scroll effect ──────────────────────────────────────────────
const nav = document.getElementById('nav') || document.querySelector('.nav');

window.addEventListener('scroll', () => {
  if (nav) nav.classList.toggle('scrolled', window.scrollY > 50);
}, { passive: true });

// ── Active nav link based on current path ──────────────────────────
(function () {
  const path = window.location.pathname.replace(/\/+$/, '') || '/';
  document.querySelectorAll('.nav-links a').forEach(link => {
    const href = link.getAttribute('href');
    if (!href || href.startsWith('#') || href.startsWith('http')) return;
    if (path === (href.replace(/\/+$/, '') || '/')) {
      link.classList.add('active');
    }
  });
})();

// ── Close mobile nav on link click ─────────────────────────────────
document.querySelectorAll('.nav-links a[href^="#"]').forEach(link => {
  link.addEventListener('click', () => {
    const navLinks = document.querySelector('.nav-links');
    if (navLinks) navLinks.classList.remove('open');
  });
});

// ── Scroll-triggered animations ────────────────────────────────────
const animObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      animObserver.unobserve(entry.target); // animate once
    }
  });
}, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.anim-fade-up').forEach(el => {
  animObserver.observe(el);
});

// ── Smooth scroll for anchor links ─────────────────────────────────
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', (e) => {
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      // Update URL without jumping
      history.pushState(null, '', link.getAttribute('href'));
    }
  });
});
