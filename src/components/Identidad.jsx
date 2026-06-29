import { useLang } from '../components/context/LangContext';
import './Identidad.css';
import maravilla from "./img/maravilla.jpg"
import colapinto from "./img/colapinto.jpeg"
import arabe from "./img/arabe.jpeg"


export default function Identidad() {
  const { t } = useLang();
  const id = t.identidad;
  return (
    <section id="identidad">
      <div className="identidad-inner">
        <div className="identidad-visual reveal-left">
          <div className="id-block id-block-1 id-block-main">
            <div className="id-block-bg"><img src={arabe} alt="Obra" style={{width:'100%',height:'100%',objectFit:'cover'}} /></div>
            <div className="gal-lines" /><div className="id-label">LEGADO</div>
          </div>
          <div className="id-row">
            <div className="id-block id-block-2">
              <div className="id-block-bg"><img src={colapinto} alt="Obra" style={{width:'100%',height:'100%',objectFit:'cover'}} /></div>
              <div className="gal-lines" /><div className="id-label">ALMA</div>
            </div>
            <div className="id-block id-block-3">
              <div className="id-block-bg"><img src={maravilla} alt="Obra" style={{width:'100%',height:'100%',objectFit:'cover'}} /></div>
              <div className="gal-lines" /><div className="id-label">MURO</div>
            </div>
          </div>
        </div>
        <div className="identidad-content reveal-right">
          <p className="section-tag">{id.tag}</p>
          <h2 className="identidad-title">
            {id.title1}<br /><em>{id.title2}</em><br />{id.title3}
          </h2>
          <p className="identidad-text">{id.p1}</p>
          <p className="identidad-text">{id.p2a} <strong>{id.p2b}</strong>{id.p2c}</p>
          <p className="identidad-text">{id.p3a} <em>{id.p3b}</em>{id.p3c}</p>
          <div className="id-tags">
            {id.tags.map(tag => <span className="id-tag" key={tag}>{tag}</span>)}
          </div>
        </div>
      </div>
    </section>
  );
}
