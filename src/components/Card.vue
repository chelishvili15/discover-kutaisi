<template>
    <div 
        class="bg-green-600 w-full py-3 px-3 rounded-md relative font-main sm:hover:cursor-pointer shadow-md shadow-gray-600"
         @click="seeMore(tour.id)"
    >
        <div class="images flex justify-around mb-3">
            <div 
                v-for="(name, index) in tour.locations" 
                class="img1 w-24 h-28 rounded overflow-hidden flex flex-col items-center"
                :class="index == 0 ? '-rotate-12' : index == 1 ? 'rotate-3' : '-rotate-6'"
            >
                <img
                  :src="locations.filter(location => location.name == name)[0]?.image[0]"
                  class="w-full h-20 rounded"
                  :alt="name"
                >
                <p class="text-gray-100">{{ name }}</p>
            </div>
        </div>

        <div class="flex justify-between text-gray-200 mb-5">
            <div>
                <p><strong>Duration:</strong> {{ tour.duration }}</p>
                <p><strong>Type:</strong> {{ tour.type }}</p>
                <p><strong>Start and Finish:</strong> {{ tour.startFinish }}</p>
            </div>
            <div>
                <p class="text-2xl font-semibold text-gray-200">PRICE: {{ tour.price }}</p>
                <p class="text-xs font-semibold">Minivan(6+1 person)</p>
            </div>
        </div>

        <p class="absolute right-5 bottom-3 text-gray-100 underline" >See More ...</p>
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import locations from '../locations.json'

defineProps(["tour"])

const router = useRouter()

const seeMore = (id) => {
    router.push(`/tours/${id}`)
}
</script>