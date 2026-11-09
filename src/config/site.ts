/**
 * CONFIGURACIÓN GENERAL DEL SITIO
 * ------------------------------------------------------------------
 * Aquí se editan los datos de contacto, redes sociales, SEO y menús.
 * Cualquier cambio aquí se refleja automáticamente en toda la web
 * (navbar, menú móvil, hero, footer, botones de WhatsApp, etc.).
 */

export const site = {
  name: 'El Flaquito',
  url: 'https://www.elflaquito.com',
  logo: '/images/logo-sin-fondo.png',
  slogan: 'Sabor Peruano y Natural',

  seo: {
    title: 'El Flaquito | Catálogo de Productos Cárnicos Premium',
    description:
      'Distribución B2B de carnes, hamburguesas y embutidos premium para el sector gastronómico. Calidad garantizada, cadena de frío y entregas rápidas.',
    keywords:
      'carnes premium, embutidos, hamburguesas B2B, distribución de carnes, tomahawk, salchicha frankfurt, restaurantes, proveedores de carne',
    ogTitle: 'El Flaquito | Carnes y Embutidos Premium',
    ogDescription:
      'Abastece tu restaurante con nuestro catálogo de carnes y embutidos de alta gama. Solicita tu cotización.',
    ogImage: '/images/logo-sin-fondo.png',
    locale: 'es_PE',
  },

  contact: {
    /** Número de WhatsApp en formato internacional, solo dígitos (sin + ni espacios). */
    whatsapp: '51914226204',
    /** Teléfono tal como se muestra en la web. */
    phoneDisplay: '+51 914 226 204',
    email: 'charcuteria.flaquito@gmail.com',
    address: 'AV LOS EUCALIPTOS 298 MZ C LT 22 SUB LT 22A URB. CANTO BELLO S.J.L',
  },

  /** Mensajes predeterminados que se envían por WhatsApp desde cada botón. */
  whatsappMessages: {
    general:
      'Hola 😊, me gustaría conocer más sobre los productos de charcutería de El Flaquito 🧀🍖. ¿Podrían enviarme su catálogo? 📃',
    hero: 'Hola El Flaquito, quiero solicitar acceso al catálogo para mi negocio.',
    flotante: 'Hola, vengo de la página web y necesito información.',
    /** Botón "Consultar precio" de cada producto del catálogo. */
    producto: (nombre: string) => `Hola 😊, me gustaría recibir información y precio de: ${nombre}.`,
  },

  social: [
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/charcuteria_el_flaquito/',
      icon: 'fa-brands fa-instagram',
      hoverClass: 'hover:bg-brand-red hover:text-white hover:border-brand-red',
    },
    {
      name: 'Facebook',
      url: 'https://www.facebook.com/share/18iv1gAj6X/',
      icon: 'fa-brands fa-facebook-f',
      hoverClass: 'hover:bg-[#1877F2] hover:text-white hover:border-[#1877F2]',
    },
    {
      name: 'TikTok',
      url: 'https://www.tiktok.com/@charcuteria.flaqu?_r=1&_t=ZS-96TRgGz3eBI',
      icon: 'fa-brands fa-tiktok',
      hoverClass: 'hover:bg-white hover:text-black hover:border-white',
    },
  ],

  /**
   * Enlaces de navegación.
   * - label: texto en el navbar de escritorio
   * - mobileLabel: texto en el menú móvil
   * - footerLabel: texto en la columna "Explorar" del footer
   */
  nav: [
    { href: '#catalogo', label: 'Catálogo', mobileLabel: 'Catálogo B2B', footerLabel: 'Catálogo de Productos' },
    { href: '#nosotros', label: 'Tradición', mobileLabel: 'Nuestra Tradición', footerLabel: 'Nuestra Historia' },
    { href: '#certificaciones', label: 'Calidad', mobileLabel: 'Sello de Calidad', footerLabel: 'Garantía de Calidad' },
  ],
} as const;
