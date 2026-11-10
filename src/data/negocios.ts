/**
 * TIPOS DE NEGOCIO ("¿Qué negocio vas a abastecer?")
 * ------------------------------------------------------------------
 * Cada tipo muestra los productos recomendados (2 o 3) y arma un mensaje
 * de WhatsApp con el tipo de negocio y esos productos.
 *
 * - productos: índices de la lista de src/data/productos.ts
 *   (0 = Hamburguesa de pollo, 1 = Hamburguesa de carne, 2 = Chorizo en tripa,
 *    3 = Choriburguer, 4 = Salchicha huachana)
 * - quien: cómo se presenta el cliente en el mensaje ("tengo una hamburguesería...")
 * - boton: final del texto del botón ("Cotizar para mi ...")
 */

export interface Negocio {
  id: string;
  nombre: string;
  icono: string;
  texto: string;
  productos: number[];
  quien: string;
  boton: string;
}

export const negocios: Negocio[] = [
  {
    id: 'hamburgueserias',
    nombre: 'Hamburgueserías',
    icono: 'fa-solid fa-burger',
    texto: 'Medallones parejos y jugosos, listos en minutos en plancha o parrilla: cada pedido sale igual que el anterior.',
    productos: [0, 1, 3],
    quien: 'una hamburguesería',
    boton: 'hamburguesería',
  },
  {
    id: 'restaurantes',
    nombre: 'Restaurantes y parrillas',
    icono: 'fa-solid fa-fire-burner',
    texto: 'Embutidos de sabor tradicional y gran rendimiento en cocina, con presentaciones pensadas para uso comercial.',
    productos: [2, 1, 4],
    quien: 'un restaurante',
    boton: 'restaurante',
  },
  {
    id: 'desayunos',
    nombre: 'Desayunos y cafeterías',
    icono: 'fa-solid fa-mug-hot',
    texto: 'La salchicha huachana de siempre para tus desayunos, y hamburguesas que se preparan en pocos minutos.',
    productos: [4, 0],
    quien: 'una cafetería',
    boton: 'cafetería',
  },
  {
    id: 'food-trucks',
    nombre: 'Food trucks y eventos',
    icono: 'fa-solid fa-truck',
    texto: 'Preparación rápida y un sabor que destaca, para servir volumen sin perder calidad.',
    productos: [2, 3, 1],
    quien: 'un food truck',
    boton: 'food truck',
  },
  {
    id: 'bodegas',
    nombre: 'Bodegas y distribuidoras',
    icono: 'fa-solid fa-store',
    texto: 'Presentaciones económicas y fáciles de almacenar, pensadas para negocios y consumo familiar.',
    productos: [1, 0, 4],
    quien: 'una bodega / distribuidora',
    boton: 'negocio',
  },
];
