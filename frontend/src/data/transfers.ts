import type { TransferFeature, TransferPricingTable, TransferTour, TransfersPageData, VehicleType } from "@/types/content";

const tourModules = import.meta.glob<{ default: TransferTour }>("../content/transfers/tours/*.json", {
  eager: true
});

const transferPageModules = import.meta.glob<{ default: { content: TransfersPageData } }>(
  "../content/transfers/transfers-page.json",
  { eager: true }
);

const transferPageData = Object.values(transferPageModules)[0]?.default.content;

export const transferTours: TransferTour[] = Object.entries(tourModules)
  .sort(([a], [b]) => a.localeCompare(b))
  .map(([, module]) => module.default);

export const transferFeatures: TransferFeature[] = transferPageData?.features ?? [];

export const vehicleTypes: VehicleType[] = transferPageData?.vehicleTypes ?? [];

export const transferPricingTable: TransferPricingTable | undefined = transferPageData?.pricingTable;

function normalizeRouteLabel(value: string): string {
  return value
    .toLowerCase()
    .replace(/\([^)]*\)/g, " ")
    .replace(/[^a-z0-9]+/g, " ")
    .trim();
}

function parseGelAmount(value?: string): number | null {
  if (!value) {
    return null;
  }
  const match = value.match(/\d+(\.\d+)?/);
  if (!match) {
    return null;
  }
  const parsed = Number.parseFloat(match[0]);
  return Number.isFinite(parsed) ? parsed : null;
}

export function getTransferPricingRow(tour: TransferTour) {
  if (!transferPricingTable) {
    return undefined;
  }

  const route = normalizeRouteLabel(tour.from);
  const destination = normalizeRouteLabel(tour.to);
  const usesAirport = route.includes("airport") || destination.includes("airport");

  return transferPricingTable.rows.find((row) => {
    const rowRoute = normalizeRouteLabel(row.route);

    if (usesAirport && rowRoute.includes("airport")) {
      return true;
    }

    return rowRoute.includes(route) && rowRoute.includes(destination);
  });
}

export function hasTransferPricingRow(tour: TransferTour): boolean {
  return Boolean(getTransferPricingRow(tour));
}

export function getTransferFromPriceGel(tour: TransferTour): number {
  const matchedRow = getTransferPricingRow(tour);
  const parsedAmount = parseGelAmount(matchedRow?.price1To3);
  return parsedAmount ?? tour.priceGel;
}
