import { useEffect, useRef } from 'react';
import './Hero.css';
import firma from "./firma2.png"
import video from "./video (2).mp4"

export default function Hero() {
  const bgTextRef = useRef(null);

  useEffect(() => {
    const onScroll = () => {
      if (bgTextRef.current) {
        bgTextRef.current.style.transform = `translateY(${window.scrollY * 0.3}px)`;
      }
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section id="hero">
      {/* VIDEO DE FONDO — reemplazá src con tu archivo, ej: "img/reel.mp4" */}
      <div className="hero-video-bg">
        <video autoPlay muted loop playsInline src={video} />
        <div className="hero-video-overlay" />
      </div>

      <div className="hero-bg" />

      <div className="hero-strokes">
        <div className="stroke stroke-1" />
        <div className="stroke stroke-2" />
        <div className="stroke stroke-3" />
      </div>

      <div className="hero-bg-text" ref={bgTextRef}>ARTE</div>

      <div className="hero-content">
        <p className="hero-eyebrow">Artista visual · Argentina · Muralismo urbano</p>
        <div className="hero-firma-wrap">
          <img src={firma} className="hero-firma" alt="Gastón Liberto firma" />
          <span className="hero-firma-name">Gastón Liberto</span>
        </div>
        <p className="hero-subtitle">
          El artista que convierte<br />
          <em>paredes en emociones</em>
        </p>
        <div className="hero-actions">
          <a href="#galeria" className="btn-primary" onClick={(e) => { e.preventDefault(); scrollTo('#galeria'); }}>
            Ver obras
          </a>
          <a href="#contacto" className="btn-secondary" onClick={(e) => { e.preventDefault(); scrollTo('#contacto'); }}>
            Contactar
          </a>
        </div>
      </div>

      <div className="hero-scroll">
        <div className="scroll-line" />
        <span>Scroll</span>
      </div>
    </section>
  );
}
