/**
 * CATÁLOGO DE PRODUCTOS
 * ------------------------------------------------------------------
 * Para agregar un producto: copia uno de los objetos dentro de
 * `productos` de la categoría que quieras y cambia sus datos.
 * Para agregar una categoría: copia un bloque completo de categoría.
 *
 * Las imágenes van en /public/images/ y se referencian como '/images/archivo.png'.
 * La primera categoría de la lista es la que se muestra abierta al cargar la página.
 */

export type BadgeVariant = 'gold' | 'light';

export interface Producto {
  nombre: string;
  descripcion: string;
  imagen: string;
  imagenAlt: string;
  /** Presentación/empaque que se muestra en la tarjeta. */
  presentacion: {
    /** Ícono de Font Awesome, por ejemplo 'fa-box-open' o 'fa-weight-scale'. */
    icono: string;
    texto: string;
  };
  /** Etiqueta opcional en la esquina de la imagen (ej. "Best Seller"). */
  badge?: { texto: string; variante: BadgeVariant };
  /** Mensaje que se envía por WhatsApp al pulsar "Consultar Precio". */
  mensajeWhatsApp: string;
}

export interface Categoria {
  /** Identificador único (sin espacios ni tildes). Se usa como id del panel. */
  id: string;
  nombre: string;
  /** Ícono de Font Awesome para el botón de la pestaña. */
  icono: string;
  productos: Producto[];
}

export const categorias: Categoria[] = [
  {
    id: 'hamburguesas',
    nombre: 'Hamburguesas',
    icono: 'fa-solid fa-burger',
    productos: [
      {
        nombre: 'Clásica 80/20',
        descripcion:
          'El equilibrio perfecto entre carne magra y grasa. Ideal para parrillas y planchas, retiene sus jugos garantizando un sabor inigualable.',
        imagen: '/images/hamburguesa-clasica-sin-fondo.png',
        imagenAlt: 'Hamburguesa Clásica 80/20',
        presentacion: { icono: 'fa-box-open', texto: 'Caja x 40 und. (120g c/u)' },
        badge: { texto: 'Best Seller', variante: 'gold' },
        mensajeWhatsApp: 'Hola, me interesa la Hamburguesa Clásica 80/20.',
      },
      {
        nombre: 'Wagyu Style',
        descripcion:
          'Hamburguesa de alta gama con marmoleo excepcional. Textura que se deshace en la boca, pensada para restaurantes gourmet.',
        imagen: '/images/carne-wagyu-sin-fondo.png',
        imagenAlt: 'Premium Wagyu Style',
        presentacion: { icono: 'fa-box-open', texto: 'Caja x 20 und. (180g c/u)' },
        badge: { texto: 'Premium', variante: 'light' },
        mensajeWhatsApp: 'Hola, me interesa la Hamburguesa Premium Wagyu.',
      },
      {
        nombre: 'Blend del Chef',
        descripcion:
          'Mezcla exclusiva de asado de tira, bife y pecho. Un perfil de sabor complejo e intenso, con la mordida perfecta.',
        imagen: '/images/hamburguesa-combinada-sin-fondo.png',
        imagenAlt: 'Blend Especial',
        presentacion: { icono: 'fa-box-open', texto: 'Caja x 30 und. (150g c/u)' },
        mensajeWhatsApp: 'Hola, me interesa el Blend Especial.',
      },
    ],
  },
  {
    id: 'embutidos',
    nombre: 'Embutidos',
    icono: 'fa-solid fa-hotdog',
    productos: [
      {
        nombre: 'Salchicha Frankfurt',
        descripcion:
          'Embutido tradicional ligeramente ahumado. Piel natural crujiente y sabor balanceado. Ideal para hot dogs premium.',
        imagen: '/images/salchicha-frankfurt-sin-fondo.png',
        imagenAlt: 'Salchicha Frankfurt',
        presentacion: { icono: 'fa-weight-scale', texto: 'Paquete x 2 Kg' },
        mensajeWhatsApp: 'Hola, me interesa la Salchicha Frankfurt.',
      },
    ],
  },
  {
    id: 'cortes',
    nombre: 'Cortes Especiales',
    icono: 'fa-solid fa-utensils',
    productos: [
      {
        nombre: 'Tomahawk Steak',
        descripcion:
          'Corte espectacular con hueso expuesto. Excelente infiltración de grasa para una experiencia tierna y jugosa.',
        imagen: '/images/Tomahawk-Steak-sin-fondo.png',
        imagenAlt: 'Tomahawk Steak',
        presentacion: { icono: 'fa-weight-scale', texto: 'Piezas de 1 - 1.2 Kg' },
        mensajeWhatsApp: 'Hola, me interesa el Tomahawk.',
      },
    ],
  },
];
