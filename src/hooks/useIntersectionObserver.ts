import { useEffect } from 'react';

export function useIntersectionObserver(triggerDependency?: any) {
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px 0px -10% 0px',
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          
          if (entry.target.classList.contains('stat-counter-trigger')) {
            const targetId = entry.target.getAttribute('data-stat-id');
            if (targetId) {
              const event = new CustomEvent('start-counter-' + targetId);
              window.dispatchEvent(event);
            }
          }
          
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale, .stat-counter-trigger');
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, [triggerDependency]);
}
