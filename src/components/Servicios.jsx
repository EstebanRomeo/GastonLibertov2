import './Servicios.css';

const SERVICES = [
  {
    num: '01',
    icon: <svg viewBox="0 0 48 48"><rect x="4" y="28" width="40" height="16" rx="1"/><path d="M8 28V16L24 6l16 10v12"/><path d="M18 48V34h12v14"/></svg>,
    name: 'Muralismo monumental',
    desc: 'Obras de gran escala que transforman edificios y fachadas en íconos urbanos. Técnica mixta con impacto visual impresionante.',
  },
  {
    num: '02',
    icon: <svg viewBox="0 0 48 48"><path d="M24 4C13 4 4 13 4 24s9 20 20 20 20-9 20-20S35 4 24 4z"/><path d="M24 14c-5.5 0-10 4.5-10 10s4.5 10 10 10 10-4.5 10-10"/><circle cx="24" cy="24" r="4"/></svg>,
    name: 'Intervenciones urbanas',
    desc: 'Acciones artísticas en el espacio público que generan diálogo, impacto social y apropiación colectiva del entorno.',
  },
  {
    num: '03',
    icon: <svg viewBox="0 0 48 48"><circle cx="24" cy="18" r="10"/><path d="M10 40c0-7.7 6.3-14 14-14s14 6.3 14 14"/><path d="M24 8v20M18 14l6-6 6 6"/></svg>,
    name: 'Retratos hiperrealistas',
    desc: 'Monumentalización de figuras históricas, culturales o icónicas. Técnica fotorrealista en escala colosal.',
  },
  {
    num: '04',
    icon: <svg viewBox="0 0 48 48"><rect x="6" y="6" width="36" height="36" rx="2"/><path d="M6 18h36M18 18v24"/><circle cx="12" cy="12" r="2"/></svg>,
    name: 'Arte para marcas',
    desc: 'Branding visual artístico. Espacios comerciales, offices e instalaciones que comunican la esencia de una marca con arte real.',
  },
  {
    num: '05',
    icon: <svg viewBox="0 0 48 48"><path d="M24 4l5 10 11 1.5-8 7.8 1.9 11L24 29l-9.9 5.3L16 23.3 8 15.5 19 14z"/><path d="M24 29v15M18 44h12"/></svg>,
    name: 'Activaciones culturales',
    desc: 'Eventos en vivo donde el proceso creativo es también el espectáculo. Arte como experiencia compartida y participativa.',
  },
  {
    num: '06',
    icon: <svg viewBox="0 0 48 48"><path d="M8 40V24L24 8l16 16v16"/><path d="M16 40V28h8v12M24 28h8v12"/></svg>,
    name: 'Storytelling visual',
    desc: 'Narrativas artísticas que cuentan historias de personas, lugares y comunidades con lenguaje visual potente y emocional.',
  },
  {
    num: '07',
    icon: <svg viewBox="0 0 48 48"><circle cx="24" cy="24" r="18"/><path d="M24 6v36M6 24h36"/><path d="M10 14c8 4 12 4 20 0M10 34c8-4 12-4 20 0"/></svg>,
    name: 'Proyectos turísticos',
    desc: 'Circuitos de arte urbano y murales que convierten ciudades en destinos culturales de referencia nacional e internacional.',
  },
  {
    num: '08',
    icon: <svg viewBox="0 0 48 48"><path d="M6 24h12l4-16 8 32 4-16h14"/><circle cx="24" cy="24" r="3"/></svg>,
    name: 'Arte e identidad popular',
    desc: 'Obras para clubes de fútbol, barrios e instituciones. Arte que expresa el orgullo y la historia de una comunidad.',
  },
];

export default function Servicios() {
  return (
    <section id="servicios">
      <div className="section-header reveal">
        <p className="section-tag" style={{ justifyContent: 'center' }}>Lo que ofrece</p>
        <h2 className="section-title">SERVICIOS</h2>
        <p className="section-subtitle">Arte monumental para espacios, marcas y comunidades que quieren dejar huella.</p>
      </div>

      <div className="services-grid">
        {SERVICES.map((s, i) => (
          <div className="service-card reveal" key={i} style={{ transitionDelay: `${i * 0.05}s` }}>
            <div className="service-number">{s.num}</div>
            <div className="service-icon">{s.icon}</div>
            <h3 className="service-name">{s.name}</h3>
            <p className="service-desc">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
