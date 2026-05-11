import { z } from 'zod';

export const EVENT_TYPES = [
  { value: 'engagement', label: 'Engagement Decoration' },
  { value: 'kamu', label: 'Kamu Decoration' },
  { value: 'henna-party', label: 'Henna Party' },
  { value: 'arabian-night', label: 'Arabian Night' },
  { value: 'nikkah', label: 'Nikkah Decoration' },
  { value: 'naming', label: 'Naming Ceremony' },
  { value: 'picnic', label: 'Luxury Picnic Setup' },
  { value: 'rentals', label: 'Event Rentals' },
  { value: 'other', label: 'Other / Not Sure Yet' },
] as const;

const EVENT_TYPE_VALUES = [
  'engagement',
  'kamu',
  'henna-party',
  'arabian-night',
  'nikkah',
  'naming',
  'picnic',
  'rentals',
  'other',
] as const;

export const leadSchema = z.object({
  name: z
    .string()
    .min(2, 'Please enter your full name')
    .max(80, 'Name is too long'),
  phone: z
    .string()
    .min(10, 'Enter a valid phone number (at least 10 digits)')
    .max(15, 'Phone number is too long')
    .regex(/^[+\d\s()-]+$/, 'Enter a valid phone number'),
  eventType: z.enum(EVENT_TYPE_VALUES, {
    error: 'Please select an event type',
  }),
  date: z.string().min(1, 'Please select a date'),
  vision: z
    .string()
    .min(10, 'Tell us a little more about your vision (at least 10 characters)')
    .max(1000, 'Vision description is too long'),
});

export type LeadFormData = z.infer<typeof leadSchema>;
