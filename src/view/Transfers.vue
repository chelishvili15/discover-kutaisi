<script setup>
import { data } from '../transfers.json'
</script>

<template>
    <div class="flex flex-col gap-4">
        <div 
            v-for="location in data" 
            :key="location.id"
            class="bg-green-600 rounded-lg text-gray-100 text-2xl font-bold px-7 py-3 flex shadow-lg shadow-gray-600"
        >
            <div class="w-1/2">{{ location.name }}</div>
            <div class="w-1/2 text-end">{{ location.price }}</div>
        </div>
    </div>
</template>