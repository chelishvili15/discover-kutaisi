<template>
    <div>
        <header class="text-2xl font-bold text-center mb-1"> {{ location?.fullName }} </header>

        <div class="flex gap-3 mb-4 justify-center text-gray-500">
            <div v-for="type in location.type">
                {{ type }}
            </div>
        </div>

        <carousel 
            :items-to-show="1" 
            :gap="10" 
            :wrapAround="true" 
            :transition="500"
            :autoplay="2500"
        >
            <slide v-for="img in location.image" :key="img">
                <div>
                    <img :src="img" class="h-72 h-1/5 rounded-lg">
                </div>
            </slide>

            <template #addons class="text-white">
                <navigation />
                <!-- <pagination /> -->
            </template>
        </carousel>

        <iframe 
            v-if="location.youtube" 
            class="w-full h-64 mt-3 rounded-xl sm:h-80 mb-3" 
            :src="`https://www.youtube.com/embed/${location.youtube}?playlist=${location.youtube}&autoplay=1&mute=1&controls=0&loop=1`" 
            title="YouTube video player" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            referrerpolicy="strict-origin-when-cross-origin" 
            allowfullscreen
        >
        </iframe>

        <div class="mb-4">
            <p>Activities:</p>
            <ol class="ml-3">
                <li v-for="(price, name, index) in location.fee">
                    {{ index + 1 }}. {{ name }} - {{ price }}
                </li>
            </ol>
        </div>

        <p
          v-html="location.description"
          class="mt-3 p-1 font-lato text-gray-700"
          :class="readMore ? 'line-clamp-2 text-ellipsis' : ''">
        </p>
        
        <p 
            class="text-blue-500 text-right underline" 
            @click="readMore = !readMore"
        >
            {{ readMore ? 'Read more' : 'Read less' }}
        </p>




    </div>

    <div class="divider w-full h-0.5 bg-gray-100 my-4"></div>
</template>

<script setup>
import { ref } from 'vue'
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'

defineProps(['location'])

const readMore = ref(true)
</script>