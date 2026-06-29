import { useLang } from '../components/context/LangContext';
import './Quien.css';
import perfil from "./img/perfil.jpeg"

export default function Quien() {
  const { t } = useLang();
  const q = t.quien;
  return (
    <section id="quien">
      <div className="quien-grid">
        <div className="quien-visual reveal-left">
          <div className="quien-accent" />
          <div className="quien-portrait">
            <div className="gal-lines" />
            <div className="portrait-placeholder">
              <img src={perfil} alt="Gastón Liberto" style={{ width:'100%', height:'100%', objectFit:'cover', position:'absolute', inset:0 }} />
            </div>
          </div>
          <div className="quien-number">01</div>
        </div>
        <div className="reveal-right">
          <p className="section-tag">{q.tag}</p>
          <h2 className="quien-title">
            {q.title1}<br />{q.title2} <em>{q.title3}</em><br />{q.title4}
          </h2>
          <div className="quien-divider" />
          <p className="quien-text">{q.p1} <strong>{q.p1b}</strong>{q.p1c}</p>
          <p className="quien-text">{q.p2} <strong>{q.p2b}</strong>{q.p2c}</p>
          <p className="quien-text">{q.p3} <strong>{q.p3b}</strong></p>
          <blockquote className="quien-quote">{q.quote}</blockquote>
        </div>
      </div>
    </section>
  );
}
