import type { DurationBucket, Place, Tour, TourCategory } from "@/types/content";

export function getDurationBucket(hours: number): DurationBucket {
  if (hours <= 5) return "half-day";
  if (hours <= 10) return "full-day";
  return "multi-day";
}

export function filterTours(
  data: Tour[],
  category: TourCategory,
  duration: DurationBucket | "all",
  maxPrice: number
): Tour[] {
  return data.filter((tour) => {
    const categoryMatch = category === "all" || tour.category === category;
    const durationMatch = duration === "all" || getDurationBucket(tour.durationHours) === duration;
    const priceMatch = tour.priceFromGel <= maxPrice;
    return categoryMatch && durationMatch && priceMatch;
  });
}

export function filterPlaces(data: Place[], category: Place["category"] | "all"): Place[] {
  if (category === "all") return data;
  return data.filter((place) => place.category === category);
}
