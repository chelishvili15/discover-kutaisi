import type { BlogBlock } from "@/types/content";

export const estimateReadingTimeFromBlocks = (blocks: BlogBlock[]): number => {
  const words = blocks.reduce((total, block) => {
    if (block.type === "paragraph" || block.type === "heading" || block.type === "quote") {
      return total + block.text.trim().split(/\s+/).filter(Boolean).length;
    }
    if (block.type === "list") {
      return total + block.items.join(" ").trim().split(/\s+/).filter(Boolean).length;
    }
    return total;
  }, 0);

  return Math.max(1, Math.ceil(words / 200));
};
