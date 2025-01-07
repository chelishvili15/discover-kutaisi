<template>
    <div class="flex flex-col gap-4 mb-10">
        <H1 title="Places to visit Kutaisi"></H1>

        <div v-for="location in locations.slice(((route.params.page - 1) * itemsPerPage), ((route.params.page - 1)* itemsPerPage + itemsPerPage))">
            <LocationsCard
              :location="location"
              @click="router.push(`/places-to-visit-kutaisi/${location.id}`)" />
        </div>

        <Pagination :totalItems="locations.length" :itemsPerPage="itemsPerPage" />
    </div>
</template>

<script setup>
import locations from "../locations.json"
import LocationsCard from "../components/LocationsCard.vue"
import router from "../router";
import H1 from "../components/H1.vue";
import Pagination from "../components/Pagination.vue"
import { useRoute } from "vue-router"
import { ref } from "vue";

const itemsPerPage = ref(3)

const route = useRoute()
</script>