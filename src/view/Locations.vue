<template>
    <div class="flex flex-col gap-4">
        <h1 class="text-2xl font-bold m-auto my-7">Places to visit Kutaisi</h1>
        <div v-for="location in locations">
            <LocationsCard :location="location" @click="router.push(`/locations/${location.id}`)" />
        </div>
    </div>
</template>

<script setup>
import locations from "../locations.json"
import LocationsCard from "../components/LocationsCard.vue"
import router from "../router";
</script>