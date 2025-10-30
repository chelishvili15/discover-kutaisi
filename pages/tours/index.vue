<template>
    <div class="flex flex-col gap-4">
        <H1 title="Tours from Kutaisi"></H1>    
        <Card 
            v-for="tour in tours.data" 
            :key="tour.id"
            :tour="tour"
            @click="router.push(`/tours/${tour.id}/${tour.id.split('-')[0]}`)"
        />

        <!-- <Pagination 
            :totalItems="Tours.data.length" 
            :itemsPerPage="itemsPerPage"
            :routeName="'Tours'" 
        /> -->
    </div>
</template>

<script setup>
import tours from '@/public/tours.json'

const router = useRouter()
const route = useRoute()

const itemsPerPage = ref(4)

// Import Nuxt composables
import { useSeoMeta, useHead } from '#imports'

// ✅ SEO Meta Tags for Tours Page
useSeoMeta({
  // Primary SEO
  title: 'Kutaisi Tours | Discover Prometheus Cave, Canyons & More',
  description: 'Explore top-rated Kutaisi tours to Prometheus Cave, Martvili Canyon, Okatse Canyon, Gelati, and more. Discover Georgia’s natural beauty with expert guides and comfortable minivans.',

  // Open Graph (Social Sharing)
  ogTitle: 'Kutaisi Tours | Discover Prometheus Cave, Canyons & More',
  ogDescription: 'Join our guided tours from Kutaisi to Georgia’s most stunning destinations. Small groups, local guides, and personalized service make for unforgettable experiences.',
  ogImage: 'https://discoverkutaisi.com/images/logo.png',
  ogUrl: 'https://discoverkutaisi.com/tours',
  ogType: 'website',

  // Twitter Card
  twitterTitle: 'Kutaisi Tours | Discover Prometheus Cave, Canyons & More',
  twitterDescription: 'Book top-rated tours from Kutaisi to Martvili Canyon, Okatse Canyon, and Prometheus Cave. Experience Georgia’s highlights with our trusted local team.',
  twitterImage: 'https://discoverkutaisi.com/images/logo.png',
  twitterCard: 'summary_large_image',

  // Optional legacy meta
  keywords: 'Kutaisi tours, Prometheus Cave, Martvili Canyon, Okatse Canyon, Gelati, Motsameta, guided tours, day trips, things to do in Kutaisi, Georgia travel',
})

// ✅ Canonical URL for this page
useHead({
  link: [
    {
      rel: 'canonical',
      href: 'https://discoverkutaisi.com/tours',
    },
  ],
  htmlAttrs: {
    lang: 'en' // Sets language to English
  }
})
</script>
