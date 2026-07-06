export const WA_PHONE = process.env.NEXT_PUBLIC_WA_PHONE ?? '2348103349288';
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://decoradorne.com';
export const N8N_WEBHOOK_URL = process.env.NEXT_PUBLIC_N8N_WEBHOOK_URL;

export const BUSINESS_NAME = 'Decor Adorne';
export const BUSINESS_TAGLINE = 'Moments, beautifully adorned.';
export const BUSINESS_LOCATION = 'Lagos, Nigeria';
export const BUSINESS_PHONE = '+234 810 334 9288';
export const BUSINESS_EMAIL = 'decoradorne@gmail.com';
export const BUSINESS_IG = 'https://instagram.com/decor_adorne';
export const FOUNDED_YEAR = 2020;

export const STATS = [
  { value: '500+', label: 'Events Adorned' },
  { value: '6', label: 'Years Styling' },
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
      'From intimate proposals to grand engagement parties. We design moments that feel personal, considered, and entirely yours. Across Nigeria.',
    longDescription:
      "Your engagement marks the beginning of a forever. Lush floral installations, candlelit table settings, custom signage, and the kind of editorial detail that turns a venue into a declaration of love. Whether it's a rooftop proposal in Victoria Island, a garden celebration in Abuja, or a family ceremony in Kano. Every element is considered, every moment composed.",
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
          'Yes, we style both indoor banquet halls and outdoor garden settings across Lagos. We advise on venue-appropriate decor and handle logistics for both environments.',
      },
      {
        question: 'Can I see past engagement decoration work before booking?',
        answer:
          'Absolutely. We share a lookbook and can walk you through past Lagos engagement projects during your free consultation call.',
      },
    ],
    colorAccent: '#D4AF37',
    heroImage: '/images/gallery/engagement-1.JPG',
    metaDescription:
      'Luxury engagement decoration, floral arches, candlelit styling, personalised setups. Arabian-inspired studio in Lagos · Available across Nigeria. Free quote.',
  },
  {
    slug: 'kamu-decoration-lagos',
    name: 'Kamu Decoration',
    shortName: 'Kamu',
    tagline: 'Centuries of Hausa-Fulani tradition, beautifully adorned.',
    icon: 'Star',
    description:
      'The Kamu is a centuries-old Hausa-Fulani rite, rooted in Arabian-influenced celebration. We honour it with rich textiles, ornate lantern work, and editorial detail.',
    longDescription:
      "The Kamu carries weight that generic décor cannot meet. Aso-oke, brocade, and kalabash arranged with intention. A throne styled like a royal tableau. Brass lantern clusters, jewel-toned drapery, and the Arabian-influenced motifs that have shaped Northern Nigerian celebration for centuries. We work with families across Nigeria, in Lagos, Abuja, Kano and Kaduna, to build a Kamu that feels both deeply traditional and unmistakably designed.",
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
          "Absolutely. Our Kamu packages include full venue styling, from the bride's throne area to guest table centrepieces and the backdrop for photography.",
      },
      {
        question: 'Is Kamu decoration available for venues outside Lagos Island?',
        answer:
          'We serve venues across Lagos, including Lagos Island, Victoria Island, Lekki, Ajah, and the Mainland. Travel surcharges may apply for venues beyond a 40km radius.',
      },
    ],
    colorAccent: '#A878CD',
    metaDescription:
      'Kamu ceremony decoration, throne styling, aso-oke draping, brass lanterns, authentic Hausa-Fulani détail. Lagos studio · Abuja, Kano & nationwide. Free quote.',
  },
  {
    slug: 'henna-party-decor-lagos',
    name: 'Henna Party Decoration',
    shortName: 'Henna Party',
    tagline: 'Brass lanterns. Floor cushions. A night transported.',
    icon: 'Sparkles',
    description:
      'Brass lanterns. Floor cushions. Jewel-toned drapery. Henna nights styled to feel transported, from Marrakesh to your home in Nigeria.',
    longDescription:
      "The Henna night is intimate, sensory, and ancient. We build settings that lean fully into the Arabian aesthetic that gave the tradition its bones: clusters of Moroccan brass lanterns, velvet and brocade floor cushions, sheer ceiling canopies, marigold and rose installations, and candlelight as the primary mood. A bride's corner that photographs like a portrait. We style Henna nights in family homes, gardens, and intimate venues across Lagos, Abuja, Kaduna, Kano, and wherever your celebration calls us.",
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
    colorAccent: '#4ECDC4',
    heroImage: '/images/gallery/henna-1.JPG',
    metaDescription:
      'Henna party decoration, Moroccan brass lanterns, jewel-tone floor cushions, sheer canopies, flower walls. Arabian-inspired styling. Lagos · Nationwide. From ₦150k.',
  },
  {
    slug: 'arabian-night-decoration-lagos',
    name: 'Arabian Night Decoration',
    shortName: 'Arabian Night',
    tagline: 'A thousand nights, in one evening.',
    icon: 'Moon',
    description:
      'Our signature. Ceiling-to-floor drapery, ornate lantern clusters, majlis-style low seating. The full Arabian dream, composed for your celebration.',
    longDescription:
      "Arabian Night is the aesthetic Decor Adorne was built around. Sheer fabric sweeping from a central ceiling point. Brass and copper lantern clusters at every elevation. Low seating arranged majlis-style with velvet bolsters, brocade cushions, and date-and-dried-fruit displays. Pomegranate-deep florals. Persian-rug grounding. Candlelight as the only meaningful light source. We deliver full venue transformations across Nigeria, from Lagos hotel ballrooms to private compounds in Abuja and Kano, that leave guests genuinely transported.",
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
          'Yes, our Arabian Night packages include a dedicated photo moment area with archways, lanterns, and layered backdrops perfect for portraits and group shots.',
      },
    ],
    colorAccent: '#E2567A',
    metaDescription:
      'Arabian Night decoration, full venue transformations: ceiling drapery, brass lantern clusters, majlis low seating, jewel-tone florals. Lagos studio · Nationwide.',
  },
  {
    slug: 'nikkah-decoration-lagos',
    name: 'Nikkah Decoration',
    shortName: 'Nikkah',
    tagline: 'Sacred union, beautifully adorned.',
    icon: 'Crown',
    description:
      'The Nikkah is sacred. We honour it with restraint and beauty: soft drapery, refined florals, Arabic-script signage, and the quiet detail the moment calls for.',
    longDescription:
      "The Nikkah is the most consequential ceremony in a Muslim family's life. Our styling holds that weight with restraint: ivory, blush, sage, and soft gold rather than dramatic colour; ranunculus and garden roses rather than statement tropicals; clean lines and structured drapery rather than maximalist volume. Arabic calligraphy signage where families want it. Thoughtfully planned gender-segregated layouts when required. We style Nikkah and Walima ceremonies for Muslim families across Nigeria, in Lagos, Abuja, Kano and Sokoto, with the cultural fluency the moment deserves.",
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
          "We work within the family's guidelines. Our Nikkah decor is always refined and understated, focusing on florals, soft fabrics, and clean lines rather than maximalist or theatrical elements.",
      },
      {
        question: 'Can Nikkah decoration be combined with a Walima reception setup?',
        answer:
          'Absolutely. We offer combined packages for couples who want smooth transitions from Nikkah to Walima reception, handling both ceremony and reception styling.',
      },
    ],
    colorAccent: '#8BAFD4',
    heroImage: '/images/gallery/wedding-2.JPG',
    metaDescription:
      'Nikkah decoration, restrained, respectful Islamic ceremony styling. Floral arches, Arabic-script signage, segregated seating, Nikkah + Walima. Lagos · Nationwide.',
  },
  {
    slug: 'naming-ceremony-decor-lagos',
    name: 'Naming Ceremony Decoration',
    shortName: 'Naming',
    tagline: 'Welcome the newest joy into the world.',
    icon: 'Gift',
    description:
      'Welcoming the newest member of your family, whether Yoruba, Hausa, Igbo, or simply yours. Warm, joyful, and beautifully composed.',
    longDescription:
      "A naming ceremony, the Aqeeqah in Muslim families, the iso-omoloruko in Yoruba tradition, is a family's declaration of blessing for a new child. We design settings that honour the specific cultural tradition: bold pastels for Yoruba ceremonies, jewel-toned and Arabian-leaning detail for Hausa-Muslim Aqeeqahs, soft and modern for blended families. We style home setups, garden ceremonies, and hall events across Nigeria with the same care.",
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
          'We typically work with soft pastels for a gentle, celebratory feel, or bold, cultural colours if the family prefers a traditional aesthetic. We guide colour selection during consultation.',
      },
      {
        question: 'Can you style the naming ceremony at our home in Lagos?',
        answer:
          'Yes. Home setups are a specialty. We assess the available space, manage logistics, and create a beautiful event in your home without damage to the property.',
      },
    ],
    colorAccent: '#7DC87B',
    heroImage: '/images/gallery/naming-1.JPG',
    metaDescription:
      'Naming ceremony decoration, Aqeeqah, Yoruba, Hausa, and Igbo traditions. Home setups, garden ceremonies, hall events. Lagos studio · Nationwide service.',
  },
  {
    slug: 'picnic-setup-lagos',
    name: 'Luxury Picnic Setup',
    shortName: 'Picnic',
    tagline: 'The outdoors, reimagined.',
    icon: 'Sun',
    description:
      "Outdoor moments, beautifully styled: low tables, lush cushions, fresh florals. From Lagos beaches to Abuja gardens. You just arrive.",
    longDescription:
      "Our luxury picnic setups are an experience, not a spread. Styled low tables dressed in linen and brass. Velvet and brocade floor cushions arranged majlis-style. Fresh floral centrepieces, crystal glassware, fairy-light canopies, and considered photographic moments. We bring the full setup to Lagos beaches, Abuja gardens, private estates in Ikoyi, rooftop venues anywhere, and quietly disappear before you arrive.",
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
          "We set up across Lagos, including Lekki Conservation Centre, Tarkwa Bay beach, private gardens in Ikoyi and Victoria Island, and rooftop spaces. We also work with clients' chosen locations.",
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
    colorAccent: '#F4A261',
    metaDescription:
      'Luxury picnic setups, styled low tables, majlis cushions, florals, fairy lights. Tarkwa Bay, Lekki, Ikoyi, Abuja gardens & nationwide. From ₦150,000.',
  },
  {
    slug: 'event-rentals-lagos',
    name: 'Event Rentals',
    shortName: 'Rentals',
    tagline: 'Premium pieces. Own nothing.',
    icon: 'Package',
    description:
      "Premium event pieces: brass lanterns, Chiavari chairs, charger plates, linens. Delivered, set, and collected. Lagos-based · Nationwide reach.",
    longDescription:
      'Not every event needs a full styling package. Our rental catalogue lets you pick the exact pieces you need: brass Moroccan lanterns, Chiavari and ghost chairs, charger plates, crystal glassware, candelabras, velvet linens in 30+ colourways, and floral vases. Delivered to your venue, set on arrival, collected after. Lagos warehouse, nationwide reach.',
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
          'Yes, a refundable damage deposit of 20% of the rental value is collected at booking. It is fully refunded within 48 hours of item return and inspection.',
      },
    ],
    colorAccent: '#A878CD',
    metaDescription:
      'Premium event rentals: brass Moroccan lanterns, Chiavari chairs, charger plates, candelabras, velvet linens. Delivered & collected. Lagos · Nationwide. From ₦50k.',
  },
  {
    slug: 'durbar-decoration-lagos',
    name: 'Durbar Decoration',
    shortName: 'Durbar',
    tagline: 'Northern royal tradition, magnificently adorned.',
    icon: 'Gem',
    description:
      'The Durbar honours centuries of Northern Nigerian royal tradition: Arabian-influenced grandeur in jewel-toned fabrics, gold lantern clusters, and ceremonial staging worthy of an emir.',
    longDescription:
      "The Durbar is among the most magnificent ceremonial traditions on the continent: Hausa-Fulani royal pageantry, centuries deep, Arabian-influenced from textile to silhouette. Our décor rises to meet it: sweeping aso-oke and brocade installations, gold and pomegranate-deep jewel tones, towering candelabra arrangements, ornate brass lantern clusters, and ceremonial dais arrangements styled like the audience hall of an emir. We work with families across Northern Nigeria, in Kano, Kaduna, Sokoto and Zaria, and in Lagos and Abuja for celebrations of returning royal sons and daughters.",
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
          "Durbar décor draws on Northern Nigerian royal tradition: richer fabrics, deeper jewel tones, ornate lantern clusters, and ceremonial staging. We blend authentic cultural elements with our editorial eye to create a setting that feels genuinely grand rather than generic.",
      },
      {
        question: 'Can you source authentic Durbar-themed fabrics and props in Lagos?',
        answer:
          "Yes. We work with trusted suppliers of premium Nigerian textiles, including aso-oke, brocade, and traditional embroidered fabrics, to ensure every element of the décor feels culturally grounded and visually striking.",
      },
      {
        question: 'Do you style Durbar celebrations at hotel ballrooms in Lagos?',
        answer:
          "Absolutely. We transform hotel ballrooms, event halls, and private compound spaces into Durbar-worthy settings. Our team conducts a venue walk-through to plan the layout and ensure every element is executed to the highest standard.",
      },
    ],
    colorAccent: '#D4AF37',
    heroImage: '/images/gallery/durbar-decor-1.JPG',
    metaDescription:
      'Durbar decoration, royal Hausa-Fulani styling with aso-oke draping, gold lantern clusters, ceremonial dais arrangements. Lagos · Kano · Kaduna · Sokoto · Abuja.',
  },
  {
    slug: 'birthday-decoration-lagos',
    name: 'Birthday Decoration',
    shortName: 'Birthday',
    tagline: 'Make every year count.',
    icon: 'Cake',
    description:
      'Milestone birthdays. Intimate surprises. Decor Adorne styles birthday celebrations across Nigeria that feel composed, personal, and unmistakably yours.',
    longDescription:
      "A birthday is a milestone worth treating like one. Whether it's a Lekki garden surprise, a Victoria Island rooftop sundowner, an Abuja ballroom gala, or an intimate Ikoyi dinner, we design setups that reflect the person, not the template. Sculpted balloon installations in editorial colourways, statement backdrops, florals chosen for the celebrant's aesthetic, throne styling for milestone years. We style birthdays nationwide and have a soft spot for Arabian-themed milestone celebrations (30th, 40th, 50th) where the aesthetic can be fully indulged.",
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
          'Yes, home setups are one of our most popular requests. We assess your available space and design a setup that transforms it without damage to the property.',
      },
      {
        question: 'Can you style a surprise birthday party setup in Lagos?',
        answer:
          'Absolutely. We coordinate directly with the organiser, arrive ahead of schedule, and have the venue fully styled and ready before the celebrant arrives.',
      },
      {
        question: 'What age milestone birthdays do you specialise in?',
        answer:
          'We style everything from 1st birthdays to 50th and beyond. Each package is tailored to the celebrant. The aesthetic, colour palette, and details all reflect who they are.',
      },
    ],
    colorAccent: '#E2567A',
    heroImage: '/images/gallery/birthday-1.JPG',
    metaDescription:
      'Luxury birthday decoration, sculpted balloons, statement backdrops, throne styling, Arabian-themed milestones. Lagos · Abuja · nationwide. Free quote.',
  },
];

export const TESTIMONIALS = [
  {
    name: 'Fatima A.',
    event: 'Nikkah Ceremony, Victoria Island',
    quote:
      'Decor Adorne transformed our Nikkah venue beyond what we imagined. The florals, the lighting, the arch, every detail was perfect. Our guests still talk about it six months later.',
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
      'The Kamu setup was breathtaking. They incorporated our traditional fabrics so beautifully, every element felt intentional and culturally respectful. Everyone was in happy tears.',
    rating: 5,
  },
] as const;

export const NAV_LINKS = [
  { label: 'Services', href: '/services' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'About', href: '/about' },
  { label: 'Blog', href: '/blog' },
] as const;
