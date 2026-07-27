// Progressive-enhancement motion — View-Transitions aware.
// Everything here is optional polish. We bail to a static reveal when the user
// prefers reduced motion. Because Astro's ClientRouter swaps page content
// without a full reload, we (re)build all ScrollTriggers on every
// `astro:page-load` (which also fires on the initial load).

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';

const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
let lenis;

function revealStatic() {
  document.querySelectorAll('.reveal').forEach((el) => el.classList.add('is-in'));
  document.querySelectorAll('.manifesto-line .mword').forEach((w) => w.classList.add('is-lit'));
}

function setupLenis() {
  if (lenis) return;
  gsap.registerPlugin(ScrollTrigger);
  lenis = new Lenis({
    duration: 1.1,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: true,
  });
  lenis.on('scroll', ScrollTrigger.update);
  gsap.ticker.add((time) => lenis.raf(time * 1000));
  gsap.ticker.lagSmoothing(0);
  window.__lenis = lenis;
}

function initPage() {
  // tear down triggers built for the previous page
  ScrollTrigger.getAll().forEach((t) => t.kill());
  lenis.resize();

  /* in-page anchor links use smooth scroll */
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

  /* grouped reveals rise in with a gentle stagger */
  gsap.utils.toArray('[data-stagger]').forEach((group) => {
    const items = group.querySelectorAll('.reveal');
    ScrollTrigger.create({
      trigger: group,
      start: 'top 84%',
      once: true,
      onEnter: () =>
        items.forEach((el, i) => {
          el.style.transitionDelay = i * 0.09 + 's';
          el.classList.add('is-in');
        }),
    });
  });
  /* individual reveals (skip any inside a stagger group) */
  gsap.utils.toArray('.reveal').forEach((el) => {
    if (el.closest('[data-stagger]')) return;
    ScrollTrigger.create({
      trigger: el,
      start: 'top 88%',
      once: true,
      onEnter: () => el.classList.add('is-in'),
    });
  });

  /* gallery-frame parallax */
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

  /* manifesto: light each word as it scrolls up */
  const mwords = gsap.utils.toArray('.manifesto-line .mword');
  if (mwords.length) {
    ScrollTrigger.create({
      trigger: '.manifesto-line',
      start: 'top 82%',
      end: 'bottom 58%',
      scrub: true,
      onUpdate: (self) => {
        const lit = Math.round(self.progress * mwords.length);
        mwords.forEach((w, i) => w.classList.toggle('is-lit', i < lit));
      },
    });
  }

  ScrollTrigger.refresh();
}

if (prefersReduced) {
  document.addEventListener('astro:page-load', revealStatic);
} else {
  document.addEventListener('astro:page-load', () => {
    setupLenis();
    initPage();
  });
}
