// ── ASCII World Background ─────────────────────────────────────────
// Canvas-based animated text/dot particle system for the hero section.
// Creates a subtle "global creative network" atmosphere.
// ────────────────────────────────────────────────────────────────────
(function() {
  'use strict';

  var reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reducedMotion) return;

  var canvas = document.getElementById('ascii-bg');
  if (!canvas) return;

  var ctx = canvas.getContext('2d');
  var isMobile = window.innerWidth < 768;
  var dpr = Math.min(window.devicePixelRatio || 1, 2);

  var WORDS = ['RSTUDIO','LBBY','EDUMANAGE','VIETNAM','BUILD','CREATE','HOST','LEARN','PLAY','DESIGN','CODE','GAMERS','CREATORS','EDUCATION','SOFTWARE','INDIE','SERVER','PLATFORM'];

  var W, H, particles = [], mouseX = -9999, mouseY = -9999, mouseLX = -9999, mouseLY = -9999;
  var rafId = null, isVisible = true;

  function Particle(type) {
    this.type = type;
    this.reset(true);
  }

  Particle.prototype.reset = function(initial) {
    var m = isMobile ? 0.6 : 1;
    this.x = Math.random() * W;
    this.y = Math.random() * H;

    if (this.type === 'dot') {
      this.r = Math.random() * 1.2 + 0.4;
      this.baseAlpha = Math.random() * 0.18 + 0.04;
      this.speed = (Math.random() * 0.12 + 0.04) * m;
    } else if (this.type === 'word') {
      this.text = WORDS[Math.floor(Math.random() * WORDS.length)];
      this.size = Math.floor(Math.random() * 5 + 9);
      this.baseAlpha = Math.random() * 0.10 + 0.03;
      this.speed = (Math.random() * 0.08 + 0.03) * m;
      this.phase = Math.random() * Math.PI * 2;
      this.pulseSpeed = Math.random() * 0.004 + 0.002;
    } else {
      this.text = (Math.random() * 180 - 90).toFixed(1) + '° ' + ['N','S'][Math.floor(Math.random()*2)] + ' ' + (Math.random() * 360 - 180).toFixed(1) + '° ' + ['E','W'][Math.floor(Math.random()*2)];
      this.size = Math.floor(Math.random() * 3 + 8);
      this.baseAlpha = Math.random() * 0.07 + 0.02;
      this.speed = (Math.random() * 0.06 + 0.02) * m;
    }

    this.alpha = this.baseAlpha;
    this.vx = (Math.random() - 0.5) * this.speed;
    this.vy = (Math.random() - 0.5) * this.speed * 0.6;
    if (initial) {
      this.alpha = 0;
      this.fadeIn = Math.random() * 200 + 60;
    } else {
      this.fadeIn = 0;
    }
  };

  Particle.prototype.update = function() {
    if (this.fadeIn > 0) {
      this.fadeIn--;
      this.alpha = this.baseAlpha * (1 - this.fadeIn / 200);
    }
    if (this.type === 'word' && this.fadeIn <= 0) {
      this.phase += this.pulseSpeed;
      this.alpha = this.baseAlpha + Math.sin(this.phase) * this.baseAlpha * 0.35;
    }
    this.x += this.vx;
    this.y += this.vy;
    if (this.x < -60) this.x = W + 60;
    if (this.x > W + 60) this.x = -60;
    if (this.y < -40) this.y = H + 40;
    if (this.y > H + 40) this.y = -40;

    var dx = this.x - mouseLX;
    var dy = this.y - mouseLY;
    var dist = Math.sqrt(dx * dx + dy * dy);
    var glowRadius = isMobile ? 100 : 200;
    if (dist < glowRadius) {
      var factor = 1 - dist / glowRadius;
      this.alpha = Math.min(this.alpha + factor * 0.15, 0.35);
    }
  };

  Particle.prototype.draw = function() {
    if (this.alpha < 0.005) return;
    var a = Math.round(this.alpha * 1000) / 1000;

    if (this.type === 'dot') {
      ctx.beginPath();
      ctx.arc(this.x * dpr, this.y * dpr, this.r * dpr, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(255,255,255,' + a + ')';
      ctx.fill();
    } else if (this.type === 'word') {
      ctx.font = '500 ' + (this.size * dpr) + 'px ui-monospace, SFMono-Regular, Menlo, monospace';
      ctx.fillStyle = 'rgba(167,139,250,' + a + ')';
      ctx.textAlign = 'center';
      ctx.fillText(this.text, this.x * dpr, this.y * dpr);
    } else {
      ctx.font = '400 ' + (this.size * dpr) + 'px ui-monospace, SFMono-Regular, Menlo, monospace';
      ctx.fillStyle = 'rgba(255,255,255,' + (a * 0.6) + ')';
      ctx.textAlign = 'center';
      ctx.fillText(this.text, this.x * dpr, this.y * dpr);
    }
  };

  function resize() {
    var rect = canvas.parentElement.getBoundingClientRect();
    var nw = rect.width;
    var nh = rect.height;
    if (nw === W && nh === H) return;
    W = nw;
    H = nh;
    canvas.width = W * dpr;
    canvas.height = H * dpr;
    canvas.style.width = W + 'px';
    canvas.style.height = H + 'px';
    createParticles();
  }

  function createParticles() {
    particles = [];
    var area = W * H;
    var dotCount = isMobile ? Math.floor(area / 12000) : Math.floor(area / 6000);
    var wordCount = isMobile ? 12 : Math.floor(area / 30000);
    var coordCount = isMobile ? 6 : Math.floor(area / 50000);

    for (var i = 0; i < dotCount; i++) particles.push(new Particle('dot'));
    for (var i = 0; i < wordCount; i++) particles.push(new Particle('word'));
    for (var i = 0; i < coordCount; i++) particles.push(new Particle('coord'));
  }

  function draw() {
    if (!isVisible) { rafId = requestAnimationFrame(draw); return; }
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    mouseLX += (mouseX - mouseLX) * 0.06;
    mouseLY += (mouseY - mouseLY) * 0.06;

    for (var i = 0; i < particles.length; i++) {
      particles[i].update();
      particles[i].draw();
    }

    if (mouseLX > 0 && mouseLY > 0 && !isMobile) {
      var glow = ctx.createRadialGradient(
        mouseLX * dpr, mouseLY * dpr, 0,
        mouseLX * dpr, mouseLY * dpr, 160 * dpr
      );
      glow.addColorStop(0, 'rgba(124,58,237,0.06)');
      glow.addColorStop(0.5, 'rgba(124,58,237,0.02)');
      glow.addColorStop(1, 'transparent');
      ctx.fillStyle = glow;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    }

    rafId = requestAnimationFrame(draw);
  }

  var resizeTimer;
  window.addEventListener('resize', function() {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(resize, 200);
  }, { passive: true });

  if (!isMobile) {
    canvas.parentElement.addEventListener('mousemove', function(e) {
      var rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
    }, { passive: true });
    canvas.parentElement.addEventListener('mouseleave', function() {
      mouseX = -9999;
      mouseY = -9999;
    });
  }

  var observer = new IntersectionObserver(function(entries) {
    isVisible = entries[0].isIntersecting;
  }, { threshold: 0.05 });
  observer.observe(canvas.parentElement);

  resize();
  draw();

})();
