import { useEffect } from 'react';

const useScrollAnimation = (): void => {
  useEffect(() => {
    const root = document.documentElement;
    const elements = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]'));
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    root.classList.add('motion-ready');

    if (reducedMotion || !('IntersectionObserver' in window)) {
      elements.forEach((element) => element.classList.add('is-visible'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: '0px 0px -8% 0px',
      }
    );

    elements.forEach((element) => observer.observe(element));

    // Safety net: guarantee anything already in the viewport is revealed even
    // if the observer's first callback is delayed (e.g. during a navigation),
    // so content can never stay stuck hidden against the dark background.
    const revealInView = () => {
      const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
      elements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        if (rect.top < viewportHeight && rect.bottom > 0) {
          element.classList.add('is-visible');
        }
      });
    };
    const rafId = window.requestAnimationFrame(revealInView);

    return () => {
      window.cancelAnimationFrame(rafId);
      observer.disconnect();
    };
  }, []);
};

export default useScrollAnimation;
