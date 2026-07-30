import { useEffect } from 'react';

/**
 * Drives the scroll reveal animations defined in index.css.
 *
 * The stylesheet keeps `[data-reveal]` elements hidden only while the root
 * carries the `motion-ready` class, so that class is added from JavaScript to
 * guarantee content is always visible as a no-JS / no-observer fallback.
 * Each `[data-reveal]` element is revealed by adding `is-visible` once it
 * scrolls into view.
 */
export default function useScrollAnimation() {
  useEffect(() => {
    const root = document.documentElement;

    // Respect users who prefer reduced motion: reveal everything immediately.
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches;

    if (prefersReducedMotion || !('IntersectionObserver' in window)) {
      document
        .querySelectorAll('[data-reveal]')
        .forEach((el) => el.classList.add('is-visible'));
      return;
    }

    root.classList.add('motion-ready');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' },
    );

    const elements = document.querySelectorAll('[data-reveal]');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
}
