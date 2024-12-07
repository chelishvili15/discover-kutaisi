<template>
    <div>



        <header class="text-2xl font-bold text-center mb-1"> {{ location?.fullName }} </header>
        <div class="flex gap-3 mb-10 justify-center text-gray-500">
            <div v-for="type in location.type">
                {{ type }}
            </div>
        </div>

        <div class="mb-10">
            <p>Activities:</p>
            <ol class="ml-3">
                <li v-for="(price, name, index) in location.fee">
                    {{ index + 1 }}. {{ name }} - {{ price }}
                </li>
            </ol>
        </div>

        <carousel :items-to-show="1.2">
            <slide v-for="img in location.image" :key="img">
                <div>
                    <img :src="img">
                </div>
            </slide>

            <template #addons>
                <navigation />
                <pagination />
            </template>
        </carousel>
        
        <p v-html="location.description" class="mt-3 p-1 font-lato text-gray-700" :class="readmore ? 'line-clamp-2 text-ellipsis' : ''"></p>

        <p 
            class="text-blue-500 text-right underline" 
            @click="readmore = !readmore"
        >
            {{ readmore ? 'Read more' : 'Read less' }}
        </p>


        <iframe 
            v-if="location.youtube" 
            class="w-full h-64 mt-3" 
            :src="`${location.youtube}&autoplay=1&mute=1&controls=0&loop=1`" 
            title="YouTube video player" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            referrerpolicy="strict-origin-when-cross-origin" 
            allowfullscreen>
        </iframe>

    </div>

    <div class="divider w-full h-0.5 bg-gray-100 my-4"></div>
</template>

<script setup>
import { ref } from 'vue'
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'

defineProps(['location'])

const readmore = ref(true)
const images = ref(['erti', 'ori', 'sami'])
</script>