import { useLang } from '../components/context/LangContext';
import './Proyeccion.css';

const LOCATIONS = ['Barcelona','Granada','Miami','Córdoba','Río Cuarto','+ Global'];

export default function Proyeccion() {
  const { t } = useLang();
  const p = t.proyeccion;
  return (
    <section id="proyeccion">
      <div className="proy-grid">
        <div>
          <p className="section-tag reveal">{p.tag}</p>
          <h2 className="proy-title reveal">
            {p.titleA}<br /><span className="accent">{p.titleB}</span><br />{p.titleC}
          </h2>
          <p className="proy-text reveal">{p.p}</p>
          <div className="proy-items">
            {p.items.map((item, i) => (
              <div className="proy-item reveal" key={i} style={{ transitionDelay: `${i * 0.05}s` }}>
                <span className="proy-item-num">{String(i+1).padStart(2,'0')}</span>
                <span className="proy-item-text">{item}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="proy-visual reveal-right">
          <div className="proy-card">
            <div className="proy-card-icon">WORLD</div>
            <h3 className="proy-card-title">{p.cardTitle}</h3>
            <p className="proy-card-text">{p.cardText}</p>
            <div className="proy-locations">
              {LOCATIONS.map(loc => <span className="proy-loc" key={loc}>{loc}</span>)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
