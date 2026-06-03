import { z } from 'zod';

export const EVENT_TYPES = [
  { value: 'engagement',    label: 'Engagement Decoration', short: 'Engagement'    },
  { value: 'kamu',          label: 'Kamu Decoration',       short: 'Kamu'          },
  { value: 'henna-party',   label: 'Henna Party',           short: 'Henna Party'   },
  { value: 'arabian-night', label: 'Arabian Night',         short: 'Arabian Night' },
  { value: 'nikkah',        label: 'Nikkah Decoration',     short: 'Nikkah'        },
  { value: 'naming',        label: 'Naming Ceremony',       short: 'Naming'        },
  { value: 'picnic',        label: 'Luxury Picnic Setup',   short: 'Picnic'        },
  { value: 'rentals',       label: 'Event Rentals',         short: 'Rentals'       },
  { value: 'other',         label: 'Other / Not Sure Yet',  short: 'Other'         },
] as const;

export const VENUE_SETTINGS = [
  { value: 'indoor',  label: 'Indoors'  },
  { value: 'outdoor', label: 'Outdoors' },
] as const;

export const VENUE_LEVELS = [
  { value: 'ground',     label: 'Ground level' },
  { value: 'upstairs',   label: 'Upstairs'     },
  { value: 'downstairs', label: 'Downstairs'   },
] as const;

export const LIGHTING_OPTIONS = [
  { value: 'decor-adorne', label: 'Source it for us'       },
  { value: 'self',         label: "We'll handle it"        },
] as const;

const EVENT_TYPE_VALUES = EVENT_TYPES.map((e) => e.value) as [string, ...string[]];
const VENUE_SETTING_VALUES = VENUE_SETTINGS.map((v) => v.value) as [string, ...string[]];
const VENUE_LEVEL_VALUES   = VENUE_LEVELS.map((v) => v.value)   as [string, ...string[]];
const LIGHTING_VALUES      = LIGHTING_OPTIONS.map((l) => l.value) as [string, ...string[]];

export const leadSchema = z.object({
  // Step 1 — Contact
  name: z.string().min(2, 'Please enter your full name').max(80, 'Name is too long'),
  phone: z
    .string()
    .min(10, 'Enter a valid phone number (at least 10 digits)')
    .max(15, 'Phone number is too long')
    .regex(/^[+\d\s()-]+$/, 'Enter a valid phone number'),

  // Step 2 — Event
  eventType: z.enum(EVENT_TYPE_VALUES as [string, ...string[]], {
    error: 'Please select an event type',
  }),
  date: z.string().min(1, 'Please select a date'),
  startTime: z.string().optional(),
  endTime:   z.string().optional(),

  // Step 3 — Venue
  location: z
    .string()
    .min(2, 'Please enter your event location')
    .max(100, 'Location is too long'),
  venueSetting: z.enum(VENUE_SETTING_VALUES as [string, ...string[]], {
    error: 'Please select indoor or outdoor',
  }),
  venueLevel: z.enum(VENUE_LEVEL_VALUES as [string, ...string[]]).optional(),
  guestCount: z
    .number({ error: 'Please enter a number' })
    .min(1, 'Please enter at least 1 guest')
    .max(10_000, 'Please contact us directly for very large events'),

  // Step 4 — Vision
  lightingSourcing: z.enum(LIGHTING_VALUES as [string, ...string[]], {
    error: 'Please select a lighting option',
  }),
  vision: z
    .string()
    .min(10, 'Tell us a little more, at least 10 characters')
    .max(1000, 'Brief is too long (max 1000 characters)'),
});

export type LeadFormData = z.infer<typeof leadSchema>;
