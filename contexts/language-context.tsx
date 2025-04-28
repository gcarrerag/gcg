"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

type Language = "es" | "ca"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

interface LanguageProviderProps {
  children: ReactNode
}

export const translations = {
  es: {
    // Header
    "nav.home": "Inicio",
    "nav.services": "Servicios",
    "nav.portfolio": "Portafolio",
    "nav.process": "Proceso",
    "nav.testimonials": "Testimonios",
    "nav.contact": "Contacto",
    "nav.consultation": "Consulta Gratis",

    // Hero
    "hero.badge": "GCG Solutions",
    "hero.title.create": "Creamos",
    "hero.title.web": "Experiencias Web",
    "hero.title.spectacular": "Excepcionales",
    "hero.description":
      "Transformamos ideas en sitios web sofisticados con tecnologías de última generación que impulsan tu negocio hacia el éxito.",
    "hero.cta.quote": "Solicitar Presupuesto",
    "hero.cta.portfolio": "Ver Portafolio",
    "hero.stats.projects": "Proyectos Completados",
    "hero.stats.experience": "Años de Experiencia",
    "hero.stats.clients": "Clientes Satisfechos",
    "hero.scroll": "Scroll",

    // Services
    "services.badge": "Nuestros Servicios",
    "services.title": "Soluciones Web Sofisticadas",
    "services.description":
      "Ofrecemos un conjunto completo de servicios para crear y mantener tu presencia digital con tecnologías de última generación.",
    "services.uiux.title": "Diseño UI/UX",
    "services.uiux.description":
      "Creamos interfaces atractivas y experiencias de usuario intuitivas que cautivan a tu audiencia.",
    "services.development.title": "Desarrollo Web",
    "services.development.description":
      "Construimos sitios web rápidos, seguros y escalables con las últimas tecnologías.",
    "services.ecommerce.title": "E-Commerce",
    "services.ecommerce.description": "Desarrollamos tiendas online que convierten visitantes en clientes satisfechos.",
    "services.seo.title": "SEO",
    "services.seo.description": "Optimizamos tu sitio para los motores de búsqueda y aumentamos tu visibilidad online.",
    "services.responsive.title": "Diseño Responsive",
    "services.responsive.description":
      "Aseguramos que tu web se vea perfecta en todos los dispositivos y tamaños de pantalla.",
    "services.maintenance.title": "Mantenimiento",
    "services.maintenance.description":
      "Ofrecemos soporte continuo para mantener tu sitio actualizado, seguro y funcionando sin problemas.",

    // Portfolio
    "portfolio.badge": "Nuestro Portafolio",
    "portfolio.title": "Proyectos Destacados",
    "portfolio.description":
      "Explora nuestra selección de trabajos recientes y descubre cómo hemos ayudado a nuestros clientes a alcanzar sus objetivos digitales con soluciones innovadoras.",
    "portfolio.filter.all": "Todos",
    "portfolio.filter.ecommerce": "E-Commerce",
    "portfolio.filter.corporate": "Corporativo",
    "portfolio.filter.landing": "Landing Pages",
    "portfolio.details": "Ver Detalles",
    "portfolio.technologies": "Tecnologías:",
    "portfolio.visit": "Visitar Sitio",

    // Process
    "process.badge": "Nuestro Proceso",
    "process.title": "Cómo Trabajamos",
    "process.description":
      "Seguimos un proceso estructurado y transparente para asegurar que cada proyecto se entregue a tiempo, dentro del presupuesto y con la máxima calidad.",
    "process.discovery.title": "Descubrimiento",
    "process.discovery.description":
      "Analizamos tus necesidades, objetivos y público objetivo para definir la estrategia adecuada.",
    "process.design.title": "Diseño",
    "process.design.description":
      "Creamos wireframes y diseños visuales atractivos que reflejan tu marca y mejoran la experiencia del usuario.",
    "process.development.title": "Desarrollo",
    "process.development.description":
      "Construimos tu sitio web con código limpio, optimizado y siguiendo las mejores prácticas.",
    "process.testing.title": "Pruebas",
    "process.testing.description":
      "Realizamos pruebas exhaustivas para garantizar que todo funcione correctamente en todos los dispositivos.",
    "process.launch.title": "Lanzamiento",
    "process.launch.description":
      "Desplegamos tu sitio web y nos aseguramos de que esté configurado correctamente para el éxito.",
    "process.growth.title": "Crecimiento",
    "process.growth.description":
      "Proporcionamos soporte continuo y optimizaciones para ayudarte a crecer y evolucionar.",
    "process.workflow": "Flujo de trabajo continuo",

    // Testimonials
    "testimonials.badge": "Testimonios",
    "testimonials.title": "Lo Que Dicen Nuestros Clientes",
    "testimonials.description":
      "Nos enorgullece el impacto positivo que hemos tenido en los negocios de nuestros clientes. Aquí hay algunas historias de éxito que demuestran nuestro compromiso con la excelencia.",

    // CTA
    "cta.title": "¿Listo para Transformar tu Presencia Digital?",
    "cta.description":
      "Agenda una consulta gratuita y descubre cómo podemos ayudarte a crear una experiencia web que impulse tu negocio hacia el éxito.",
    "cta.button": "Solicitar Presupuesto",

    // Contact
    "contact.badge": "Contacto",
    "contact.title": "Hablemos de tu Proyecto",
    "contact.description":
      "Estamos aquí para responder tus preguntas y discutir cómo podemos ayudarte a alcanzar tus objetivos digitales con soluciones innovadoras.",
    "contact.info.title": "Información de Contacto",
    "contact.info.email": "Email",
    "contact.info.phone": "Teléfono",
    "contact.info.location": "Ubicación",
    "contact.hours.title": "Horario de Atención",
    "contact.hours.weekdays": "Lunes a Viernes: 9:00 - 18:00",
    "contact.hours.weekend": "Fines de Semana: Cerrado",
    "contact.chat.title": "Chat en vivo",
    "contact.chat.description": "Habla con nuestro asistente virtual 24/7",
    "contact.chat.button": "Iniciar Chat",
    "contact.form.title": "Envíanos un Mensaje",
    "contact.form.name": "Nombre",
    "contact.form.name.placeholder": "Tu nombre",
    "contact.form.email": "Email",
    "contact.form.email.placeholder": "tu@email.com",
    "contact.form.phone": "Teléfono",
    "contact.form.phone.placeholder": "+34 612 345 678",
    "contact.form.message": "Mensaje",
    "contact.form.message.placeholder": "Cuéntanos sobre tu proyecto...",
    "contact.form.submit": "Enviar Mensaje",
    "contact.form.sending": "Enviando...",

    // Footer
    "footer.newsletter.title": "Suscríbete a Nuestro Newsletter",
    "footer.newsletter.description":
      "Recibe las últimas tendencias en diseño web, consejos y ofertas exclusivas directamente en tu bandeja de entrada.",
    "footer.newsletter.placeholder": "Tu email",
    "footer.newsletter.button": "Suscribirse",
    "footer.services": "Servicios",
    "footer.services.design": "Diseño Web",
    "footer.services.development": "Desarrollo Web",
    "footer.services.ecommerce": "E-Commerce",
    "footer.services.seo": "SEO",
    "footer.services.maintenance": "Mantenimiento",
    "footer.company": "Empresa",
    "footer.company.about": "Sobre Nosotros",
    "footer.company.team": "Equipo",
    "footer.company.work": "Trabajos",
    "footer.company.testimonials": "Testimonios",
    "footer.company.blog": "Blog",
    "footer.legal": "Legal",
    "footer.legal.privacy": "Política de Privacidad",
    "footer.legal.terms": "Términos y Condiciones",
    "footer.legal.cookies": "Cookies",
    "footer.copyright": "Todos los derechos reservados.",
  },
  ca: {
    // Header
    "nav.home": "Inici",
    "nav.services": "Serveis",
    "nav.portfolio": "Portafoli",
    "nav.process": "Procés",
    "nav.testimonials": "Testimonis",
    "nav.contact": "Contacte",
    "nav.consultation": "Consulta Gratuïta",

    // Hero
    "hero.badge": "Disseny Web Elegant",
    "hero.title.create": "Creem",
    "hero.title.web": "Experiències Web",
    "hero.title.spectacular": "Excepcionals",
    "hero.description":
      "Transformem idees en llocs web sofisticats amb tecnologies d'última generació que impulsen el teu negoci cap a l'èxit.",
    "hero.cta.quote": "Sol·licitar Pressupost",
    "hero.cta.portfolio": "Veure Portafoli",
    "hero.stats.projects": "Projectes Completats",
    "hero.stats.experience": "Anys d'Experiència",
    "hero.stats.clients": "Clients Satisfets",
    "hero.scroll": "Scroll",

    // Services
    "services.badge": "Els Nostres Serveis",
    "services.title": "Solucions Web Sofisticades",
    "services.description":
      "Oferim un conjunt complet de serveis per crear i mantenir la teva presència digital amb tecnologies d'última generació.",
    "services.uiux.title": "Disseny UI/UX",
    "services.uiux.description":
      "Creem interfícies atractives i experiències d'usuari intuïtives que captiven la teva audiència.",
    "services.development.title": "Desenvolupament Web",
    "services.development.description": "Construïm llocs web ràpids, segurs i escalables amb les últimes tecnologies.",
    "services.ecommerce.title": "E-Commerce",
    "services.ecommerce.description": "Desenvolupem botigues online que converteixen visitants en clients satisfets.",
    "services.seo.title": "SEO",
    "services.seo.description":
      "Optimitzem el teu lloc per als motors de cerca i augmentem la teva visibilitat online.",
    "services.responsive.title": "Disseny Responsive",
    "services.responsive.description":
      "Assegurem que el teu web es vegi perfecte en tots els dispositius i mides de pantalla.",
    "services.maintenance.title": "Manteniment",
    "services.maintenance.description":
      "Oferim suport continu per mantenir el teu lloc actualitzat, segur i funcionant sense problemes.",

    // Portfolio
    "portfolio.badge": "El Nostre Portafoli",
    "portfolio.title": "Projectes Destacats",
    "portfolio.description":
      "Explora la nostra selecció de treballs recents i descobreix com hem ajudat als nostres clients a assolir els seus objectius digitals amb solucions innovadores.",
    "portfolio.filter.all": "Tots",
    "portfolio.filter.ecommerce": "E-Commerce",
    "portfolio.filter.corporate": "Corporatiu",
    "portfolio.filter.landing": "Landing Pages",
    "portfolio.details": "Veure Detalls",
    "portfolio.technologies": "Tecnologies:",
    "portfolio.visit": "Visitar Lloc",

    // Process
    "process.badge": "El Nostre Procés",
    "process.title": "Com Treballem",
    "process.description":
      "Seguim un procés estructurat i transparent per assegurar que cada projecte es lliuri a temps, dins del pressupost i amb la màxima qualitat.",
    "process.discovery.title": "Descobriment",
    "process.discovery.description":
      "Analitzem les teves necessitats, objectius i públic objectiu per definir l'estratègia adequada.",
    "process.design.title": "Disseny",
    "process.design.description":
      "Creem wireframes i dissenys visuals atractius que reflecteixen la teva marca i milloren l'experiència de l'usuari.",
    "process.development.title": "Desenvolupament",
    "process.development.description":
      "Construïm el teu lloc web amb codi net, optimitzat i seguint les millors pràctiques.",
    "process.testing.title": "Proves",
    "process.testing.description":
      "Realitzem proves exhaustives per garantir que tot funcioni correctament en tots els dispositius.",
    "process.launch.title": "Llançament",
    "process.launch.description":
      "Despleguem el teu lloc web i ens assegurem que estigui configurat correctament per a l'èxit.",
    "process.growth.title": "Creixement",
    "process.growth.description": "Proporcionem suport continu i optimitzacions per ajudar-te a créixer i evolucionar.",
    "process.workflow": "Flux de treball continu",

    // Testimonials
    "testimonials.badge": "Testimonis",
    "testimonials.title": "El Que Diuen Els Nostres Clients",
    "testimonials.description":
      "Ens enorgulleix l'impacte positiu que hem tingut en els negocis dels nostres clients. Aquí hi ha algunes històries d'èxit que demostren el nostre compromís amb l'excel·lència.",

    // CTA
    "cta.title": "Preparat per Transformar la teva Presència Digital?",
    "cta.description":
      "Agenda una consulta gratuïta i descobreix com podem ajudar-te a crear una experiència web que impulsi el teu negoci cap a l'èxit.",
    "cta.button": "Sol·licitar Pressupost",

    // Contact
    "contact.badge": "Contacte",
    "contact.title": "Parlem del teu Projecte",
    "contact.description":
      "Estem aquí per respondre les teves preguntes i discutir com podem ajudar-te a assolir els teus objectius digitals amb solucions innovadores.",
    "contact.info.title": "Informació de Contacte",
    "contact.info.email": "Email",
    "contact.info.phone": "Telèfon",
    "contact.info.location": "Ubicació",
    "contact.hours.title": "Horari d'Atenció",
    "contact.hours.weekdays": "Dilluns a Divendres: 9:00 - 18:00",
    "contact.hours.weekend": "Caps de Setmana: Tancat",
    "contact.chat.title": "Xat en viu",
    "contact.chat.description": "Parla amb el nostre assistent virtual 24/7",
    "contact.chat.button": "Iniciar Xat",
    "contact.form.title": "Envia'ns un Missatge",
    "contact.form.name": "Nom",
    "contact.form.name.placeholder": "El teu nom",
    "contact.form.email": "Email",
    "contact.form.email.placeholder": "tu@email.com",
    "contact.form.phone": "Telèfon",
    "contact.form.phone.placeholder": "+34 612 345 678",
    "contact.form.message": "Missatge",
    "contact.form.message.placeholder": "Explica'ns sobre el teu projecte...",
    "contact.form.submit": "Enviar Missatge",
    "contact.form.sending": "Enviant...",

    // Footer
    "footer.newsletter.title": "Subscriu-te al Nostre Newsletter",
    "footer.newsletter.description":
      "Rep les últimes tendències en disseny web, consells i ofertes exclusives directament a la teva safata d'entrada.",
    "footer.newsletter.placeholder": "El teu email",
    "footer.newsletter.button": "Subscriure's",
    "footer.services": "Serveis",
    "footer.services.design": "Disseny Web",
    "footer.services.development": "Desenvolupament Web",
    "footer.services.ecommerce": "E-Commerce",
    "footer.services.seo": "SEO",
    "footer.services.maintenance": "Manteniment",
    "footer.company": "Empresa",
    "footer.company.about": "Sobre Nosaltres",
    "footer.company.team": "Equip",
    "footer.company.work": "Treballs",
    "footer.company.testimonials": "Testimonis",
    "footer.company.blog": "Blog",
    "footer.legal": "Legal",
    "footer.legal.privacy": "Política de Privacitat",
    "footer.legal.terms": "Termes i Condicions",
    "footer.legal.cookies": "Cookies",
    "footer.copyright": "Tots els drets reservats.",
  },
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>("es")

  useEffect(() => {
    // Recuperar el idioma del localStorage si existe
    const savedLanguage = localStorage.getItem("language") as Language
    if (savedLanguage && (savedLanguage === "es" || savedLanguage === "ca")) {
      setLanguageState(savedLanguage)
    }
  }, [])

  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
    localStorage.setItem("language", lang)
  }

  const t = (key: string): string => {
    return translations[language][key] || key
  }

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>
}

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
