const GEL_PER_USD = 2.7;

function toUsd(gel: number): number {
  return Math.round(gel / GEL_PER_USD);
}

export function formatUsdGel(gel: number): string {
  return `$${toUsd(gel)} (${gel} ₾)`;
}
