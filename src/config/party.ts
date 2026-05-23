/**
 * Configuración editable del cumpleaños.
 * Cambiá SOLO los valores de este archivo para personalizar la invitación
 * (nombre, fecha, hora, lugar, número de WhatsApp). No hace falta tocar componentes.
 */

export interface PartyConfig {
  /** Nombre que se muestra en grande en el hero y la torta. */
  childName: string;
  /** Edad que cumple. Se usa como número gigante. */
  age: number;
  /** Fecha/hora del evento en hora local (formato ISO: AAAA-MM-DDTHH:mm:ss). */
  dateISO: string;
  /** Texto legible de la fecha (lo que lee el invitado). */
  dateLabel: string;
  /** Hora legible. */
  timeLabel: string;
  /** Nombre del lugar. */
  venueName: string;
  /** Dirección del lugar. */
  venueAddress: string;
  /** WhatsApp en formato internacional sin "+" ni espacios (ej: 549351...). */
  whatsappNumber: string;
}

export const PARTY: PartyConfig = {
  childName: "Gaelito",
  age: 7,
  dateISO: "2026-06-06",
  dateLabel: "Sabado 6 de junio de 2026",
  timeLabel: "horario a coordinar",
  // ↓↓↓ DATOS DE EJEMPLO — reemplazá por los reales ↓↓↓
  venueName: "Casa de Mamá - La Ferrere",
  venueAddress: "Av. del Gol 1010 — (villa futbolística)",
  whatsappNumber: "5491166548950",
};

/** Imágenes servidas desde /public/assets (rutas relativas para hosting estático). */
export const IMAGES = {
  messiRonaldo: "assets/messi-ronaldo.jpg",
  gaelRide: "assets/gaelito.jpeg",
  gaelRobot: "assets/gael-ayala.jpeg",
} as const;

/**
 * Media pesada de fondo (estilo Daft Punk - Contact).
 * Si renombrás el archivo en /public/assets, actualizá esta ruta.
 * El nombre puede tener espacios/paréntesis: se codifican al usarse.
 */
export const MEDIA = {
  contactVideo: "assets/contact.mp4",
  // Música de fondo (Daft Punk - Contact). Dejá el archivo en /public/assets.
  // Si no existe, el botón de música no se muestra (sin control roto).
  contactAudio: "assets/contact.mp3",
} as const;
