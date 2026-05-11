import { WA_PHONE } from './constants';

export function buildWhatsAppUrl(message: string, phone: string = WA_PHONE): string {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${phone}?text=${encoded}`;
}

export function buildDefaultWhatsAppUrl(): string {
  return buildWhatsAppUrl(
    "Hi Decor Adorne! 👋 I'd love to discuss my upcoming event. Could we schedule a consultation?",
  );
}

export function buildLeadWhatsAppUrl(data: {
  name: string;
  eventType: string;
  date: string;
  vision: string;
}): string {
  const eventLabel = data.eventType
    .replace(/-/g, ' ')
    .replace(/\b\w/g, (c) => c.toUpperCase());

  const message = [
    `Hi Decor Adorne! 👋`,
    ``,
    `I'd love to discuss my upcoming event.`,
    ``,
    `*Name:* ${data.name}`,
    `*Event Type:* ${eventLabel}`,
    `*Event Date:* ${data.date}`,
    `*My Vision:* ${data.vision}`,
    ``,
    `Looking forward to hearing from you!`,
  ].join('\n');

  return buildWhatsAppUrl(message);
}
