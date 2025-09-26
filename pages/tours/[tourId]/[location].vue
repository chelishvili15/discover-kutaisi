<template>
  <div class="!transition-none">
    <div class="flex mb-10">
        <div 
            v-for="name in tour.locations"
            :key="name" 
            class=" flex justify-center py-2 text-gray-700 sm:hover:cursor-pointer"
            :class="[currentArticle == name ? 'border-l border-t border-r font-bold text-gray-800 border-gray-800' : 'border-b border-gray-800', tour.locations.length === 3 ? 'w-1/3' : 'w-1/2']"
            @click = "changeLocation(name)"
        >
            <p>{{ name }}</p>
        </div>

    </div>

    <Transition :name="route.meta.transition">
      <div v-if="showArticle" class="w-full h-full">
        <Article :location="filteredLocations" :key="route.fullPath" />
      </div>
    </Transition>

    <BookingOption :tour="refTour" />    
  </div>
</template>

<script setup>
import { useSeoMeta, useHead } from '#imports'
import tours from '@/public/tours.json'
import locations from '@/public/locations.json'

const route = useRoute()
const router = useRouter()

const path = route.path
const [tour] = tours.data.filter(ob => path.includes(ob.id))
const refTour = ref(tour)
const showArticle = ref(false)

const currentArticle = ref(tour.locations[0])

onMounted(() => {
    setTimeout(() => {
      showArticle.value = true
    }, 0)
    window.scrollTo(0, 0)
    currentArticle.value = route.params.location
})

watch(
  () => route.params.location,
  (newLocation, oldLocation) => {
    currentArticle.value = newLocation
  }
)

const changeLocation = (locationName) => {
  router.replace({params: { location: locationName }})
}

const filteredLocations = computed(() => {
  return locations.filter(ob => ob.name == currentArticle.value)[0]
})

// Mocked example tour data (replace with actual data fetching)
const tourMeta = {
  title: `${tour.id.split('-')} Tour from Kutaisi`,
  description: `Join our full-day tour to Prometheus ${tour.id.split('-')} Canyon. Discover Georgia’s stunning nature with professional guides and comfortable transport from Kutaisi.`,
  image: 'https://discoverkutaisi.com/images/tours/prometheus-martvili.jpg',
  slug: `${tour.id}`
}

// SEO Meta Tags for Dynamic Tour Page
useSeoMeta({
  title: `${tourMeta.title} | Discover Kutaisi Tours`,
  description: tourMeta.description,

  ogTitle: `${tourMeta.title} | Discover Kutaisi Tours`,
  ogDescription: tourMeta.description,
  ogImage: tourMeta.image,
  ogUrl: `https://discoverkutaisi.com/${route.path}`,
  ogType: 'article',

  twitterTitle: `${tourMeta.title} | Discover Kutaisi Tours`,
  twitterDescription: tourMeta.description,
  twitterImage: tourMeta.image,
  twitterCard: 'summary_large_image',

  keywords: 'Kutaisi tour, Prometheus Cave, Martvili Canyon, day trip from Kutaisi, Georgia tours, nature tours, guided tours Kutaisi',
})

// Canonical tag for dynamic route
useHead({
  link: [
    {
      rel: 'canonical',
      href: `https://discoverkutaisi.com/tours/${tourMeta.slug}`,
    },
  ],
})

</script>