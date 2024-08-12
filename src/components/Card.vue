<template>
    <div class="bg-yellow-400 w-full py-3 px-3 rounded-md relative">
        <div class="images flex justify-around mb-3">
            <div v-for="(location, index) in tour.locations" class="img1 w-24 h-28 rounded overflow-hidden flex flex-col items-center" :class="index == 0 ? '-rotate-12' : index == 1 ? 'rotate-3' : '-rotate-6'">
                <img :src="location.image" class="w-full h-20" :alt="location.name">
                <p class="text-gray-600">{{ location.name }}</p>
            </div>
        </div>

        <div class="flex justify-between text-gray-500">
            <div>
                <p>Duration: {{ tour.duration }}</p>
                <p>Type: {{ tour.type }}</p>
                <p>Start and Finish: {{ tour.startFinish }}</p>
                <p></p>
                <p></p>
            </div>
            <div>
                <p class="text-2xl font-semibold text-gray-700">PRICE: {{ tour.price }}</p>
            </div>
        </div>

        <p class="absolute right-5 bottom-3 text-gray-400 underline">See More ...</p>
    </div>
</template>

<script setup>
defineProps(["tour"])
</script>