/**
 * CATÁLOGO DE PRODUCTOS
 * ------------------------------------------------------------------
 * Se muestran en la sección "Catálogo" en el mismo orden de esta lista,
 * un producto a la vez (la rueda gira al hacer scroll).
 *
 * Para agregar un producto: copia uno de los objetos, cambia sus datos
 * y pon su imagen (PNG o WEBP sin fondo, cuadrada) en /public/images/products/.
 *
 * El botón "Consultar precio" arma solo el mensaje de WhatsApp con el
 * nombre del producto (ver `whatsappMessages.producto` en src/config/site.ts).
 */

export interface Producto {
  /** Primera línea del nombre (en blanco). */
  nombre: string;
  /** Segunda línea opcional del nombre (en dorado cursiva). Ej: "de pollo". */
  detalle?: string;
  descripcion: string;
  /** 2 o 3 beneficios cortos. En pantallas bajas se ocultan para que todo entre. */
  beneficios: string[];
  /** Datos del recuadro de presentación. Ícono de Font Awesome (ej. 'fa-solid fa-weight-scale'). */
  presentacion: { icono: string; texto: string }[];
  /** Ruta de la imagen dentro de /public. */
  imagen: string;
  imagenAlt: string;
}

export const productos: Producto[] = [
  {
    nombre: 'Hamburguesa',
    detalle: 'de pollo',
    descripcion:
      'Elaborada con carne de pollo de alta calidad. Sabor jugoso y textura suave, lista en pocos minutos.',
    beneficios: [
      'Ideal para parrilla, plancha, sartén o freidora de aire',
      'Fácil y rápida de preparar',
      'Presentación económica para negocios y consumo familiar',
    ],
    presentacion: [
      { icono: 'fa-solid fa-layer-group', texto: '16 unidades' },
      { icono: 'fa-solid fa-weight-scale', texto: 'Peso neto 1 kg' },
    ],
    imagen: '/images/products/hamburguesa de pollo.webp',
    imagenAlt: 'Paquete de Hamburguesa de Pollo El Flaquito con hamburguesas crudas apiladas',
  },
  {
    nombre: 'Hamburguesa',
    detalle: 'de carne',
    descripcion: 'Elaborada con carne de alta calidad. Sabor jugoso y textura suave, lista en pocos minutos.',
    beneficios: [
      'Ideal para parrilla, plancha, sartén o freidora de aire',
      'Fácil y rápida de preparar',
      'Presentación económica para negocios y consumo familiar',
    ],
    presentacion: [
      { icono: 'fa-solid fa-layer-group', texto: '16 unidades' },
      { icono: 'fa-solid fa-weight-scale', texto: 'Peso neto 1 kg' },
    ],
    imagen: '/images/products/hamburguesa de carne.webp',
    imagenAlt: 'Paquete de Hamburguesa de Carne El Flaquito con hamburguesas crudas apiladas',
  },
  {
    nombre: 'Chorizo',
    detalle: 'en tripa',
    descripcion: 'Elaborado con carne seleccionada. Sabor tradicional y excelente rendimiento en cocina.',
    beneficios: [
      'Presentación económica para uso comercial',
      'Fácil almacenamiento y conservación',
    ],
    presentacion: [
      { icono: 'fa-solid fa-bag-shopping', texto: 'Bolsa de 5 kg' },
      { icono: 'fa-solid fa-snowflake', texto: 'Congelado' },
    ],
    imagen: '/images/products/chorizo en tripa.webp',
    imagenAlt: 'Chorizos en tripa crudos El Flaquito',
  },
  {
    nombre: 'Choriburguer',
    descripcion:
      'El sabor auténtico del chorizo en formato hamburguesa, para preparaciones jugosas y llenas de sabor.',
    beneficios: [
      'Textura jugosa y excelente rendimiento',
      'Fácil y rápida preparación',
      'Ideal para parrilla, plancha o sartén',
    ],
    presentacion: [
      { icono: 'fa-solid fa-layer-group', texto: '8 unidades' },
      { icono: 'fa-solid fa-weight-scale', texto: '60 g c/u' },
    ],
    imagen: '/images/products/choriburguer.webp',
    imagenAlt: 'Choriburguer El Flaquito: hamburguesas de chorizo crudas junto a su envase',
  },
  {
    nombre: 'Salchicha',
    detalle: 'huachana',
    descripcion:
      'Elaborada con carne de alta calidad y embutida en tripa natural. El sabor auténtico de la tradicional salchicha huachana.',
    beneficios: [
      'Excelente textura y jugosidad',
      'Ideal para desayunos, frituras, parrillas y restaurantes',
    ],
    presentacion: [
      { icono: 'fa-solid fa-bag-shopping', texto: 'Bolsa de 5 kg' },
      { icono: 'fa-solid fa-snowflake', texto: 'Congelado' },
    ],
    imagen: '/images/products/salchicha huachana.webp',
    imagenAlt: 'Salchicha huachana El Flaquito',
  },
];

/** Nombre completo del producto (ej. "Hamburguesa de pollo"). */
export const nombreCompleto = (p: Producto): string => (p.detalle ? `${p.nombre} ${p.detalle}` : p.nombre);
