import './Experiencia.css';

const FEATURES = [
  { icon: '◈', title: 'Transformación de espacios', desc: 'Convierte muros grises en puntos de encuentro cultural y referencia urbana.' },
  { icon: '◉', title: 'Reacción social', desc: 'Cada obra genera conversación, emoción y reconocimiento colectivo.' },
  { icon: '◆', title: 'Identidad cultural', desc: 'El arte refleja la historia y el alma de quienes habitan el espacio.' },
  { icon: '▲', title: 'Símbolos permanentes', desc: 'Las obras trascienden el tiempo y se convierten en íconos urbanos reconocibles.' },
  { icon: '◐', title: 'Turismo y economía creativa', desc: 'Los murales monumentales atraen visitantes y potencian el valor simbólico del lugar.' },
];

export default function Experiencia() {
  return (
    <section id="experiencia">
      <div className="exp-grid">
        <div className="reveal-left">
          <p className="section-tag">La experiencia</p>
          <h2 className="exp-title">
            EL ARTE<br />
            <span className="hollow">COMO</span><br />
            SÍMBOLO
          </h2>
          <p className="exp-text">
            Una obra de Gastón Liberto nunca es solo un mural. Es un acontecimiento urbano.
            Una intervención que cambia para siempre la forma en que una comunidad se ve a sí misma.
          </p>
          <p className="exp-text">
            Sus retratos hiperrealistas monumentales no decoran: <strong>convocan</strong>.
            Crean conversación, pertenencia y orgullo colectivo. La pared se convierte en espejo de identidad.
          </p>
        </div>

        <div className="exp-features reveal-right">
          {FEATURES.map((f, i) => (
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
