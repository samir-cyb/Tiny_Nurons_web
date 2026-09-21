/* ==========================================================================
   site.js  -  shared GSAP layer for every page
   - Replaces AOS + parallax.js (a harmless AOS stub is kept for legacy calls)
   - Scroll reveals (reads the existing data-aos / data-aos-delay attributes)
   - Animated counters, hero parallax, scroll-progress bar, smart navbar
   - Smooth anchor / back-to-top scrolling, mobile menu, page transitions
   Requires: gsap, ScrollTrigger, ScrollToPlugin (loaded before this file)
   ========================================================================== */
(function () {
    'use strict';

    var doc = document.documentElement;

    /* Legacy per-page scripts still call AOS.init(); make that a no-op. */
    window.AOS = { init: function () {}, refresh: function () { refresh(); }, refreshHard: function () { refresh(); } };

    var hasGsap = typeof window.gsap !== 'undefined';
    var hasST = hasGsap && typeof window.ScrollTrigger !== 'undefined';
    var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    function reveal() { doc.classList.remove('gsap-pre'); }
    if (!hasGsap || !hasST) { reveal(); return; }   // CDN blocked -> content simply shows

    gsap.registerPlugin(ScrollTrigger);
    if (window.ScrollToPlugin) gsap.registerPlugin(ScrollToPlugin);
    ScrollTrigger.config({ ignoreMobileResize: true });   // no jumps when mobile toolbars collapse
    gsap.defaults({ ease: 'power3.out', duration: 0.9 });

    function refresh() { ScrollTrigger.refresh(); }
    function $(s, c) { return (c || document).querySelector(s); }
    function $$(s, c) { return Array.prototype.slice.call((c || document).querySelectorAll(s)); }
    function navHeight() { var n = $('.navbar'); return n ? n.offsetHeight : 72; }
    function syncNavVar() { doc.style.setProperty('--nav-h', navHeight() + 'px'); }

    /* --------------------------------------------------------------------
       1. Scroll reveals
       -------------------------------------------------------------------- */
    var FROM = {
        'fade-up': { y: 40 }, 'fade-down': { y: -40 },
        'fade-left': { x: 40 }, 'fade-right': { x: -40 },
        'fade-up-left': { x: 40, y: 40 }, 'fade-up-right': { x: -40, y: 40 },
        'zoom-in': { scale: 0.9 }, 'zoom-out': { scale: 1.08 },
        'zoom-in-up': { scale: 0.9, y: 40 }, 'flip-up': { y: 40, rotationX: -25, transformPerspective: 800 },
        'slide-up': { y: 60 }, 'slide-left': { x: 60 }, 'slide-right': { x: -60 }, 'fade': {}
    };

    function animateEl(el) {
        if (el.__gsapDone) return;
        el.__gsapDone = true;

        var type = el.getAttribute('data-aos') || 'fade-up';
        var from = Object.assign({ opacity: 0 }, FROM[type] || FROM['fade-up']);
        var delay = Math.min((parseInt(el.getAttribute('data-aos-delay'), 10) || 0) / 1000, 0.6);
        var dur = parseFloat(el.getAttribute('data-aos-duration')) / 1000 || 0.9;

        if (reduce) { gsap.set(el, { clearProps: 'all' }); return; }

        var prevTransition = el.style.transition;
        el.style.transition = 'none';              // CSS transitions must not fight GSAP

        gsap.fromTo(el, from, {
            opacity: 1, x: 0, y: 0, scale: 1, rotationX: 0,
            duration: dur, delay: delay, ease: 'power3.out', overwrite: 'auto',
            scrollTrigger: { trigger: el, start: 'top 90%', once: true, invalidateOnRefresh: true },
            onComplete: function () {
                gsap.set(el, { clearProps: 'opacity,transform,visibility' });   // hover styles work again
                el.style.transition = prevTransition;
            }
        });
    }

    function initReveals(root) {
        $$('[data-aos]', root).forEach(function (el) {
            if (el.__gsapDone) return;
            // hide immediately (inline) so removing the pre-class does not flash content
            gsap.set(el, { opacity: 0 });
            animateEl(el);
        });
    }

    /* Elements added later (filters, search, dynamic rendering) */
    function watchDynamic() {
        if (!window.MutationObserver) return;
        var queued = false, pending = [];
        var mo = new MutationObserver(function (muts) {
            muts.forEach(function (m) {
                m.addedNodes.forEach(function (n) { if (n.nodeType === 1) pending.push(n); });
            });
            if (queued || !pending.length) return;
            queued = true;
            requestAnimationFrame(function () {
                var nodes = pending; pending = []; queued = false;
                nodes.forEach(function (n) {
                    var list = n.matches && n.matches('[data-aos]') ? [n] : [];
                    list = list.concat($$('[data-aos]', n));
                    list.forEach(function (el) {
                        if (el.__gsapDone) return;
                        gsap.set(el, { opacity: 0 });
                        animateEl(el);
                    });
                });
                ScrollTrigger.refresh();
            });
        });
        mo.observe(document.body, { childList: true, subtree: true });
    }

    /* --------------------------------------------------------------------
       2. Hero: intro + gentle scroll parallax
       -------------------------------------------------------------------- */
    function initHero() {
        var hero = $('section[class*="hero"], .hero');
        if (!hero || reduce) return;

        var bg = $('.hero-bg-parallax', hero);
        if (bg) {
            gsap.to(bg, {
                yPercent: 18, ease: 'none',
                scrollTrigger: { trigger: hero, start: 'top top', end: 'bottom top', scrub: true }
            });
        }
        var content = $('.container', hero);
        if (content) {
            gsap.to(content, {
                y: 60, opacity: 0.35, ease: 'none',
                scrollTrigger: { trigger: hero, start: 'center center', end: 'bottom top', scrub: true }
            });
        }
    }

    /* --------------------------------------------------------------------
       3. Counters ( .stat-number / .metric-value / [data-count] )
       -------------------------------------------------------------------- */
    function initCounters() {
        $$('[data-count]').forEach(function (el) {
            var target = parseFloat(el.getAttribute('data-count'));
            if (isNaN(target)) return;
            el.setAttribute('data-counter-owner', 'gsap');
            var suffix = el.getAttribute('data-suffix') || '';
            var obj = { v: 0 };
            el.textContent = '0' + suffix;
            if (reduce) { el.textContent = target.toLocaleString() + suffix; return; }
            gsap.to(obj, {
                v: target, duration: 2, ease: 'power2.out',
                onUpdate: function () { el.textContent = Math.round(obj.v).toLocaleString() + suffix; },
                onComplete: function () { el.textContent = target.toLocaleString() + suffix; },
                scrollTrigger: { trigger: el, start: 'top 92%', once: true }
            });
        });
    }

    /* --------------------------------------------------------------------
       4. Navbar (state, hide on scroll down / show on scroll up) + progress
       -------------------------------------------------------------------- */
    function initNavbar() {
        var nav = $('.navbar');
        var bar = document.createElement('div');
        bar.className = 'scroll-progress';
        document.body.appendChild(bar);
        gsap.set(bar, { scaleX: 0 });

        gsap.to(bar, {
            scaleX: 1, ease: 'none',
            scrollTrigger: { start: 0, end: 'max', scrub: 0.3 }
        });

        if (!nav) return;
        var hidden = false;
        ScrollTrigger.create({
            start: 0, end: 'max',
            onUpdate: function (self) {
                var y = self.scroll();
                nav.classList.toggle('scrolled', y > 50);
                var menuOpen = document.body.classList.contains('no-scroll');
                var shouldHide = self.direction === 1 && y > 240 && !menuOpen;
                var shouldShow = self.direction === -1 || y <= 240 || menuOpen;
                if (shouldHide && !hidden) { hidden = true; gsap.to(nav, { yPercent: -110, duration: 0.45, ease: 'power3.out', overwrite: true }); }
                else if (shouldShow && hidden) { hidden = false; gsap.to(nav, { yPercent: 0, duration: 0.45, ease: 'power3.out', overwrite: true }); }
            }
        });

        /* Back to top */
        var btt = $('.back-to-top');
        if (btt) {
            var fresh = btt.cloneNode(true);           // drops legacy listeners from per-page scripts
            btt.parentNode.replaceChild(fresh, btt);
            fresh.addEventListener('click', function () { scrollToY(0, 1.1); });
            ScrollTrigger.create({
                start: 300, end: 'max',
                onToggle: function (self) { fresh.classList.toggle('visible', self.isActive); }
            });
            fresh.classList.toggle('visible', window.scrollY > 300);
        }
    }

    function scrollToY(y, dur) {
        if (window.ScrollToPlugin && !reduce) {
            gsap.to(window, { scrollTo: { y: y, autoKill: true }, duration: dur || 1, ease: 'power3.inOut' });
        } else {
            window.scrollTo(0, y);
        }
    }

    /* --------------------------------------------------------------------
       5. Mobile menu (single owner; legacy listeners are replaced)
       -------------------------------------------------------------------- */
    function initMenu() {
        var btn = $('.mobile-menu-btn');
        var menu = $('.mobile-menu');
        if (!btn || !menu) return;

        var fresh = btn.cloneNode(true);
        btn.parentNode.replaceChild(fresh, btn);
        btn = fresh;
        btn.setAttribute('role', 'button');
        btn.setAttribute('tabindex', '0');
        btn.setAttribute('aria-label', 'Toggle navigation menu');
        btn.setAttribute('aria-expanded', 'false');

        var links = $$('a, .btn', menu);
        var open = false;

        function set(state) {
            if (state === open) return;
            open = state;
            btn.classList.toggle('active', open);
            menu.classList.toggle('active', open);
            document.body.classList.toggle('no-scroll', open);
            btn.setAttribute('aria-expanded', String(open));
            if (open && !reduce) {
                gsap.fromTo(links, { x: -24, opacity: 0 },
                    { x: 0, opacity: 1, duration: 0.55, stagger: 0.05, delay: 0.12, clearProps: 'transform,opacity' });
            }
        }

        btn.addEventListener('click', function () { set(!open); });
        btn.addEventListener('keydown', function (e) {
            if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); set(!open); }
        });
        links.forEach(function (a) { a.addEventListener('click', function () { set(false); }); });
        document.addEventListener('keydown', function (e) { if (e.key === 'Escape') set(false); });
        document.addEventListener('click', function (e) {
            if (open && !menu.contains(e.target) && !btn.contains(e.target)) set(false);
        });
        window.addEventListener('resize', function () { if (window.innerWidth > 992) set(false); });

        /* highlight current page in both menus */
        var current = (location.pathname.split('/').pop() || 'index.html').toLowerCase();
        $$('.nav-links a, .mobile-menu a').forEach(function (a) {
            var h = (a.getAttribute('href') || '').split('/').pop().toLowerCase();
            a.classList.toggle('active', h === current);
        });
    }

    /* --------------------------------------------------------------------
       6. Smooth anchors + page transitions
       -------------------------------------------------------------------- */
    function initLinks() {
        document.addEventListener('click', function (e) {
            var a = e.target.closest && e.target.closest('a[href]');
            if (!a || e.defaultPrevented) return;
            var href = a.getAttribute('href');

            /* in-page anchors */
            if (href.length > 1 && href.charAt(0) === '#') {
                var target = document.getElementById(href.slice(1)) || $(href);
                if (target) {
                    e.preventDefault();
                    var y = target.getBoundingClientRect().top + window.pageYOffset - navHeight() - 12;
                    scrollToY(y, 1);
                    if (history.pushState) history.pushState(null, '', href);
                }
                return;
            }

            /* internal page navigation -> quick fade out */
            if (reduce || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return;
            if (a.target && a.target !== '_self') return;
            if (a.hasAttribute('download')) return;
            var url;
            try { url = new URL(a.href, location.href); } catch (err) { return; }
            if (url.origin !== location.origin || url.pathname === location.pathname && url.hash) return;
            if (!/\.html?$|\/$/.test(url.pathname)) return;

            e.preventDefault();
            gsap.to(document.body, {
                opacity: 0, duration: 0.28, ease: 'power1.in',
                onComplete: function () { location.href = url.href; }
            });
        });

        /* coming back via the browser's back button (bfcache) */
        window.addEventListener('pageshow', function (e) {
            if (e.persisted) gsap.set(document.body, { clearProps: 'opacity' });
        });
    }

    /* --------------------------------------------------------------------
       7. Buttons: ripple + press feedback (no inline-transform clobbering)
       -------------------------------------------------------------------- */
    function initButtons() {
        document.addEventListener('pointerdown', function (e) {
            var b = e.target.closest && e.target.closest('.btn');
            if (!b) return;
            var r = b.getBoundingClientRect();
            var s = document.createElement('span');
            s.className = 'ripple-effect';
            s.style.left = (e.clientX - r.left) + 'px';
            s.style.top = (e.clientY - r.top) + 'px';
            b.appendChild(s);
            setTimeout(function () { s.remove(); }, 650);
        }, { passive: true });
    }

    /* --------------------------------------------------------------------
       8. Boot
       -------------------------------------------------------------------- */
    function boot() {
        syncNavVar();
        if (!reduce) gsap.from(document.body, { opacity: 0, duration: 0.5, ease: 'power1.out', clearProps: 'opacity' });

        initReveals(document);
        reveal();                                  // safe now: everything is hidden inline
        initHero();
        initCounters();
        initLinks();
        initButtons();
        watchDynamic();

        /* legacy per-page scripts bind their own menu / back-to-top handlers on
           DOMContentLoaded; take over once they have all run. */
        window.addEventListener('load', function () {
            initMenu();
            initNavbar();
            syncNavVar();
            refresh();
        });

        var t;
        window.addEventListener('resize', function () {
            clearTimeout(t);
            t = setTimeout(function () { syncNavVar(); refresh(); }, 200);
        });
        window.addEventListener('orientationchange', function () { setTimeout(function () { syncNavVar(); refresh(); }, 300); });
        if (document.fonts && document.fonts.ready) document.fonts.ready.then(refresh);

        /* lazy images change layout height -> keep trigger positions accurate */
        var it;
        document.addEventListener('load', function (e) {
            if (e.target && e.target.tagName === 'IMG') { clearTimeout(it); it = setTimeout(refresh, 150); }
        }, true);
    }

    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot);
    else boot();
})();
