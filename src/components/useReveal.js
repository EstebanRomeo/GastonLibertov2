import { useEffect } from 'react';

export default function useReveal() {
  useEffect(() => {
    const elements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -50px 0px' });

    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);
}
