<template>
    <div class="flex flex-col gap-3 text-gray-500 text-xl">
        <p>
            Welcome to Discover Kutaisi, your premier partner for exploring the heart of Georgia. As a dedicated local tour agency, we specialize in providing authentic and unforgettable experiences that showcase the best of the Imereti region. From ancient monasteries to breathtaking natural wonders, our mission is to ensure you discover the true essence of Kutaisi.




        </p>
        <p>
            Our commitment to your journey begins with our exceptional team. We are proud to work with highly experienced drivers and knowledgeable guides who are passionate about sharing their expertise. Your comfort and safety are paramount, which is why all our tours are conducted in modern, well-maintained minivans. This allows you to travel in comfort and style as you explore iconic landmarks like Gelati and Motsameta Monasteries, the awe-inspiring Bagrati Cathedral, and the stunning natural formations of Prometheus Cave, Okatse Canyon, and Martvili Canyon.
        </p>
        <p>
            Looking for the best things to do in Kutaisi? Whether you want a single-day adventure or a multi-day itinerary, we can tailor a trip just for you. Beyond our popular excursions, we also offer reliable transfers to and from any location, making your travel seamless and stress-free. Let us take care of the details while you create lasting memories.
        </p>
        <p>
            Let's <span class="text-gray-100 bg-green-600 text-2xl px-5 py-1 rounded">Discover Kutaisi</span> together!
        </p>
    </div>
</template>

<script setup>
// Import Nuxt composables
import { useSeoMeta, useHead } from '#imports'

//SEO Meta Tags for About Page
useSeoMeta({
  // Primary SEO Tags
  title: 'About Us | Discover Kutaisi Tours & Transfers',
  description: 'Learn about our Kutaisi tour agency. We offer expert-guided tours and transfers to Prometheus Cave, Okatse Canyon, and Martvili Canyon with experienced drivers and comfortable minivans.',

  // Open Graph (Social Sharing) Tags
  ogTitle: 'About Us | Discover Kutaisi Tours & Transfers',
  ogDescription: 'Our team of experienced guides and drivers provides top-rated tours to the most stunning sights in Georgia. Discover Bagrati, Gelati, and more with our comfortable transfers and premium services.',
  ogImage: 'https://discoverkutaisi.com/images/logo.png',
  ogUrl: 'https://discoverkutaisi.com/about',
  ogType: 'website',
  
  // Twitter Card Tags
  twitterTitle: 'About Us | Discover Kutaisi Tours & Transfers',
  twitterDescription: 'Discover why we are the top choice for tours and things to do in Kutaisi. We offer tours to Prometheus Cave, Okatse Canyon, and other popular destinations.',
  twitterCard: 'summary_large_image',
  twitterImage: 'https://discoverkutaisi.com/images/logo.png', 

  // Legacy Meta Tag (for some search engines)
  keywords: 'tours, prometheus cave, okatse canyon, martvili canyon, gelati, motsameta, Kutaisi, bagrati, things to do in kutaisi, transfers',
})

// Set the canonical link using useHead
useHead({
  link: [
    {
      rel: 'canonical',
      href: `https://discoverkutaisi.com/about`,
    },
  ],
  htmlAttrs: {
    lang: 'en' // Sets language to English
  }
})
</script>