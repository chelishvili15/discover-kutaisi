<template>
    <div>
        <header class="text-2xl font-bold text-center mb-3"> {{ location.fullName }} </header>
        <img :src="location.image" :alt="location.name">
        
        <p class="mt-3 p-2">{{ location.description }}</p>

        <iframe class="w-full h-64 mt-3" :src="location.youtube" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

    </div>

    <div class="divider w-full h-0.5 bg-gray-100 my-4"></div>
</template>

<script setup>
defineProps(['location'])
</script>