<script setup>
import { data } from '../transfers.json'
import H1 from '../components/H1.vue';
</script>

<template>
    <div class="flex flex-col gap-4">
        <H1 title="Transfers from Kutaisi"></H1>
        <div 
            v-for="location in data" 
            :key="location.id"
            class="bg-green-600 rounded-lg text-gray-100 text-2xl font-bold px-7 py-3 flex shadow-md shadow-gray-600"
        >
            <div class="w-1/2">{{ location.name }}</div>
            <div class="w-1/2 text-end">{{ location.price }}</div>
        </div>
    </div>
</template>