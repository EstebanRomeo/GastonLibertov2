import { useEffect } from 'react';
import './Manifiesto.css';

const PHRASES = [
  { text: 'EL ARTE\nDEJA HUELLA.', variant: '' },
  { text: 'LAS PAREDES', sub: 'también pueden emocionar', variant: 'hollow' },
  { text: 'CADA MURAL\nCUENTA UNA HISTORIA.', variant: 'dark' },
  { text: 'LA CIUDAD', sub: 'también tiene memoria', variant: '' },
];

export default function Manifiesto() {
  useEffect(() => {
    const phrases = document.querySelectorAll('.manifiesto-phrase');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.3 });
    phrases.forEach(p => observer.observe(p));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="manifiesto">
      <div className="manifiesto-inner">
        {PHRASES.map((phrase, i) => (
          <div key={i}>
            <div className={`manifiesto-phrase${phrase.variant ? ` ${phrase.variant}` : ''}`}>
              {phrase.text.split('\n').map((line, j) => (
                <span key={j}>{line}<br /></span>
              ))}
              {phrase.sub && <span className="small-text">{phrase.sub}</span>}
            </div>
            {i < PHRASES.length - 1 && <div className="manifiesto-divider" />}
          </div>
        ))}
      </div>
    </section>
  );
}
