// Número de WhatsApp compartido entre todas las páginas del sitio.
// TODO: reemplazar por el número real del taller antes de publicar.
export const WHATSAPP_NUMBER = "525512345678";

export const DEFAULT_MESSAGE =
	"Hola, quiero información sobre una piñata para mi fiesta.";

export function buildWaLink(
	message: string,
	number: string = WHATSAPP_NUMBER,
): string {
	return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}

export function formatWaDisplay(number: string = WHATSAPP_NUMBER): string {
	return `+${number.slice(0, 2)} ${number.slice(2)}`;
}
