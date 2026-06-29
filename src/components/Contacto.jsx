import './Contacto.css';

const LOCATIONS = ['Barcelona','Granada','Miami','Córdoba','Río Cuarto'];

export default function Contacto() {
  return (
    <footer id="contacto">
      <div className="contacto-bg-text">GL</div>

      <div className="contacto-inner">
        <div className="contacto-grid">
          <div className="reveal-left">
            <p className="section-tag">¿Empezamos?</p>
            <h2 className="contacto-cta">
              TU MURO<br />
              <span className="rust-line">TE ESPERA</span>
            </h2>
            <p className="contacto-sub">
              Cada gran obra comienza con una conversación.
              Hablemos sobre el espacio que querés transformar
              en algo que el mundo no pueda ignorar.
            </p>
            <div className="contacto-btns">
              <a href="tel:03585041476" className="btn-primary">Llamar ahora</a>
              <a href="https://instagram.com/gaston_liberto" target="_blank" rel="noopener noreferrer" className="btn-secondary">
                Ver Instagram
              </a>
            </div>
          </div>

          <div className="contacto-info reveal-right">
            <div className="info-block">
              <p className="info-label">Teléfono</p>
              <a href="tel:03585041476" className="info-value">0358 504-1476</a>
            </div>
            <div className="info-block">
              <p className="info-label">Instagram</p>
              <a href="https://instagram.com/gaston_liberto" target="_blank" rel="noopener noreferrer" className="info-value">
                @gaston_liberto
              </a>
            </div>
            <div className="info-block">
              <p className="info-label">Presencia</p>
              <div className="info-locations">
                {LOCATIONS.map(loc => (
                  <span className="info-loc" key={loc}>{loc}</span>
                ))}
              </div>
            </div>
            <div className="info-block">
              <p className="info-label">Disponibilidad</p>
              <p className="info-value" style={{ fontSize: '1rem', color: 'var(--ember)' }}>
                Proyectos 2025–2026 abiertos
              </p>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div>
            <div className="footer-brand">GASTÓN <span>LIBERTO</span></div>
            <div className="footer-tagline">El artista que convierte paredes en emociones</div>
          </div>
          <div className="footer-copy">© 2025 Gastón Liberto · Arte Urbano · Argentina</div>
          <div className="footer-copy">
            Powered by <img src="img/strategy.png" alt="Strategy" style={{ width: '100px' }} />
          </div>
        </div>
      </div>
    </footer>
  );
}
