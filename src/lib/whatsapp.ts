import { WA_PHONE } from './constants';
import type { LeadFormData } from './schemas/lead';

export function buildWhatsAppUrl(message: string, phone: string = WA_PHONE): string {
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}

export function buildDefaultWhatsAppUrl(): string {
  return buildWhatsAppUrl(
    "Hi Decor Adorne! 👋 I'd love to discuss my upcoming event. Could we schedule a consultation?",
  );
}

function fmt24to12(time: string): string {
  const [h, m] = time.split(':').map(Number);
  const period = h >= 12 ? 'PM' : 'AM';
  const hour = h % 12 || 12;
  return `${hour}:${String(m).padStart(2, '0')} ${period}`;
}

function humanise(slug: string): string {
  return slug.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());
}

export function buildLeadWhatsAppUrl(data: LeadFormData): string {
  const venueParts = [
    data.venueSetting === 'indoor' ? 'Indoors' : 'Outdoors',
    data.venueLevel === 'upstairs'   ? '· Upstairs'
    : data.venueLevel === 'downstairs' ? '· Downstairs'
    : data.venueLevel === 'ground'     ? '· Ground level'
    : '',
  ].filter(Boolean);

  const timeLine =
    data.startTime && data.endTime
      ? `${fmt24to12(data.startTime)} – ${fmt24to12(data.endTime)}`
      : data.startTime
      ? `From ${fmt24to12(data.startTime)}`
      : 'TBD';

  const lightingLine =
    data.lightingSourcing === 'decor-adorne'
      ? 'Please source a lighting company for us'
      : 'Client will handle lighting';

  const lines = [
    `Hi Decor Adorne! 👋`,
    ``,
    `I'd love to book event decoration.`,
    ``,
    `*Name:* ${data.name}`,
    `*Phone:* ${data.phone}`,
    `*Event Type:* ${humanise(data.eventType)}`,
    `*Date:* ${data.date}`,
    `*Time:* ${timeLine}`,
    ``,
    `*Location:* ${data.location}`,
    `*Venue:* ${venueParts.join(' ')}`,
    `*Guests:* ${data.guestCount}`,
    ``,
    `*Lighting:* ${lightingLine}`,
    ``,
    `*Concept & Brief:*`,
    data.vision,
    ``,
    `Looking forward to creating something beautiful! ✨`,
  ];

  return buildWhatsAppUrl(lines.join('\n'));
}
