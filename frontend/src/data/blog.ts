import { estimateReadingTimeFromBlocks } from "@/lib/blog";
import type { BlogPost } from "@/types/content";

const blogModules = import.meta.glob<{ default: BlogPost }>("../content/blog/*.json", {
  eager: true
});

const byPublishedDateDesc = (a: BlogPost, b: BlogPost): number => {
  const aTime = new Date(a.publishedAt).getTime();
  const bTime = new Date(b.publishedAt).getTime();
  return bTime - aTime;
};

export const allBlogPosts: BlogPost[] = Object.entries(blogModules)
  .sort(([a], [b]) => a.localeCompare(b))
  .map(([, module]) => module.default)
  .map((post) => ({
    ...post,
    readingTimeMinutes: post.readingTimeMinutes ?? estimateReadingTimeFromBlocks(post.contentBlocks)
  }))
  .sort(byPublishedDateDesc);

export const publishedBlogPosts: BlogPost[] = allBlogPosts.filter((post) => post.isPublished);

export const BLOG_PAGE_SIZE = 6;

export const getBlogPostBySlug = (slug: string): BlogPost | undefined =>
  publishedBlogPosts.find((post) => post.slug === slug);
