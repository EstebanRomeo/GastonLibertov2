import { useLang } from '../components/context/LangContext';
import './Experiencia.css';

export default function Experiencia() {
  const { t } = useLang();
  const e = t.experiencia;
  return (
    <section id="experiencia">
      <div className="exp-grid">
        <div className="reveal-left">
          <p className="section-tag">{e.tag}</p>
          <h2 className="exp-title">
            {e.titleA}<br /><span className="hollow">{e.titleB}</span><br />{e.titleC}
          </h2>
          <p className="exp-text">{e.p1}</p>
          <p className="exp-text">{e.p2} <strong>{e.p2b}</strong>{e.p2c}</p>
        </div>
        <div className="exp-features reveal-right">
          {e.features.map((f, i) => (
            <div className="exp-feature" key={i}>
              <div className="exp-feature-icon">{f.icon}</div>
              <div className="exp-feature-text">
                <h4>{f.title}</h4>
                <p>{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
