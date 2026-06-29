import { useState, useEffect } from 'react';
import { useLang } from '../components/context/LangContext';
import './Navbar.css';
import firma from "./firma2.png"

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { lang, t, toggle } = useLang();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setMobileOpen(false);
  };

  const navItems = [
    ['#quien', t.nav.quien],
    ['#servicios', t.nav.servicios],
    ['#galeria', t.nav.galeria],
    ['#identidad', t.nav.identidad],
    ['#proyeccion', t.nav.proyeccion],
  ];

  const mobileItems = [
    ['#quien', t.nav.mobile[0]],
    ['#servicios', t.nav.mobile[1]],
    ['#galeria', t.nav.mobile[2]],
    ['#proyeccion', t.nav.mobile[3]],
    ['#contacto', t.nav.mobile[4]],
  ];

  return (
    <>
      <div className={`mobile-menu${mobileOpen ? ' open' : ''}`}>
        <button className="mobile-close" onClick={() => setMobileOpen(false)}>✕</button>
        {mobileItems.map(([href, label]) => (
          <a key={href} href={href} onClick={(e) => { e.preventDefault(); scrollTo(href); }}>
            {label}
          </a>
        ))}
        <button className="mobile-lang-btn" onClick={toggle}>
          {lang === 'es' ? 'EN' : 'ES'}
        </button>
      </div>

      <nav className={scrolled ? 'scrolled' : ''}>
        <a href="#hero" className="nav-logo" onClick={(e) => { e.preventDefault(); scrollTo('#hero'); }}>
          <img src={firma} className="nav-logo-img" alt="Gastón Liberto" />
        </a>
        <ul className="nav-links">
          {navItems.map(([href, label]) => (
            <li key={href}>
              <a href={href} onClick={(e) => { e.preventDefault(); scrollTo(href); }}>{label}</a>
            </li>
          ))}
        </ul>
        <div className="nav-right">
          <button className="lang-toggle" onClick={toggle} aria-label="Cambiar idioma">
            <span className={lang === 'es' ? 'active' : ''}>ES</span>
            <span className="lang-sep">/</span>
            <span className={lang === 'en' ? 'active' : ''}>EN</span>
          </button>
          <a href="#contacto" className="nav-cta" onClick={(e) => { e.preventDefault(); scrollTo('#contacto'); }}>
            {t.nav.contacto}
          </a>
        </div>
        <button className="hamburger" onClick={() => setMobileOpen(true)} aria-label="Menú">
          <span /><span /><span />
        </button>
      </nav>
    </>
  );
}
