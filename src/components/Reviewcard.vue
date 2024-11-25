<template>
    <div class="flex flex-col max-w-[768px] m-auto">

        <div 
            class="pt-10 pb-2 mx-5 px-4 border-2 border-gray-300 font-lato text-gray-600 rounded-md relative bg-white"
            :class="author.rotate"  
        >
            <div class="bg-white absolute -top-5 left-2 flex items-center px-3">
                <img :src="author.avatar" class="w-10 mr-2">
                <div>
                    <div class="text-gray-800">{{ author.fullName }}</div>
                    <div class="flex">
                        <Star />
                        <Star />
                        <Star />
                        <Star />
                        <Star />
                    </div>
                </div>
            </div>
            <div class="line-clamp-3"> {{ author.review }}</div>
        </div>
    </div>
</template>

<script setup>
import Star from '../assets/icons/Star.vue'

defineProps(["author"])
</script>