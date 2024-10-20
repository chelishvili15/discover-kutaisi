<template>
    <div class="flex flex-col gap-4">
        <div v-for="location in locations">
            <LocationsCard :location="location" />
        </div>

        <pre>{{ locations }}</pre>
    </div>
</template>

<script setup>
import locations from "../locations.json"
import LocationsCard from "../components/LocationsCard.vue"
</script>