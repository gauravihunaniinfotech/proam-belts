/* =========================================================
   PROAM BELTS — interactions (vanilla JS)
   Modules: Header · Nav · Search · Hero · Reveal · Counters ·
            Timeline · Products/QuickView · Belt of the Month ·
            Gallery/Lightbox · Newsletter · BackToTop · Images
   ========================================================= */
(function () {
  'use strict';

  var $ = function (s, c) { return (c || document).querySelector(s); };
  var $$ = function (s, c) { return Array.prototype.slice.call((c || document).querySelectorAll(s)); };
  var prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var CDN = 'https://proambelts.com/cdn/shop/files/';

  /* ---------- Data ---------- */
  var PRODUCTS = {
    'prophet-pink': {
      title: 'Prophet Pink Custom Chrome Championship Belt', price: '$184.00', badge: 'Best Seller',
      img: 'assets/product-prophet-pink.webp',
      url: 'https://proambelts.com/products/prophet-economy-pink-championship-belt',
      desc: 'A blank custom wrestling and boxing championship title belt in pink with chrome plates. Add your own wording, logos and numbers to the center and side plates and see a free design preview before we build it.'
    },
    'victory-red': {
      title: 'Victory Red Custom Gold Championship Award Trophy Belt', price: '$179.99', badge: 'Best Seller',
      img: 'assets/product-victory-red.webp',
      url: 'https://proambelts.com/products/victory-heavy-dc-red-championship-belt',
      desc: 'A bold red custom championship award trophy belt with gold plates. Personalize the plates with your league, team or company details for a title belt that looks as good as it feels.'
    },
    'hercules': {
      title: 'Hercules Heavyweight Championship Belt', price: '$214.99', badge: '',
      img: CDN + 'Group_731_1.webp?v=1789974085&width=900',
      url: 'https://proambelts.com/products/hercules-championship-belt',
      desc: 'A heavyweight championship belt built to be worn, photographed and displayed with pride. Customize the plates with your own logos and text.'
    },
    'global-white': {
      title: 'Global Domination Custom White Championship Award Trophy Belt', price: '$179.99', badge: 'Best Seller',
      img: 'assets/product-global-domination-white.webp',
      url: 'https://proambelts.com/products/global-domination-white-championship-belt',
      desc: 'Five solid brass plates finished in brilliant gold lacquer, a colorfully etched globe centerpiece and sparkling jewels set into a pristine white strap. Available plain or fully customized.'
    }
  };

  var SEARCH_INDEX = [
    { t: 'Global Domination Championship Belt', u: 'https://proambelts.com/products/global-domination-white-championship-belt', k: 'Product' },
    { t: 'Prophet Pink Custom Chrome Championship Belt', u: PRODUCTS['prophet-pink'].url, k: 'Product' },
    { t: 'Victory Red Custom Gold Championship Belt', u: PRODUCTS['victory-red'].url, k: 'Product' },
    { t: 'Hercules Heavyweight Championship Belt', u: PRODUCTS.hercules.url, k: 'Product' },
    { t: 'Premier Custom Championship Belts', u: 'https://proambelts.com/collections/custom-championship-belts', k: 'Collection' },
    { t: 'Stock Championship Belts', u: 'https://proambelts.com/collections/stock-belts', k: 'Collection' },
    { t: 'Fantasy Football Belts', u: 'https://proambelts.com/collections/fantasy-football-belts', k: 'Collection' },
    { t: 'Plaques & Awards', u: 'https://proambelts.com/collections/plaques-awards', k: 'Collection' },
    { t: 'Cases & Accessories', u: 'https://proambelts.com/collections/accessories', k: 'Collection' },
    { t: 'Sale Items', u: 'https://proambelts.com/collections/sales', k: 'Collection' },
    { t: 'Belt of the Month', u: 'https://proambelts.com/collections/belt-of-the-month', k: 'Collection' },
    { t: 'Wholesale & Bulk Orders', u: 'https://proambelts.com/pages/bulk-order', k: 'Page' },
    { t: 'Our Process', u: 'https://proambelts.com/pages/process', k: 'Page' },
    { t: 'Frequently Asked Questions', u: 'https://proambelts.com/pages/faq', k: 'Page' },
    { t: 'Contact Us', u: 'https://proambelts.com/pages/contact', k: 'Page' },
    { t: 'Updates & Blog', u: 'https://proambelts.com/blogs/news', k: 'Page' }
  ];

  var GALLERY = [
    { f: '485141120_10235561199714792_2080231454445274156_n.jpg?v=1785923381', n: 'John Smith', c: '2025 State Champion', cat: 'boxing', v: 1 },
    { f: 'EBI_with_custom_stock_LOKI_belt.png?v=1785923383', n: 'Michael Johnson', c: '2025 National Champion', cat: 'wrestling', v: 1 },
    { f: 'bakersfield_combat_belt.jpg?v=1785923382', n: 'David Williams', c: '2025 Boxing Champion', cat: 'mma', v: 1 },
    { f: 'chilli_cook_off_belt.jpg?v=1785923381', n: 'Alex Carter', c: '2025 MMA Champion', cat: 'entertainment', v: 1 },
    { f: 'EBi_custom_championship_title_Belt_proambelts_-_Copy.png?v=1785923382', n: 'James Anderson', c: '2025 World Champion', cat: 'wrestling', v: 1 },
    { f: 'military_championship_custom_award_belt_proambelts.jpg?v=1785923382', n: 'Robert Taylor', c: '2025 Jiu-Jitsu Champion', cat: 'sports', v: 1 },
    { f: 'cal_ripken_jr_under_armour_custom_championship_title_belts_baseball_awards.jpg?v=1785923381', n: 'Daniel Brown', c: '2025 Regional Champion', cat: 'sports', v: 0 },
    { f: 'malibu_ken_and_barbie_custom_championship_belt.jpg?v=1785923381', n: 'Jason Miller', c: '2025 World Champion', cat: 'entertainment', v: 1 },
    { f: 'convert.webp?v=1785923381', n: 'Kevin Moore', c: '2025 Wrestling Champion', cat: 'wrestling', v: 1 },
    { f: 'Screenshot_668.png?v=1785923382', n: 'Anthony Thomas', c: '2025 MMA Champion', cat: 'boxing', v: 1 },
    { f: 'peachbowl_championship_custom_belt.jpg?v=1785923380', n: 'Chris Wilson', c: '2025 State Champion', cat: 'sports', v: 1 },
    { f: 'medusa_fight_championship_title_award_belts.png?v=1785923382', n: 'Matthew Jackson', c: '2025 Boxing Champion', cat: 'mma', v: 1 },
    { f: 'Screenshot_26.png?v=1785923382', n: 'Justin Harris', c: '2025 National Champion', cat: 'mma', v: 1 },
    { f: 'fiesta_bowl_flag_football_female_women_s_championship_title_Belt.jpg?v=1785923381', n: 'Ryan Martinez', c: '2025 National Champion', cat: 'sports', v: 0 },
    { f: 'Gc7ev0jXUAAD0zF.jpg?v=1785923383', n: 'Eric Martin', c: '2025 World Champion', cat: 'entertainment', v: 1 },
    { f: 'Rectangle_26.png?v=1782817270', n: 'Marcus Thompson', c: '2025 Boxing Champion', cat: 'boxing', v: 1 },
    { f: 'custom_engraved_blank_championship_title_award_belts.png?v=1785923382', n: 'Marcus Thompson', c: '2025 Boxing Champion', cat: 'boxing', v: 1 },
    { f: 'ac516877-99aa-485b-aab9-d380eb22d15a.jpg?v=1785923380', n: 'Marcus Thompson', c: '2025 Boxing Champion', cat: 'boxing', v: 1 },
    // { f: 'pws_korean_custom_female_championship_title_belt_award.jpg?v=1785923383', n: 'Marcus Thompson', c: '2025 Boxing Champion', cat: 'boxing', v: 1 }

  ];

  var PLACEHOLDER = 'data:image/svg+xml;utf8,' + encodeURIComponent(
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 450"><rect width="600" height="450" fill="#101B3D"/>' +
    '<text x="300" y="225" fill="#FFB547" font-family="Impact,Arial Narrow,sans-serif" font-size="54" text-anchor="middle">PROAM BELTS</text>' +
    '<text x="300" y="268" fill="#B7C1DE" font-family="Arial,sans-serif" font-size="18" letter-spacing="4" text-anchor="middle">CUSTOM CHAMPIONSHIP BELTS</text></svg>');

  /* ---------- Utilities ---------- */
  function lockScroll(lock) { document.body.classList.toggle('is-locked', lock); }
  function throttleRAF(fn) {
    var ticking = false;
    return function () {
      if (ticking) return; ticking = true;
      requestAnimationFrame(function () { fn(); ticking = false; });
    };
  }
  function focusTrap(container) {
    return function (e) {
      if (e.key !== 'Tab') return;
      var f = $$('a[href], button:not([disabled]), input, [tabindex]:not([tabindex="-1"])', container).filter(function (el) { return el.offsetParent !== null; });
      if (!f.length) return;
      var first = f[0], last = f[f.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    };
  }

  /* ---------- Image fallback (remote assets) ---------- */
  function guardImages(root) {
    $$('img', root || document).forEach(function (img) {
      if (img.dataset.guarded) return; img.dataset.guarded = '1';
      img.addEventListener('error', function () {
        if (img.src !== PLACEHOLDER) { img.src = PLACEHOLDER; img.classList.add('is-fallback'); }
      });
    });
  }

  /* ---------- Header: sticky state + progress + back-to-top ---------- */
  var header = $('#header'), progress = $('#scrollProgress'), toTop = $('#toTop');
  var onScroll = throttleRAF(function () {
    var y = window.scrollY || window.pageYOffset;
    var h = document.documentElement.scrollHeight - window.innerHeight;
    header.classList.toggle('is-stuck', y > 40);
    progress.style.transform = 'scaleX(' + (h > 0 ? Math.min(y / h, 1) : 0) + ')';
    toTop.classList.toggle('is-visible', y > 700);
  });
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
  toTop.addEventListener('click', function () { window.scrollTo({ top: 0, behavior: prefersReduced ? 'auto' : 'smooth' }); });

  /* ---------- Navigation: mega menu + mobile ---------- */
  var nav = $('#nav'), burger = $('#burger');
  var megaItems = $$('.has-mega');
  var isDesktop = function () { return window.matchMedia('(min-width: 992px)').matches; };

  function closeMegas(except) {
    megaItems.forEach(function (li) {
      if (li === except) return;
      li.classList.remove('is-open');
      var b = $('.nav__link', li); if (b) b.setAttribute('aria-expanded', 'false');
    });
  }
  megaItems.forEach(function (li) {
    var btn = $('.nav__link', li), timer;
    btn.addEventListener('click', function (e) {
      e.stopPropagation();
      var open = !li.classList.contains('is-open');
      closeMegas(li);
      li.classList.toggle('is-open', open);
      btn.setAttribute('aria-expanded', String(open));
    });
    li.addEventListener('mouseenter', function () {
      if (!isDesktop()) return; clearTimeout(timer);
      closeMegas(li); li.classList.add('is-open'); btn.setAttribute('aria-expanded', 'true');
    });
    li.addEventListener('mouseleave', function () {
      if (!isDesktop()) return;
      timer = setTimeout(function () { li.classList.remove('is-open'); btn.setAttribute('aria-expanded', 'false'); }, 160);
    });
  });
  document.addEventListener('click', function (e) { if (!e.target.closest('.has-mega')) closeMegas(); });

  function setMobileNav(open) {
    nav.classList.toggle('is-open', open);
    burger.setAttribute('aria-expanded', String(open));
    lockScroll(open);
  }
  burger.addEventListener('click', function () { setMobileNav(!nav.classList.contains('is-open')); });
  $$('.mega a, .nav__link[href]', nav).forEach(function (a) { a.addEventListener('click', function () { if (!isDesktop()) setMobileNav(false); }); });
  window.addEventListener('resize', function () { if (isDesktop()) { setMobileNav(false); } });

  /* ---------- Smooth scrolling for in-page anchors ---------- */
  $$('a[href^="#"]').forEach(function (a) {
    a.addEventListener('click', function (e) {
      var id = a.getAttribute('href');
      if (id.length < 2 || a.hasAttribute('data-q')) return;
      var t = $(id); if (!t) return;
      e.preventDefault();
      t.scrollIntoView({ behavior: prefersReduced ? 'auto' : 'smooth', block: 'start' });
    });
  });

  /* ---------- Search overlay ---------- */
  var search = $('#search'), sInput = $('#searchInput'), sResults = $('#searchResults');
  var lastFocus = null;
  var searchTrap = focusTrap(search);
  function openSearch() {
    lastFocus = document.activeElement; search.hidden = false; lockScroll(true);
    setTimeout(function () { sInput.focus(); }, 30);
    document.addEventListener('keydown', searchTrap);
  }
  function closeSearch() {
    search.hidden = true; lockScroll(false); document.removeEventListener('keydown', searchTrap);
    if (lastFocus) lastFocus.focus();
  }
  function renderSearch(q) {
    q = q.trim().toLowerCase();
    sResults.innerHTML = '';
    if (!q) return;
    var hits = SEARCH_INDEX.filter(function (i) { return i.t.toLowerCase().indexOf(q) > -1 || i.k.toLowerCase().indexOf(q) > -1; }).slice(0, 8);
    if (!hits.length) { sResults.innerHTML = '<li><a href="https://proambelts.com/search?q=' + encodeURIComponent(q) + '"><span>Search the store for “' + q.replace(/[<>&"]/g, '') + '”</span><small>Go</small></a></li>'; return; }
    hits.forEach(function (h) {
      var li = document.createElement('li');
      li.innerHTML = '<a href="' + h.u + '"><span></span><small>' + h.k + '</small></a>';
      $('span', li).textContent = h.t;
      sResults.appendChild(li);
    });
  }
  $('#searchOpen').addEventListener('click', openSearch);
  $('#searchClose').addEventListener('click', closeSearch);
  sInput.addEventListener('input', function () { renderSearch(sInput.value); });
  $$('.search__hint a').forEach(function (a) {
    a.addEventListener('click', function (e) { e.preventDefault(); sInput.value = a.dataset.q; renderSearch(a.dataset.q); sInput.focus(); });
  });
  $('#searchForm').addEventListener('submit', function (e) { if (!sInput.value.trim()) { e.preventDefault(); sInput.focus(); } });

  /* ---------- Hero slider ---------- */
  (function () {
    var slides = $$('.hero__frame .slide'), dots = $$('#heroDots button'), cap = $('#heroCaption');
    if (!slides.length) return;
    var i = 0, timer;
    function go(n) {
      i = (n + slides.length) % slides.length;
      slides.forEach(function (s, k) { s.classList.toggle('is-active', k === i); });
      dots.forEach(function (d, k) { d.classList.toggle('is-active', k === i); d.setAttribute('aria-selected', String(k === i)); });
      cap.innerHTML = slides[i].dataset.title;
    }
    function play() { if (prefersReduced) return; clearInterval(timer); timer = setInterval(function () { go(i + 1); }, 5200); }
    dots.forEach(function (d, k) { d.addEventListener('click', function () { go(k); play(); }); });
    var stage = $('.hero__stage');
    stage.addEventListener('mouseenter', function () { clearInterval(timer); });
    stage.addEventListener('mouseleave', play);
    // pause when tab hidden
    document.addEventListener('visibilitychange', function () { document.hidden ? clearInterval(timer) : play(); });
    // tilt on pointer
    var frame = $('.hero__frame');
    if (!prefersReduced && window.matchMedia('(hover:hover)').matches) {
      stage.addEventListener('mousemove', function (e) {
        var r = stage.getBoundingClientRect();
        var x = (e.clientX - r.left) / r.width - .5, y = (e.clientY - r.top) / r.height - .5;
        frame.style.transform = 'perspective(1100px) rotateY(' + (x * 6) + 'deg) rotateX(' + (-y * 6) + 'deg)';
      });
      stage.addEventListener('mouseleave', function () { frame.style.transform = ''; });
      frame.style.transition = 'transform .4s ease-out';
    }
    play();
  })();

  /* ---------- Scroll reveal ---------- */
  (function () {
    var els = $$('.reveal');
    // stagger siblings inside grids
    ['.mosaic', '.product-grid', '.benefits', '.stats__grid', '.trust', '.logos', '.blog__grid', '.cta__points', '.hero__copy'].forEach(function (sel) {
      var parent = $(sel); if (!parent) return;
      $$('.reveal', parent).forEach(function (el, k) { el.style.setProperty('--d', (k * 0.09) + 's'); });
    });
    if (!('IntersectionObserver' in window)) { els.forEach(function (e) { e.classList.add('is-in'); }); return; }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add('is-in'); io.unobserve(en.target); } });
    }, { threshold: 0.12, rootMargin: '0px 0px -6% 0px' });
    els.forEach(function (e) { io.observe(e); });
    // hero is above the fold: reveal immediately
    setTimeout(function () { $$('.hero .reveal').forEach(function (e) { e.classList.add('is-in'); }); }, 80);
  })();

  /* ---------- Animated counters ---------- */
  (function () {
    var nums = $$('[data-count]');
    function run(el) {
      var target = parseFloat(el.dataset.count), dec = parseInt(el.dataset.decimals || '0', 10), dur = 1700, t0 = null;
      if (prefersReduced) { el.textContent = target.toFixed(dec); return; }
      function step(ts) {
        if (!t0) t0 = ts;
        var p = Math.min((ts - t0) / dur, 1), eased = 1 - Math.pow(1 - p, 4);
        el.textContent = (target * eased).toFixed(dec);
        if (p < 1) requestAnimationFrame(step);
      }
      requestAnimationFrame(step);
    }
    if (!('IntersectionObserver' in window)) { nums.forEach(function (n) { n.textContent = parseFloat(n.dataset.count).toFixed(parseInt(n.dataset.decimals || '0', 10)); }); return; }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) { if (en.isIntersecting) { run(en.target); io.unobserve(en.target); } });
    }, { threshold: 0.6 });
    nums.forEach(function (n) { io.observe(n); });
  })();

  /* ---------- Animated process timeline ---------- */
  (function () {
    var tl = $('#timeline'); if (!tl) return;
    var steps = $$('.step', tl), fill = $('#timelineFill'), lit = -1, timers = [];
    function light(n) {
      steps[n].classList.add('is-lit'); lit = Math.max(lit, n);
      var pos = (((lit + 0.5) / steps.length) - 0.04) / 0.92 * 100;
      fill.style.width = Math.max(0, Math.min(pos, 100)) + '%';
    }
    if (!('IntersectionObserver' in window) || prefersReduced) { steps.forEach(function (s, k) { light(k); }); return; }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        if (window.matchMedia('(min-width: 1025px)').matches) {
          if (en.target === tl) { steps.forEach(function (s, k) { timers.push(setTimeout(function () { light(k); }, 350 + k * 420)); }); io.unobserve(tl); }
        } else if (en.target !== tl) { light(steps.indexOf(en.target)); io.unobserve(en.target); }
      });
    }, { threshold: 0.45 });
    io.observe(tl);
    steps.forEach(function (s) { io.observe(s); });
  })();

  /* ---------- Quick view ---------- */
  (function () {
    var modal = $('#quickView'), trap = focusTrap(modal), opener = null;
    function open(id, btn) {
      var p = PRODUCTS[id]; if (!p) return;
      opener = btn || document.activeElement;
      var img = $('#qvImg'); img.src = p.img; img.alt = p.title;
      $('#qvTitle').textContent = p.title;
      $('#qvPrice').textContent = p.price;
      $('#qvDesc').textContent = p.desc;
      var badge = $('#qvBadge'); badge.hidden = !p.badge; badge.textContent = p.badge;
      $('#qvBuy').href = p.url; $('#qvMore').href = p.url;
      modal.hidden = false; lockScroll(true);
      document.addEventListener('keydown', trap);
      setTimeout(function () { $('.modal__close', modal).focus(); }, 30);
    }
    function close() {
      modal.hidden = true; lockScroll(false); document.removeEventListener('keydown', trap);
      if (opener) opener.focus();
    }
    $$('[data-quick]').forEach(function (b) { b.addEventListener('click', function () { open(b.dataset.quick, b); }); });
    $$('[data-close]', modal).forEach(function (el) { el.addEventListener('click', close); });
    modal._close = close;
  })();

  /* ---------- Belt of the Month gallery ---------- */
  (function () {
    var main = $('#botmMain'), thumbs = $$('#botmThumbs button');
    if (!main) return;
    thumbs.forEach(function (t) {
      t.addEventListener('click', function () {
        thumbs.forEach(function (x) { x.classList.remove('is-active'); });
        t.classList.add('is-active');
        main.classList.add('is-swap');
        setTimeout(function () { main.src = t.dataset.src; main.alt = t.dataset.alt; main.classList.remove('is-swap'); }, 220);
      });
    });
  })();

  /* ---------- Customer gallery: render, filter, lightbox ---------- */
  (function () {
    var grid = $('#galleryGrid'), filters = $$('#galleryFilters button');
    if (!grid) return;
    var tick = '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="10" fill="currentColor"/><path d="M7.5 12.5l3 3 6-7" fill="none" stroke="#0A1128" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/></svg>';

    GALLERY.forEach(function (g, idx) {
      var b = document.createElement('button');
      b.type = 'button'; b.className = 'g-item'; b.dataset.cat = g.cat; b.dataset.idx = idx;
      b.setAttribute('aria-label', 'Open photo: ' + g.n + ', ' + g.c);
      b.innerHTML = '<img loading="lazy" src="' + CDN + g.f + '&width=700" alt="Custom ProAm championship belt – ' + g.c + '">' +
        '<figcaption><strong>' + g.n + (g.v ? tick : '') + '</strong><span>' + g.c + '</span></figcaption>';
      grid.appendChild(b);
    });
    guardImages(grid);

    var current = 'all', visible = [];
    function apply(f) {
      current = f; visible = [];
      $$('.g-item', grid).forEach(function (el, k) {
        var show = f === 'all' || el.dataset.cat === f;
        el.hidden = !show;
        if (show) { visible.push(el); el.style.animationDelay = (visible.length * 0.04) + 's'; el.style.animation = 'none'; void el.offsetWidth; el.style.animation = ''; }
      });
    }
    filters.forEach(function (b) {
      b.addEventListener('click', function () {
        filters.forEach(function (x) { x.classList.remove('is-active'); x.setAttribute('aria-selected', 'false'); });
        b.classList.add('is-active'); b.setAttribute('aria-selected', 'true');
        apply(b.dataset.filter);
      });
    });
    apply('all');

    // Lightbox
    var lb = $('#lightbox'), lbImg = $('#lbImg'), lbCap = $('#lbCap'), pos = 0, trap = focusTrap(lb), opener = null;
    function show(n) {
      pos = (n + visible.length) % visible.length;
      var el = visible[pos], g = GALLERY[el.dataset.idx];
      lbImg.src = CDN + g.f + '&width=1400'; lbImg.alt = 'Custom ProAm championship belt – ' + g.c;
      lbCap.textContent = g.n + ' — ' + g.c;
    }
    function open(el) {
      opener = el; pos = visible.indexOf(el);
      lb.hidden = false; lockScroll(true); show(pos);
      document.addEventListener('keydown', onKey);
      setTimeout(function () { $('#lbClose').focus(); }, 30);
    }
    function close() { lb.hidden = true; lockScroll(false); document.removeEventListener('keydown', onKey); if (opener) opener.focus(); }
    function onKey(e) {
      if (e.key === 'ArrowRight') show(pos + 1);
      else if (e.key === 'ArrowLeft') show(pos - 1);
      else trap(e);
    }
    grid.addEventListener('click', function (e) { var it = e.target.closest('.g-item'); if (it) open(it); });
    $('#lbClose').addEventListener('click', close);
    $('#lbPrev').addEventListener('click', function () { show(pos - 1); });
    $('#lbNext').addEventListener('click', function () { show(pos + 1); });
    lb.addEventListener('click', function (e) { if (e.target === lb) close(); });
    // swipe
    var sx = null;
    lb.addEventListener('touchstart', function (e) { sx = e.touches[0].clientX; }, { passive: true });
    lb.addEventListener('touchend', function (e) {
      if (sx === null) return; var dx = e.changedTouches[0].clientX - sx;
      if (Math.abs(dx) > 50) show(pos + (dx < 0 ? 1 : -1)); sx = null;
    });
    lb._close = close;
  })();

  /* ---------- Newsletter validation ---------- */
  (function () {
    var form = $('#newsForm'), input = $('#newsEmail'), msg = $('#newsMsg');
    if (!form) return;
    var re = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    var original = msg.textContent;
    function set(state, text) {
      form.classList.toggle('is-invalid', state === 'bad');
      form.classList.toggle('is-valid', state === 'ok');
      input.setAttribute('aria-invalid', state === 'bad' ? 'true' : 'false');
      msg.textContent = text;
    }
    input.addEventListener('input', function () { if (form.classList.contains('is-invalid')) set('', original); });
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var v = input.value.trim();
      if (!v) { set('bad', 'Please enter your email address.'); input.focus(); return; }
      if (!re.test(v)) { set('bad', 'That email doesn’t look right — please check it and try again.'); input.focus(); return; }
      // TODO: connect to your email provider (Shopify customer form / Klaviyo / Mailchimp endpoint).
      set('ok', 'Welcome to the championship circle! Check your inbox soon.');
      form.reset();
    });
  })();

  /* ---------- Global Escape handling ---------- */
  document.addEventListener('keydown', function (e) {
    if (e.key !== 'Escape') return;
    if (!search.hidden) closeSearch();
    var qv = $('#quickView'); if (!qv.hidden && qv._close) qv._close();
    var lb = $('#lightbox'); if (!lb.hidden && lb._close) lb._close();
    if (nav.classList.contains('is-open')) setMobileNav(false);
    closeMegas();
  });

  /* ---------- Init ---------- */
  guardImages();
})();
