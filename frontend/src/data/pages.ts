import type {
  AboutPageContent,
  ContactPageContent,
  HomePageContent,
  PageDocument,
  SimpleHeroPageContent,
  TransfersIndexPageContent
} from "@/types/content";

type RawPageData = PageDocument<Record<string, unknown>>;

const pageModules = import.meta.glob<{ default: RawPageData }>("../content/pages/*.json", {
  eager: true
});

const pages = Object.values(pageModules).map((module) => module.default);

function requirePage<T>(id: string): PageDocument<T> {
  const page = pages.find((item) => item.id === id);
  if (!page) {
    throw new Error(`Missing page content file for id: ${id}`);
  }
  return page as PageDocument<T>;
}

export const homePage = requirePage<HomePageContent>("home");
export const aboutPage = requirePage<AboutPageContent>("about");
export const contactPage = requirePage<ContactPageContent>("contact");
export const toursIndexPage = requirePage<SimpleHeroPageContent>("tours-index");
export const placesIndexPage = requirePage<SimpleHeroPageContent>("places-index");
export const transfersIndexPage = requirePage<TransfersIndexPageContent>("transfers-index");

