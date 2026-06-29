import { createContext, useContext, useState } from 'react';

const LangContext = createContext();

export const useLang = () => useContext(LangContext);

export const translations = {
  es: {
    // Navbar
    nav: {
      quien: 'Quién soy',
      servicios: 'Servicios',
      galeria: 'Obras',
      identidad: 'Identidad',
      proyeccion: 'Proyección',
      contacto: 'Contacto',
      mobile: ['Quién es', 'Servicios', 'Obras', 'Proyección', 'Contacto'],
    },

    // Hero
    hero: {
      eyebrow: 'Artista visual · Argentina · Muralismo urbano',
      firmaName: 'Gastón Liberto',
      subtitleA: 'El artista que convierte',
      subtitleB: 'paredes en emociones',
      btnObras: 'Ver obras',
      btnContacto: 'Contactar',
      scroll: 'Scroll',
    },

    // Quien
    quien: {
      tag: 'El artista',
      title1: 'Arte urbano',
      title2: 'con',
      title3: 'alma',
      title4: 'e identidad',
      p1: 'Gastón Liberto no es solamente un muralista. Es un arquitecto de emociones colectivas, un narrador visual que entiende que',
      p1b: 'las paredes también pueden hablar',
      p1c: ', sentir, y transformar la realidad de quienes las habitan.',
      p2: 'Nacido en Argentina, su obra trasciende la técnica para convertirse en',
      p2b: 'símbolo cultural vivo',
      p2c: '. Cada intervención es un acto de pertenencia: transforma espacios vacíos en monumentos de memoria urbana.',
      p3: 'Su trabajo combina el dramatismo cinematográfico del realismo emocional con la fuerza bruta del arte callejero, creando piezas que no se olvidan.',
      p3b: 'Obras que generan reacción. Que crean identidad. Que permanecen.',
      quote: '"No pinto murales. Construyo símbolos para que una comunidad se reconozca en ellos."',
    },

    // Stats
    stats: [
      { number: '+100', label: 'Murales', desc: 'Intervenciones realizadas' },
      { number: '15+', label: 'Ciudades', desc: 'Presencia nacional e internacional' },
      { number: '500K', label: 'Personas impactadas', desc: 'Vida cotidiana transformada' },
      { number: '∞', label: 'Legado', desc: 'Arte que permanece en la memoria' },
    ],

    // Experiencia
    experiencia: {
      tag: 'La experiencia',
      titleA: 'EL ARTE',
      titleB: 'COMO',
      titleC: 'SÍMBOLO',
      p1: 'Una obra de Gastón Liberto nunca es solo un mural. Es un acontecimiento urbano. Una intervención que cambia para siempre la forma en que una comunidad se ve a sí misma.',
      p2: 'Sus retratos hiperrealistas monumentales no decoran:',
      p2b: 'convocan',
      p2c: '. Crean conversación, pertenencia y orgullo colectivo. La pared se convierte en espejo de identidad.',
      features: [
        { icon: '◈', title: 'Transformación de espacios', desc: 'Convierte muros grises en puntos de encuentro cultural y referencia urbana.' },
        { icon: '◉', title: 'Reacción social', desc: 'Cada obra genera conversación, emoción y reconocimiento colectivo.' },
        { icon: '◆', title: 'Identidad cultural', desc: 'El arte refleja la historia y el alma de quienes habitan el espacio.' },
        { icon: '▲', title: 'Símbolos permanentes', desc: 'Las obras trascienden el tiempo y se convierten en íconos urbanos reconocibles.' },
        { icon: '◐', title: 'Turismo y economía creativa', desc: 'Los murales monumentales atraen visitantes y potencian el valor simbólico del lugar.' },
      ],
    },

    // Servicios
    servicios: {
      tag: 'Lo que ofrece',
      title: 'SERVICIOS',
      subtitle: 'Arte monumental para espacios, marcas y comunidades que quieren dejar huella.',
      items: [
        { num: '01', name: 'Muralismo monumental', desc: 'Obras de gran escala que transforman edificios y fachadas en íconos urbanos. Técnica mixta con impacto visual impresionante.' },
        { num: '02', name: 'Intervenciones urbanas', desc: 'Acciones artísticas en el espacio público que generan diálogo, impacto social y apropiación colectiva del entorno.' },
        { num: '03', name: 'Retratos hiperrealistas', desc: 'Monumentalización de figuras históricas, culturales o icónicas. Técnica fotorrealista en escala colosal.' },
        { num: '04', name: 'Arte para marcas', desc: 'Branding visual artístico. Espacios comerciales, offices e instalaciones que comunican la esencia de una marca con arte real.' },
        { num: '05', name: 'Activaciones culturales', desc: 'Eventos en vivo donde el proceso creativo es también el espectáculo. Arte como experiencia compartida y participativa.' },
        { num: '06', name: 'Storytelling visual', desc: 'Narrativas artísticas que cuentan historias de personas, lugares y comunidades con lenguaje visual potente y emocional.' },
        { num: '07', name: 'Proyectos turísticos', desc: 'Circuitos de arte urbano y murales que convierten ciudades en destinos culturales de referencia nacional e internacional.' },
        { num: '08', name: 'Arte e identidad popular', desc: 'Obras para clubes de fútbol, barrios e instituciones. Arte que expresa el orgullo y la historia de una comunidad.' },
      ],
    },

    // Galeria
    galeria: {
      tag: 'Portfolio',
      categorias: [
        { nombre: 'Camino de D10S', tag: 'Homenaje · Fútbol · Cultura popular' },
        { nombre: 'Manifiesto', tag: 'Identidad · Mensaje · Arte urbano' },
        { nombre: 'Obras', tag: 'Muralismo · Gran escala · Comunidad' },
        { nombre: 'Empresas e instituciones', tag: 'Branding · Espacios corporativos · Arte' },
        { nombre: 'Arte y medioambiente', tag: 'Naturaleza · Conciencia · Muralismo' },
        { nombre: 'Azada Verde · Operación Encina', tag: 'Proyecto especial · Identidad · Territorio' },
      ],
    },

    // Identidad
    identidad: {
      tag: 'Identidad & Legado',
      title1: 'Arte que deja',
      title2: 'huella en la memoria',
      title3: 'colectiva',
      p1: 'El verdadero arte urbano no se cuelga en una galería. Vive en las calles, en los barrios, en los corazones de las personas que lo ven cada mañana al ir al trabajo.',
      p2a: 'Gastón Liberto entiende que cada mural es un acto político y emocional: una declaración de que',
      p2b: 'ese lugar importa, esa gente importa, esa historia merece ser contada en grande',
      p2c: '.',
      p3a: 'Su legado no está solamente en los metros cuadrados pintados. Está en la transformación cultural que ocurre cuando una comunidad se reconoce en una obra de arte y dice:',
      p3b: '"eso somos nosotros"',
      p3c: '.',
      tags: ['Cultura popular','Pertenencia','Memoria visual','Transformación','Identidad','Emoción colectiva','Legado','Arte urbano'],
    },

    // Proyeccion
    proyeccion: {
      tag: 'Proyección internacional',
      titleA: 'EL MUNDO',
      titleB: 'COMO',
      titleC: 'PARED',
      p: 'La visión de Gastón Liberto no conoce fronteras. Su arte, nacido en las calles argentinas, está listo para hablar en el lenguaje universal de las emociones: el único idioma que todos entienden.',
      items: [
        'Documentales y cápsulas "Behind the Mural"',
        'Colaboraciones con artistas y marcas globales',
        'Workshops y masterclasses internacionales',
        'Intervenciones en Europa, EEUU y Latinoamérica',
        'Circuitos de turismo cultural internacional',
        'Arte digital y experiencias inmersivas NFT',
        'Proyectos con municipios y gobiernos culturales',
      ],
      cardTitle: 'Arte sin fronteras',
      cardText: 'El muralismo argentino tiene algo que el mundo todavía no ha visto en toda su dimensión: emoción cruda, técnica monumental y alma colectiva en una sola pared.',
    },

    // Manifiesto
    manifiesto: {
      phrases: [
        { text: 'EL ARTE\nDEJA HUELLA.', variant: '' },
        { text: 'LAS PAREDES', sub: 'también pueden emocionar', variant: 'hollow' },
        { text: 'CADA MURAL\nCUENTA UNA HISTORIA.', variant: 'dark' },
        { text: 'LA CIUDAD', sub: 'también tiene memoria', variant: '' },
      ],
    },

    // Contacto
    contacto: {
      tag: '¿Empezamos?',
      cta1: 'TU MURO',
      cta2: 'TE ESPERA',
      sub: 'Cada gran obra comienza con una conversación. Hablemos sobre el espacio que querés transformar en algo que el mundo no pueda ignorar.',
      btnCall: 'Llamar ahora',
      btnInsta: 'Ver Instagram',
      labels: {
        phone: 'Teléfono',
        insta: 'Instagram',
        presence: 'Presencia',
        avail: 'Disponibilidad',
        availVal: 'Proyectos 2025–2026 abiertos',
      },
      tagline: 'El artista que convierte paredes en emociones',
      copy: '© 2025 Gastón Liberto · Arte Urbano · Argentina',
    },
  },

  en: {
    nav: {
      quien: 'About me',
      servicios: 'Services',
      galeria: 'Works',
      identidad: 'Identity',
      proyeccion: 'Vision',
      contacto: 'Contact',
      mobile: ['About', 'Services', 'Works', 'Vision', 'Contact'],
    },

    hero: {
      eyebrow: 'Visual artist · Argentina · Urban muralism',
      firmaName: 'Gastón Liberto',
      subtitleA: 'The artist who turns',
      subtitleB: 'walls into emotions',
      btnObras: 'See works',
      btnContacto: 'Get in touch',
      scroll: 'Scroll',
    },

    quien: {
      tag: 'The artist',
      title1: 'Urban art',
      title2: 'with',
      title3: 'soul',
      title4: 'and identity',
      p1: 'Gastón Liberto is not just a muralist. He is an architect of collective emotions, a visual storyteller who understands that',
      p1b: 'walls can also speak',
      p1c: ', feel, and transform the reality of those who inhabit them.',
      p2: 'Born in Argentina, his work transcends technique to become a',
      p2b: 'living cultural symbol',
      p2c: '. Each intervention is an act of belonging: transforming empty spaces into monuments of urban memory.',
      p3: 'His work blends the cinematic drama of emotional realism with the raw force of street art, creating pieces that are never forgotten.',
      p3b: 'Works that provoke reaction. That build identity. That endure.',
      quote: '"I don\'t paint murals. I build symbols so a community can recognize itself in them."',
    },

    stats: [
      { number: '+100', label: 'Murals', desc: 'Completed interventions' },
      { number: '15+', label: 'Cities', desc: 'National & international presence' },
      { number: '500K', label: 'People impacted', desc: 'Daily life transformed' },
      { number: '∞', label: 'Legacy', desc: 'Art that lives in memory' },
    ],

    experiencia: {
      tag: 'The experience',
      titleA: 'ART',
      titleB: 'AS A',
      titleC: 'SYMBOL',
      p1: 'A work by Gastón Liberto is never just a mural. It is an urban event. An intervention that forever changes the way a community sees itself.',
      p2: 'His monumental hyperrealistic portraits don\'t decorate:',
      p2b: 'they summon',
      p2c: '. They create conversation, belonging, and collective pride. The wall becomes a mirror of identity.',
      features: [
        { icon: '◈', title: 'Space transformation', desc: 'Turns grey walls into cultural meeting points and urban landmarks.' },
        { icon: '◉', title: 'Social reaction', desc: 'Every work sparks conversation, emotion, and collective recognition.' },
        { icon: '◆', title: 'Cultural identity', desc: 'Art that reflects the history and soul of those who inhabit the space.' },
        { icon: '▲', title: 'Permanent symbols', desc: 'Works that transcend time and become recognizable urban icons.' },
        { icon: '◐', title: 'Tourism & creative economy', desc: 'Monumental murals attract visitors and boost the symbolic value of a place.' },
      ],
    },

    servicios: {
      tag: 'What he offers',
      title: 'SERVICES',
      subtitle: 'Monumental art for spaces, brands and communities that want to leave a mark.',
      items: [
        { num: '01', name: 'Monumental muralism', desc: 'Large-scale works that transform buildings and facades into urban icons. Mixed media with impressive visual impact.' },
        { num: '02', name: 'Urban interventions', desc: 'Artistic actions in public space that generate dialogue, social impact, and collective ownership of the environment.' },
        { num: '03', name: 'Hyperrealistic portraits', desc: 'Monumentalization of historical, cultural or iconic figures. Photorealistic technique at colossal scale.' },
        { num: '04', name: 'Art for brands', desc: 'Artistic visual branding. Commercial spaces, offices and installations that communicate a brand\'s essence through real art.' },
        { num: '05', name: 'Cultural activations', desc: 'Live events where the creative process is also the spectacle. Art as a shared, participatory experience.' },
        { num: '06', name: 'Visual storytelling', desc: 'Artistic narratives that tell stories of people, places and communities with powerful, emotional visual language.' },
        { num: '07', name: 'Tourism projects', desc: 'Urban art circuits and murals that transform cities into national and international cultural destinations.' },
        { num: '08', name: 'Art & popular identity', desc: 'Works for football clubs, neighbourhoods and institutions. Art that expresses the pride and history of a community.' },
      ],
    },

    galeria: {
      tag: 'Portfolio',
      categorias: [
        { nombre: 'Path of D10S', tag: 'Tribute · Football · Popular culture' },
        { nombre: 'Manifesto', tag: 'Identity · Message · Urban art' },
        { nombre: 'Works', tag: 'Muralism · Large scale · Community' },
        { nombre: 'Companies & institutions', tag: 'Branding · Corporate spaces · Art' },
        { nombre: 'Art & the environment', tag: 'Nature · Awareness · Muralism' },
        { nombre: 'Green Hoe · Operation Encina', tag: 'Special project · Identity · Territory' },
      ],
    },

    identidad: {
      tag: 'Identity & Legacy',
      title1: 'Art that leaves',
      title2: 'a mark in collective',
      title3: 'memory',
      p1: 'True urban art is not hung in a gallery. It lives in the streets, in the neighbourhoods, in the hearts of the people who see it every morning on their way to work.',
      p2a: 'Gastón Liberto understands that every mural is a political and emotional act: a declaration that',
      p2b: 'that place matters, those people matter, that story deserves to be told on a grand scale',
      p2c: '.',
      p3a: 'His legacy lies not only in the square metres painted. It lives in the cultural transformation that happens when a community recognises itself in a work of art and says:',
      p3b: '"that is us"',
      p3c: '.',
      tags: ['Popular culture','Belonging','Visual memory','Transformation','Identity','Collective emotion','Legacy','Urban art'],
    },

    proyeccion: {
      tag: 'International vision',
      titleA: 'THE WORLD',
      titleB: 'AS A',
      titleC: 'WALL',
      p: 'Gastón Liberto\'s vision knows no borders. His art, born in the streets of Argentina, is ready to speak in the universal language of emotions: the only language everyone understands.',
      items: [
        '"Behind the Mural" documentaries and capsules',
        'Collaborations with global artists and brands',
        'International workshops and masterclasses',
        'Interventions in Europe, USA and Latin America',
        'International cultural tourism circuits',
        'Digital art and immersive NFT experiences',
        'Projects with municipalities and cultural governments',
      ],
      cardTitle: 'Art without borders',
      cardText: 'Argentine muralism has something the world has yet to see in its full dimension: raw emotion, monumental technique and collective soul — all on a single wall.',
    },

    manifiesto: {
      phrases: [
        { text: 'ART\nLEAVES A MARK.', variant: '' },
        { text: 'WALLS', sub: 'can also move you', variant: 'hollow' },
        { text: 'EVERY MURAL\nTELLS A STORY.', variant: 'dark' },
        { text: 'THE CITY', sub: 'also has memory', variant: '' },
      ],
    },

    contacto: {
      tag: 'Shall we start?',
      cta1: 'YOUR WALL',
      cta2: 'IS WAITING',
      sub: 'Every great work begins with a conversation. Let\'s talk about the space you want to transform into something the world cannot ignore.',
      btnCall: 'Call now',
      btnInsta: 'View Instagram',
      labels: {
        phone: 'Phone',
        insta: 'Instagram',
        presence: 'Presence',
        avail: 'Availability',
        availVal: '2025–2026 projects open',
      },
      tagline: 'The artist who turns walls into emotions',
      copy: '© 2025 Gastón Liberto · Urban Art · Argentina',
    },
  },
};

export function LangProvider({ children }) {
  const [lang, setLang] = useState('es');
  const t = translations[lang];
  const toggle = () => setLang(l => l === 'es' ? 'en' : 'es');

  return (
    <LangContext.Provider value={{ lang, t, toggle }}>
      {children}
    </LangContext.Provider>
  );
}
