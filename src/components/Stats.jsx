import { useEffect } from 'react';
import { useLang } from '../components/context/LangContext';
import './Stats.css';

export default function Stats() {
  const { t } = useLang();

  useEffect(() => {
    const counters = document.querySelectorAll('.stat-number');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target;
          el.style.transition = 'color 1s ease';
          el.style.color = 'rgba(0,0,0,0.3)';
          setTimeout(() => { el.style.color = 'var(--rust)'; }, 800);
          observer.unobserve(el);
        }
      });
    }, { threshold: 0.5 });
    counters.forEach(c => observer.observe(c));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="stats">
      <div className="stats-grid">
        {t.stats.map((s, i) => (
          <div className="stat-item reveal" key={i} style={{ transitionDelay: `${i * 0.1}s` }}>
            <span className="stat-number">{s.number}</span>
            <div className="stat-label">{s.label}</div>
            <div className="stat-desc">{s.desc}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
