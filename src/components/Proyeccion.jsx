import './Proyeccion.css';

const ITEMS = [
  'Documentales y cápsulas "Behind the Mural"',
  'Colaboraciones con artistas y marcas globales',
  'Workshops y masterclasses internacionales',
  'Intervenciones en Europa, EEUU y Latinoamérica',
  'Circuitos de turismo cultural internacional',
  'Arte digital y experiencias inmersivas NFT',
  'Proyectos con municipios y gobiernos culturales',
];

const LOCATIONS = ['Barcelona','Granada','Miami','Córdoba','Río Cuarto','+ Global'];

export default function Proyeccion() {
  return (
    <section id="proyeccion">
      <div className="proy-grid">
        <div>
          <p className="section-tag reveal">Proyección internacional</p>
          <h2 className="proy-title reveal">
            EL MUNDO<br />
            <span className="accent">COMO</span><br />
            PARED
          </h2>
          <p className="proy-text reveal">
            La visión de Gastón Liberto no conoce fronteras. Su arte, nacido en las calles argentinas,
            está listo para hablar en el lenguaje universal de las emociones:
            el único idioma que todos entienden.
          </p>
          <div className="proy-items">
            {ITEMS.map((item, i) => (
              <div
                className="proy-item reveal"
                key={i}
                style={{ transitionDelay: `${i * 0.05}s` }}
              >
                <span className="proy-item-num">{String(i + 1).padStart(2, '0')}</span>
                <span className="proy-item-text">{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="proy-visual reveal-right">
          <div className="proy-card">
            <div className="proy-card-icon">MUNDO</div>
            <h3 className="proy-card-title">Arte sin fronteras</h3>
            <p className="proy-card-text">
              El muralismo argentino tiene algo que el mundo todavía no ha visto en toda su dimensión:
              emoción cruda, técnica monumental y alma colectiva en una sola pared.
            </p>
            <div className="proy-locations">
              {LOCATIONS.map(loc => (
                <span className="proy-loc" key={loc}>{loc}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
