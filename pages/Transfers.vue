<template>
    <div class="flex flex-col gap-4">
        <H1 title="Transfers from Kutaisi"></H1>
        <div 
            v-for="location in data" 
            :key="location.id"
            class="bg-green-600 rounded-lg text-gray-100 text-2xl font-bold px-7 py-3 flex shadow-md shadow-gray-600"
        >
            <div class="w-1/2">{{ location.name }}</div>
            <div class="w-1/2 text-end">{{ location.price }}</div>
        </div>
    </div>
</template>

<script setup>
import { data } from '@/public/transfers.json';
import H1 from '../components/H1.vue';

// Import Nuxt composables
import { useSeoMeta, useHead } from '#imports'

// ✅ SEO Meta Tags for Transfers Page
useSeoMeta({
  // Primary SEO
  title: 'Transfers from Kutaisi | Discover Kutaisi Tours & Transfers',
  description: 'Private and comfortable transfers from Kutaisi to Prometheus Cave, Martvili Canyon, Tbilisi, Mestia, and other destinations. Professional drivers and modern minivans for a safe and enjoyable trip.',

  // Open Graph (Social Sharing)
  ogTitle: 'Transfers from Kutaisi | Discover Kutaisi Tours & Transfers',
  ogDescription: 'Reliable transfer services from Kutaisi to top destinations across Georgia. Travel in comfort with our experienced drivers and modern vehicles.',
  ogImage: 'https://discoverkutaisi.com/images/logo.png',
  ogUrl: 'https://discoverkutaisi.com/transfers',
  ogType: 'website',

  // Twitter Card
  twitterTitle: 'Transfers from Kutaisi | Discover Kutaisi Tours & Transfers',
  twitterDescription: 'Book private transfers from Kutaisi to Tbilisi, Batumi, Mestia, Prometheus Cave, and more. Safe, comfortable, and affordable travel in Georgia.',
  twitterImage: 'https://discoverkutaisi.com/images/logo.png',
  twitterCard: 'summary_large_image',

  // Optional legacy meta
  keywords: 'Kutaisi transfers, private transfer, Prometheus Cave, Tbilisi, Batumi, Martvili Canyon, airport transfer, Georgia travel, transport from Kutaisi',
})

// ✅ Canonical URL for this page
useHead({
  link: [
    {
      rel: 'canonical',
      href: 'https://discoverkutaisi.com/transfers',
    },
  ],
  htmlAttrs: {
    lang: 'en' // Sets language to English
  }
})
</script>
