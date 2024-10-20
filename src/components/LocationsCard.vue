<template>
    <div class="bg-green-600 w-full py-3 px-3 rounded-md relative font-main flex justify-between text-gray-100">
        <div class="flex items-center gap-2">
            <img :src="location.image" :alt="location.name" class="w-40 rounded">
            <div>
                <p class="text-2xl font-semibold text-gray-100">{{ location.name }}</p>
                <p class="text-xs font-semibold text-gray-100">{{ location.type }}</p>
            </div>
        </div>

        <div class="flex items-center justify-center flex-col">
            <div v-for="(fee, name, index) in location.fee" :key="index">
                {{ name }} : {{ fee }}
            </div>
        </div>
    </div>
</template>

<script setup>
defineProps(['location'])
</script>