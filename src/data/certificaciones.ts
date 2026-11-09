/**
 * TARJETAS DE "GARANTÍA DE EXCELENCIA"
 * ------------------------------------------------------------------
 * Cada tarjeta tiene un estilo visual (variante):
 *  - 'red'  : borde rojo al pasar el mouse
 *  - 'gold' : tarjeta destacada (elevada, con borde dorado)
 *  - 'gray' : borde gris al pasar el mouse
 */

export type CertVariant = 'red' | 'gold' | 'gray';

export interface Certificacion {
  titulo: string;
  descripcion: string;
  /** Ícono de Font Awesome, por ejemplo 'fa-solid fa-shield-halved'. */
  icono: string;
  variante: CertVariant;
}

export const certificaciones: Certificacion[] = [
  {
    titulo: 'Cadena de Frío',
    descripcion:
      'Mantenemos temperaturas controladas en todo el proceso, desde el corte hasta la puerta de tu negocio, asegurando frescura absoluta en cada entrega.',
    icono: 'fa-solid fa-temperature-arrow-down',
    variante: 'red',
  },
  {
    titulo: 'Inocuidad Total',
    descripcion:
      'Cumplimos estrictamente con las normas sanitarias vigentes (HACCP). Procesos estandarizados de desinfección que garantizan productos 100% seguros.',
    icono: 'fa-solid fa-shield-halved',
    variante: 'gold',
  },
  {
    titulo: 'Empaque Óptimo',
    descripcion:
      'Utilizamos sistemas de sellado al vacío de grado industrial y empaques de alta resistencia que prolongan significativamente la vida útil en tu inventario.',
    icono: 'fa-solid fa-boxes-packing',
    variante: 'gray',
  },
];
