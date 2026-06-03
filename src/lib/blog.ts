export type ContentBlock =
  | { type: 'h2'; text: string }
  | { type: 'h3'; text: string }
  | { type: 'p'; text: string }
  | { type: 'list'; items: string[] }
  | { type: 'cta'; label: string; href: string; sub?: string };

export interface BlogPost {
  slug: string;
  title: string;
  /** Short SERP title — under 45 chars so full "title | Decor Adorne" stays under 60. */
  metaTitle?: string;
  metaDescription: string;
  publishedAt: string;
  readMins: number;
  category: string;
  excerpt: string;
  heroImage?: string;
  body: ContentBlock[];
}

export const BLOG_POSTS: BlogPost[] = [
  // ─────────────────────────────────────────────────────────────────────────────
  // 1. Kamu Ceremony Decoration Guide Lagos
  // ─────────────────────────────────────────────────────────────────────────────
  {
    slug: 'kamu-ceremony-decoration-guide-lagos',
    title: 'Kamu Ceremony Decoration in Lagos: Everything You Need to Know',
    metaTitle: 'Kamu Decor Guide Lagos',
    metaDescription:
      'Planning a Kamu ceremony in Lagos? Learn what décor you need, how to plan the setup, what to budget, and why cultural detail matters. From the Decor Adorne team.',
    publishedAt: '2025-03-10',
    readMins: 7,
    category: 'Ceremony Guides',
    excerpt:
      'The Kamu is one of the most visually rich celebrations in Northern Nigerian culture. Here is what great décor looks like, and how to plan it.',
    heroImage: '/images/gallery/wedding-1.JPG',
    body: [
      {
        type: 'p',
        text: 'The Kamu ceremony is a cornerstone of Hausa-Fulani wedding traditions in Nigeria, a vibrant, joyful celebration held for the bride in the days before her Nikkah. In Lagos, where Northern families build lives alongside other cultures, the Kamu has evolved into a celebration that is simultaneously deeply rooted and boldly expressive. If you are planning a Kamu in Lagos, the décor you choose will shape the entire atmosphere of the day.',
      },
      {
        type: 'h2',
        text: 'What Is a Kamu Ceremony?',
      },
      {
        type: 'p',
        text: 'The Kamu, also called Kamun Amarya, is a pre-wedding ceremony where the bride is adorned with henna, dressed in traditional attire, and celebrated by her family and close friends. It is a rite of passage that marks the transition from maidenhood to marriage. Unlike Western bridal showers, the Kamu carries deep cultural weight: the songs, the colours, the fabrics, and the décor all speak to identity and heritage.',
      },
      {
        type: 'p',
        text: 'In Lagos, Kamu ceremonies typically happen in a family home, a hired hall, or an outdoor garden. Guest counts range from 30 to over 300 depending on the family. The décor must honour the occasion, it cannot be generic or borrowed from another celebration.',
      },
      {
        type: 'h2',
        text: 'The Key Décor Elements of a Lagos Kamu',
      },
      {
        type: 'h3',
        text: "The Bride's Throne",
      },
      {
        type: 'p',
        text: "The centrepiece of any Kamu setup is the bride's throne or stage area. This is where she will sit during the ceremony, receive blessings, and be photographed. A well-styled throne commands the room, typically framed by a fabric arch or flower wall, draped in rich colours, and lit by soft warm lighting. The throne itself is usually a high-backed chair or love seat dressed in matching fabric.",
      },
      {
        type: 'h3',
        text: 'Colour Palette and Fabric Draping',
      },
      {
        type: 'p',
        text: "Kamu décor traditionally uses warm, celebratory colours, deep gold, tangerine, burgundy, emerald, or royal blue, depending on family preference. Fabric is central to the aesthetic: aso-oke, ankara, and brocade textiles are used in backdrops, table skirting, and draping. If you're working with a decorator in Lagos, share your preferred colours early, sourcing the right textiles takes time.",
      },
      {
        type: 'h3',
        text: 'Floral Centrepieces and Table Styling',
      },
      {
        type: 'p',
        text: 'Guest tables should feel abundant and celebratory. Floral centrepieces in complementary tones, candles, and cultural accessories like calabash accents or traditional pottery create tables that feel intentional. Avoid modern minimalism for a Kamu, the aesthetic calls for richness and warmth.',
      },
      {
        type: 'h3',
        text: 'Backdrop for Photography',
      },
      {
        type: 'p',
        text: "A dedicated photography backdrop, whether a flower wall, fabric installation, or a custom printed design, is essential. Families will want group photos and portrait shots of the bride. Make sure the backdrop scale suits the space and that the lighting in front of it is flattering. Your decorator should factor this into the layout from the start.",
      },
      {
        type: 'h2',
        text: 'What to Budget for Kamu Decoration in Lagos',
      },
      {
        type: 'p',
        text: "Kamu decoration pricing in Lagos depends primarily on venue size, the number of guest tables, and the complexity of the bride's throne arrangement. Intimate setups for 50–80 guests in a home typically start from ₦250,000. Mid-size celebrations (100–200 guests) in a hall with a full throne, backdrop, and table styling range from ₦400,000 to ₦800,000. Larger, premium events with custom fabric installations and elaborate floral work go beyond ₦1 million.",
      },
      {
        type: 'p',
        text: 'The most important investment is always in the throne area and backdrop, these are the elements that guests will photograph and remember. If budget is tight, prioritise those two elements and keep the guest table styling simple.',
      },
      {
        type: 'h2',
        text: 'How Early Should You Book Kamu Decoration in Lagos?',
      },
      {
        type: 'p',
        text: 'We recommend booking your Kamu decorator in Lagos at least 4–6 weeks before the event. If the ceremony falls in the peak wedding season, November through January, or June through August, book 8–10 weeks ahead. Popular Lagos decorators have limited capacity during peak periods and the best florists and fabric suppliers book out fast.',
      },
      {
        type: 'h2',
        text: 'Tips for a Beautifully Styled Lagos Kamu',
      },
      {
        type: 'list',
        items: [
          'Share a mood board with your decorator early, Pinterest and Instagram are useful even if you want a traditionally styled event.',
          "Specify whether the Kamu will be photographed or filmed professionally, your decorator needs to know to optimise the throne area's lighting and backdrop.",
          "Book your henna artist and décor team together if possible, the henna artist's working space needs to be built into the layout.",
          'If the event is outdoors, discuss a contingency plan for rain. Lagos weather can change quickly.',
          'Choose a decorator who has styled Kamu ceremonies specifically, the cultural details matter and should not be left to guesswork.',
        ],
      },
      {
        type: 'cta',
        label: 'View our Kamu decoration package',
        href: '/services/kamu-decoration-lagos',
        sub: 'Full venue styling from throne to table, Lagos-wide.',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // 2. Engagement Decoration Ideas Lagos
  // ─────────────────────────────────────────────────────────────────────────────
  {
    slug: 'engagement-decoration-ideas-lagos',
    title: 'Engagement Decoration Ideas in Lagos: Trends Our Clients Love',
    metaTitle: 'Engagement Decor Ideas Lagos',
    metaDescription:
      'The best engagement decoration ideas for Lagos celebrations in 2025, from floral arches to candlelit table settings. Inspiration and advice from Decor Adorne.',
    publishedAt: '2025-03-24',
    readMins: 6,
    category: 'Event Inspiration',
    excerpt:
      'Whether you are planning a surprise proposal or a grand engagement party in Lagos, these are the décor ideas our clients keep requesting, and why they work.',
    heroImage: '/images/gallery/engagement-1.JPG',
    body: [
      {
        type: 'p',
        text: "Lagos engagements are not understated affairs. Whether you're planning a surprise proposal at a Victoria Island rooftop restaurant or a family engagement party at a Lekki garden venue, the décor is expected to be memorable. After styling hundreds of Lagos engagements since 2016, we have a clear sense of which ideas endure and which simply photograph well. Here are the approaches that consistently create the most beautiful, emotionally resonant engagement celebrations.",
      },
      {
        type: 'h2',
        text: '1. The Floral Arch or Backdrop',
      },
      {
        type: 'p',
        text: "Nothing anchors an engagement celebration like a well-designed floral arch. Whether it's a full doorway arch framing the couple's entrance, a circular moon gate, or a floor-to-ceiling flower wall, the floral backdrop creates the focal point that every other element organises around. In Lagos, white and blush roses with eucalyptus greenery remain the most requested palette, timeless, universally flattering, and beautiful in photographs.",
      },
      {
        type: 'p',
        text: "For outdoor venues in Ikoyi or Lekki, we often lean into tropical foliage, birds of paradise, anthuriums, and oversized tropical leaves give the installation a distinctly Lagos quality while remaining deeply elegant. For ballroom venues on Victoria Island, a more structured, sculptural arch makes a bolder statement.",
      },
      {
        type: 'h2',
        text: '2. Candlelit Table Styling',
      },
      {
        type: 'p',
        text: "The table is where guests spend most of the evening, so it deserves serious attention. For engagement parties in Lagos, we consistently return to warm candlelight as the foundation, hurricane vases, taper candles in brass candlesticks, and floating candles in low vessels all create the intimate, romantic atmosphere that makes an engagement celebration feel different from a regular dinner event.",
      },
      {
        type: 'p',
        text: "Layered table styling, a charger plate, linen napkin, personalised place card, and a low floral centrepiece, creates visual depth without overwhelming the table. Avoid the common mistake of centrepieces so tall that guests cannot see each other across the table.",
      },
      {
        type: 'h2',
        text: '3. Personalised Signage and Monograms',
      },
      {
        type: 'p',
        text: "Custom signage is one of the most impactful décor investments for a Lagos engagement. A neon sign with the couple's initials or a meaningful phrase, a printed acrylic welcome board listing the programme, or an illuminated number display for milestone birthdays (when combined with an engagement surprise) all add a layer of personal storytelling that elevates the event beyond beautiful to meaningful.",
      },
      {
        type: 'p',
        text: "For Muslim families planning a Nikkah after the engagement, script signage in Arabic calligraphy integrated into the décor adds a spiritual dimension that many families find deeply moving.",
      },
      {
        type: 'h2',
        text: '4. String Lights and Ambient Lighting',
      },
      {
        type: 'p',
        text: "Professional event lighting transforms a space in ways that flowers alone cannot. We regularly use warm-toned string light canopies over outdoor dining areas, pin-spotting to illuminate centrepieces and the floral arch, and soft wash lighting to give the venue a warm, golden glow. In Lagos's tropical evenings, outdoor string-light setups create a magical atmosphere that photographs beautifully and feels deeply romantic.",
      },
      {
        type: 'h2',
        text: '5. Balloon Sculptures and Petal Pathways',
      },
      {
        type: 'p',
        text: "Well-executed balloon installations have made a strong comeback in Lagos, not the classic balloon arch of the 1990s, but sculpted organic arrangements in muted, sophisticated tones: warm champagne, terracotta, sage, or deep burgundy. A balloon column flanking the entrance, or a ceiling installation above the couple's seating area, adds drama and visual height without competing with the floral work.",
      },
      {
        type: 'p',
        text: "A petal pathway, roses or bougainvillea petals strewn along the route the couple walks, is a simple, affordable addition that photographs magnificently and adds a fairy-tale quality to the moment of proposal or arrival.",
      },
      {
        type: 'h2',
        text: 'Planning Your Lagos Engagement Décor',
      },
      {
        type: 'p',
        text: "The best engagement décor always starts with a clear vision of the mood rather than a list of elements. Are you going for romantic and intimate? Grand and celebratory? Cultural and traditional? Share that vision with your decorator, along with your venue, guest count, and rough budget. A good Lagos decorator will build a cohesive concept around it.",
      },
      {
        type: 'list',
        items: [
          'Book your decorator 4–6 weeks before the event, or 8–10 weeks for peak season dates.',
          'Visit the venue with your decorator before the event day, seeing the space changes everything.',
          'Share examples of what you love (and what you hate), mood boards prevent misunderstandings.',
          'Ask to see past engagement work specifically, not just general event photos.',
          'Confirm setup and breakdown times with the venue before signing the decoration contract.',
        ],
      },
      {
        type: 'cta',
        label: 'Explore our engagement decoration package',
        href: '/services/engagement-decor-lagos',
        sub: 'Free quote · Lagos-wide coverage · 2-hour response.',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // 3. Henna Party Decoration Guide Lagos
  // ─────────────────────────────────────────────────────────────────────────────
  {
    slug: 'henna-party-decoration-guide-lagos',
    title: 'Henna Party Decoration in Lagos: A Complete Styling Guide',
    metaTitle: 'Henna Party Decor Guide Lagos',
    metaDescription:
      'Planning a henna party in Lagos? This guide covers colour palettes, key décor elements, what to budget, and how to create an intimate, photo-ready space.',
    publishedAt: '2025-04-07',
    readMins: 6,
    category: 'Ceremony Guides',
    excerpt:
      'The henna party is where intimacy meets beauty. Here is how to create a Lagos henna night that feels warm, personal, and unforgettable.',
    heroImage: '/images/gallery/henna-1.JPG',
    body: [
      {
        type: 'p',
        text: "The henna party, or henna night, is one of the most intimate pre-wedding celebrations in the Lagos wedding calendar. Unlike the grand scale of the Kamu or the ceremony formality of the Nikkah, the henna gathering is smaller, warmer, and built for close family and friends. The décor reflects this: instead of commanding a ballroom, a great henna party setup creates a cosy, jewel-toned world that makes every guest feel like they have stepped into something special.",
      },
      {
        type: 'h2',
        text: 'Understanding the Henna Party Aesthetic',
      },
      {
        type: 'p',
        text: "Henna party décor in Lagos draws from Moroccan and Middle Eastern styling traditions, rich jewel tones, Moroccan lanterns, low floor cushion seating, and an abundance of warm candlelight. The palette is typically deeper and more saturated than an engagement party: think emerald, sapphire, deep plum, burnt orange, and gold. The resulting atmosphere is intimate, sensory, and warm.",
      },
      {
        type: 'p',
        text: "For Muslim families, the henna party is often an all-female gathering, which shapes the venue layout significantly, there is no need for a mixed-seating arrangement, and the styling can lean into a more feminine, maximally beautiful aesthetic.",
      },
      {
        type: 'h2',
        text: 'Key Elements of Lagos Henna Party Décor',
      },
      {
        type: 'h3',
        text: 'Floor Cushion Seating',
      },
      {
        type: 'p',
        text: "Low seating, floor cushions, bolsters, and poufs in jewel-toned fabrics, is the signature of the henna party aesthetic. It creates an immediate sense of intimacy and informality that chairs simply cannot achieve. We source cushions in velvet, brocade, and jacquard fabrics that photograph beautifully under warm light. Floor seating works best on a clean, carpeted or tiled surface, Lagos homes with tiled floors are perfect for this.",
      },
      {
        type: 'h3',
        text: 'Moroccan Lanterns',
      },
      {
        type: 'p',
        text: "Lanterns are the defining accessory of henna party décor. Brass or copper Moroccan lanterns, hung at varying heights or clustered on the floor, cast intricate light patterns across the space as the candles inside flicker. For outdoor Lagos setups, battery-powered LED lanterns eliminate the fire risk while maintaining the aesthetic. We typically use a mix of sizes, oversized lanterns as anchors with smaller ones in clusters.",
      },
      {
        type: 'h3',
        text: 'Flower Wall or Floral Backdrop',
      },
      {
        type: 'p',
        text: "Even for an intimate henna party, a dedicated floral backdrop, whether a full flower wall, a fabric and floral arch, or a floral column arrangement, gives guests a photography spot and creates a clear focal point for the space. The bride will spend much of the evening in this area as her henna is applied, so it serves a practical staging purpose as well as a decorative one.",
      },
      {
        type: 'h3',
        text: 'Fabric Draping and Canopy',
      },
      {
        type: 'p',
        text: "Sheer fabric draped from a central point in the ceiling, or suspended between poles for outdoor setups, creates a tent-like canopy that makes any space feel more intimate and enclosed. For living room setups in Lagos homes, even a simple canopy above the seating area transforms the room entirely. Choose fabrics in rich tones: deep red, gold, midnight blue, or forest green.",
      },
      {
        type: 'h2',
        text: 'Venue Options for Henna Parties in Lagos',
      },
      {
        type: 'p',
        text: "Henna parties are among the most versatile events to style because they work well in small, intimate spaces. Lagos homes, especially those with covered garden areas, large living rooms, or rooftop spaces, are ideal. We have styled henna nights in:",
      },
      {
        type: 'list',
        items: [
          'Private homes in Lekki Phase 1, Victoria Island, and Ikoyi',
          'Garden terraces and backyard spaces across the Mainland',
          'Hotel suites and ballrooms on Victoria Island for larger gatherings',
          'Rooftop spaces in Lekki and Lagos Island',
        ],
      },
      {
        type: 'h2',
        text: 'What to Budget for Henna Party Decoration in Lagos',
      },
      {
        type: 'p',
        text: "Henna party decoration in Lagos is more affordable than full wedding or engagement setups because the scale is smaller. For an intimate gathering of 20–50 guests in a home, expect to invest from ₦150,000 for a well-styled floor cushion setup with lanterns and a floral focal point. Mid-size gatherings (50–100 guests) with a flower wall, full cushion seating, and canopy typically range from ₦280,000 to ₦500,000.",
      },
      {
        type: 'h2',
        text: 'Getting the Details Right',
      },
      {
        type: 'list',
        items: [
          'Book your henna artist and your decorator together, they need to coordinate on the bride\'s seating position and lighting.',
          'Tell your decorator the floor surface, carpet, tile, and wood all behave differently with floor cushion setups.',
          'If your event is photographed, ask your decorator to place a lantern cluster or candle arrangement specifically for close-up photography.',
          'For outdoor evening setups, confirm power access for any plug-in lighting elements.',
        ],
      },
      {
        type: 'cta',
        label: 'View our henna party decoration package',
        href: '/services/henna-party-decor-lagos',
        sub: 'Intimate setups from ₦150,000 · All Lagos areas.',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // 4. Luxury Picnic Locations Lagos
  // ─────────────────────────────────────────────────────────────────────────────
  {
    slug: 'luxury-picnic-locations-lagos',
    title: 'The Best Locations for a Luxury Picnic Setup in Lagos',
    metaTitle: 'Luxury Picnic Locations Lagos',
    metaDescription:
      'Where does Decor Adorne set up luxury picnics in Lagos? From Tarkwa Bay to Lekki gardens, here are the best outdoor locations and what to consider.',
    publishedAt: '2025-04-21',
    readMins: 5,
    category: 'Lagos Guides',
    excerpt:
      "Lagos has stunning outdoor spaces that most people walk past every day. Here's where we set up our luxury picnics, and what makes each location special.",
    body: [
      {
        type: 'p',
        text: "Luxury picnics have become one of the fastest-growing celebration formats in Lagos. They work for anniversaries, birthdays, proposals, baby showers, and intimate friend gatherings, and when styled with intention, they rival any indoor event for beauty. The key ingredient, beyond the cushions and florals, is the location. Lagos has more extraordinary outdoor spaces than most Lagosians realise. Here are the ones we set up most frequently.",
      },
      {
        type: 'h2',
        text: 'Lekki Conservation Centre',
      },
      {
        type: 'p',
        text: "The LCC is Lagos's most famous natural retreat, 78 hectares of lowland rainforest with boardwalks, natural clearings, and the world's longest canopy walkway. For a luxury picnic, the grassed clearings near the entrance provide a lush, green backdrop that feels completely removed from the city. The dappled light through the canopy is stunning for photography. Book the space directly with LCC management and coordinate arrival time for setup, we typically need at least 1.5 hours.",
      },
      {
        type: 'h2',
        text: 'Tarkwa Bay Beach',
      },
      {
        type: 'p',
        text: "Tarkwa Bay is a calm, protected beach on Lagos Island accessible only by boat, which immediately gives a picnic there a sense of occasion and adventure. The boat ride from Bar Beach or Five Cowries Creek is part of the experience. The sand is soft, the water is calm, and the absence of commercial activity gives it a private-island feel. We set up beach picnic tables with parasols, floor cushions on low platforms (to keep linens off the sand), and lanterns for evening events.",
      },
      {
        type: 'h2',
        text: 'Private Gardens and Villa Grounds in Ikoyi',
      },
      {
        type: 'p',
        text: "Many private estates and villas in Ikoyi have substantial garden grounds that their residents hire out for events. These spaces combine the privacy and green beauty of a garden with the security and accessibility of a residential estate. They are our most requested category for luxury picnics, particularly for anniversary and proposal setups where privacy is important.",
      },
      {
        type: 'h2',
        text: 'Rooftop Venues on Victoria Island',
      },
      {
        type: 'p',
        text: "For couples who want a stunning Lagos skyline backdrop, several Victoria Island hotels and commercial buildings offer rooftop access for private events. Sunset picnics with the city skyline and ocean views behind them are extraordinarily photogenic. We typically use parasol-style canopies and fairy light strings for rooftop setups, and advise clients to book the evening golden hour (5–7pm) for optimal photography light.",
      },
      {
        type: 'h2',
        text: 'Home Gardens Across Lagos',
      },
      {
        type: 'p',
        text: "The most accessible luxury picnic option for most Lagos families is their own garden or compound. A well-decorated home garden setup can be just as beautiful as a public venue, often more so, because the familiarity of home makes the event feel more personal. We have styled garden picnics in Surulere, Ikeja, Gbagada, Magodo, and across the Mainland.",
      },
      {
        type: 'h2',
        text: 'What to Consider When Choosing a Lagos Picnic Location',
      },
      {
        type: 'list',
        items: [
          'Access and logistics, can setup equipment (tables, cushions, decor) reach the location easily? Tarkwa Bay requires careful packing for the boat.',
          'Natural shade, Lagos sun is intense, especially between 11am and 3pm. A tree canopy or parasol arrangement is essential.',
          'Surface type, grass is beautiful but damp grass can spoil linens. Hard ground makes some cushion setups unstable.',
          'Power access, if you want electric fairy lights or fans, confirm power availability.',
          'Timing, golden hour (one hour before sunset) is always the most beautiful time for photography in Lagos.',
          'Rain contingency, Lagos can rain at any time. Discuss an indoor backup plan with your decorator.',
        ],
      },
      {
        type: 'cta',
        label: 'Book a luxury picnic setup in Lagos',
        href: '/services/picnic-setup-lagos',
        sub: 'We handle everything. You just arrive.',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // 5. Nikkah Decoration Lagos Guide
  // ─────────────────────────────────────────────────────────────────────────────
  {
    slug: 'nikkah-decoration-lagos-guide',
    title: 'Nikkah Decoration in Lagos: What Muslim Families Need to Know',
    metaTitle: 'Nikkah Decor Guide Lagos',
    metaDescription:
      'Planning a Nikkah ceremony in Lagos? Learn about décor requirements, segregated seating, the right aesthetic, and how to combine Nikkah and Walima styling.',
    publishedAt: '2025-05-05',
    readMins: 7,
    category: 'Ceremony Guides',
    excerpt:
      'The Nikkah is a sacred ceremony that deserves décor which honours its meaning. Here is what to consider when planning Nikkah decoration in Lagos.',
    heroImage: '/images/gallery/wedding-2.JPG',
    body: [
      {
        type: 'p',
        text: "The Nikkah is one of the most sacred events in a Muslim family's life. Unlike an engagement party or a birthday celebration, the Nikkah is a religious ceremony, the formal solemnisation of marriage under Islamic law. The décor must reflect this sanctity. At Decor Adorne, we approach every Nikkah we style with deep respect for its cultural and spiritual significance, designing settings that are beautiful without being ostentatious.",
      },
      {
        type: 'h2',
        text: 'The Aesthetic Principles of Nikkah Decoration',
      },
      {
        type: 'p',
        text: "Nikkah décor is characterised by elegance, restraint, and intention. Where a Kamu celebrates abundance, and an engagement party celebrates romance, a Nikkah ceremony setting should communicate peace, beauty, and reverence. We typically work in:",
      },
      {
        type: 'list',
        items: [
          'Soft, muted tones, ivory, blush, champagne, sage green, or soft gold',
          'Floral arrangements that are graceful rather than theatrical, ranunculus, garden roses, and eucalyptus rather than tropical statement flowers',
          'Clean lines and structured fabric draping rather than excess volume',
          'Warm ambient lighting rather than coloured or dramatic stage lighting',
        ],
      },
      {
        type: 'p',
        text: "This does not mean minimalist or plain. A beautifully styled Nikkah can still be breathtakingly gorgeous, it simply achieves that through refinement rather than maximalism.",
      },
      {
        type: 'h2',
        text: 'Planning the Ceremony Layout for a Lagos Nikkah',
      },
      {
        type: 'h3',
        text: 'The Akad Area',
      },
      {
        type: 'p',
        text: "The Akad, the formal contract signing, requires a specific area set up for the bride, groom, the Sheikh (Islamic officiant), and the witnesses. This typically means a table dressed in luxurious linen with floral accents, a signing set (pen and Quran placement), and two chairs or a love seat for the couple. The backdrop behind this area, a floral arch, fabric draping, or a custom banner, becomes the central visual element of all the ceremony photography.",
      },
      {
        type: 'h3',
        text: 'Segregated Seating Arrangements',
      },
      {
        type: 'p',
        text: "Many Lagos Nikkah ceremonies observe gender-segregated seating, with male and female guests seated in separate areas of the venue. This is a significant layout consideration that must be planned into the décor from the beginning, not added as an afterthought. Each side should be equally well-styled, with clear visual sightlines to the Akad area where the ceremony takes place. Partitions, when used, should be tasteful and well-dressed, not makeshift.",
      },
      {
        type: 'h3',
        text: 'Aisle Styling',
      },
      {
        type: 'p',
        text: "A petal-strewn aisle leading to the Akad area adds beauty and defines the processional route clearly. We use rose petals, candle votives in glass holders, or low floral arrangements along the aisle edge depending on the venue. For outdoor Nikkah ceremonies in Lagos gardens, we often use lanterns on the ground flanking the path.",
      },
      {
        type: 'h2',
        text: 'Combining Nikkah and Walima Decoration',
      },
      {
        type: 'p',
        text: "Many Lagos Muslim families combine the Nikkah ceremony and the Walima reception, the celebratory meal after the marriage is consummated, in a single day or across two days at the same venue. This creates an opportunity to design a cohesive décor narrative across both events, while making a distinct visual shift between the ceremony (intimate, sacred) and the reception (celebratory, abundant).",
      },
      {
        type: 'p',
        text: "We offer combined Nikkah + Walima packages that allow families to manage the day as a single, coordinated event. The décor transitions from ceremony setting to reception setting during the mid-day break, using many of the same structural elements but adding celebratory layer, table centrepieces, charger plates, and more elaborate lighting for the reception.",
      },
      {
        type: 'h2',
        text: 'Nikkah Venues in Lagos',
      },
      {
        type: 'p',
        text: "Nikkah ceremonies in Lagos take place across a wide range of venues, from family homes and compound spaces to hotel ballrooms, garden venues, and dedicated Islamic event centres. Victoria Island, Lekki, and Ikoyi have a concentration of venues well-suited to Nikkah celebrations. We serve all of these areas and have experience styling Nikkah ceremonies across all Lagos LGAs.",
      },
      {
        type: 'h2',
        text: 'What to Budget for Nikkah Decoration in Lagos',
      },
      {
        type: 'p',
        text: "Nikkah decoration costs in Lagos depend heavily on guest count and venue size. An intimate Akad-only ceremony for 30–60 guests with a floral arch, Akad table styling, and aisle decoration starts from ₦200,000. A full Nikkah + Walima setup for 150–300 guests with complete table styling, stage arrangement, and professional lighting starts from ₦500,000 and scales with the complexity of the brief.",
      },
      {
        type: 'list',
        items: [
          'Engage your decorator early, Nikkah ceremonies often have fixed religious dates with little flexibility.',
          'Brief your decorator on gender-segregation requirements from the first conversation.',
          'If combining with a Walima, discuss the full programme and timeline, the transition window between ceremony and reception is critical.',
          'Share the Sheikh\'s seating position requirements, this affects the Akad table layout.',
          'Ask to see specific Nikkah work in the decorator\'s portfolio, not just engagement or party work.',
        ],
      },
      {
        type: 'cta',
        label: 'View our Nikkah decoration package',
        href: '/services/nikkah-decoration-lagos',
        sub: 'Respectful, beautiful, and culturally informed.',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // 6. Event Decoration Victoria Island Lagos Guide
  // ─────────────────────────────────────────────────────────────────────────────
  {
    slug: 'event-decoration-victoria-island-lagos',
    title: 'Event Decoration on Victoria Island Lagos: A Venue & Styling Guide',
    metaTitle: 'Event Decor Victoria Island Lagos',
    metaDescription:
      'Styling an event on Victoria Island Lagos? This guide covers the best VI venues, what to expect from premium décor, and how Decor Adorne works in this part of Lagos.',
    publishedAt: '2025-05-19',
    readMins: 6,
    category: 'Lagos Guides',
    excerpt:
      "Victoria Island is Lagos's most prestigious events district. Here's what great décor looks like in VI, from hotel ballrooms to rooftop gardens.",
    body: [
      {
        type: 'p',
        text: "Victoria Island is Lagos's business and social centrepiece, a dense, energetic island where the city's most prestigious hotels, restaurants, and event venues sit within a few kilometres of one another. For families and couples planning a celebration that demands the best, VI is the obvious choice. We style events on Victoria Island regularly, and we have developed a clear understanding of its venues, its aesthetics, and its expectations.",
      },
      {
        type: 'h2',
        text: 'What Makes Victoria Island Events Different',
      },
      {
        type: 'p',
        text: "Events on Victoria Island operate at a premium level. The venues are large, well-managed, and experienced with elaborate setups. Guests arrive with high expectations, a Victoria Island event signals investment and quality. The décor must match. This does not mean spending the maximum possible; it means spending with precision, concentrating impact on the elements guests actually notice and photograph.",
      },
      {
        type: 'h2',
        text: 'Victoria Island Venue Types',
      },
      {
        type: 'h3',
        text: 'Hotel Ballrooms',
      },
      {
        type: 'p',
        text: "Victoria Island's five-star hotels, Eko Hotels, Marriott, Transcorp Hilton (Abuja's equivalent is closer to this tier), and several boutique properties, offer large ballrooms with high ceilings, in-house lighting rigs, and professional event management teams. These venues suit large-scale Kamu ceremonies, engagement parties, birthday galas, and Walima receptions. For décor, high ceilings allow ceiling draping and chandelier installations that smaller venues cannot accommodate.",
      },
      {
        type: 'h3',
        text: 'Rooftop Venues',
      },
      {
        type: 'p',
        text: "Several Victoria Island buildings offer rooftop event spaces with spectacular Lagos views, the ocean to the south, the city skyline to the north. These are ideal for intimate engagements, luxury picnics, birthday sundowners, and cocktail receptions. The open air and natural light make styling both easier and more impactful. String light canopies and lantern arrangements work particularly well.",
      },
      {
        type: 'h3',
        text: 'Restaurant and Private Dining Spaces',
      },
      {
        type: 'p',
        text: "Some of Lagos's finest restaurants on Victoria Island offer private dining spaces or full restaurant buyouts for events. These spaces are already atmospherically designed, which means décor should complement, not overwhelm, the existing aesthetic. We typically focus on table styling, floral centrepieces, and a dedicated photo backdrop or proposal setup in these environments.",
      },
      {
        type: 'h2',
        text: 'Décor Styles That Work on Victoria Island',
      },
      {
        type: 'p',
        text: "Victoria Island's upscale clientele tends to gravitate toward one of two broad aesthetic poles:",
      },
      {
        type: 'list',
        items: [
          'Modern luxury, clean lines, white and gold, sculptural floral arrangements, crystal glassware, and professional lighting. Draws from international wedding and event trends while feeling unmistakably Nigerian in its scale and colour.',
          'Culturally rich, bold textiles, traditional elements, abundant florals in deep jewel tones, and décor that celebrates Nigerian identity. This aesthetic is particularly strong for Kamu, Durbar, and naming ceremony events on VI.',
        ],
      },
      {
        type: 'h2',
        text: 'Logistics for Victoria Island Events',
      },
      {
        type: 'p',
        text: "Styling events on Victoria Island requires careful logistics planning. Traffic during morning and evening setup windows can be severe. We always confirm setup access times with the venue well in advance, most VI hotel venues require suppliers to arrive through service entrances and during specific windows.",
      },
      {
        type: 'p',
        text: "For large events, our team arrives 6–8 hours before the event start to allow full installation time. For intimate dinners and picnic setups, 2 hours is typically sufficient. We confirm a detailed run sheet with every VI client before the event day.",
      },
      {
        type: 'h2',
        text: 'Event Types We Style Most Often on Victoria Island',
      },
      {
        type: 'list',
        items: [
          'Engagement parties, particularly romantic rooftop and garden setups',
          'Kamu ceremonies, full venue transformations with cultural fabric and floral installations',
          'Nikkah ceremonies, elegant, refined, respectful of Islamic tradition',
          'Luxury picnic setups, rooftop and garden',
          'Arabian Night events, full venue transformations for the most dramatic aesthetic',
          'Birthday galas, milestone celebrations for Lagos\'s most discerning families',
        ],
      },
      {
        type: 'cta',
        label: 'Plan your Victoria Island event',
        href: '/#lead-form',
        sub: 'Free consultation · 2-hour response · All VI venues.',
      },
    ],
  },
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug);
}

export function getRelatedPosts(currentSlug: string, count = 2): BlogPost[] {
  return BLOG_POSTS.filter((p) => p.slug !== currentSlug).slice(0, count);
}
