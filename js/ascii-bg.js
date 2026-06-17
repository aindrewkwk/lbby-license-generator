// ── ASCII World Background ─────────────────────────────────────────
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
  var isVisible = true;

  function getColors() {
    var isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    return {
      dot: isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.06)',
      word: isDark ? 'rgba(167,139,250,0.12)' : 'rgba(109,40,217,0.08)',
      coord: isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.04)',
      glow: isDark ? 'rgba(167,139,250,0.05)' : 'rgba(109,40,217,0.03)'
    };
  }

  function Particle(type) {
    this.type = type;
    this.reset(true);
  }

  Particle.prototype.reset = function(initial) {
    var m = isMobile ? 0.5 : 1;
    this.x = Math.random() * W;
    this.y = Math.random() * H;
    if (this.type === 'dot') {
      this.r = Math.random() * 1 + 0.3;
      this.baseAlpha = Math.random() * 0.5 + 0.3;
      this.speed = (Math.random() * 0.08 + 0.02) * m;
    } else if (this.type === 'word') {
      this.text = WORDS[Math.floor(Math.random() * WORDS.length)];
      this.size = Math.floor(Math.random() * 4 + 9);
      this.baseAlpha = Math.random() * 0.5 + 0.3;
      this.speed = (Math.random() * 0.06 + 0.02) * m;
      this.phase = Math.random() * Math.PI * 2;
      this.pulseSpeed = Math.random() * 0.003 + 0.001;
    } else {
      this.text = (Math.random() * 180 - 90).toFixed(1) + '° ' + ['N','S'][Math.floor(Math.random()*2)] + ' ' + (Math.random() * 360 - 180).toFixed(1) + '° ' + ['E','W'][Math.floor(Math.random()*2)];
      this.size = Math.floor(Math.random() * 2 + 8);
      this.baseAlpha = Math.random() * 0.4 + 0.2;
      this.speed = (Math.random() * 0.04 + 0.01) * m;
    }
    this.alpha = initial ? 0 : this.baseAlpha;
    this.vx = (Math.random() - 0.5) * this.speed;
    this.vy = (Math.random() - 0.5) * this.speed * 0.5;
    this.fadeIn = initial ? Math.random() * 180 + 60 : 0;
  };

  Particle.prototype.update = function() {
    if (this.fadeIn > 0) { this.fadeIn--; this.alpha = this.baseAlpha * (1 - this.fadeIn / 180); }
    if (this.type === 'word' && this.fadeIn <= 0) {
      this.phase += this.pulseSpeed;
      this.alpha = this.baseAlpha + Math.sin(this.phase) * this.baseAlpha * 0.2;
    }
    this.x += this.vx;
    this.y += this.vy;
    if (this.x < -80) this.x = W + 80;
    if (this.x > W + 80) this.x = -80;
    if (this.y < -40) this.y = H + 40;
    if (this.y > H + 40) this.y = -40;
    var dx = this.x - mouseLX, dy = this.y - mouseLY;
    var dist = Math.sqrt(dx * dx + dy * dy);
    var glowR = isMobile ? 80 : 160;
    if (dist < glowR) this.alpha = Math.min(this.alpha + (1 - dist / glowR) * 0.2, 0.6);
  };

  Particle.prototype.draw = function(colors) {
    if (this.alpha < 0.01) return;
    var a = Math.round(this.alpha * 100) / 100;
    if (this.type === 'dot') {
      ctx.beginPath();
      ctx.arc(this.x * dpr, this.y * dpr, this.r * dpr, 0, Math.PI * 2);
      ctx.fillStyle = colors.dot.replace(/,[\d.]+\)/, ',' + a + ')');
      ctx.fill();
    } else if (this.type === 'word') {
      ctx.font = '500 ' + (this.size * dpr) + 'px ui-monospace, monospace';
      ctx.fillStyle = colors.word.replace(/,[\d.]+\)/, ',' + a + ')');
      ctx.textAlign = 'center';
      ctx.fillText(this.text, this.x * dpr, this.y * dpr);
    } else {
      ctx.font = '400 ' + (this.size * dpr) + 'px ui-monospace, monospace';
      ctx.fillStyle = colors.coord.replace(/,[\d.]+\)/, ',' + (a * 0.6) + ')');
      ctx.textAlign = 'center';
      ctx.fillText(this.text, this.x * dpr, this.y * dpr);
    }
  };

  function resize() {
    var rect = canvas.parentElement.getBoundingClientRect();
    if (rect.width === W && rect.height === H) return;
    W = rect.width; H = rect.height;
    canvas.width = W * dpr; canvas.height = H * dpr;
    canvas.style.width = W + 'px'; canvas.style.height = H + 'px';
    particles = [];
    var area = W * H;
    var dots = isMobile ? Math.floor(area / 14000) : Math.floor(area / 7000);
    var words = isMobile ? 10 : Math.floor(area / 35000);
    var coords = isMobile ? 5 : Math.floor(area / 60000);
    for (var i = 0; i < dots; i++) particles.push(new Particle('dot'));
    for (var i = 0; i < words; i++) particles.push(new Particle('word'));
    for (var i = 0; i < coords; i++) particles.push(new Particle('coord'));
  }

  function draw() {
    if (!isVisible) { requestAnimationFrame(draw); return; }
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    mouseLX += (mouseX - mouseLX) * 0.05;
    mouseLY += (mouseY - mouseLY) * 0.05;
    var colors = getColors();
    for (var i = 0; i < particles.length; i++) {
      particles[i].update();
      particles[i].draw(colors);
    }
    if (mouseLX > 0 && mouseLY > 0 && !isMobile) {
      var glow = ctx.createRadialGradient(mouseLX * dpr, mouseLY * dpr, 0, mouseLX * dpr, mouseLY * dpr, 120 * dpr);
      glow.addColorStop(0, colors.glow);
      glow.addColorStop(1, 'transparent');
      ctx.fillStyle = glow;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    }
    requestAnimationFrame(draw);
  }

  var resizeTimer;
  window.addEventListener('resize', function() { clearTimeout(resizeTimer); resizeTimer = setTimeout(resize, 200); }, { passive: true });
  if (!isMobile) {
    canvas.parentElement.addEventListener('mousemove', function(e) {
      var r = canvas.getBoundingClientRect();
      mouseX = e.clientX - r.left; mouseY = e.clientY - r.top;
    }, { passive: true });
    canvas.parentElement.addEventListener('mouseleave', function() { mouseX = -9999; mouseY = -9999; });
  }
  new IntersectionObserver(function(e) { isVisible = e[0].isIntersecting; }, { threshold: 0.05 }).observe(canvas.parentElement);
  resize(); draw();
})();
