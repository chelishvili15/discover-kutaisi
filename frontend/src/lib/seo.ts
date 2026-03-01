import type { BlogPost, Place, Tour } from "@/types/content";

export interface BreadcrumbItem {
  name: string;
  url: string;
}

interface SiteSchemaInput {
  name: string;
  domain: string;
  description: string;
  email: string;
  phone: string;
  address: string;
  whatsapp: string;
  youtube: string;
}

export const toAbsoluteUrl = (path: string, baseUrl: string): string => new URL(path, baseUrl).toString();

export const buildOrganizationSchema = (site: SiteSchemaInput, baseUrl: string): Record<string, unknown> => ({
  "@context": "https://schema.org",
  "@type": "TravelAgency",
  name: site.name,
  url: baseUrl,
  description: site.description,
  email: site.email,
  telephone: site.phone,
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address,
    addressLocality: "Kutaisi",
    addressRegion: "Imereti",
    addressCountry: "GE"
  },
  sameAs: [site.whatsapp, site.youtube]
});

export const buildBreadcrumbSchema = (items: BreadcrumbItem[]): Record<string, unknown> => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, idx) => ({
    "@type": "ListItem",
    position: idx + 1,
    name: item.name,
    item: item.url
  }))
});

export const buildTouristAttractionSchema = (
  place: Place,
  canonicalUrl: string
): Record<string, unknown> => ({
  "@context": "https://schema.org",
  "@type": "TouristAttraction",
  name: place.name,
  description: place.seo.description || place.description,
  url: canonicalUrl,
  image: place.images,
  touristType: place.category,
  address: {
    "@type": "PostalAddress",
    addressLocality: place.location,
    addressCountry: "GE"
  }
});

export const buildTouristTripSchema = (tour: Tour, canonicalUrl: string): Record<string, unknown> => {
  const stripHtml = (value: string): string => value.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim();
  const detailToText = (detail: Tour["itinerary"][number]["details"][number]): string => {
    if (typeof detail === "string") {
      return stripHtml(detail);
    }

    if (detail.type === "heading") {
      return detail.text;
    }

    if (detail.type === "paragraph") {
      return detail.spans.map((span) => span.text).join(" ");
    }

    return detail.items.map((item) => item.map((span) => span.text).join(" ")).join(" ");
  };

  const itineraryText = tour.itinerary.map((stop) =>
    stop.details
      .map(detailToText)
      .join(" ")
      .trim()
  );

  return {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    name: tour.title,
    description: tour.seo.description || tour.summary,
    url: canonicalUrl,
    image: [tour.image],
    itinerary: itineraryText,
    offers: {
      "@type": "Offer",
      priceCurrency: "GEL",
      price: tour.priceFromGel,
      availability: "https://schema.org/InStock",
      url: canonicalUrl
    }
  };
};

export const buildBlogPostingSchema = (post: BlogPost, canonicalUrl: string): Record<string, unknown> => ({
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: post.title,
  description: post.seo.description || post.excerpt,
  image: [post.coverImage],
  datePublished: post.publishedAt,
  dateModified: post.updatedAt ?? post.publishedAt,
  author: {
    "@type": "Person",
    name: post.author
  },
  mainEntityOfPage: canonicalUrl,
  url: canonicalUrl
});

export const buildBlogItemListSchema = (
  posts: BlogPost[],
  baseUrl: string
): Record<string, unknown> => ({
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: posts.map((post, idx) => ({
    "@type": "ListItem",
    position: idx + 1,
    url: toAbsoluteUrl(`/blog/${post.slug}`, baseUrl),
    name: post.title
  }))
});
