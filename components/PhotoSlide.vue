<template>
    <div class="w-full flex gap-4 bg-green-400 justify-between">
        <div v-for="a in x" :key="a">
            <div class="flex justify-center items-center bg-red-200 h-80 mb-4">{{ a }}</div>
        </div>        
    </div>
</template>

<script setup>
import { ref } from 'vue';

defineProps(["images"])

const x = ref(5)
</script>