<template>
    <div 
        class="bg-green-600 w-full py-3 px-3 rounded-md relative font-main"
         @click="seeMore(tour.id)"
    >
        <div class="images flex justify-around mb-3">
            <div v-for="(location, index) in tour.locations" class="img1 w-24 h-28 rounded overflow-hidden flex flex-col items-center" :class="index == 0 ? '-rotate-12' : index == 1 ? 'rotate-3' : '-rotate-6'">
                <img :src="location.image" class="w-full h-20" :alt="location.name">
                <p class="text-gray-100">{{ location.name }}</p>
            </div>
        </div>

        <div class="flex justify-between text-gray-200 mb-5">
            <div>
                <p><strong>Duration:</strong> {{ tour.duration }}</p>
                <p><strong>Type:</strong> {{ tour.type }}</p>
                <p><strong>Start and Finish:</strong> {{ tour.startFinish }}</p>
                <p></p>
                <p></p>
            </div>
            <div>
                <p class="text-2xl font-semibold text-gray-200">PRICE: {{ tour.price }}</p>
                <p class="text-xs font-semibold">Minivan(5+1 person)</p>
            </div>
        </div>

        <p class="absolute right-5 bottom-3 text-gray-100 underline" >See More ...</p>
    </div>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router'

defineProps(["tour"])

const router = useRouter()
const route = useRoute()

const seeMore = (id) => {
    router.push(`/tours/${id}`)
}
</script>