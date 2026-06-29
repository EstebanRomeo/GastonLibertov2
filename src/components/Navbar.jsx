import { useState, useEffect } from 'react';
import './Navbar.css';
import firma from "./firma.png"

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setMobileOpen(false);
  };

  return (
    <>
      {/* Mobile menu */}
      <div className={`mobile-menu${mobileOpen ? ' open' : ''}`}>
        <button className="mobile-close" onClick={() => setMobileOpen(false)}>✕</button>
        {['#quien','#servicios','#galeria','#proyeccion','#contacto'].map((href, i) => (
          <a key={i} href={href} onClick={(e) => { e.preventDefault(); scrollTo(href); }}>
            {['Quién es','Servicios','Obras','Proyección','Contacto'][i]}
          </a>
        ))}
      </div>

      <nav className={scrolled ? 'scrolled' : ''}>
        <a href="#hero" className="nav-logo" onClick={(e) => { e.preventDefault(); scrollTo('#hero'); }}>
          <img src={firma} className="nav-logo-img" alt="Gastón Liberto" />
        </a>
        <ul className="nav-links">
          {[['#quien','Quién soy'],['#servicios','Servicios'],['#galeria','Obras'],['#identidad','Identidad'],['#proyeccion','Proyección']].map(([href, label]) => (
            <li key={href}>
              <a href={href} onClick={(e) => { e.preventDefault(); scrollTo(href); }}>{label}</a>
            </li>
          ))}
        </ul>
        <a href="#contacto" className="nav-cta" onClick={(e) => { e.preventDefault(); scrollTo('#contacto'); }}>
          Contacto
        </a>
        <button className="hamburger" onClick={() => setMobileOpen(true)} aria-label="Menú">
          <span /><span /><span />
        </button>
      </nav>
    </>
  );
}
