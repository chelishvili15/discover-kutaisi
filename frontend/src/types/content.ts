export type TourCategory = "nature" | "history" | "adventure" | "all";
export type DurationBucket = "half-day" | "full-day" | "multi-day";

export interface SeoFields {
  title: string;
  description: string;
  canonicalPath: string;
  image: string;
  ogTitle: string;
  ogDescription: string;
  ogImage: string;
}

export interface Tour {
  id: string;
  slug: string;
  title: string;
  durationLabel: string;
  durationHours: number;
  category: Exclude<TourCategory, "all">;
  difficulty: "easy" | "moderate";
  summary: string;
  description: string;
  priceFromGel: number;
  image: string;
  mapEmbedUrl?: string;
  itinerary: ItineraryStop[];
  includes: string[];
  excludes: string[];
  importantInfo: string[];
  seo: SeoFields;
}

export interface ItinerarySpan {
  text: string;
  href?: string;
  bold?: boolean;
  italic?: boolean;
  size?: "xs" | "sm" | "base" | "lg";
  color?: "default" | "muted" | "dark" | "brand" | "white";
}

export type ItineraryDetailBlock =
  | {
      type: "heading";
      level?: 2 | 3;
      text: string;
    }
  | {
      type: "paragraph";
      spans: ItinerarySpan[];
    }
  | {
      type: "list";
      ordered?: boolean;
      items: ItinerarySpan[][];
    };

export type ItineraryDetail = string | ItineraryDetailBlock;

export interface ItineraryActivity {
  icon: string;
  details: ItineraryDetail[];
  placeSlug?: string;
}

export interface ItineraryStop {
  icon: string;
  details: ItineraryDetail[];
  activities: ItineraryActivity[] | null;
  placeSlug?: string;
}

export type PlaceCategory =
  | "caves"
  | "canyons"
  | "monasteries"
  | "nature"
  | "waterfalls"
  | "lakes"
  | "shrines";

export interface Place {
  id: string;
  slug: string;
  name: string;
  category: PlaceCategory;
  location: string;
  entryFee: string;
  summary: string;
  description: string;
  activities: string[];
  details: string[];
  videoUrl?: string;
  images: string[];
  seo: SeoFields;
}

export interface TransferTour {
  id: string;
  from: string;
  to: string;
  duration: string;
  priceGel: number;
  seo: SeoFields;
}

export interface TransferFeature {
  title: string;
  description: string;
}

export interface VehicleType {
  title: string;
  description: string;
}

export interface TransferPricingRow {
  route: string;
  price1To3: string;
  price4To7: string;
  price7Plus?: string;
}

export interface TransferPricingTable {
  title: string;
  columnRoute: string;
  column1To3: string;
  column4To7: string;
  column7Plus: string;
  rows: TransferPricingRow[];
  note?: string;
}

export interface HomePageContent {
  heroBadge: string;
  heroTitle: string;
  heroSubtitle: string;
  heroDescription: string;
  exploreToursLabel: string;
  bookTransferLabel: string;
  featuredBadge: string;
  popularToursTitle: string;
  popularToursSubtitle: string;
  whyBadge: string;
  whyTitle: string;
  whySubtitle: string;
  whyItems: TransferFeature[];
  highlightsBadge: string;
  placesTitle: string;
  placesSubtitle: string;
  viewAllPlacesLabel: string;
  transportBadge: string;
  transfersTitle: string;
  transfersSubtitle: string;
  popularTransfersTitle: string;
  serviceFeaturesTitle: string;
  testimonialsBadge: string;
  testimonialsTitle: string;
  testimonialsSubtitle: string;
  blogBadge: string;
  blogTitle: string;
  blogSubtitle: string;
  blogCtaLabel: string;
  ctaBadge: string;
  ctaTitle: string;
  ctaDescription: string;
  ctaButtonLabel: string;
}

export interface AboutPageContent {
  heroTitle: string;
  heroSubtitle: string;
  whoWeAreTitle: string;
  teamTitle: string;
  planningTitle: string;
  ctaTag: string;
  ctaTitle: string;
  ctaDescription: string;
  ctaButtonLabel: string;
  paragraphs: string[];
}

export interface ContactPageContent {
  heroTitle: string;
  heroSubtitle: string;
  infoTitle: string;
  whatsappLabel: string;
  youtubeLabel: string;
  mapsButtonLabel: string;
  workingHoursLabel: string;
  workingHoursValue: string;
}

export interface SimpleHeroPageContent {
  heroTitle: string;
  heroSubtitle: string;
}

export interface TransfersIndexPageContent extends SimpleHeroPageContent {
  popularToursTitle: string;
  serviceFeaturesTitle: string;
  vehicleTypesTitle: string;
}

export interface TransfersPageData {
  features: TransferFeature[];
  vehicleTypes: VehicleType[];
  tourLabelFrom: string;
  tourLabelDuration: string;
  pricingTable: TransferPricingTable;
}

export interface PageDocument<TContent> {
  id: string;
  seo: SeoFields;
  content: TContent;
}

export interface Testimonial {
  id: string;
  name: string;
  country: string;
  avatarImage?: string;
  avatarAlt?: string;
  reviewDate?: string;
  rating: number;
  quote: string;
  sourceType: "placeholder" | "google";
  isVerified: boolean;
}

export type BlogBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; level: 2 | 3; text: string }
  | { type: "list"; style: "unordered" | "ordered"; items: string[] }
  | { type: "quote"; text: string; cite?: string }
  | { type: "image"; src: string; alt: string; caption?: string };

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  author: string;
  publishedAt: string;
  updatedAt?: string;
  category: string;
  tags: string[];
  coverImage: string;
  coverImageAlt: string;
  readingTimeMinutes?: number;
  isPublished: boolean;
  seo: SeoFields;
  contentBlocks: BlogBlock[];
}
