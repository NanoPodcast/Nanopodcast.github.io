/* ==========================================================================
   NanoPod — shared behaviour (public pages)
   ========================================================================== */

/* ---------- Scroll-reveal ----------
   Fades + slides elements up as they enter the viewport. Runs once on
   page load for content that's already in the DOM (labs grid, quote
   cards, join form, etc.), and is called again by render-public.js
   right after it finishes injecting Firestore-backed cards, since those
   don't exist yet at DOMContentLoaded time. */
window.initScrollReveal = function (root) {
  var scope = root || document;
  var targets = scope.querySelectorAll(
    '.section-head, .card, .link-row, .countdown-card, .join-card'
  );
  var toObserve = [];
  targets.forEach(function (el, i) {
    if (el.dataset.revealed) return;
    el.dataset.revealed = '1';
    el.classList.add('reveal');
    el.style.transitionDelay = (Math.min(i % 6, 5) * 0.07) + 's';
    toObserve.push(el);
  });
  if (!toObserve.length) return;

  if (!('IntersectionObserver' in window)) {
    toObserve.forEach(function (el) { el.classList.add('in-view'); });
    return;
  }
  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
  toObserve.forEach(function (el) { observer.observe(el); });
};

document.addEventListener('DOMContentLoaded', function () {

  window.initScrollReveal();

  /* Mobile nav toggle */
  var toggle = document.querySelector('.nav-toggle');
  var links = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', function () {
      links.classList.toggle('open');
    });
    links.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () { links.classList.remove('open'); });
    });
  }

  /* Analytics: track clicks on anything that leads to the Join page */
  document.querySelectorAll('a[href="join.html"]').forEach(function (a) {
    a.addEventListener('click', function () {
      if (window.trackEvent) window.trackEvent('join_click', { source: a.className || 'link' });
    });
  });

  /* Highlight the current page in the nav */
  var here = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(function (a) {
    var target = a.getAttribute('href');
    if (target === here || (here === '' && target === 'index.html')) {
      a.classList.add('active');
    }
  });

  /* Join form — writes to Firestore's joinRequests collection.
     Results are visible only from admin.html (Join requests tab). */
  var joinForm = document.querySelector('#join-form');
  if (joinForm) {
    joinForm.addEventListener('submit', async function (e) {
      e.preventDefault();
      var status = document.querySelector('#join-status');
      var submitBtn = joinForm.querySelector('button[type="submit"]');
      var data = {
        name: document.querySelector('#name').value,
        email: document.querySelector('#email').value,
        track: document.querySelector('#track').value,
        note: document.querySelector('#note').value,
        submittedAt: Date.now()
      };
      submitBtn.disabled = true;
      submitBtn.textContent = 'Submitting…';
      try {
        await withTimeout(db.collection('joinRequests').add(data), "Submitting");
        joinForm.reset();
        status.textContent = "Thanks, " + data.name.split(' ')[0] + " — we've got your submission and will follow up.";
        status.style.color = 'var(--cyan)';
        if (window.trackEvent) window.trackEvent('join_submit', { track: data.track });
      } catch (err) {
        status.textContent = "Couldn't submit: " + err.message;
      }
      submitBtn.disabled = false;
      submitBtn.textContent = 'Submit';
    });
  }
});
