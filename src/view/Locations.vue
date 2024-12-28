<template>
    <div class="flex flex-col gap-4">
        <H1 title="Places to visit Kutaisi"></H1>
        <div v-for="location in locations">
            <LocationsCard :location="location" @click="router.push(`/places-to-visit-kutaisi/${location.id}`)" />
        </div>
    </div>
</template>

<script setup>
import locations from "../locations.json"
import LocationsCard from "../components/LocationsCard.vue"
import router from "../router";
import H1 from "../components/H1.vue";
</script>