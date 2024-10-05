<template>
    <div>
        <header class="text-2xl font-bold text-center mb-3"> {{ location.fullName }} </header>
        <img :src="location.image" :alt="location.name">
        
        <p class="mt-3 p-1" :class="readmore ? 'line-clamp-2 text-ellipsis' : ''">{{ location.description }}</p>

        <p 
            class="text-blue-500 text-right underline" 
            @click="readmore = !readmore"
        >
            {{ readmore ? 'Read more' : 'Read less' }}
        </p>

        <iframe class="w-full h-64 mt-3" :src="location.youtube" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

    </div>

    <div class="divider w-full h-0.5 bg-gray-100 my-4"></div>
</template>

<script setup>
import { ref } from 'vue'
defineProps(['location'])

const readmore = ref(true)
</script>