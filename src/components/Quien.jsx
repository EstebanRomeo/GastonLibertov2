import './Quien.css';
import perfil from "./img/perfil.jpeg"

export default function Quien() {
  return (
    <section id="quien">
      <div className="quien-grid">
        <div className="quien-visual reveal-left">
          <div className="quien-accent" />
          <div className="quien-portrait">
            <div className="gal-lines" />
            <div className="portrait-placeholder">
              <img
                src={perfil}
                alt="Gastón Liberto"
                style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', inset: 0 }}
              />
            </div>
          </div>
          <div className="quien-number">01</div>
        </div>

        <div className="reveal-right">
          <p className="section-tag">El artista</p>
          <h2 className="quien-title">
            Arte urbano<br />con <em>alma</em><br />e identidad
          </h2>
          <div className="quien-divider" />
          <p className="quien-text">
            Gastón Liberto no es solamente un muralista. Es un arquitecto de emociones colectivas,
            un narrador visual que entiende que <strong>las paredes también pueden hablar</strong>,
            sentir, y transformar la realidad de quienes las habitan.
          </p>
          <p className="quien-text">
            Nacido en Argentina, su obra trasciende la técnica para convertirse en{' '}
            <strong>símbolo cultural vivo</strong>. Cada intervención es un acto de pertenencia:
            transforma espacios vacíos en monumentos de memoria urbana.
          </p>
          <p className="quien-text">
            Su trabajo combina el dramatismo cinematográfico del realismo emocional con la
            fuerza bruta del arte callejero, creando piezas que no se olvidan.{' '}
            <strong>Obras que generan reacción. Que crean identidad. Que permanecen.</strong>
          </p>
          <blockquote className="quien-quote">
            "No pinto murales. Construyo símbolos para que una comunidad se reconozca en ellos."
          </blockquote>
        </div>
      </div>
    </section>
  );
}
