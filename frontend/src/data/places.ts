import type { Place } from "@/types/content";

const placeModules = import.meta.glob<{ default: Place }>("../content/places/*.json", {
  eager: true
});

export const places: Place[] = Object.entries(placeModules)
  .sort(([a], [b]) => a.localeCompare(b))
  .map(([, module]) => module.default);

