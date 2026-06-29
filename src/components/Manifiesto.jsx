import { useEffect } from 'react';
import { useLang } from '../components/context/LangContext';
import './Manifiesto.css';

export default function Manifiesto() {
  const { t } = useLang();

  useEffect(() => {
    const phrases = document.querySelectorAll('.manifiesto-phrase');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); }
      });
    }, { threshold: 0.3 });
    phrases.forEach(p => observer.observe(p));
    return () => observer.disconnect();
  }, [t]); // re-observe when lang changes

  return (
    <section id="manifiesto">
      <div className="manifiesto-inner">
        {t.manifiesto.phrases.map((phrase, i) => (
          <div key={`${i}-${phrase.text}`}>
            <div className={`manifiesto-phrase${phrase.variant ? ` ${phrase.variant}` : ''}`}>
              {phrase.text.split('\n').map((line, j) => <span key={j}>{line}<br /></span>)}
              {phrase.sub && <span className="small-text">{phrase.sub}</span>}
            </div>
            {i < t.manifiesto.phrases.length - 1 && <div className="manifiesto-divider" />}
          </div>
        ))}
      </div>
    </section>
  );
}
