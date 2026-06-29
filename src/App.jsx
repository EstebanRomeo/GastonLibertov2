import { useEffect } from 'react';
import './styles/global.css';

import Cursor from './components/Cursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Quien from './components/Quien';
import Stats from './components/Stats';
import Experiencia from './components/Experiencia';
import Servicios from './components/Servicios';
import Galeria from './components/Galeria';
import Identidad from './components/Identidad';
import Proyeccion from './components/Proyeccion';
import Manifiesto from './components/Manifiesto';
import Contacto from './components/Contacto';
import useReveal from './components/useReveal';

export default function App() {
  useReveal();

  // Stagger stat items on mount
  useEffect(() => {
    document.querySelectorAll('.stat-item').forEach((el, i) => {
      el.style.transitionDelay = (i * 0.1) + 's';
    });
  }, []);

  return (
    <>
      <Cursor />
      <Navbar />
      <main>
        <Hero />
        <Quien />
        <Stats />
        <Experiencia />
        <Servicios />
        <Galeria />
        <Identidad />
        <Proyeccion />
        <Manifiesto />
        <Contacto />
      </main>
    </>
  );
}
