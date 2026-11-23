import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowUpRight,
  ArrowLeft,
  MapPin,
  Clock,
  Phone,
  Instagram,
  CheckCircle2,
  ChevronRight,
  Menu,
  X
} from 'lucide-react';
import {
  ScrollProgressBar,
  EditorialSurface,
  RevealText,
  ClipRevealImage,
  MagneticButton,
  EditorialAccordion,
  CounterMetric,
  CRAFT_EASE
} from './craft';
import { TechnicalSchematic } from './components/BrandVisuals';

// ==========================================
// HECHOS Y DATOS 100% VERIFICADOS (CERO ALUCINACIONES)
// ==========================================
const BRAND_DATA = {
  name: "Beige & Ocre",
  tagline: "No decoramos paredes, definimos atmósferas",
  subtitle: "Curaduría exclusiva de papel tapiz de alta gama, arte en Murano y asesoría de interiorismo por cita en Plaza Castilla, Santo Domingo.",
  location: "Av. Abraham Lincoln, Plaza Castilla, 2do Nivel, Local 25B",
  city: "Santo Domingo, República Dominicana",
  phone: "(829) 457-0110",
  whatsappUrl: "https://wa.me/18294570110?text=Hola%2C%20vi%20el%20portafolio%20web%20de%20Beige%20%26%20Ocre%20y%20me%20gustar%C3%ADa%20agendar%20una%20cita%20en%20su%20showroom.",
  instagramUrl: "https://www.instagram.com/beigeandocrerd/",
  mapsUrl: "https://maps.google.com/?q=Plaza+Castilla+Av+Abraham+Lincoln+Santo+Domingo",
  hours: "Lunes a Viernes 9:00 - 19:45 | Sábados 10:00 - 16:00 | Solo por citas",
  hoursShort: "L-V 9:00 - 19:45 · S 10:00 - 16:00 (Citas)",
  marcas: [
    { name: "Armodi", desc: "Cuadros Kamai y Borlas Trébol" },
    { name: "Murano", desc: "Cristal Escultórico de Murano" },
    { name: "Mantra Albo", desc: "Revestimiento Textil Atemporal" },
    { name: "Bambara Taupe", desc: "Papel Tapiz en Textura Rafia" }
  ],
  stats: [
    { value: "6,800+", label: "seguidores en comunidad", note: "Instagram oficial" },
    { value: "10 Años", label: "durabilidad en vinílicos", note: "Fichas técnicas" },
    { value: "100%", label: "atención personalizada", note: "Solo por cita previa" }
  ]
};

// 4 SERVICIOS VERIFICADOS DEL BRIEF
const SERVICES_DATA = [
  {
    number: "01",
    title: "Papel Tapiz & Revestimientos Murales",
    slug: "papel-tapiz-revestimientos",
    kicker: "CATÁLOGO & STOCK DE ALTA GAMA",
    photo: "./media/post_7.jpg",
    description: "Selección curada de papeles tapiz vinílicos de alta resistencia, tramas orgánicas y texturas de rafia como Bambara Taupe.",
    longDescription: "Nuestra colección de revestimientos murales combina estética sofisticada y durabilidad de largo plazo. Ofrecemos papeles vinílicos lavables de alto rendimiento, fibras naturales entrelazadas, patrones geométricos en espiga y tramas infantiles clásicas tipo gingham.",
    features: [
      {
        title: "Resistencia Vinílica",
        desc: "Material vinílico lavable de alto rendimiento con vida útil de hasta una década."
      },
      {
        title: "Diversidad de Tramas",
        desc: "Acabados en rafia natural, lino, espiga geométrica, tridimensionales y estuco en relieve."
      },
      {
        title: "Línea Infantil & Clásica",
        desc: "Diseños atemporales gingham y patrones suaves para nursery y habitaciones juveniles."
      }
    ]
  },
  {
    number: "02",
    title: "Instalación Profesional de Revestimientos",
    slug: "instalacion-profesional",
    kicker: "MANO DE OBRA ESPECIALIZADA",
    photo: "./media/post_9.jpg",
    description: "Servicio de instalación profesional garantizada para que patrones continuos, juntas y remates queden perfectamente sellados.",
    longDescription: "Un revestimiento de alta gama requiere maestría en obra. Nuestro equipo técnico realiza la preparación completa del sustrato, corte milimétrico en sitio y calce perfecto de secuencias de diseño para un resultado continuo sin uniones visibles.",
    features: [
      {
        title: "Alineación de Empalmes",
        desc: "Coincidencia rigurosa de patrones repetitivos y secuencias geométricas complejas."
      },
      {
        title: "Preparación de Muros",
        desc: "Evaluación previa del soporte para evitar desprendimientos o filtraciones de humedad."
      },
      {
        title: "Servicio Llave en Mano",
        desc: "Desde la medición de paredes hasta la entrega limpia y lista del espacio."
      }
    ]
  },
  {
    number: "03",
    title: "Home Decor & Cristalería de Murano",
    slug: "home-decor-murano",
    kicker: "PIEZAS ESCULTÓRICAS Y ARTE",
    photo: "./media/post_4.jpg",
    description: "Selección exclusiva de esculturas en cristal de Murano con núcleos cromáticos y piezas artesanales de la línea Armodi.",
    longDescription: "Objetos decorativos curados para dar vida a consolas, libreros y aparadores. Destacan esculturas vítreas con degradados ámbar y cobalto, jarrones esmeralda sobre peanas de mármol y cuadros escultóricos Kamai en estructura tubular.",
    features: [
      {
        title: "Cristal de Murano Genuino",
        desc: "Esculturas con burbujas y degradados ámbar, esmeralda y cobalto sobre bases reflectantes."
      },
      {
        title: "Colección Armodi",
        desc: "Cuadros Kamai artesanales de tubos y borlas decorativas de trébol listas para entrega inmediata."
      },
      {
        title: "Acentos para Mobiliario",
        desc: "Proporciones idóneas para consolas de entrada, repisas y mesas de centro."
      }
    ]
  },
  {
    number: "04",
    title: "Asesoría en Showroom & Diseño de Interiores",
    slug: "asesoria-diseno-interiores",
    kicker: "CONSULTORÍA PRIVADA POR CITAS",
    photo: "./media/post_35.jpg",
    description: "Sesiones personalizadas de asesoría en nuestro showroom de Plaza Castilla para revisar catálogos y definir la paleta material.",
    longDescription: "Atención privada uno a uno en nuestro espacio de Plaza Castilla. Evaluamos las proporciones de tu residencia, contrastes de carpintería y textiles para diseñar una composición cromática y táctil integral.",
    features: [
      {
        title: "Citas Privadas",
        desc: "Atención uno a uno programada vía WhatsApp para examinar muestras con calma."
      },
      {
        title: "Coordinación Material",
        desc: "Recomendaciones sobre contraste entre paredes de acento, carpintería y textiles."
      },
      {
        title: "Visión de Remodelación",
        desc: "Guía integral para apartamentos, residencias familiares o proyectos comerciales."
      }
    ]
  }
];

// 4 CASOS / PROYECTOS VERIFICADOS DEL BRIEF (FOTOS ÚNICAS SIN REPETICIÓN EN INICIO)
const PROJECTS_DATA = [
  {
    code: "CASO 01",
    title: "Bambara Taupe en Escena Residencial",
    category: "Diseño de Interiores & Revestimiento",
    location: "Plaza Castilla, Santo Domingo",
    challenge: "Crear un ambiente cálido y de sofisticación neutra para una estancia principal, integrando iluminación cálida y mobiliario de madera.",
    solution: "Revestimiento mural en textura de rafia Bambara Taupe, logrando una sensación envolvente y táctil que armoniza con luminarias doradas y acabados nobles.",
    photo: "./media/post_34.jpg",
    extraPhoto: "./media/post_24.jpg"
  },
  {
    code: "CASO 02",
    title: "Mantra Albo & Cloud Dancer",
    category: "Papel Tapiz",
    location: "Plaza Castilla, Santo Domingo",
    challenge: "Superar la estacionalidad temporal y concebir una atmósfera de paz absoluta a través de tramas textiles continuas.",
    solution: "Aplicación del diseño Mantra Albo en paleta Cloud Dancer, fusionando tramas orgánicas y textiles que reflejan la luz de manera apacible.",
    photo: "./media/post_3.jpg",
    extraPhoto: "./media/post_14.jpg"
  },
  {
    code: "CASO 03",
    title: "Composición Escultórica Armodi & Kamai",
    category: "Objetos de Arte & Decoración",
    location: "Santo Domingo",
    challenge: "Jerarquizar una zona de estar residencial equipada con revestimientos acanalados de madera oscura mediante elementos de arte singular.",
    solution: "Integración de cuadros escultóricos artesanales Kamai en estructura tubular y piezas textiles que aportan contraste orgánico al ambiente contemporáneo.",
    photo: "./media/post_21.jpg",
    extraPhoto: "./media/post_36.jpg"
  },
  {
    code: "CASO 04",
    title: "Interiores Residenciales & Acentos",
    category: "Diseño de Interiores",
    location: "Santo Domingo",
    challenge: "Diseñar habitaciones con identidad serena combinando papel tapiz vinílico lavable de patrones geométricos y acentos de color controlados.",
    solution: "Instalación llave en mano de revestimientos vinílicos de alta resistencia con empalmes invisibles y paletas adaptadas a cada estancia.",
    photo: "./media/post_29.jpg",
    extraPhoto: "./media/post_30.jpg"
  }
];

// FAQS VERIFICADAS
const FAQS_DATA = [
  {
    question: "¿Cómo puedo visitar el showroom de Beige & Ocre?",
    answer: "Operamos exclusivamente bajo cita previa coordinada vía WhatsApp al (829) 457-0110. Nuestro espacio está ubicado en la Av. Abraham Lincoln, Plaza Castilla, 2do nivel, Local 25B, Santo Domingo."
  },
  {
    question: "¿Qué durabilidad y mantenimiento tiene el papel tapiz vinílico?",
    answer: "Nuestros papeles tapiz vinílicos cuentan con una durabilidad comprobada de hasta 10 años. Son materiales de alta calidad, resistentes y fáciles de limpiar con un paño suave húmedo, ideales para salas, dormitorios, recibidores y oficinas."
  },
  {
    question: "¿Ofrecen el servicio de instalación o solo la venta del material?",
    answer: "Ofrecemos el ciclo completo: asesoría en la selección, venta del material (disponible en stock o por encargo) y servicio de instalación profesional garantizado para asegurar un acabado impecable en cada pared."
  },
  {
    question: "¿Disponen de opciones de papel tapiz para habitaciones infantiles?",
    answer: "Sí, disponemos de una línea especializada en habitaciones de bebés y niños (como patrones clásicos gingham/cuadros vichy y motivos ilustrados) disponibles por encargo y con asesoría a medida."
  },
  {
    question: "¿Qué tipo de piezas decorativas tienen disponibles además del papel tapiz?",
    answer: "Contamos con una selección curada de piezas en cristal de Murano auténtico (esculturas y jarrones), así como arte textil artesanal de la línea Armodi (cuadros tubulares Kamai y borlas trébol) para entrega inmediata."
  }
];

// 4 PASOS DE PROCESO VERIFICADOS
const PROCESS_STEPS = [
  { step: "01", title: "Cita Previa en Showroom", desc: "Coordinación por WhatsApp para recibirte de manera privada en nuestro local de Plaza Castilla." },
  { step: "02", title: "Muestras y Catálogos", desc: "Revisión física de texturas, relieves vinílicos, rafias y piezas de Murano adaptadas a tu espacio." },
  { step: "03", title: "Cálculo y Suministro", desc: "Determinación del metraje requerido, selección de stock disponible o pedido por encargo." },
  { step: "04", title: "Instalación Profesional", desc: "Colocación técnica experta en muros para asegurar empalmes continuos y acabados de larga vida." }
];

// TEXTIL / WEAVE SENSORY EXPLORER SAMPLES (MOMENTO FIRMA)
const SENSORY_SAMPLES = [
  {
    id: "bambara",
    title: "Rafia Bambara Taupe",
    material: "Fibras de Rafia & Celulosa",
    grammage: "380 g/m²",
    finish: "Relieve Táctil Mate",
    use: "Paredes de Acento Residencial",
    photo: "./media/post_24.jpg"
  },
  {
    id: "chevron",
    title: "Chevron Cream Lino",
    material: "Hilado Entrelazado Lavable",
    grammage: "410 g/m²",
    finish: "Geometría en Espiga Tridimensional",
    use: "Recámaras & Recibidores",
    photo: "./media/post_14.jpg"
  },
  {
    id: "estuco",
    title: "Estuco en Relieve Crudo",
    material: "Vinílico Lavable de Alto Relieve",
    grammage: "390 g/m²",
    finish: "Textura Mineral Mate",
    use: "Salas & Comedores",
    photo: "./media/post_8.jpg"
  },
  {
    id: "albo",
    title: "Trama Botánica Taupe",
    material: "Lino Orgánico & Vinílico",
    grammage: "340 g/m²",
    finish: "Textura Textil Continua",
    use: "Zonas de Estar & Oficinas",
    photo: "./media/post_22.jpg"
  }
];

// ==========================================
// COMPONENTE: NAVBAR & NAVEGACIÓN
// ==========================================
function Navbar({ currentPath, onNavigate }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: "Inicio", path: "#/" },
    { label: "Servicios", path: "#/servicios" },
    { label: "Casos Reales", path: "#/casos" },
    { label: "Nosotros", path: "#/nosotros" },
    { label: "Showroom", path: "#/contacto" }
  ];

  return (
    <>
      <header className={`site-header ${scrolled ? 'is-scrolled' : 'is-light'}`}>
        <div className="site-container">
          <div className="header-inner">
            {/* Logo Oficial Intacto */}
            <a
              href="#/"
              onClick={(e) => { e.preventDefault(); onNavigate('#/'); }}
              className="brand-identity"
            >
              <div className="brand-logo-emblem">
                <img src="./media/logo_real.jpg" alt="Beige & Ocre" />
              </div>
              <div className="brand-name-group">
                <span className="brand-title">Beige & Ocre</span>
                <span className="brand-subtitle">Wall & Home</span>
              </div>
            </a>

            {/* Desktop Links */}
            <nav className="nav-links-desktop">
              {navItems.map((item) => {
                const isActive = currentPath === item.path || (item.path !== '#/' && currentPath.startsWith(item.path));
                return (
                  <a
                    key={item.path}
                    href={item.path}
                    onClick={(e) => { e.preventDefault(); onNavigate(item.path); }}
                    className={`nav-item-link ${isActive ? 'is-active' : ''}`}
                  >
                    {item.label}
                  </a>
                );
              })}
            </nav>

            {/* CTA Header */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexShrink: 0 }}>
              <div className="header-cta-desktop">
                <MagneticButton
                  variant="primary"
                  href={BRAND_DATA.whatsappUrl}
                  target="_blank"
                  style={{ padding: '11px 22px', minHeight: '44px', fontSize: '0.85rem' }}
                >
                  Agendar Cita
                </MagneticButton>
              </div>

              {/* Botón Móvil */}
              <button
                type="button"
                className="mobile-menu-btn"
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
              >
                {mobileOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Menú Móvil Desplegable */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="mobile-nav-drawer"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25, ease: CRAFT_EASE }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div className="brand-identity">
                <div className="brand-logo-emblem">
                  <img src="./media/logo_real.jpg" alt="Beige & Ocre" />
                </div>
                <div className="brand-name-group">
                  <span className="brand-title" style={{ color: '#F8F5F0' }}>Beige & Ocre</span>
                  <span className="brand-subtitle" style={{ color: '#C59B63' }}>Plaza Castilla</span>
                </div>
              </div>
              <button
                type="button"
                className="mobile-menu-btn"
                style={{ color: '#F8F5F0' }}
                onClick={() => setMobileOpen(false)}
                aria-label="Cerrar menú"
              >
                <X size={26} />
              </button>
            </div>

            <nav className="mobile-nav-links">
              {navItems.map((item) => (
                <a
                  key={item.path}
                  href={item.path}
                  onClick={(e) => {
                    e.preventDefault();
                    setMobileOpen(false);
                    onNavigate(item.path);
                  }}
                  className="mobile-nav-item"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            <div style={{ marginTop: 'auto', paddingTop: '2rem', borderTop: '1px solid rgba(248, 245, 240, 0.15)' }}>
              <p style={{ fontSize: '0.85rem', color: 'rgba(248, 245, 240, 0.7)', marginBottom: '1.25rem' }}>
                {BRAND_DATA.location}
              </p>
              <MagneticButton
                variant="primary"
                href={BRAND_DATA.whatsappUrl}
                target="_blank"
                style={{ width: '100%' }}
              >
                Agendar Cita en Showroom
              </MagneticButton>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

// ==========================================
// COMPONENTE: FOOTER MONOLITO
// ==========================================
function Footer({ onNavigate }) {
  return (
    <footer className="site-footer">
      <div className="site-container">
        <div className="footer-inner-divider">
          <div className="footer-main-grid">
          {/* Columna Marca & Filosofía */}
          <div>
            <div className="brand-identity" style={{ marginBottom: '1.5rem' }}>
              <div className="brand-logo-emblem" style={{ width: '48px', height: '48px' }}>
                <img src="./media/logo_real.jpg" alt="Beige & Ocre" />
              </div>
              <div className="brand-name-group">
                <span className="brand-title" style={{ fontSize: '1.4rem', color: '#F8F5F0' }}>Beige & Ocre</span>
                <span className="brand-subtitle" style={{ color: '#C59B63' }}>Santo Domingo</span>
              </div>
            </div>
            <p style={{ fontSize: '0.94rem', color: 'rgba(248, 245, 240, 0.7)', maxWidth: '34ch', lineHeight: 1.6, marginBottom: '1.75rem' }}>
              "No decoramos paredes, definimos atmósferas." Papel tapiz de alta gama y arte en Murano por cita previa.
            </p>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <a
                href={BRAND_DATA.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="craft-link-underline"
                style={{ color: '#C59B63', fontSize: '0.86rem' }}
              >
                <Instagram size={16} /> @beigeandocrerd
              </a>
            </div>
          </div>

          {/* Columna Navegación */}
          <div>
            <h4 className="footer-col-title">Arquitectura & Catálogo</h4>
            <div className="footer-links-list">
              <a href="#/" onClick={(e) => { e.preventDefault(); onNavigate('#/'); }}>Inicio</a>
              <a href="#/servicios" onClick={(e) => { e.preventDefault(); onNavigate('#/servicios'); }}>Revestimientos & Servicios</a>
              <a href="#/casos" onClick={(e) => { e.preventDefault(); onNavigate('#/casos'); }}>Casos & Proyectos Reales</a>
              <a href="#/nosotros" onClick={(e) => { e.preventDefault(); onNavigate('#/nosotros'); }}>Dirección de Diseño & Estudio</a>
              <a href="#/contacto" onClick={(e) => { e.preventDefault(); onNavigate('#/contacto'); }}>Showroom & Contacto</a>
            </div>
          </div>

          {/* Columna Coordenadas & Horario */}
          <div>
            <h4 className="footer-col-title">Showroom Plaza Castilla</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', fontSize: '0.88rem', color: 'rgba(248, 245, 240, 0.75)' }}>
              <p>{BRAND_DATA.location}</p>
              <p>Av. Abraham Lincoln · Santo Domingo</p>
              <p style={{ color: '#C59B63' }}>{BRAND_DATA.hours}</p>
              <p>WhatsApp: {BRAND_DATA.phone}</p>
              <a
                href={BRAND_DATA.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="craft-link-underline"
                style={{ color: '#F8F5F0', marginTop: '0.5rem' }}
              >
                Ver en Google Maps <ArrowUpRight size={14} />
              </a>
            </div>
          </div>
        </div>

        {/* Barra Inferior */}
        <div className="footer-bottom-bar">
          <div>© {new Date().getFullYear()} Beige & Ocre. Todos los derechos reservados.</div>
          <div>Plaza Castilla · Av. Abraham Lincoln · Santo Domingo, RD</div>
        </div>
        </div>
      </div>
    </footer>
  );
}

// ==========================================
// PÁGINA 1: INICIO (#/)
// ==========================================
function HomePage({ onNavigate }) {
  const [activeSample, setActiveSample] = useState(0);
  const sample = SENSORY_SAMPLES[activeSample];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.35, ease: CRAFT_EASE }}
    >
      {/* SECCIÓN 1: PORTADA HERO (asymmetric-editorial-gallery 60/40) */}
      <EditorialSurface variant="architectural" tone="primary" id="hero">
        <div className="site-container">
          <div className="hero-layout">
            {/* Panel Izquierdo: Titular y CTA */}
            <div className="hero-editorial-copy">
              <span className="meta-kicker">
                Plaza Castilla · Santo Domingo
              </span>
              <RevealText as="h1" immediate className="hero-display-title">
                No decoramos paredes, definimos atmósferas.
              </RevealText>
              <p className="hero-subtitle-text">
                Papel tapiz de alta gama, arte en Murano e interiorismo por cita.
              </p>
              <div className="hero-cta-group">
                <MagneticButton
                  variant="primary"
                  href={BRAND_DATA.whatsappUrl}
                  target="_blank"
                >
                  Agendar en Showroom
                </MagneticButton>
                <MagneticButton
                  variant="secondary"
                  onClick={() => onNavigate('#/servicios')}
                >
                  Explorar Catálogo
                </MagneticButton>
              </div>
            </div>

            {/* Panel Derecho: Escena Residencial Real (post_23.jpg) */}
            <div className="hero-visual-frame">
              <ClipRevealImage
                src="./media/post_23.jpg"
                alt="Escena Residencial Bambara Taupe y Lámpara de Latón"
                aspectRatio="4 / 5"
                priority
              />
              <div className="hero-project-tag">
                BAMBARA TAUPE · RAFIA & LATÓN
              </div>
            </div>
          </div>
        </div>
      </EditorialSurface>

      {/* SECCIÓN 2: VITRINA DE ESPECIALIDADES / REVESTIMIENTOS (ai_service cohesivo & cada una con foto) */}
      <EditorialSurface variant="grain" tone="secondary" id="revestimientos-catalogo" className="section-pad">
        <div className="site-container">
          <div style={{ maxWidth: '640px', marginBottom: '3.5rem' }}>
            <span className="meta-kicker">Especialidades & Curaduría</span>
            <RevealText as="h2" style={{ fontSize: 'clamp(2rem, 3.8vw, 3.2rem)', marginBottom: '1rem' }}>
              Revestimientos de Autor & Arte
            </RevealText>
            <p className="text-muted" style={{ fontSize: '1rem', lineHeight: 1.6 }}>
              Texturas vinílicas lavables de larga durabilidad, arte veneciano y asesoría personalizada en nuestro espacio de Plaza Castilla.
            </p>
          </div>

          {/* Grilla de 4 especialidades: CADA UNA con su foto y enlace a subpágina */}
          <div className="services-bespoke-grid">
            {SERVICES_DATA.map((srv, idx) => (
              <div
                key={srv.slug}
                className="service-bespoke-card"
                onClick={() => onNavigate(`#/servicios/${srv.slug}`)}
                style={{ cursor: 'pointer' }}
              >
                <div className="service-card-media">
                  <img src={srv.photo} alt={srv.title} loading="lazy" />
                </div>
                <div className="service-card-body">
                  <div className="service-card-num">{srv.number} — {srv.kicker}</div>
                  <h3 className="service-card-title">{srv.title}</h3>
                  <p className="service-card-desc">{srv.description}</p>
                  <div className="service-card-action">
                    <span>Ver detalle</span>
                    <ChevronRight size={16} />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Muestrario Sensorial de Urdimbre & Grano (The Moment — integrado en Sección 2) */}
          <div style={{ marginTop: '4.5rem' }}>
            <div style={{ maxWidth: '640px', marginBottom: '2rem' }}>
              <span className="meta-kicker">Muestrario Táctil</span>
              <RevealText as="h3" style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', marginBottom: '0.5rem' }}>
                Urdimbre, Rafia & Relieve
              </RevealText>
            </div>

            <div className="sensory-interactive-box">
              {/* Selector de material táctil */}
              <div className="weave-controls-tabs">
                {SENSORY_SAMPLES.map((s, idx) => (
                  <button
                    key={s.id}
                    type="button"
                    className={`weave-tab-btn ${activeSample === idx ? 'is-active' : ''}`}
                    onClick={() => setActiveSample(idx)}
                  >
                    {s.title}
                  </button>
                ))}
              </div>

              {/* Escenario de Inspección */}
              <div className="weave-display-stage">
                <div className="weave-canvas-zoom">
                  <img src={sample.photo} alt={sample.title} />
                </div>
                <div className="weave-spec-sheet">
                  <div>
                    <span className="meta-kicker" style={{ marginBottom: '0.35rem' }}>Ficha Técnica</span>
                    <h4 style={{ fontSize: '1.75rem', marginBottom: '1.25rem' }}>{sample.title}</h4>
                  </div>
                  <div className="spec-sheet-row">
                    <span>Composición</span>
                    <span>{sample.material}</span>
                  </div>
                  <div className="spec-sheet-row">
                    <span>Gramaje / Escala</span>
                    <span>{sample.grammage}</span>
                  </div>
                  <div className="spec-sheet-row">
                    <span>Acabado Superficial</span>
                    <span>{sample.finish}</span>
                  </div>
                  <div className="spec-sheet-row">
                    <span>Aplicación Óptima</span>
                    <span>{sample.use}</span>
                  </div>
                  <div style={{ marginTop: '1rem' }}>
                    <MagneticButton
                      variant="primary"
                      href={BRAND_DATA.whatsappUrl}
                      target="_blank"
                      style={{ fontSize: '0.88rem', padding: '14px 28px', minHeight: '48px' }}
                    >
                      Examinar en Showroom
                    </MagneticButton>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </EditorialSurface>

      {/* SECCIÓN 3: ESQUEMA TÉCNICO INTERACTIVO (TechnicalSchematic) */}
      <EditorialSurface variant="contrast" tone="contrast" id="schematic-instalacion" className="section-pad">
        <div className="site-container">
          <div style={{ maxWidth: '640px', marginBottom: '3rem' }}>
            <span className="meta-kicker" style={{ color: '#C59B63' }}>Ingeniería de Instalación</span>
            <RevealText as="h2" style={{ fontSize: 'clamp(2rem, 3.8vw, 3.2rem)', marginBottom: '1rem', color: '#F8F5F0' }}>
              Adhesión & Calce Milimétrico
            </RevealText>
            <p style={{ color: 'rgba(248, 245, 240, 0.75)', fontSize: '1rem', lineHeight: 1.6 }}>
              Estructura multicapa, preparación de soporte nivel 5 y fijación técnica sin juntas visibles para garantizar 10 años de durabilidad.
            </p>
          </div>

          <TechnicalSchematic />
        </div>
      </EditorialSurface>

      {/* SECCIÓN 4: CRISTALERÍA DE MURANO & OBJETOS ARMODI */}
      <EditorialSurface variant="ambient" tone="primary" id="murano-artefactos" className="section-pad">
        <div className="site-container">
          <div className="murano-layout">
            <div>
              <span className="meta-kicker">Curaduría Escultórica</span>
              <RevealText as="h2" style={{ fontSize: 'clamp(2rem, 3.8vw, 3.2rem)', marginBottom: '1.25rem' }}>
                Murano Genuino & Colección Armodi
              </RevealText>
              <p className="text-muted" style={{ fontSize: '1rem', lineHeight: 1.65, marginBottom: '1.75rem' }}>
                Piezas importadas directamente de talleres venecianos con núcleos cromáticos ámbar y cobalto, junto con cuadros artesanales Kamai en estructura tubular y borlas de trébol.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.92rem' }}>
                  <CheckCircle2 size={18} style={{ color: 'var(--accent)' }} />
                  <span>Esculturas con refracción de luz sobre consolas y libreros</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.92rem' }}>
                  <CheckCircle2 size={18} style={{ color: 'var(--accent)' }} />
                  <span>Jarrones en cristal verde botella con reborde ocre sobre peana</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.92rem' }}>
                  <CheckCircle2 size={18} style={{ color: 'var(--accent)' }} />
                  <span>Arte textil y cuadros Kamai listos para entrega inmediata</span>
                </div>
              </div>
              <MagneticButton
                variant="primary"
                onClick={() => onNavigate('#/servicios/home-decor-murano')}
              >
                Ver Colección Murano
              </MagneticButton>
            </div>

            <div className="murano-media-stack">
              <ClipRevealImage
                src="./media/post_5.jpg"
                alt="Jarrones estilizados en cristal verde botella con reborde ocre sobre peana de mármol"
                aspectRatio="3 / 4"
                parallax
              />
              <ClipRevealImage
                src="./media/post_36.jpg"
                alt="Cuadro escultórico artesanal Kamai de la colección Armodi sobre listones de madera"
                aspectRatio="3 / 4"
                parallax
                style={{ marginTop: '2rem' }}
              />
            </div>
          </div>
        </div>
      </EditorialSurface>

      {/* SECCIÓN 5: PROYECTOS & ESCENAS RESIDENCIALES DESTACADAS */}
      <EditorialSurface variant="mesh" tone="secondary" id="proyectos-destacados" className="section-pad">
        <div className="site-container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '1.5rem', marginBottom: '3.5rem' }}>
            <div>
              <span className="meta-kicker">Obras Seleccionadas</span>
              <RevealText as="h2" style={{ fontSize: 'clamp(2rem, 3.8vw, 3.2rem)' }}>
                Atmósferas Ejecutadas
              </RevealText>
            </div>
            <MagneticButton
              variant="secondary"
              onClick={() => onNavigate('#/casos')}
            >
              Ver Todos los Casos
            </MagneticButton>
          </div>

          <div className="projects-gallery-grid">
            {PROJECTS_DATA.map((proj) => (
              <div
                key={proj.code}
                className="project-tile-card"
                onClick={() => onNavigate('#/casos')}
                style={{ cursor: 'pointer' }}
              >
                <div className="project-tile-media">
                  <img src={proj.photo} alt={proj.title} loading="lazy" />
                </div>
                <div className="project-tile-info">
                  <span className="project-code-tag">{proj.code} · {proj.category}</span>
                  <h3 className="project-tile-title">{proj.title}</h3>
                  <p className="project-tile-loc">{proj.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </EditorialSurface>

      {/* SECCIÓN 6: SHOWROOM PRIVADO PLAZA CASTILLA */}
      <EditorialSurface variant="architectural" tone="contrast" id="showroom-contacto" className="section-pad">
        <div className="site-container">
          <div className="showroom-split-grid">
            <div>
              <span className="meta-kicker" style={{ color: '#C59B63' }}>Showroom por Cita</span>
              <RevealText as="h2" style={{ fontSize: 'clamp(2.2rem, 4.2vw, 3.8rem)', color: '#F8F5F0', marginBottom: '1.25rem' }}>
                Visítanos en Plaza Castilla
              </RevealText>
              <p style={{ color: 'rgba(248, 245, 240, 0.75)', fontSize: '1.05rem', lineHeight: 1.6, marginBottom: '2.5rem' }}>
                Un espacio íntimo y reservado sobre la Av. Abraham Lincoln donde podrás tocar rollos de tapiz reales, contrastar muestras bajo luz natural y recibir asesoría personalizada.
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.25rem' }}>
                <MagneticButton
                  variant="primary"
                  href={BRAND_DATA.whatsappUrl}
                  target="_blank"
                >
                  Agendar por WhatsApp
                </MagneticButton>
                <MagneticButton
                  variant="secondary"
                  href={BRAND_DATA.mapsUrl}
                  target="_blank"
                  style={{ color: '#F8F5F0', borderColor: 'rgba(248, 245, 240, 0.25)' }}
                >
                  Ver en Google Maps
                </MagneticButton>
              </div>
            </div>

            <div className="showroom-details-card">
              <div className="info-item-block">
                <MapPin className="info-item-icon" size={20} />
                <div className="info-item-content">
                  <h5>Dirección Exacta</h5>
                  <p>{BRAND_DATA.location}</p>
                  <p style={{ opacity: 0.7 }}>Avenida Abraham Lincoln, Santo Domingo</p>
                </div>
              </div>

              <div className="info-item-block">
                <Clock className="info-item-icon" size={20} />
                <div className="info-item-content">
                  <h5>Horarios de Atención</h5>
                  <p>Lunes a Viernes: 9:00 - 19:45</p>
                  <p>Sábados: 10:00 - 16:00</p>
                  <p style={{ opacity: 0.7 }}>Atención exclusiva por cita previa</p>
                </div>
              </div>

              <div className="info-item-block">
                <Phone className="info-item-icon" size={20} />
                <div className="info-item-content">
                  <h5>Contacto Directo</h5>
                  <p>{BRAND_DATA.phone}</p>
                  <p style={{ opacity: 0.7 }}>Coordinación inmediata vía WhatsApp</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </EditorialSurface>
    </motion.div>
  );
}

// ==========================================
// PÁGINA 2: SERVICIOS / CATÁLOGO COMPLETO (#/servicios)
// ==========================================
function ServicesPage({ onNavigate }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.35, ease: CRAFT_EASE }}
    >
      <EditorialSurface variant="ambient" tone="primary" className="section-pad" style={{ paddingTop: '8.5rem' }}>
        <div className="site-container">
          <div style={{ maxWidth: '720px', marginBottom: '4rem' }}>
            <span className="meta-kicker">Catálogo & Especialidades</span>
            <RevealText as="h1" immediate style={{ fontSize: 'clamp(2.4rem, 5.2vw, 4.4rem)', marginBottom: '1.25rem' }}>
              Revestimientos & Especialidades
            </RevealText>
            <p className="text-muted" style={{ fontSize: '1.1rem', lineHeight: 1.6 }}>
              Especificación técnica, curaduría de materiales nobles e instalación profesional garantizada en Santo Domingo.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '3.5rem' }}>
            {SERVICES_DATA.map((srv, idx) => {
              const isEven = idx % 2 === 1;
              return (
                <div
                  key={srv.slug}
                  id={srv.slug}
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                    gap: 'clamp(2rem, 5vw, 4.5rem)',
                    alignItems: 'center',
                    paddingBottom: '3.5rem',
                    borderBottom: '1px solid var(--border-hairline)'
                  }}
                >
                  <div style={{ order: isEven ? 2 : 1 }}>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--accent)', marginBottom: '0.5rem' }}>
                      {srv.number} — {srv.kicker}
                    </div>
                    <h2 style={{ fontSize: 'clamp(1.8rem, 3.2vw, 2.6rem)', marginBottom: '1rem' }}>
                      {srv.title}
                    </h2>
                    <p className="text-muted" style={{ fontSize: '1rem', lineHeight: 1.65, marginBottom: '1.75rem' }}>
                      {srv.longDescription}
                    </p>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.9rem', marginBottom: '2rem' }}>
                      {srv.features.map((feat, fIdx) => (
                        <div key={fIdx} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                          <CheckCircle2 size={18} style={{ color: 'var(--accent)', marginTop: '3px', flexShrink: 0 }} />
                          <div>
                            <strong style={{ fontSize: '0.94rem' }}>{feat.title}: </strong>
                            <span style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>{feat.desc}</span>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
                      <MagneticButton
                        variant="primary"
                        onClick={() => onNavigate(`#/servicios/${srv.slug}`)}
                      >
                        Ver detalle
                      </MagneticButton>
                      <MagneticButton
                        variant="secondary"
                        href={`https://wa.me/18294570110?text=Hola%2C%20me%20interesa%20informaci%C3%B3n%20sobre%20el%20servicio%20de%20${encodeURIComponent(srv.title)}.`}
                        target="_blank"
                      >
                        Cotizar por WhatsApp
                      </MagneticButton>
                    </div>
                  </div>

                  <div style={{ order: isEven ? 1 : 2 }}>
                    <ClipRevealImage
                      src={srv.photo}
                      alt={srv.title}
                      aspectRatio="4 / 3"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </EditorialSurface>
    </motion.div>
  );
}

// ==========================================
// SUBPÁGINA INDIVIDUAL: DETALLE DE SERVICIO (#/servicios/:slug)
// ==========================================
function ServiceDetailPage({ slug, onNavigate }) {
  const service = SERVICES_DATA.find((s) => s.slug === slug) || SERVICES_DATA[0];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.35, ease: CRAFT_EASE }}
    >
      <EditorialSurface variant="architectural" tone="primary" className="section-pad" style={{ paddingTop: '8.5rem' }}>
        <div className="site-container">
          {/* Breadcrumb & Botón Volver */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2.5rem' }}>
            <button
              type="button"
              onClick={() => onNavigate('#/servicios')}
              className="craft-link-underline"
              style={{ fontSize: '0.88rem', color: 'var(--accent)' }}
            >
              <ArrowLeft size={16} /> Volver al Catálogo de Servicios
            </button>
            <span style={{ opacity: 0.4 }}>/</span>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', opacity: 0.6 }}>{service.number}</span>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 'clamp(2rem, 5vw, 4rem)', alignItems: 'center', marginBottom: '4rem' }}>
            <div>
              <span className="meta-kicker">{service.kicker}</span>
              <RevealText as="h1" immediate style={{ fontSize: 'clamp(2.3rem, 4.8vw, 4rem)', marginBottom: '1.25rem' }}>
                {service.title}
              </RevealText>
              <p style={{ fontSize: '1.1rem', lineHeight: 1.65, color: 'var(--text-muted)', marginBottom: '2rem' }}>
                {service.longDescription}
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
                <MagneticButton
                  variant="primary"
                  href={`https://wa.me/18294570110?text=Hola%2C%20quisiera%20agendar%20una%20asesor%C3%ADa%20en%20showroom%20para%20${encodeURIComponent(service.title)}.`}
                  target="_blank"
                >
                  Agendar este Servicio
                </MagneticButton>
                <MagneticButton
                  variant="secondary"
                  onClick={() => onNavigate('#/contacto')}
                >
                  Visitar Showroom
                </MagneticButton>
              </div>
            </div>

            <div>
              <ClipRevealImage
                src={service.photo}
                alt={service.title}
                aspectRatio="4 / 3"
                priority
              />
            </div>
          </div>

          {/* Bloque de 3 Características Clave Verificadas */}
          <div style={{ marginTop: '4rem', paddingTop: '3.5rem', borderTop: '1px solid var(--border-hairline)' }}>
            <h3 style={{ fontSize: '1.85rem', marginBottom: '2rem' }}>Especificaciones & Ventajas Reales</h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '2rem' }}>
              {service.features.map((feat, idx) => (
                <div
                  key={idx}
                  style={{
                    backgroundColor: '#FFFFFF',
                    border: '1px solid var(--border-hairline)',
                    padding: '2rem',
                    borderRadius: 'var(--radius-card)'
                  }}
                >
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--accent)', marginBottom: '0.75rem' }}>
                    BENEFICIO 0{idx + 1}
                  </div>
                  <h4 style={{ fontSize: '1.25rem', marginBottom: '0.65rem' }}>{feat.title}</h4>
                  <p style={{ fontSize: '0.92rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>{feat.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </EditorialSurface>
    </motion.div>
  );
}

// ==========================================
// PÁGINA 3: CASOS REALES / PORTAFOLIO (#/casos)
// ==========================================
function CasesPage({ onNavigate }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.35, ease: CRAFT_EASE }}
    >
      <EditorialSurface variant="grain" tone="secondary" className="section-pad" style={{ paddingTop: '8.5rem' }}>
        <div className="site-container">
          <div style={{ maxWidth: '720px', marginBottom: '4rem' }}>
            <span className="meta-kicker">Portafolio & Obras Reales</span>
            <RevealText as="h1" immediate style={{ fontSize: 'clamp(2.4rem, 5.2vw, 4.4rem)', marginBottom: '1.25rem' }}>
              Casos Reales Verificados
            </RevealText>
            <p className="text-muted" style={{ fontSize: '1.1rem', lineHeight: 1.6 }}>
              Obras ejecutadas en Santo Domingo con revestimientos murales, cristalería veneciana y soluciones espaciales a la medida.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '4.5rem' }}>
            {PROJECTS_DATA.map((proj, idx) => (
              <div
                key={proj.code}
                style={{
                  backgroundColor: '#FFFFFF',
                  border: '1px solid var(--border-hairline)',
                  borderRadius: 'var(--radius-card)',
                  overflow: 'hidden',
                  padding: 'clamp(1.5rem, 3.5vw, 3rem)'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.5rem' }}>
                  <span className="meta-kicker" style={{ margin: 0 }}>{proj.code} · {proj.category}</span>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--text-muted)' }}>{proj.location}</span>
                </div>

                <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.6rem)', marginBottom: '2rem' }}>{proj.title}</h2>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', marginBottom: '2.5rem' }}>
                  <div>
                    <h4 style={{ fontSize: '0.82rem', fontFamily: 'var(--font-mono)', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '0.5rem' }}>
                      El Desafío Espacial
                    </h4>
                    <p style={{ fontSize: '0.96rem', color: 'var(--text-muted)', lineHeight: 1.65 }}>
                      {proj.challenge}
                    </p>
                  </div>
                  <div>
                    <h4 style={{ fontSize: '0.82rem', fontFamily: 'var(--font-mono)', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '0.5rem' }}>
                      La Solución de Diseño
                    </h4>
                    <p style={{ fontSize: '0.96rem', color: 'var(--text-primary)', lineHeight: 1.65 }}>
                      {proj.solution}
                    </p>
                  </div>
                </div>

                {/* Galería Visual del Proyecto */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
                  <ClipRevealImage
                    src={proj.photo}
                    alt={`${proj.title} - Vista Principal`}
                    aspectRatio="16 / 10"
                  />
                  {proj.extraPhoto && (
                    <ClipRevealImage
                      src={proj.extraPhoto}
                      alt={`${proj.title} - Detalle Material`}
                      aspectRatio="16 / 10"
                    />
                  )}
                </div>
              </div>
            ))}
          </div>

          <div style={{ marginTop: '5rem', textAlign: 'center' }}>
            <h3 style={{ fontSize: '2rem', marginBottom: '1rem' }}>¿Tienes un proyecto en Santo Domingo?</h3>
            <p className="text-muted" style={{ maxWidth: '48ch', margin: '0 auto 2rem', fontSize: '1rem' }}>
              Coordinemos una sesión privada en nuestro showroom de Plaza Castilla para revisar planos y materiales.
            </p>
            <MagneticButton
              variant="primary"
              href={BRAND_DATA.whatsappUrl}
              target="_blank"
            >
              Conversar por WhatsApp
            </MagneticButton>
          </div>
        </div>
      </EditorialSurface>
    </motion.div>
  );
}

// ==========================================
// PÁGINA 4: NOSOTROS / ESTUDIO & FILOSOFÍA (#/nosotros)
// ==========================================
function AboutPage({ onNavigate }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.35, ease: CRAFT_EASE }}
    >
      <EditorialSurface variant="ambient" tone="primary" className="section-pad" style={{ paddingTop: '8.5rem' }}>
        <div className="site-container">
          <div style={{ maxWidth: '720px', marginBottom: '4rem' }}>
            <span className="meta-kicker">Dirección de Diseño & Espacio</span>
            <RevealText as="h1" immediate style={{ fontSize: 'clamp(2.4rem, 5.2vw, 4.4rem)', marginBottom: '1.25rem' }}>
              Beige & Ocre Studio
            </RevealText>
            <p className="text-muted" style={{ fontSize: '1.1rem', lineHeight: 1.6 }}>
              Estudio de interiorismo, showroom boutique y selección de revestimientos murales de alta gama en Santo Domingo.
            </p>
          </div>

          {/* Split de Historia & Fotografía del Espacio */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 'clamp(2rem, 5vw, 4.5rem)', alignItems: 'center', marginBottom: '5rem' }}>
            <div>
              <p style={{ fontSize: '1.05rem', lineHeight: 1.7, color: 'var(--text-primary)', marginBottom: '1.5rem' }}>
                Beige & Ocre es un estudio y showroom boutique en Santo Domingo dedicado a transformar espacios residenciales y comerciales mediante una curaduría especializada de papel tapiz de alta gama, piezas de arte en cristal de Murano y objetos decorativos artesanales. Operando en Plaza Castilla sobre la Av. Abraham Lincoln, atienden proyectos para residencias privadas, apartamentos y villas en República Dominicana.
              </p>
              <p style={{ fontSize: '1rem', lineHeight: 1.7, color: 'var(--text-muted)', marginBottom: '2rem' }}>
                Su práctica combina asesoría personalizada en diseño interior con suministro e instalación técnica profesional garantizada. Con un enfoque centrado en la textura, el relieve táctil y paletas neutras atemporales, seleccionan revestimientos vinílicos lavables de alta durabilidad y piezas exclusivas listas para entrega inmediata o por encargo.
              </p>
              <div style={{ borderLeft: '2px solid var(--accent)', paddingLeft: '1.5rem' }}>
                <p style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', fontStyle: 'italic', lineHeight: 1.3 }}>
                  "BEIGE AND OCRE no decora paredes. Define atmósferas."
                </p>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <ClipRevealImage
                src="./media/post_35.jpg"
                alt="Estudio y Oficina Beige & Ocre"
                aspectRatio="4 / 3"
                priority
              />
              <ClipRevealImage
                src="./media/post_36.jpg"
                alt="Zona de Estar con Cuadro Escultórico Kamai"
                aspectRatio="16 / 10"
              />
            </div>
          </div>

          {/* Estadísticas Verificadas */}
          <div className="stats-editorial-strip" style={{ marginBottom: '5rem' }}>
            {BRAND_DATA.stats.map((stat, idx) => (
              <CounterMetric
                key={idx}
                value={stat.value}
                label={stat.label}
                note={stat.note}
              />
            ))}
          </div>

          {/* 4 Pasos del Proceso Verificado */}
          <div style={{ paddingTop: '4rem', borderTop: '1px solid var(--border-hairline)' }}>
            <span className="meta-kicker">Metodología de Trabajo</span>
            <h2 style={{ fontSize: 'clamp(2rem, 3.8vw, 3.2rem)', marginBottom: '2.5rem' }}>
              El Proceso Beige & Ocre
            </h2>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '2rem' }}>
              {PROCESS_STEPS.map((step) => (
                <div
                  key={step.step}
                  style={{
                    backgroundColor: '#FFFFFF',
                    border: '1px solid var(--border-hairline)',
                    padding: '2rem',
                    borderRadius: 'var(--radius-card)'
                  }}
                >
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '1.25rem', color: 'var(--accent)', marginBottom: '0.75rem' }}>
                    {step.step}
                  </div>
                  <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>{step.title}</h3>
                  <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </EditorialSurface>
    </motion.div>
  );
}

// ==========================================
// PÁGINA 5: CONTACTO / SHOWROOM & COORDENADAS (#/contacto)
// ==========================================
function ContactPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.35, ease: CRAFT_EASE }}
    >
      <EditorialSurface variant="architectural" tone="primary" className="section-pad" style={{ paddingTop: '8.5rem' }}>
        <div className="site-container">
          <div style={{ maxWidth: '720px', marginBottom: '4rem' }}>
            <span className="meta-kicker">Visítanos en Plaza Castilla</span>
            <RevealText as="h1" immediate style={{ fontSize: 'clamp(2.4rem, 5.2vw, 4.4rem)', marginBottom: '1.25rem' }}>
              Showroom & Contacto
            </RevealText>
            <p className="text-muted" style={{ fontSize: '1.1rem', lineHeight: 1.6 }}>
              Atención exclusiva por cita previa en Santo Domingo. Agenda tu visita para examinar muestras físicas de papel tapiz y piezas de Murano.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 'clamp(2rem, 5vw, 4rem)', marginBottom: '5rem' }}>
            {/* Tarjeta de Coordenadas */}
            <div
              style={{
                backgroundColor: '#FFFFFF',
                border: '1px solid var(--border-hairline)',
                padding: 'clamp(1.75rem, 4vw, 3rem)',
                borderRadius: 'var(--radius-card)',
                display: 'flex',
                flexDirection: 'column',
                gap: '2rem'
              }}
            >
              <div>
                <span className="meta-kicker">Ubicación Física</span>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Plaza Castilla</h3>
                <p style={{ color: 'var(--text-muted)', lineHeight: 1.6 }}>{BRAND_DATA.location}</p>
                <p style={{ color: 'var(--text-muted)' }}>Santo Domingo, República Dominicana</p>
                <div style={{ marginTop: '1rem' }}>
                  <a
                    href={BRAND_DATA.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="craft-link-underline"
                    style={{ color: 'var(--accent)', fontWeight: 500 }}
                  >
                    Cómo llegar en Google Maps <ArrowUpRight size={16} />
                  </a>
                </div>
              </div>

              <div>
                <span className="meta-kicker">Horario Verificado</span>
                <p style={{ fontWeight: 500 }}>Lunes a Viernes: 9:00 - 19:45</p>
                <p style={{ fontWeight: 500 }}>Sábados: 10:00 - 16:00</p>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '0.25rem' }}>
                  Solo por citas coordinadas
                </p>
              </div>

              <div>
                <span className="meta-kicker">Canales Directos</span>
                <p style={{ fontWeight: 500, fontSize: '1.1rem' }}>WhatsApp: {BRAND_DATA.phone}</p>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginTop: '0.25rem' }}>
                  Instagram: @beigeandocrerd
                </p>
              </div>

              <div>
                <MagneticButton
                  variant="primary"
                  href={BRAND_DATA.whatsappUrl}
                  target="_blank"
                  style={{ width: '100%' }}
                >
                  Agendar Cita por WhatsApp
                </MagneticButton>
              </div>
            </div>

            {/* Tarjeta de Marcas y Cobertura */}
            <div
              style={{
                backgroundColor: 'var(--bg-secondary)',
                border: '1px solid var(--border-hairline)',
                padding: 'clamp(1.75rem, 4vw, 3rem)',
                borderRadius: 'var(--radius-card)',
                display: 'flex',
                flexDirection: 'column',
                gap: '2rem'
              }}
            >
              <div>
                <span className="meta-kicker">Marcas & Colecciones</span>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '1.25rem' }}>Curaduría Oficial</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {BRAND_DATA.marcas.map((m, idx) => (
                    <div key={idx} style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '0.65rem', borderBottom: '1px solid var(--border-hairline)' }}>
                      <strong>{m.name}</strong>
                      <span style={{ color: 'var(--text-muted)', fontSize: '0.88rem' }}>{m.desc}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <span className="meta-kicker">Cobertura Principal</span>
                <p style={{ fontSize: '0.94rem', color: 'var(--text-primary)', lineHeight: 1.6 }}>
                  Plaza Castilla (Av. Abraham Lincoln) · Avenida Anacaona · Distrito Nacional · Villas y Residencias en Santo Domingo.
                </p>
              </div>
            </div>
          </div>

          {/* Preguntas Frecuentes Verificadas */}
          <div style={{ paddingTop: '4rem', borderTop: '1px solid var(--border-hairline)' }}>
            <span className="meta-kicker">Preguntas Frecuentes</span>
            <h2 style={{ fontSize: 'clamp(2rem, 3.8vw, 3.2rem)', marginBottom: '2rem' }}>
              Dudas de Showroom & Materiales
            </h2>
            <EditorialAccordion items={FAQS_DATA} />
          </div>
        </div>
      </EditorialSurface>
    </motion.div>
  );
}

// ==========================================
// COMPONENTE PRINCIPAL: APP & HASH ROUTER
// ==========================================
export default function App() {
  const [currentHash, setCurrentHash] = useState(window.location.hash || '#/');

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash || '#/';
      setCurrentHash(hash);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateTo = (path) => {
    window.location.hash = path;
    setCurrentHash(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Enrutamiento según el hash
  const renderCurrentPage = () => {
    if (currentHash.startsWith('#/servicios/')) {
      const slug = currentHash.replace('#/servicios/', '');
      return <ServiceDetailPage key={currentHash} slug={slug} onNavigate={navigateTo} />;
    }

    switch (currentHash) {
      case '#/servicios':
        return <ServicesPage key="servicios" onNavigate={navigateTo} />;
      case '#/casos':
        return <CasesPage key="casos" onNavigate={navigateTo} />;
      case '#/nosotros':
        return <AboutPage key="nosotros" onNavigate={navigateTo} />;
      case '#/contacto':
        return <ContactPage key="contacto" onNavigate={navigateTo} />;
      case '#/':
      case '':
      default:
        return <HomePage key="home" onNavigate={navigateTo} />;
    }
  };

  return (
    <div className="site-wrapper">
      <ScrollProgressBar />
      <Navbar currentPath={currentHash} onNavigate={navigateTo} />
      <main>
        <AnimatePresence mode="wait">
          {renderCurrentPage()}
        </AnimatePresence>
      </main>
      <Footer onNavigate={navigateTo} />
    </div>
  );
}
