/* ============================================================
   LUMINA — Landing Page Scripts
   Author: Steven Mukama · https://github.com/stevenmukama
   ============================================================ */
(function () {
  'use strict';

  /* ---------- Scroll progress bar ---------- */
  const progress = document.getElementById('scrollProgress');

  function updateProgress() {
    const doc = document.documentElement;
    const max = doc.scrollHeight - window.innerHeight;
    const pct = max > 0 ? (window.scrollY / max) * 100 : 0;
    progress.style.width = pct + '%';
  }

  /* ---------- Navbar state ---------- */
  const navbar = document.getElementById('navbar');
  const backToTop = document.getElementById('backToTop');

  function updateChrome() {
    navbar.classList.toggle('scrolled', window.scrollY > 12);
    backToTop.classList.toggle('show', window.scrollY > 700);
  }

  window.addEventListener('scroll', function () {
    updateProgress();
    updateChrome();
    updateActiveLink();
  }, { passive: true });

  updateProgress();
  updateChrome();

  /* ---------- Mobile menu ---------- */
  const hamburger = document.getElementById('hamburger');
  const navMenu = document.getElementById('navMenu');
  const navLinks = document.getElementById('navLinks');

  function closeMenu() {
    navMenu.classList.remove('open');
    hamburger.classList.remove('open');
    hamburger.setAttribute('aria-expanded', 'false');
    document.body.classList.remove('no-scroll');
  }

  hamburger.addEventListener('click', function () {
    const isOpen = navMenu.classList.toggle('open');
    hamburger.classList.toggle('open', isOpen);
    hamburger.setAttribute('aria-expanded', String(isOpen));
    document.body.classList.toggle('no-scroll', isOpen);
  });

  navMenu.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', closeMenu);
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeMenu();
  });

  /* ---------- Scrollspy (active nav link) ---------- */
  const sections = Array.prototype.slice.call(document.querySelectorAll('main section[id]'));
  const linkMap = {};
  navLinks.querySelectorAll('a').forEach(function (a) {
    const id = a.getAttribute('href').slice(1);
    if (id) linkMap[id] = a;
  });

  function updateActiveLink() {
    const pos = window.scrollY + window.innerHeight * 0.35;
    let currentId = null;
    sections.forEach(function (sec) {
      if (sec.offsetTop <= pos) currentId = sec.id;
    });
    Object.keys(linkMap).forEach(function (id) {
      linkMap[id].classList.toggle('active', id === currentId);
    });
  }

  /* ---------- Reveal on scroll ---------- */
  const revealObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.reveal').forEach(function (el) {
    revealObserver.observe(el);
  });

  /* ---------- Animated counters ---------- */
  function animateCounter(el) {
    const target = parseFloat(el.dataset.target);
    const decimals = parseInt(el.dataset.decimals || '0', 10);
    const suffix = el.dataset.suffix || '';
    const duration = 1800;
    const start = performance.now();

    function tick(now) {
      const t = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - t, 4); // easeOutQuart
      const value = target * eased;
      el.textContent = value.toFixed(decimals) + suffix;
      if (t < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }

  const counterObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        counterObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  document.querySelectorAll('.counter').forEach(function (el) {
    counterObserver.observe(el);
  });

  /* ---------- Pricing billing toggle ---------- */
  const btOptions = document.querySelectorAll('.bt-option');
  const priceAmounts = document.querySelectorAll('.price-amount[data-monthly]');

  btOptions.forEach(function (btn) {
    btn.addEventListener('click', function () {
      btOptions.forEach(function (b) { b.classList.remove('active'); });
      btn.classList.add('active');
      const period = btn.dataset.period;

      priceAmounts.forEach(function (amount) {
        const value = period === 'yearly' ? amount.dataset.yearly : amount.dataset.monthly;
        animatePrice(amount, parseInt(value, 10));
      });
    });
  });

  function animatePrice(el, target) {
    const from = parseInt(el.textContent.replace(/[^0-9]/g, ''), 10) || 0;
    const duration = 450;
    const start = performance.now();

    function tick(now) {
      const t = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      el.textContent = '$' + Math.round(from + (target - from) * eased);
      if (t < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }

  /* ---------- FAQ: allow only one open item ---------- */
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(function (item) {
    item.addEventListener('toggle', function () {
      if (item.open) {
        faqItems.forEach(function (other) {
          if (other !== item) other.open = false;
        });
      }
    });
  });

  /* ---------- Feature card cursor glow ---------- */
  document.querySelectorAll('.feature-card').forEach(function (card) {
    card.addEventListener('pointermove', function (e) {
      const rect = card.getBoundingClientRect();
      card.style.setProperty('--mx', ((e.clientX - rect.left) / rect.width) * 100 + '%');
    });
  });

  /* ---------- Footer year ---------- */
  document.getElementById('year').textContent = new Date().getFullYear();
})();
