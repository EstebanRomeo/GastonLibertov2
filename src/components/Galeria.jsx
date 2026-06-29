import { useState, useEffect, useRef } from 'react';
import { useLang } from './context/LangContext';
import './Galeria.css';

/*Maradona */
import maradona from "./img/maradona.jpeg"
import maradona2 from "./img/maradona2.jpeg"
import maradona3 from "./img/maradona3.jpeg"
import maradona4 from "./img/maradona4.jpeg"
import maradona5 from "./img/maradona5.jpeg"
/*Manifesto */
import manifesto from "./img/manifesto.jpeg"
import manifesto2 from "./img/manifesto2.jpeg"
import manifesto3 from "./img/manifesto3.jpeg"
import manifesto4 from "./img/manifesto4.jpeg"
/*Treasures */
import acidarab from "./img/acidarab.jpg"
import adolecencia from "./img/adolecencia.jpg"
import cabalgando from "./img/cabalgando.jpg"
import elmapa from "./img/elmapa.jpg"
import labarca from "./img/labarca.jpg"
import lapalabra from "./img/lapalabra.jpg"
import mardeneon from "./img/mardeneon.jpg"
import natural from "./img/natural.jpg"
import nuevasluces from "./img/nuevasluces.jpg"
import tuboca from "./img/acidarab.jpg"
import viento from "./img/viento.jpg"
/*Murales */
import mural1 from "./img/mural1.jpeg"
import mural2 from "./img/mural2.jpeg"
import mural3 from "./img/mural3.jpeg"
import mural4 from "./img/mural4.jpeg"
import mural5 from "./img/mural5.jpeg"
/*Empresas */
import empresa from "./img/empresa.jpeg"
import empresa1 from "./img/empresa1.jpeg"
import empresa2 from "./img/empresa2.jpeg"
/*Obras */
import messi from "./img/messi.jpg"
import messi2 from "./img/messi2.jpg"
import messi3 from "./img/messi3.jpeg"
import aimar from "./img/aimar.jpeg"
import copa from "./img/copa.jpeg"
/*Azada Verde */
import azadaverde from "./img/azadaverde.jpeg"
import azada2 from "./img/azada2.jpeg"

// Las imágenes separadas por categoría — el orden coincide con CATEGORIAS en LangContext
const IMAGES = [
  [maradona, maradona2, maradona3, maradona4, maradona5],
  [manifesto, manifesto2, manifesto3, manifesto4],
  [acidarab, adolecencia, cabalgando, elmapa, labarca, lapalabra, mardeneon, natural, nuevasluces, tuboca, viento],
  [messi, messi2, messi3, aimar, copa],
  [empresa, empresa1, empresa2],
  [mural1, mural2, mural3, mural4, mural5],
  [azadaverde, azada2],
];

export default function Galeria() {
  const { t } = useLang();
  const cats = t.galeria.categorias; // nombres y tags vienen del idioma activo

  const [catActual, setCatActual] = useState(0);
  const [saliendo, setSaliendo] = useState(false);
  const [direccion, setDireccion] = useState(1);
  const timeoutRef = useRef(null);

  const cambiar = (nueva, dir) => {
    if (saliendo) return;
    setDireccion(dir);
    setSaliendo(true);
    timeoutRef.current = setTimeout(() => {
      setCatActual(nueva);
      setSaliendo(false);
    }, 380);
  };

  const siguiente = () => cambiar((catActual + 1) % cats.length, 1);
  const anterior = () => cambiar((catActual - 1 + cats.length) % cats.length, -1);

  useEffect(() => () => clearTimeout(timeoutRef.current), []);

  const cat = cats[catActual];       // nombre y tag traducidos
  const imgs = IMAGES[catActual];    // imágenes del array local

  return (
    <section id="galeria">
      <div className="galeria-header">
        <div className="reveal-left">
          <p className="section-tag">{t.galeria.tag}</p>
          <div className={`galeria-titulo-wrap${saliendo ? ` saliendo dir-${direccion > 0 ? 'right' : 'left'}` : ''}`}>
            <h2 className="galeria-title">{cat.nombre}</h2>
            <p className="galeria-tag">{cat.tag}</p>
          </div>
        </div>

        <div className="galeria-nav reveal-right">
          <span className="galeria-contador">
            {String(catActual + 1).padStart(2, '0')} / {String(cats.length).padStart(2, '0')}
          </span>
          <button className="gal-nav-btn" onClick={anterior} aria-label="Anterior">←</button>
          <button className="gal-nav-btn" onClick={siguiente} aria-label="Siguiente">→</button>
        </div>
      </div>

      <div className="galeria-dots">
        {cats.map((c, i) => (
          <button
            key={i}
            className={`gal-dot${i === catActual ? ' active' : ''}`}
            onClick={() => cambiar(i, i > catActual ? 1 : -1)}
            title={c.nombre}
          />
        ))}
      </div>

      <div className="galeria-track-wrapper">
        <div className={`galeria-track${saliendo ? ` saliendo dir-${direccion > 0 ? 'right' : 'left'}` : ' entrando'}`}>
          {imgs.map((src, i) => (
            <div className="galeria-item" key={`${catActual}-${i}`} style={{ animationDelay: `${i * 0.07}s` }}>
              <div className="gal-bg">
                <div className="gal-img-wrap">
                  <img src={src} alt={`${cat.nombre} ${i + 1}`} />
                </div>
                <div className="gal-lines" />
                <div className="gal-inner-frame" />
                <div className="gal-overlay">
                  <div className="gal-info">
                    <h3>{cat.nombre}</h3>
                    <p>{cat.tag}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
