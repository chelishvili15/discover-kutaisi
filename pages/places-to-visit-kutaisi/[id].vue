<template>
    <div>
        <Article :location="location" />
    </div>
</template>

<script setup>
import { useSeoMeta, useHead } from '#imports'
import locations from '@/public/locations.json'

const route = useRoute()

const id = ref(route.params.id)
const location = ref(locations.filter(val => val.id == id.value)[0])

onMounted(() => {
    window.scrollTo(0, 0)
})

// Nuxt composables

// Mocked place data — replace with real content from API, file, or CMS
const place = {
  title: route.params.id,
  description: `${route.params.id} is one of Georgia’s natural wonders, located near Kutaisi. Explore stunning underground formations and colorful lighting on a guided tour.`,
  image: 'https://discoverkutaisi.com/images/logo.png',
  slug: route.params.id, 
}

// ✅ SEO Meta Tags for Dynamic "Place to Visit" Page
useSeoMeta({
  title: `${place.title} | Places to Visit in Kutaisi`,
  description: place.description,

  ogTitle: `${place.title} | Places to Visit in Kutaisi`,
  ogDescription: place.description,
  ogImage: place.image,
  ogUrl: `https://discoverkutaisi.com/places-to-visit-kutaisi/${place.slug}`,
  ogType: 'article',

  twitterTitle: `${place.title} | Places to Visit in Kutaisi`,
  twitterDescription: place.description,
  twitterImage: place.image,
  twitterCard: 'summary_large_image',

  keywords: `${place.title}, Kutaisi attractions, places to visit in Georgia, things to do in Kutaisi, travel Georgia`,
})

// ✅ Canonical URL for the page
useHead({
  link: [
    {
      rel: 'canonical',
      href: `https://discoverkutaisi.com/places-to-visit-kutaisi/${place.slug}`,
    },
  ],
})

</script>