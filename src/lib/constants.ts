export const WA_PHONE = process.env.NEXT_PUBLIC_WA_PHONE ?? '2348103349288';
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://decoradorne.com';
export const N8N_WEBHOOK_URL = process.env.NEXT_PUBLIC_N8N_WEBHOOK_URL;

export const BUSINESS_NAME = 'Decor Adorne';
export const BUSINESS_TAGLINE = 'Moments, beautifully adorned.';
export const BUSINESS_LOCATION = 'Lagos, Nigeria';
export const BUSINESS_PHONE = '+234 810 334 9288';
export const BUSINESS_EMAIL = 'hello@decoradorne.com';
export const BUSINESS_IG = 'https://instagram.com/decor_adorne';
export const FOUNDED_YEAR = 2016;

export const STATS = [
  { value: '500+', label: 'Events Styled' },
  { value: '8', label: 'Years in Lagos' },
  { value: '200+', label: '5-Star Reviews' },
] as const;

export interface ServiceFaq {
  question: string;
  answer: string;
}

export interface Service {
  slug: string;
  name: string;
  shortName: string;
  tagline: string;
  icon: string;
  description: string;
  longDescription: string;
  included: string[];
  faqs: ServiceFaq[];
  colorAccent: string;
  /** Path in /public — when present the service page renders a dark photo hero */
  heroImage?: string;
  /** SEO meta description — keyword-tuned, under 160 chars. Falls back to description if absent. */
  metaDescription?: string;
}

export const SERVICES: Service[] = [
  {
    slug: 'engagement-decor-lagos',
    name: 'Engagement Decoration',
    shortName: 'Engagement',
    tagline: 'Where love stories begin.',
    icon: 'Heart',
    description:
      'From intimate proposals to grand engagement parties, we design moments that feel personal, beautiful, and entirely yours.',
    longDescription:
      "Your engagement marks the beginning of a forever. We create lush floral installations, romantic candlelit settings, and custom signage that transform any Lagos venue into a declaration of love. Whether it's a surprise proposal at a rooftop restaurant on Victoria Island or a garden celebration in Ikoyi, every detail is considered.",
    included: [
      'Custom floral arch or backdrop',
      'Ambient string lights and candle arrangements',
      'Personalised signage and monograms',
      'Table styling with luxury linens',
      'Balloon sculptures or petal pathways',
      'Day-of setup and breakdown',
    ],
    faqs: [
      {
        question: 'How far in advance should I book engagement decor in Lagos?',
        answer:
          'We recommend booking at least 4–6 weeks before your event date. For peak season dates (November–February and June–August), 8–10 weeks is ideal to secure your preferred style and florals.',
      },
      {
        question: 'Do you handle indoor and outdoor engagement venues in Lagos?',
        answer:
          'Yes — we style both indoor banquet halls and outdoor garden settings across Lagos. We advise on venue-appropriate decor and handle logistics for both environments.',
      },
      {
        question: 'Can I see past engagement decoration work before booking?',
        answer:
          'Absolutely. We share a curated lookbook and can walk you through past Lagos engagement projects during your free consultation call.',
      },
    ],
    colorAccent: '#C9A96E',
    heroImage: '/images/gallery/engagement-1.JPG',
    metaDescription:
      'Expert engagement decoration in Lagos — floral arches, candlelit table styling, and personalised setups across Victoria Island, Lekki, and Ikoyi. Free quote.',
  },
  {
    slug: 'kamu-decoration-lagos',
    name: 'Kamu Decoration',
    shortName: 'Kamu',
    tagline: 'Celebrate her final days of maidenhood in style.',
    icon: 'Star',
    description:
      'A Kamu celebration is a sacred, joyful tradition. We bring colour, culture, and elegance to every detail of your ceremony decor.',
    longDescription:
      "The Kamu ceremony deserves a setting as vibrant and meaningful as the occasion itself. We blend rich fabrics, traditional patterns, and contemporary styling to create a backdrop that honours the culture and delights every guest. From the bride's throne to the guest tables, every corner of your Lagos venue comes alive.",
    included: [
      'Stage or throne area styling for the bride',
      'Colourful fabric draping and cultural textile accents',
      'Floral centrepieces for guest tables',
      'Traditional lantern or light installations',
      'Backdrop for photography',
      'Setup and breakdown service',
    ],
    faqs: [
      {
        question: 'Do you incorporate traditional Hausa decor elements in your Kamu setups?',
        answer:
          "Yes. We source authentic fabrics, calabash accents, and traditional motifs that honour the Kamu ceremony's cultural roots while maintaining a polished, modern aesthetic.",
      },
      {
        question: "Can the decor accommodate both the bride's seating and guest tables?",
        answer:
          "Absolutely. Our Kamu packages include full venue styling — from the bride's throne area to guest table centrepieces and the backdrop for photography.",
      },
      {
        question: 'Is Kamu decoration available for venues outside Lagos Island?',
        answer:
          'We serve venues across Lagos — including Lagos Island, Victoria Island, Lekki, Ajah, and the Mainland. Travel surcharges may apply for venues beyond a 40km radius.',
      },
    ],
    colorAccent: '#D4878A',
    heroImage: '/images/gallery/wedding-1.JPG',
    metaDescription:
      'Kamu ceremony decoration in Lagos — throne styling, cultural fabric draping, and authentic Hausa-inspired décor. Serving all Lagos areas. Free consultation.',
  },
  {
    slug: 'henna-party-decor-lagos',
    name: 'Henna Party Decoration',
    shortName: 'Henna Party',
    tagline: 'Beautiful beginnings, beautifully set.',
    icon: 'Sparkles',
    description:
      'Your henna night is a celebration of sisterhood and tradition. We create warm, intimate settings that feel like a dream.',
    longDescription:
      "Henna parties are intimate celebrations — a gathering of close friends and family before the big day. We design cosy, photo-worthy settings with rich jewel tones, Moroccan lanterns, floor cushions, and floral details that make the evening feel magical. Every corner of your Lagos space is styled to perfection.",
    included: [
      'Low seating arrangement with floor cushions and bolsters',
      'Moroccan lanterns and tea light candle settings',
      'Flower wall or floral backdrop',
      'Jewel-toned fabric draping',
      'Centrepieces and table styling',
      'Setup and cleanup',
    ],
    faqs: [
      {
        question: 'What is the typical venue setup for a henna party in Lagos?',
        answer:
          'We often style living rooms, gardens, rooftop spaces, and intimate event halls. Our team assesses the space and designs a layout that maximises the intimate, celebratory feel of the occasion.',
      },
      {
        question: 'Can you match a specific colour theme or cultural aesthetic?',
        answer:
          "Yes. We work to your mood board or colour palette, incorporating specific jewel tones, cultural motifs, or personal details that reflect the bride's personality.",
      },
      {
        question: 'Do henna party packages include a photographer-ready setup?',
        answer:
          'Every Decor Adorne setup is designed with photography in mind. We include at least one dedicated backdrop or feature wall for portraits and group shots.',
      },
    ],
    colorAccent: '#8BA888',
    heroImage: '/images/gallery/henna-1.JPG',
    metaDescription:
      'Henna party decoration in Lagos — floor cushions, Moroccan lanterns, flower walls, and intimate settings from ₦150,000. Lekki, VI, Ikoyi, and Mainland.',
  },
  {
    slug: 'arabian-night-decoration-lagos',
    name: 'Arabian Night Decoration',
    shortName: 'Arabian Night',
    tagline: 'A thousand nights in one evening.',
    icon: 'Moon',
    description:
      'Transport your guests to another world with our signature Arabian Night styling — rich, immersive, and unforgettably dramatic.',
    longDescription:
      'Arabian Night events call for deep jewel tones, ornate lanterns, flowing drapes, and an atmosphere that feels truly transported. We create full venue transformations — from ceiling to floor — that make every guest in your Lagos event feel like royalty for the night.',
    included: [
      'Full ceiling draping with sheer fabric',
      'Moroccan-style lantern clusters',
      'Deep-toned floral arrangements',
      'Low seating with cushion arrangements',
      'Themed table settings and chargers',
      'Ambient coloured lighting',
      'Full setup and strike',
    ],
    faqs: [
      {
        question: 'How long does an Arabian Night venue transformation take?',
        answer:
          'Full venue setups typically require 6–10 hours, depending on venue size and complexity. We begin setup the morning of or the evening before your event.',
      },
      {
        question: 'Can you style both indoor and outdoor Arabian Night events?',
        answer:
          'Yes. Outdoor setups use weather-resistant draping and secured lanterns. Indoor setups allow for full ceiling draping and more elaborate lighting effects.',
      },
      {
        question: 'Do you provide a themed photo area for Arabian Night events?',
        answer:
          'Yes — our Arabian Night packages include a dedicated photo moment area with archways, lanterns, and layered backdrops perfect for portraits and group shots.',
      },
    ],
    colorAccent: '#C9A96E',
    metaDescription:
      'Arabian Night decoration in Lagos — full venue transformations with jewel-tone ceiling draping, ornate lanterns, and low cushion seating. Book now.',
  },
  {
    slug: 'nikkah-decoration-lagos',
    name: 'Nikkah Decoration',
    shortName: 'Nikkah',
    tagline: 'Sacred union, beautifully adorned.',
    icon: 'Crown',
    description:
      'Honour the sanctity of the Nikkah with elegant, respectful decor that frames the ceremony in beauty and meaning.',
    longDescription:
      'The Nikkah is one of the most sacred moments in a Muslim wedding. Our styling is elegant, modest, and deeply beautiful — florals, soft drapery, and refined setups that elevate the ceremony without overwhelming it. We work with Lagos families to honour their traditions with full reverence.',
    included: [
      'Floral arch or backdrop for the ceremony',
      'Bride and groom seating arrangement',
      'Soft drapery and ambient lighting',
      'Aisle styling with petals or candles',
      'Signing table with florals',
      'Guest seating area styling',
    ],
    faqs: [
      {
        question: 'Do you offer gender-segregated seating arrangements for Nikkah ceremonies?',
        answer:
          'Yes. We design layouts that respect traditional Nikkah requirements, including separated seating areas that maintain elegance and clear sight lines for both sides.',
      },
      {
        question: 'How modest is the styling for a Nikkah ceremony?',
        answer:
          "We work within the family's guidelines. Our Nikkah decor is always refined and understated — focusing on florals, soft fabrics, and clean lines rather than maximalist or theatrical elements.",
      },
      {
        question: 'Can Nikkah decoration be combined with a Walima reception setup?',
        answer:
          'Absolutely. We offer combined packages for couples who want seamless transitions from Nikkah to Walima reception, handling both ceremony and reception styling.',
      },
    ],
    colorAccent: '#D4878A',
    heroImage: '/images/gallery/wedding-2.JPG',
    metaDescription:
      'Nikkah decoration in Lagos — elegant, respectful ceremony styling with floral arches, segregated seating arrangements, and Nikkah + Walima packages.',
  },
  {
    slug: 'naming-ceremony-decor-lagos',
    name: 'Naming Ceremony Decoration',
    shortName: 'Naming',
    tagline: 'Welcome the newest joy into the world.',
    icon: 'Gift',
    description:
      'Celebrate the gift of new life with joyful, warm, and beautiful naming ceremony decor tailored to your cultural traditions.',
    longDescription:
      "A naming ceremony is a family's declaration of love and blessing for a new child. We create warm, joyful settings — from traditional Yoruba and Hausa ceremonies to modern celebrations — that honour the moment and delight every guest in Lagos.",
    included: [
      'Welcome arch or entrance decor',
      "Baby's display area or cradle styling",
      'Table centrepieces and florals',
      'Balloon installations or columns',
      'Backdrop for family portraits',
      'Full setup and breakdown',
    ],
    faqs: [
      {
        question: 'Do you style both traditional and modern naming ceremonies in Lagos?',
        answer:
          'Yes. We adapt our approach to suit Yoruba, Hausa, Igbo, or modern naming ceremony traditions, working with the family to incorporate meaningful cultural elements.',
      },
      {
        question: 'What colours work best for naming ceremony decor?',
        answer:
          'We typically work with soft pastels for a gentle, celebratory feel — or bold, cultural colours if the family prefers a traditional aesthetic. We guide colour selection during consultation.',
      },
      {
        question: 'Can you style the naming ceremony at our home in Lagos?',
        answer:
          'Yes. Home setups are a specialty — we assess the available space, manage logistics, and create a beautiful event in your home without damage to the property.',
      },
    ],
    colorAccent: '#8BA888',
    heroImage: '/images/gallery/naming-1.JPG',
    metaDescription:
      'Naming ceremony decoration in Lagos — joyful setups for Yoruba, Hausa, and Igbo traditions. Home setups welcome. Balloon columns, backdrops, florals.',
  },
  {
    slug: 'picnic-setup-lagos',
    name: 'Luxury Picnic Setup',
    shortName: 'Picnic',
    tagline: 'The outdoors, reimagined.',
    icon: 'Sun',
    description:
      "Experience Lagos's natural beauty through a curated luxury picnic — intimate, styled, and unforgettably beautiful.",
    longDescription:
      "Our luxury picnic setups are more than a spread — they're an experience. Styled low tables, lush cushions, fresh florals, and curated displays in Lagos's most beautiful outdoor settings, from beachfront to private gardens. Every detail is styled; all you need to do is arrive.",
    included: [
      'Low picnic table with luxury linen dressing',
      'Floor cushions and throw pillows',
      'Fresh floral centrepiece',
      'Charger plates and crystal glasses',
      'Fairy light canopy or umbrella',
      'Fruit, charcuterie, or cupcake display (optional add-on)',
      'Setup, styling, and breakdown',
    ],
    faqs: [
      {
        question: 'What Lagos locations do you set up luxury picnics?',
        answer:
          "We set up across Lagos — including Lekki Conservation Centre, Tarkwa Bay beach, private gardens in Ikoyi and Victoria Island, and rooftop spaces. We also work with clients' chosen locations.",
      },
      {
        question: 'How long is the picnic setup rental period?',
        answer:
          'Standard packages include a 2-hour styled period. Extended packages are available for half-day (4 hours) or full-day events. We arrive 1.5 hours before your session to set up.',
      },
      {
        question: 'What if it rains during our picnic?',
        answer:
          'We monitor weather closely. If rain is forecast, we advise on an alternative indoor setup. We have a 48-hour weather policy that allows rescheduling without penalty.',
      },
    ],
    colorAccent: '#C9A96E',
    metaDescription:
      'Luxury picnic setups in Lagos — styled low tables, fresh florals, and fairy lights at Lekki, Tarkwa Bay, Ikoyi, and your own garden. From ₦150,000.',
  },
  {
    slug: 'event-rentals-lagos',
    name: 'Event Rentals',
    shortName: 'Rentals',
    tagline: 'Style your event. Own nothing.',
    icon: 'Package',
    description:
      'Access premium decor, furniture, and tableware for your Lagos event without the long-term commitment.',
    longDescription:
      'Not every event needs a full styling package. Our Lagos rental catalogue lets you pick the exact pieces you need — from Chiavari chairs and charger plates to floral stands and linen tablecloths — delivered and collected at your convenience. Quality pieces, zero storage hassle.',
    included: [
      'Chiavari chairs, ghost chairs, and velvet seating',
      'Charger plates, cutlery, and glassware',
      'Table linens in 30+ colours and textures',
      'Centrepiece stands and floral vases',
      'Candelabras, candleholders, and lanterns',
      'Delivery, collection, and cleaning included',
    ],
    faqs: [
      {
        question: 'What is the minimum rental order for Lagos events?',
        answer:
          'Our minimum rental order is ₦50,000. We offer free delivery and collection within a 20km radius of Lagos Island for orders above ₦100,000.',
      },
      {
        question: 'How far in advance do I need to book rental items?',
        answer:
          'We recommend booking at least 2 weeks in advance to guarantee availability. For large orders or peak season dates, 4–6 weeks is advisable.',
      },
      {
        question: 'Is there a damage deposit for rental items?',
        answer:
          'Yes — a refundable damage deposit of 20% of the rental value is collected at booking. It is fully refunded within 48 hours of item return and inspection.',
      },
    ],
    colorAccent: '#D4878A',
    metaDescription:
      'Premium event rental items in Lagos — Chiavari chairs, charger plates, linens, candelabras, and glassware. Delivery and collection included. From ₦50,000.',
  },
  {
    slug: 'durbar-decoration-lagos',
    name: 'Durbar Decoration',
    shortName: 'Durbar',
    tagline: 'Royal grandeur, magnificently adorned.',
    icon: 'Gem',
    description:
      'Rooted in Northern Nigerian royal tradition, Durbar celebrations demand décor that commands the room — richly draped, ornately styled, and breathtakingly grand.',
    longDescription:
      "The Durbar is one of Nigeria's most magnificent cultural celebrations — a display of royal pageantry, elaborate robes, and centuries of Hausa tradition. We create décor that rises to meet this grandeur: sweeping fabric installations, opulent gold and jewel-tone styling, ceremonial stage arrangements, and regal details that honour the occasion and leave every guest in Lagos in awe.",
    included: [
      'Grand entrance arch with cultural fabric and floral styling',
      'Stage or royal dais arrangement for the honorees',
      'Rich ceiling and wall draping in gold and jewel tones',
      'Ornate lantern and candelabra cluster installations',
      'Ceremonial table settings with traditional textile accents',
      'Cultural tapestry and decorative prop arrangements',
      'Full setup and breakdown service',
    ],
    faqs: [
      {
        question: 'What makes Durbar decoration unique compared to other events?',
        answer:
          "Durbar décor draws on Northern Nigerian royal tradition — richer fabrics, deeper jewel tones, ornate lantern clusters, and ceremonial staging. We blend authentic cultural elements with our editorial eye to create a setting that feels genuinely grand rather than generic.",
      },
      {
        question: 'Can you source authentic Durbar-themed fabrics and props in Lagos?',
        answer:
          "Yes. We work with trusted suppliers of premium Nigerian textiles — including aso-oke, brocade, and traditional embroidered fabrics — to ensure every element of the décor feels culturally grounded and visually striking.",
      },
      {
        question: 'Do you style Durbar celebrations at hotel ballrooms in Lagos?',
        answer:
          "Absolutely. We transform hotel ballrooms, event halls, and private compound spaces into Durbar-worthy settings. Our team conducts a venue walk-through to plan the layout and ensure every element is executed to the highest standard.",
      },
    ],
    colorAccent: '#C9A96E',
    heroImage: '/images/gallery/durbar-decor-1.JPG',
    metaDescription:
      'Durbar decoration in Lagos — royal-grand venue styling with jewel-tone draping, ornate lanterns, and ceremonial stage arrangements. Authentic Hausa décor.',
  },
  {
    slug: 'birthday-decoration-lagos',
    name: 'Birthday Decoration',
    shortName: 'Birthday',
    tagline: 'Make every year count.',
    icon: 'Cake',
    description:
      'From milestone birthdays to intimate surprises, we create luxury birthday setups in Lagos that are personal, stunning, and unforgettable.',
    longDescription:
      "A birthday is a milestone worth celebrating beautifully. Whether you're planning a surprise garden party in Lekki, a luxury rooftop celebration in Victoria Island, or an intimate dinner in Ikoyi, Decor Adorne creates birthday setups that feel personal and extraordinary. Balloon installations, statement backdrops, florals, and curated styling — all tailored to the celebrant's personality.",
    included: [
      'Statement balloon arch or ceiling installation',
      'Personalised birthday backdrop or neon sign',
      'Table styling with florals, candles, and charger plates',
      'Themed centrepieces and dessert table styling',
      'Birthday throne or feature chair arrangement',
      'Day-of setup and full breakdown service',
    ],
    faqs: [
      {
        question: 'Do you style birthday decorations at home venues in Lagos?',
        answer:
          'Yes — home setups are one of our most popular requests. We assess your available space and design a setup that transforms it without damage to the property.',
      },
      {
        question: 'Can you style a surprise birthday party setup in Lagos?',
        answer:
          'Absolutely. We coordinate directly with the organiser, arrive ahead of schedule, and have the venue fully styled and ready before the celebrant arrives.',
      },
      {
        question: 'What age milestone birthdays do you specialise in?',
        answer:
          'We style everything from 1st birthdays to 50th and beyond. Each package is tailored to the celebrant — the aesthetic, colour palette, and details all reflect who they are.',
      },
    ],
    colorAccent: '#C9A96E',
    heroImage: '/images/gallery/birthday-1.JPG',
    metaDescription:
      'Birthday decoration in Lagos — balloon arches, statement backdrops, throne styling, and florals for milestone celebrations in Victoria Island, Lekki, Ikeja.',
  },
];

export const TESTIMONIALS = [
  {
    name: 'Fatima A.',
    event: 'Nikkah Ceremony, Victoria Island',
    quote:
      'Decor Adorne transformed our Nikkah venue beyond what we imagined. The florals, the lighting, the arch — every detail was perfect. Our guests still talk about it six months later.',
    rating: 5,
  },
  {
    name: 'Chiamaka O.',
    event: 'Engagement Party, Lekki',
    quote:
      'I gave them a mood board and they brought it to life better than the original. Our engagement party felt like something out of a magazine. Absolutely stunning.',
    rating: 5,
  },
  {
    name: 'Aminat B.',
    event: 'Kamu Ceremony, Ikeja',
    quote:
      'The Kamu setup was breathtaking. They incorporated our traditional fabrics so beautifully — every element felt intentional and culturally respectful. Everyone was in happy tears.',
    rating: 5,
  },
] as const;

export const NAV_LINKS = [
  { label: 'Services', href: '/services' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'About', href: '/about' },
  { label: 'Blog', href: '/blog' },
] as const;
