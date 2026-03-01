import { site } from "@/data/site";

function encodedLine(label: string, value: string): string {
  return `${label}: ${value}`;
}

export function buildMailto(subject: string, fields: Record<string, string>): string {
  const body = Object.entries(fields)
    .map(([key, value]) => encodedLine(key, value))
    .join("\n");
  return `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export function buildWhatsApp(fields: Record<string, string>): string {
  const text = Object.entries(fields)
    .map(([key, value]) => encodedLine(key, value))
    .join("\n");
  return `${site.whatsapp}&text=${encodeURIComponent(text)}`;
}
