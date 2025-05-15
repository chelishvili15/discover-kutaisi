<template>
    <div class="flex flex-col gap-4 mb-10">
        <H1 title="Places to visit Kutaisi"></H1>

        <div v-for="location in locations" :key="location.id">
            <LocationsCard
              :location="location"
              @click="$router.push(`/places-to-visit-kutaisi/${location.id}`)" />
        </div>

        <!-- <Pagination 
            :totalItems="locations.length" 
            :itemsPerPage="itemsPerPage" 
            :routeName="'Places-to-visit-kutaisi'"
        /> -->
    </div>
</template>

<script setup>
import locations from '@/public/locations.json'
const itemsPerPage = ref(10)

const route = useRoute()

// const slicedLocations = computed(() => {
//     const first = (route.params.page - 1) * itemsPerPage.value
//     const last = (route.params.page - 1) * itemsPerPage.value + itemsPerPage.value
//     return locations.slice(first, last)
// })
</script>