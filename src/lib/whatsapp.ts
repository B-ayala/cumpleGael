import { PARTY } from "../config/party";

/** Construye el link de WhatsApp con un mensaje de confirmación pre-armado. */
export function buildWhatsappUrl(): string {
  const message = `¡Hola! Confirmo que vamos al cumple número ${PARTY.age} de ${PARTY.childName} el ${PARTY.dateLabel} a las ${PARTY.timeLabel}. ⚽🎉`;
  return `https://wa.me/${PARTY.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
