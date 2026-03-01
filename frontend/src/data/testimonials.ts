import type { Testimonial } from "@/types/content";
import type { ImageMetadata } from "astro";

const testimonialAvatarModules = import.meta.glob("../content/img/testimonials/*.{jpg,jpeg,png,webp,avif,svg}", {
  eager: true,
  import: "default"
}) as Record<string, string | ImageMetadata>;

const normalizeAvatarKey = (value: string): string =>
  value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, " ")
    .trim();

const avatarByName = new Map<string, string>();
for (const [modulePath, assetUrl] of Object.entries(testimonialAvatarModules)) {
  const fileName = modulePath.split("/").pop() ?? "";
  const baseName = fileName.replace(/\.[^.]+$/, "");
  const resolvedUrl = typeof assetUrl === "string" ? assetUrl : assetUrl.src;
  avatarByName.set(normalizeAvatarKey(baseName), resolvedUrl);
}

const baseTestimonials: Testimonial[] = [
  {
    id: "t1",
    name: "Mirka Parobková",
    country: "",
    reviewDate: "2025-05",
    rating: 5,
    quote:
      "We met David randomly when we ordered Bolt to Motsameta monastery in the surroundings of Kutaisi. He waited for us for an hour. The next day we contacted him directly for another trip to the canyons. He was very nice and helpful. It was a shame we didn't speak better English because we hadn't been able to talk to him more. I would definitely recommend David's services to everyone. Thanks and good luck to you, David ❤️",
    sourceType: "google",
    isVerified: true
  },
  {
    id: "t2",
    name: "ir ko",
    country: "",
    reviewDate: "2025-10",
    rating: 5,
    quote:
      "We had an excellent experience with our driver, Daviti, who took us from Kobuleti to Tbilisi. He arrived ahead of time, assisted with our luggage, and made the journey both comfortable and enjoyable. Along the way, he pointed out interesting landmarks, explained their significance, and recommended places of interest worth visiting. Daviti was patient and accommodating, stopping whenever we asked, and he remained calm and professional even while navigating busy traffic and road construction. He also went the extra mile by helping us order delicious traditional Georgian dishes during our lunch stop. We highly recommend Daviti for anyone looking for a reliable, knowledgeable, and friendly driver in Georgia.",
    sourceType: "google",
    isVerified: true
  },
  {
    id: "t3",
    name: "vladimer gogava",
    country: "",
    reviewDate: "2025-10",
    rating: 5,
    quote: "Great professional and great person! 100% recommend! Thank you David for unforgettable experience.",
    sourceType: "google",
    isVerified: true
  },
  {
    id: "t4",
    name: "Jorge Mondéjar Fernández",
    country: "",
    reviewDate: "2025-08",
    rating: 5,
    quote:
      "We had a great time with Daviti! He is a patient, very efficient and extremely friendly driver (and a good photographer!). We travelled with a big family and both our trips were pleasant and comfortable for the kids. He let us choose the music and answered all our questions about Georgian history and recommended very interesting sites. We strongly recommend his services and we hope to see him again next time we are in Georgia!",
    sourceType: "google",
    isVerified: true
  },
  {
    id: "t5",
    name: "gilles 43",
    country: "",
    reviewDate: "2025-11",
    rating: 5,
    quote: "Nice tour with Vaso. Landscape was amazing, and our guide was nice and safe driver compare to other experiences here.",
    sourceType: "google",
    isVerified: true
  },
  {
    id: "t6",
    name: "Andrei Kouzel",
    country: "",
    reviewDate: "2025-04",
    rating: 5,
    quote:
      "David took us from Kutaisi to Tskaltubo, patiently waited for us for an hour while we were jogging and then brought us back. We liked him and decided to order a transfer from Kutaisi to Tbilisi. The trip was very comfortable. David is a very calm driver. I recommend!",
    sourceType: "google",
    isVerified: true
  },
  {
    id: "t7",
    name: "Irene Robit",
    country: "",
    reviewDate: "2025-08",
    rating: 5,
    quote:
      "Mr. Daviti's proficient command of the English language facilitated clear and concise communication throughout our travel arrangements. His professionalism, informative approach, and patience were highly commendable. Furthermore, the pricing structure proved to be competitive as advertised, offering particularly advantageous rates for family or group travel. Car is clean and with FOC water throughout our journey.",
    sourceType: "google",
    isVerified: true
  },
  {
    id: "t8",
    name: "Martin Babka",
    country: "",
    reviewDate: "2025-09",
    rating: 5,
    quote:
      "Very professional and friendly, we definitely recommend. Showed us an excellent local restaurant, highlights of Kutaisi, was always on time and nice to us.",
    sourceType: "google",
    isVerified: true
  },
  {
    id: "t9",
    name: "Pan Nik",
    country: "",
    reviewDate: "2025-05",
    rating: 5,
    quote:
      "David was the best surprise we could get in Kutaisi. We just asked for a bolt ride and then we ended up spending the day with him. He took us to all the important monuments and even walked with us, also providing us with very useful information. We definitely reccomend him and we are using his services again!",
    sourceType: "google",
    isVerified: true
  },
  {
    id: "t10",
    name: "Christine Chan",
    country: "",
    reviewDate: "2025-10",
    rating: 5,
    quote: "Thank you David for taking care of us in Georgia!",
    sourceType: "google",
    isVerified: true
  },
  {
    id: "t11",
    name: "MOKSHIKA Sharma",
    country: "",
    reviewDate: "2025-02",
    rating: 5,
    quote:
      "Veryyy affordable price and he's such a nice guy i highly recommend it was five of us and our trip was saved thanks to himmm",
    sourceType: "google",
    isVerified: true
  },
  {
    id: "t12",
    name: "Veronica Amiconi",
    country: "",
    reviewDate: "2025-05",
    rating: 5,
    quote:
      "David is very kind and helpful. He brought me and my Friends on a nice tour around Kutaisi most interesting places, showing even non touristic places that are hard to find. I recommend him to anyone who wants to visit Kutaisi and nearby. Thanks David",
    sourceType: "google",
    isVerified: true
  },
  {
    id: "t13",
    name: "Sunil Prasad",
    country: "",
    reviewDate: "2025-05",
    rating: 5,
    quote:
      "We had a wonderful time with Mr. David. Professional and polite tour advisor. He explained everything about each tourist spot.",
    sourceType: "google",
    isVerified: true
  },
  {
    id: "t14",
    name: "Loudan Hughes",
    country: "",
    reviewDate: "2025-02",
    rating: 5,
    quote: "Great Service! David is a very friendly driver and prices are reasonable ",
    sourceType: "google",
    isVerified: true
  },
  {
    id: "t15",
    name: "Eik Waldmann",
    country: "",
    reviewDate: "2025-06",
    rating: 5,
    quote: "Very good service and a kindly Driver",
    sourceType: "google",
    isVerified: true
  },
  {
    id: "t16",
    name: "Barbara Heise",
    country: "",
    reviewDate: "2025-10",
    rating: 5,
    quote:
      "David, an outstanding, competent, well-informed, always friendly, and helpful guide. He accompanied and guided us through/around Kutaisi for a day and a half. He showed us secret places that are certainly not accessible to every tourist, as they were very hidden or adventurous. His enthusiasm for every step he took with us immediately rubbed off on us. His driving skills, especially to Mestia (6 hours into the mountains/October) in the rain, were excellent and safe, which we admired on the way to Mestia. We would like to thank him again for his professional and friendly guidance. We will miss him. His language skills are perfect and extensive. We look forward to seeing you. Best regards, Babsi, Martina, Isabel",
    sourceType: "google",
    isVerified: true
  },
  {
    id: "t17",
    name: "Isabel",
    country: "",
    reviewDate: "2025-10",
    rating: 5,
    quote:
      "We had two fantastic days with David! He's a great guide and showed us many places and answered our questions. On the second day, he drove us very safely through the rain to Mestia. Thank you so much!",
    sourceType: "google",
    isVerified: true
  },
  {
    id: "t18",
    name: "konstantinos katsaros",
    country: "",
    reviewDate: "2025-03",
    rating: 5,
    quote:
      "Wonderful man. Excellent guide and impeccable in his services. I highly recommend him as well as the 2 times we visited Kutaisi he did everything he could to help us. Thank you David.",
    sourceType: "google",
    isVerified: true
  },
  {
    id: "t19",
    name: "Krzysztof Urbański",
    country: "",
    reviewDate: "2025-04",
    rating: 5,
    quote: "I recommend 100%",
    sourceType: "google",
    isVerified: true
  },
  {
    id: "t20",
    name: "დიმა გოცირიძე",
    country: "",
    reviewDate: "2026-02",
    rating: 5,
    quote: "Thank you for the best transfer, Kutaisi - Bakuriani, affordable price, excellent service.",
    sourceType: "google",
    isVerified: true
  },
  {
    id: "t21",
    name: "Krystian Dworczak",
    country: "",
    reviewDate: "2025-07",
    rating: 5,
    quote: "5-star review (no written comment).",
    sourceType: "google",
    isVerified: true
  },
  {
    id: "t22",
    name: "Ziad Sabeer",
    country: "",
    reviewDate: "2025-02",
    rating: 5,
    quote: "5-star review (no written comment).",
    sourceType: "google",
    isVerified: true
  }
];

export const testimonials: Testimonial[] = baseTestimonials.map((item) => {
  const avatarImage = avatarByName.get(normalizeAvatarKey(item.name));
  return {
    ...item,
    avatarImage,
    avatarAlt: avatarImage ? `${item.name} profile image` : undefined
  };
});

