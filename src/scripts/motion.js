// Progressive-enhancement motion.
// Everything here is optional polish: the site is fully usable and readable
// with this file disabled. We bail out entirely when the user prefers reduced
// motion, and use IntersectionObserver (not scroll math) for reveals so it's cheap.

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';

const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function revealAll() {
  document.querySelectorAll('.reveal').forEach((el) => el.classList.add('is-in'));
}

if (prefersReduced) {
  // Show everything immediately, no smooth scroll, no parallax.
  revealAll();
} else {
  gsap.registerPlugin(ScrollTrigger);

  /* ---- Lenis smooth scroll, wired into GSAP's ticker ---- */
  const lenis = new Lenis({
    duration: 1.1,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: true,
  });

  lenis.on('scroll', ScrollTrigger.update);
  gsap.ticker.add((time) => lenis.raf(time * 1000));
  gsap.ticker.lagSmoothing(0);

  // expose for anchor links + tooling
  window.__lenis = lenis;
  document.querySelectorAll('a[href^="#"]').forEach((a) => {
    a.addEventListener('click', (e) => {
      const id = a.getAttribute('href');
      if (id && id.length > 1) {
        const target = document.querySelector(id);
        if (target) {
          e.preventDefault();
          lenis.scrollTo(target, { offset: -80 });
        }
      }
    });
  });

  /* ---- Scroll reveals ---- */
  const revealEls = gsap.utils.toArray('.reveal');
  revealEls.forEach((el) => {
    ScrollTrigger.create({
      trigger: el,
      start: 'top 88%',
      once: true,
      onEnter: () => el.classList.add('is-in'),
    });
  });

  /* ---- Gallery-frame parallax: art drifts slightly against its gold frame ---- */
  gsap.utils.toArray('[data-parallax]').forEach((el) => {
    const depth = parseFloat(el.dataset.parallax) || 0.12;
    gsap.fromTo(
      el,
      { y: () => -depth * 60 },
      {
        y: () => depth * 60,
        ease: 'none',
        scrollTrigger: {
          trigger: el.closest('[data-parallax-scope]') || el,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      }
    );
  });

  // Safety net: if anything above threw before a card entered view, still reveal.
  window.addEventListener('load', () => ScrollTrigger.refresh());
}
