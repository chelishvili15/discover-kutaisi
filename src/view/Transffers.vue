<script setup>
import { data } from './../transffers.json'
</script>

<template>
    <div>
        <div 
            v-for="location in data" 
            :key="location.id"
            class="bg-green-600 rounded-lg text-gray-100 text-2xl font-bold px-7 py-3 mb-3 flex"
        >
            <div class="w-1/2">{{ location.name }}</div>
            <div class="w-1/2 text-end">{{ location.price }}</div>
        </div>
    </div>
</template>