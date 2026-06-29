import './Identidad.css';
import maravilla from "./img/maravilla.jpg"
import colapinto from "./img/colapinto.jpeg"
import arabe from "./img/arabe.jpeg"

const TAGS = [
  'Cultura popular','Pertenencia','Memoria visual','Transformación',
  'Identidad','Emoción colectiva','Legado','Arte urbano',
];

export default function Identidad() {
  return (
    <section id="identidad">
      <div className="identidad-inner">
        <div className="identidad-visual reveal-left">
          <div className="id-block id-block-1 id-block-main">
            <div className="id-block-bg">
              <img src={maravilla} alt="Obra" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <div className="gal-lines" />
            <div className="id-label">LEGADO</div>
          </div>
          <div className="id-row">
            <div className="id-block id-block-2">
              <div className="id-block-bg">
                <img src={colapinto} alt="Obra" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div className="gal-lines" />
              <div className="id-label">ALMA</div>
            </div>
            <div className="id-block id-block-3">
              <div className="id-block-bg">
                <img src={arabe} alt="Obra" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div className="gal-lines" />
              <div className="id-label">MURO</div>
            </div>
          </div>
        </div>

        <div className="identidad-content reveal-right">
          <p className="section-tag">Identidad & Legado</p>
          <h2 className="identidad-title">
            Arte que deja<br />
            <em>huella en la memoria</em><br />
            colectiva
          </h2>
          <p className="identidad-text">
            El verdadero arte urbano no se cuelga en una galería.
            Vive en las calles, en los barrios, en los corazones de las personas
            que lo ven cada mañana al ir al trabajo.
          </p>
          <p className="identidad-text">
            Gastón Liberto entiende que cada mural es un acto político y emocional:
            una declaración de que <strong>ese lugar importa, esa gente importa,
            esa historia merece ser contada en grande</strong>.
          </p>
          <p className="identidad-text">
            Su legado no está solamente en los metros cuadrados pintados.
            Está en la transformación cultural que ocurre cuando una comunidad
            se reconoce en una obra de arte y dice: <em>"eso somos nosotros"</em>.
          </p>
          <div className="id-tags">
            {TAGS.map(tag => (
              <span className="id-tag" key={tag}>{tag}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
