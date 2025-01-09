<template>
    <div class="flex flex-col gap-4 mb-10">
        <H1 title="Places to visit Kutaisi"></H1>

        <div v-for="location in slicedLocations">
            <LocationsCard
              :location="location"
              @click="router.push(`/places-to-visit-kutaisi/${location.id}`)" />
        </div>

        <Pagination 
            :totalItems="locations.length" 
            :itemsPerPage="itemsPerPage" 
            :routeName="'Places-to-visit-kutaisi'"
        />
    </div>
</template>

<script setup>
import { computed, ref } from "vue";
import { useRoute } from "vue-router"
import locations from "../locations.json"
import LocationsCard from "../components/LocationsCard.vue"
import router from "../router";
import H1 from "../components/H1.vue";
import Pagination from "../components/Pagination.vue"

const itemsPerPage = ref(5)

const route = useRoute()

const slicedLocations = computed(() => {
    const first = (route.params.page - 1) * itemsPerPage.value
    const last = (route.params.page - 1) * itemsPerPage.value + itemsPerPage.value
    return locations.slice(first, last)
})
</script>