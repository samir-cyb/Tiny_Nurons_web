/* main.js - page widgets only (sliders, FAQ).
   Navigation, scrolling, counters and animations live in js/site.js (GSAP). */
document.addEventListener('DOMContentLoaded', function () {
    'use strict';

    /* ---------- Testimonial slider ---------- */
    var testimonialTrack = document.querySelector('.testimonial-track');
    var testimonials = document.querySelectorAll('.testimonial');
    var tDots = document.querySelectorAll('.dot');
    var tPrev = document.querySelector('.slider-prev');
    var tNext = document.querySelector('.slider-next');

    if (testimonialTrack && testimonials.length > 0) {
        var tIndex = 0, tTimer;
        var showTestimonial = function (i) {
            if (window.gsap) gsap.to(testimonialTrack, { xPercent: -100 * i, duration: 0.7, ease: 'power3.inOut' });
            else testimonialTrack.style.transform = 'translateX(-' + (i * 100) + '%)';
            tDots.forEach(function (d) { d.classList.remove('active'); });
            if (tDots[i]) tDots[i].classList.add('active');
            tIndex = i;
        };
        var tNextSlide = function () { showTestimonial((tIndex + 1) % testimonials.length); };
        var tPrevSlide = function () { showTestimonial((tIndex - 1 + testimonials.length) % testimonials.length); };
        var tReset = function () { clearInterval(tTimer); tTimer = setInterval(tNextSlide, 5000); };

        tDots.forEach(function (d, i) { d.addEventListener('click', function () { showTestimonial(i); tReset(); }); });
        if (tPrev) tPrev.addEventListener('click', function () { tPrevSlide(); tReset(); });
        if (tNext) tNext.addEventListener('click', function () { tNextSlide(); tReset(); });
        tReset();
    }

    /* ---------- FAQ accordion ---------- */
    var faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(function (item) {
        var q = item.querySelector('.faq-question');
        if (!q) return;
        q.addEventListener('click', function () {
            var wasActive = item.classList.contains('active');
            faqItems.forEach(function (i) {
                i.classList.remove('active');
                var a = i.querySelector('.faq-answer');
                if (a) a.style.maxHeight = null;
            });
            if (!wasActive) {
                item.classList.add('active');
                var ans = item.querySelector('.faq-answer');
                if (ans) ans.style.maxHeight = ans.scrollHeight + 'px';
            }
            if (window.ScrollTrigger) setTimeout(function () { ScrollTrigger.refresh(); }, 450);
        });
    });

    /* ---------- Projects slider (only when its markup exists) ---------- */
    var track = document.querySelector('.project-track');
    var slides = document.querySelectorAll('.project-slide');
    var dotsBox = document.querySelector('.slider-dots');
    if (track && slides.length > 0 && dotsBox) {
        var cur = 0, timer;
        slides.forEach(function (_, i) {
            var d = document.createElement('div');
            d.className = 'dot' + (i === 0 ? ' active' : '');
            d.addEventListener('click', function () { go(i); });
            dotsBox.appendChild(d);
        });
        var pDots = dotsBox.querySelectorAll('.dot');
        var go = function (i) {
            if (window.gsap) gsap.to(track, { xPercent: -100 * i, duration: 0.7, ease: 'power3.inOut' });
            else track.style.transform = 'translateX(-' + (i * 100) + '%)';
            cur = i;
            pDots.forEach(function (d) { d.classList.remove('active'); });
            if (pDots[i]) pDots[i].classList.add('active');
        };
        var next = function () { go((cur + 1) % slides.length); };
        var prev = function () { go((cur - 1 + slides.length) % slides.length); };
        var pn = document.querySelector('.slider-next'), pp = document.querySelector('.slider-prev');
        if (pn) pn.addEventListener('click', next);
        if (pp) pp.addEventListener('click', prev);
        var start = function () { timer = setInterval(next, 5000); };
        var box = document.querySelector('.projects-slider');
        if (box) {
            box.addEventListener('mouseenter', function () { clearInterval(timer); });
            box.addEventListener('mouseleave', function () { clearInterval(timer); start(); });
        }
        start();
    }

    /* ---------- Page loader ---------- */
    window.addEventListener('load', function () {
        var loader = document.querySelector('.loader');
        if (!loader) return;
        if (window.gsap) gsap.to(loader, { opacity: 0, duration: 0.5, delay: 0.3, onComplete: function () { loader.style.visibility = 'hidden'; } });
        else loader.style.visibility = 'hidden';
    });
});
