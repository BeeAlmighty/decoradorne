export interface NavLink {
  label: string;
  href: string;
}

export interface Stat {
  value: string;
  label: string;
}

export interface Testimonial {
  name: string;
  event: string;
  quote: string;
  rating: number;
}

export interface GalleryItem {
  id: string;
  service: string;
  category: string;
  alt: string;
  gradient: [string, string];
}

export type JsonLdData = Record<string, unknown>;
