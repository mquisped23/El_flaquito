import { site } from '../config/site';

/** Genera un enlace de WhatsApp al número de la empresa con un mensaje predefinido. */
export function whatsappLink(message: string, phone: string = site.contact.whatsapp): string {
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}
