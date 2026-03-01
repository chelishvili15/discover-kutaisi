import type { Tour } from "@/types/content";

const tourModules = import.meta.glob<{ default: unknown }>("../content/tours/*.json", {
  eager: true
});

const DEFAULT_STOP_ICON = "/content/img/icons/road-map-icon.svg";
const DEFAULT_ACTIVITY_ICON = "/content/img/icons/pushpin-icon.svg";

type LegacyDetailBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; level?: 2 | 3; text: string }
  | { type: "list"; style: "unordered" | "ordered"; items: string[] }
  | { type: "quote"; text: string; cite?: string };

const toIconPath = (icon: unknown, fallback: string): string => {
  if (typeof icon !== "string" || icon.trim().length === 0) {
    return fallback;
  }

  const value = icon.trim();
  if (value.startsWith("/")) {
    return value;
  }

  return `/content/img/icons/${value}`;
};

const legacyBlockToStructured = (
  block: LegacyDetailBlock
): Tour["itinerary"][number]["details"][number][] => {
  if (block.type === "paragraph") {
    return [{ type: "paragraph", spans: [{ text: block.text }] }];
  }

  if (block.type === "heading") {
    return [{ type: "heading", level: block.level ?? 2, text: block.text }];
  }

  if (block.type === "quote") {
    const quoteBlocks: Tour["itinerary"][number]["details"][number][] = [
      { type: "paragraph", spans: [{ text: block.text, italic: true }] }
    ];
    if (block.cite) {
      quoteBlocks.push({ type: "paragraph", spans: [{ text: `- ${block.cite}` }] });
    }
    return quoteBlocks;
  }

  if (block.type === "list") {
    return [
      {
        type: "list",
        ordered: block.style === "ordered",
        items: block.items.map((item) => [{ text: item }])
      }
    ];
  }

  return [];
};

const isSpan = (value: unknown): value is { text: string; href?: string; bold?: boolean; italic?: boolean } =>
  Boolean(value && typeof value === "object" && typeof (value as { text?: unknown }).text === "string");

const isStructuredDetail = (value: unknown): value is Tour["itinerary"][number]["details"][number] => {
  if (!value || typeof value !== "object" || !("type" in value)) {
    return false;
  }

  const detail = value as { type?: unknown; text?: unknown; spans?: unknown; items?: unknown };

  if (detail.type === "heading") {
    return typeof detail.text === "string";
  }

  if (detail.type === "paragraph") {
    return Array.isArray(detail.spans) && detail.spans.every(isSpan);
  }

  if (detail.type === "list") {
    return Array.isArray(detail.items) && detail.items.every((item) => Array.isArray(item) && item.every(isSpan));
  }

  return false;
};

const toStructuredDetails = (details: unknown): Tour["itinerary"][number]["details"] => {
  if (!Array.isArray(details)) {
    return [];
  }

  return details.flatMap((item) => {
    if (typeof item === "string" && item.trim().length > 0) {
      return [item.trim()];
    }

    if (isStructuredDetail(item)) {
      return [item];
    }

    if (item && typeof item === "object" && "type" in item) {
      return legacyBlockToStructured(item as LegacyDetailBlock);
    }

    return [];
  });
};

const normalizeTour = (raw: unknown): Tour => {
  const tour = raw as Record<string, unknown>;

  const rawStops =
    (Array.isArray(tour.itinerary) && tour.itinerary) ||
    (Array.isArray(tour.iterinaries) && tour.iterinaries) ||
    [];

  const itinerary: Tour["itinerary"] = rawStops.map((rawStop) => {
    const stop = (rawStop ?? {}) as Record<string, unknown>;
    const rawActivities = stop.activities;

    const activities =
      rawActivities === null
        ? null
        : Array.isArray(rawActivities)
          ? rawActivities.map((rawActivity) => {
              if (typeof rawActivity === "string" && rawActivity.trim().length > 0) {
                return {
                  icon: DEFAULT_ACTIVITY_ICON,
                  details: [rawActivity.trim()],
                  placeSlug: undefined
                };
              }

              const activity = (rawActivity ?? {}) as Record<string, unknown>;
              return {
                icon: toIconPath(activity.icon, DEFAULT_ACTIVITY_ICON),
                details: toStructuredDetails(activity.details),
                placeSlug: typeof activity.placeSlug === "string" ? activity.placeSlug : undefined
              };
            })
          : [];

    return {
      icon: toIconPath(stop.icon, DEFAULT_STOP_ICON),
      details: toStructuredDetails(stop.details),
      activities,
      placeSlug: typeof stop.placeSlug === "string" ? stop.placeSlug : undefined
    };
  });

  return {
    ...(tour as Omit<Tour, "itinerary">),
    itinerary
  } as Tour;
};

export const tours: Tour[] = Object.entries(tourModules)
  .sort(([a], [b]) => a.localeCompare(b))
  .map(([, module]) => normalizeTour(module.default));
