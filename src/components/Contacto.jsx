import { useLang } from '../components/context/LangContext';
import './Contacto.css';
import logo from "./strategy.png"

const LOCATIONS = ['Barcelona','Granada','Miami','Córdoba','Río Cuarto'];

export default function Contacto() {
  const { t } = useLang();
  const c = t.contacto;
  return (
    <footer id="contacto">
      <div className="contacto-bg-text">GL</div>
      <div className="contacto-inner">
        <div className="contacto-grid">
          <div className="reveal-left">
            <p className="section-tag">{c.tag}</p>
            <h2 className="contacto-cta">
              {c.cta1}<br /><span className="rust-line">{c.cta2}</span>
            </h2>
            <p className="contacto-sub">{c.sub}</p>
            <div className="contacto-btns">
              <a href="tel:03585041476" className="btn-primary">{c.btnCall}</a>
              <a href="https://instagram.com/gaston_liberto" target="_blank" rel="noopener noreferrer" className="btn-secondary">{c.btnInsta}</a>
            </div>
          </div>
          <div className="contacto-info reveal-right">
            <div className="info-block">
              <p className="info-label">{c.labels.phone}</p>
              <a href="tel:03585041476" className="info-value">0358 504-1476</a>
            </div>
            <div className="info-block">
              <p className="info-label">{c.labels.insta}</p>
              <a href="https://instagram.com/gaston_liberto" target="_blank" rel="noopener noreferrer" className="info-value">@gaston_liberto</a>
            </div>
            <div className="info-block">
              <p className="info-label">{c.labels.presence}</p>
              <div className="info-locations">
                {LOCATIONS.map(loc => <span className="info-loc" key={loc}>{loc}</span>)}
              </div>
            </div>
            <div className="info-block">
              <p className="info-label">{c.labels.avail}</p>
              <p className="info-value" style={{fontSize:'1rem',color:'var(--ember)'}}>{c.labels.availVal}</p>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div>
            <div className="footer-brand">GASTÓN <span>LIBERTO</span></div>
            <div className="footer-tagline">{c.tagline}</div>
          </div>
          <div className="footer-copy">{c.copy}</div>
          <div className="footer-copy">
            Powered by <img src={logo} alt="Strategy" style={{width:'100px'}} />
          </div>
        </div>
      </div>
    </footer>
  );
}
