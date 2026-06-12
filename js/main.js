// ── Nav scroll effect ──────────────────────────────────────────────
const nav = document.querySelector('.nav');

window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 50);
}, { passive: true });

// ── Active nav link based on current path ──────────────────────────
(function () {
  var path = window.location.pathname.replace(/\/+$/, '') || '/';
  var navLinks = document.querySelectorAll('.nav-links a');

  navLinks.forEach(function (link) {
    var href = link.getAttribute('href');
    if (!href || href.startsWith('#') || href.startsWith('http')) return;

    var normalizedHref = href.replace(/\/+$/, '') || '/';
    if (path === normalizedHref) {
      link.classList.add('active');
    }
  });
})();

// ── Close mobile nav on link click ─────────────────────────────────
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    document.querySelector('.nav-links').classList.remove('open');
  });
});

// ── Smooth reveal on scroll ────────────────────────────────────────
const observerOptions = { threshold: 0.1, rootMargin: '0px 0px -50px 0px' };
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

document.querySelectorAll('.feature-card, .download-card, .changelog-item, .contact-card').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'opacity 0.6s cubic-bezier(0.16,1,0.3,1), transform 0.6s cubic-bezier(0.16,1,0.3,1), border-color 0.25s, box-shadow 0.25s';
  observer.observe(el);
});
