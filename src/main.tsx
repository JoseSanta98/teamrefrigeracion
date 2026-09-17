import { useState } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const PHONE = "614 313 0551";
const WHATSAPP = "526141420285";
const WHATSAPP_MESSAGE = "Hola, deseo solicitar una cotización";

function Mark({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`brand-mark ${compact ? "brand-mark--compact" : ""}`} aria-label="Team Refrigeración">
      <svg viewBox="0 0 61 32" aria-hidden="true">
        <path className="mark-green" d="M3 28 17 4h10L13 28Z" />
        <path className="mark-plum" d="M21 28 35 4h10L31 28Z" />
        <path className="mark-gold" d="M39 28 53 4h10L49 28Z" />
      </svg>
      {!compact && (
        <span className="brand-name">
          <strong>Team</strong>
          <em>Refrigeración</em>
        </span>
      )}
    </div>
  );
}

function SiteImage({ title, caption, src, alt }: { title: string; caption: string; src: string; alt: string }) {
  return (
    <figure className="site-image">
      <img src={src} alt={alt} />
      <figcaption>
        <strong>{title}</strong>
        <small>{caption}</small>
      </figcaption>
    </figure>
  );
}

const heroSlides = [
  {
    image: "/images/instalacion-hvac.png",
    alt: "Equipos de climatización instalados en una azotea comercial",
    category: "Operación industrial",
    title: "Instalación y mantenimiento",
    detail: "Soluciones para equipos que mantienen en marcha espacios y procesos.",
  },
  {
    image: "/images/refrigeracion-comercial.png",
    alt: "Entrada a un cuarto frío comercial",
    category: "Refrigeración comercial",
    title: "Conservación bajo control",
    detail: "Cuartos fríos y equipos de refrigeración para operación continua.",
  },
  {
    image: "/images/climatizacion-interior.png",
    alt: "Espacio comercial climatizado con equipo de aire acondicionado",
    category: "Confort y eficiencia",
    title: "Climatización de espacios",
    detail: "Equipos y atención técnica para hogares, comercios y oficinas.",
  },
];

function WhatsAppButton({ floating = false }: { floating?: boolean }) {
  const href = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;
  return (
    <a className={floating ? "whatsapp-float" : "button button--lime"} href={href} target="_blank" rel="noreferrer">
      <span className="whatsapp-symbol" aria-hidden="true">◔</span>
      <span>{floating ? "WhatsApp" : "Escribir por WhatsApp"}</span>
    </a>
  );
}

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const links = [
    ["Soluciones", "#soluciones"],
    ["VRF", "#vrf"],
    ["Empresa", "#empresa"],
    ["Contacto", "#contacto"],
  ];

  return (
    <header className="site-header">
      <div className="shell header-inner">
        <a href="#inicio" className="brand-link"><Mark /></a>
        <button className="menu-toggle" onClick={() => setIsOpen(!isOpen)} aria-expanded={isOpen} aria-controls="site-menu">
          <span>{isOpen ? "Cerrar" : "Menú"}</span><i aria-hidden="true" />
        </button>
        <nav id="site-menu" className={isOpen ? "site-nav site-nav--open" : "site-nav"} aria-label="Navegación principal">
          {links.map(([label, href]) => <a key={href} href={href} onClick={() => setIsOpen(false)}>{label}</a>)}
          <a href="#contacto" className="nav-cta" onClick={() => setIsOpen(false)}>Solicitar cotización <span>↗</span></a>
        </nav>
      </div>
    </header>
  );
}

function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);
  const slide = heroSlides[activeSlide];

  return (
    <section id="inicio" className="hero shell">
      <div className="hero-copy">
        <p className="eyebrow"><span /> Chihuahua, Chih. · Servicio técnico especializado</p>
        <h1>Temperatura bajo control.<br /><em>Operación en marcha.</em></h1>
        <p className="hero-summary">Climatización, refrigeración y mantenimiento para espacios residenciales, comerciales e industriales.</p>
        <div className="hero-actions">
          <a href="#contacto" className="button button--ink">Solicitar cotización <span>↗</span></a>
          <a href="#soluciones" className="text-link">Conocer soluciones <span>↓</span></a>
        </div>
      </div>
      <div className="hero-media">
        <div className="hero-stamp"><span>Desde</span><strong>+15</strong><small>años</small></div>
        <section className="hero-carousel" aria-label="Soluciones destacadas">
          <img src={slide.image} alt={slide.alt} />
          <div className="carousel-nav" aria-label="Elegir solución destacada">
            {heroSlides.map((item, index) => (
              <button key={item.title} className={index === activeSlide ? "is-active" : ""} onClick={() => setActiveSlide(index)} aria-label={"Ver " + item.title} aria-pressed={index === activeSlide} />
            ))}
          </div>
          <div className="hero-slide-card">
            <div><span className="slide-category"><i /> {slide.category}</span><strong>{slide.title}</strong></div>
            <p>{slide.detail}</p>
          </div>
        </section>
      </div>
    </section>
  );
}

function TrustStrip() {
  return (
    <section className="trust-strip" aria-label="Información principal">
      <div className="shell trust-grid">
        <p><b>+15</b><span>Años de experiencia</span></p>
        <p><b>Chihuahua</b><span>Atención local y directa</span></p>
        <p><b>L–V</b><span>9:00 a 15:00 hrs.</span></p>
        <a href={`tel:+526143130551`}><b>{PHONE}</b><span>Llamar ahora <i>↗</i></span></a>
      </div>
    </section>
  );
}

const services = [
  ["01", "Climatización", "Venta, instalación, mantenimiento y reparación de minisplit, unidades paquete, unidades divididas y calefacción a gas o diésel."],
  ["02", "Refrigeración industrial", "Cuartos fríos, chillers y soluciones térmicas para conservación de producto y procesos que exigen control de temperatura."],
  ["03", "Proyectos VRF / VRV", "Diseño, venta, instalación, reparación y diagnóstico de sistemas de volumen de refrigerante variable."],
  ["04", "Mantenimiento y diagnóstico", "Atención preventiva y correctiva para identificar fallas, recuperar rendimiento y extender la vida útil de los equipos."],
];

function Services() {
  return (
    <section id="soluciones" className="section services">
      <div className="shell">
        <div className="section-heading section-heading--wide">
          <div><p className="eyebrow"><span /> Soluciones</p><h2>Ingeniería aplicada a lo que <em>sí importa.</em></h2></div>
          <p>Una atención clara, desde la evaluación inicial hasta el servicio de cada equipo.</p>
        </div>
        <div className="service-list">
          {services.map(([number, title, description]) => (
            <article className="service-row" key={number}>
              <span className="service-number">{number}</span>
              <h3>{title}</h3>
              <p>{description}</p>
              <span className="service-arrow" aria-hidden="true">↗</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Vrf() {
  return (
    <section id="vrf" className="vrf-section">
      <div className="shell vrf-grid">
        <div className="vrf-art" aria-hidden="true">
          <div className="vrf-ring vrf-ring--one" /><div className="vrf-ring vrf-ring--two" />
          <div className="vrf-triangle vrf-triangle--plum" /><div className="vrf-triangle vrf-triangle--gold" /><div className="vrf-triangle vrf-triangle--green" />
          <span>VRF</span>
        </div>
        <div className="vrf-copy">
          <p className="eyebrow eyebrow--light"><span /> Sistemas de refrigerante variable</p>
          <h2>Una explicación corta para una solución <em>inteligente.</em></h2>
          <p>Los sistemas VRF permiten regular la temperatura de distintas zonas de un edificio de forma independiente. Son una alternativa para oficinas, comercios y proyectos con necesidades distintas en cada espacio.</p>
          <p>En Team Refrigeración evaluamos si esa tecnología es conveniente para tu proyecto.</p>
          <a href="#contacto" className="text-link text-link--light">Solicitar evaluación <span>↗</span></a>
        </div>
      </div>
    </section>
  );
}

function Brands() {
  return (
    <section className="brands-section">
      <div className="shell">
        <div className="brands-heading"><p className="eyebrow"><span /> Experiencia técnica</p><p>Servicio, mantenimiento y diagnóstico para equipos de marcas líderes.</p></div>
        <div className="brand-list" aria-label="Marcas de equipos atendidos">
          {['York', 'Carrier', 'Trane', 'Daikin', 'Rittal'].map((brand) => <span key={brand}>{brand}</span>)}
        </div>
      </div>
    </section>
  );
}

function Company() {
  return (
    <section id="empresa" className="section company">
      <div className="shell company-grid">
        <div className="company-copy">
          <p className="eyebrow"><span /> Team Refrigeración</p>
          <h2>Servicio técnico con mirada de <em>largo plazo.</em></h2>
          <p>La temperatura es parte del funcionamiento cotidiano de un espacio, una instalación y un proceso. Por eso el trabajo empieza entendiendo el equipo y la necesidad real antes de proponer una solución.</p>
          <p>Con más de quince años de experiencia, Team Refrigeración acompaña proyectos de climatización y refrigeración en Chihuahua con atención directa y criterio técnico.</p>
          <a href="#contacto" className="button button--outline">Hablar con Team <span>↗</span></a>
        </div>
        <div className="company-media">
          <SiteImage
            src="/images/refrigeracion-comercial.png"
            alt="Entrada a un cuarto frío comercial"
            title="Cuartos fríos y conservación"
            caption="Soluciones térmicas para conservar producto y sostener la operación."
          />
          <div className="company-note"><span>01</span><p>Diagnóstico antes de<br />cambiar una pieza.</p></div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contacto" className="contact-section">
      <div className="shell contact-top">
        <div><p className="eyebrow eyebrow--light"><span /> Contacto</p><h2>Cuéntanos qué<br /><em>necesitas resolver.</em></h2></div>
        <div className="contact-intro"><p>Escríbenos o llámanos para solicitar una cotización y recibir orientación sobre tu equipo o proyecto.</p><WhatsAppButton /></div>
      </div>
      <div className="shell contact-grid">
        <a href={`tel:+526143130551`} className="contact-card"><span>Teléfono</span><strong>{PHONE}</strong><small>Atención principal <i>↗</i></small></a>
        <a href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`} target="_blank" rel="noreferrer" className="contact-card"><span>WhatsApp</span><strong>614 142 0285</strong><small>Solicitar cotización <i>↗</i></small></a>
        <a href="mailto:teamrefrigeracion@yahoo.com.mx" className="contact-card"><span>Correo</span><strong>teamrefrigeracion<br />@yahoo.com.mx</strong><small>Consultas y cotizaciones <i>↗</i></small></a>
        <a href="https://maps.google.com/?q=San+Luis+Potosi+2718+Avicola+II+Chihuahua" target="_blank" rel="noreferrer" className="contact-card"><span>Ubicación</span><strong>San Luis Potosí 2718</strong><small>Avícola II, Chihuahua <i>↗</i></small></a>
      </div>
    </section>
  );
}

function Footer() {
  return <footer className="footer"><div className="shell footer-inner"><Mark compact /><p>© {new Date().getFullYear()} Team Refrigeración</p><p>Lunes a viernes · 9:00 a 15:00 hrs.</p></div></footer>;
}

function App() {
  return <><Header /><main><Hero /><TrustStrip /><Services /><Vrf /><Brands /><Company /><Contact /></main><Footer /><WhatsAppButton floating /></>;
}

createRoot(document.getElementById("root")!).render(<App />);
