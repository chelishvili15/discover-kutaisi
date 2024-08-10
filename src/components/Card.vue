<template>
    <div class="bg-yellow-400 w-full py-3 px-3 rounded-md">
        <div class="images flex justify-around mb-10">
            <div class="img1 w-24 h-20 -rotate-12 rounded overflow-hidden">
                <img :src="tour.locations[0].image" class="w-full h-full" :alt="tour.locations[0].name">
            </div>
            <div class="img2 w-24 h-20 rotate-6">
                <img :src="tour.locations[1].image" class="w-full h-full" :alt="tour.locations[1].name">
            </div>
            <div v-if="tour.locations[2]" class="img3 w-24 h-20 -rotate-6">
                <img :src="tour.locations[2].image" class="w-full h-full" :alt="tour.locations[2].name">
            </div>
        </div>

        <div class="flex justify-between">
            <div>
                <p>Duration: {{ tour.duration }}</p>
                <p>Type: {{ tour.type }}</p>
                <p>Start and Finish: {{ tour.startFinish }}</p>
                <p></p>
                <p></p>
            </div>
            <div>
                <p class="text-2xl font-semibold">PRICE: {{ tour.price }}</p>
            </div>
        </div>
    </div>
</template>

<script setup>
defineProps(["tour"])
</script>