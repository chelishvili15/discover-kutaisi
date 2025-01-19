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

    <BookingOption />    
  </div>
</template>

<script setup>
import { ref, onMounted, computed, watch } from 'vue'
import Article from '../components/Article.vue'
import { useRoute, useRouter } from 'vue-router'
import tours from '../tours.json'
import locations from '../locations.json'
import BookingOption from '../components/BookingOption.vue'

const route = useRoute()
const router = useRouter()

const id = route.params.id
const [tour] = tours.data.filter(ob => ob.id == id)
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
  router.replace({name: 'Tour', params: { location: locationName }})
}

const filteredLocations = computed(() => {
  return locations.filter(ob => ob.name == currentArticle.value)[0]
})

</script>