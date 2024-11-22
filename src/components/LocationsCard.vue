<template>
    <div class="bg-green-600 w-full pt-3 pb-5 px-3 rounded-md relative font-main flex justify-between text-gray-100">
        <div class="flex gap-2">
            <div class="flex flex-col items-center gap-2">
                <img :src="location.image" :alt="location.name" class="w-24 rounded">
                <p class="font-semibold">{{ location.location }}</p>
            </div>
            <div>
                <p class="text-2xl font-semibold text-gray-100">{{ location.name }}</p>
                <p class="text-xs font-semibold text-gray-100">{{ location.fullName }}</p>
            </div>
        </div>

        <div class="flex items-left w-1/4 flex-col text-xs">
            <div v-for="(price, name, index) in location.fee" :key="index">
                {{ name }} : {{ price}}
            </div>
        </div>
        <p class="absolute right-5 bottom-3 text-gray-100 underline" >See More ...</p>
    </div>

</template>

<script setup>
defineProps(['location'])
</script>