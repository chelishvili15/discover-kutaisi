<template>
    <div class="fixed h-6 left-0 right-0 bottom-0 sm:right-[calc(50%-384px)] sm:left-[calc(50%-384px)] bg-green-600 text-gray-200 z-50 flex flex-col items-center sm:hover:cursor-pointer rounded-t-xl">
        <div class="bg-green-600 px-20 pt-2 rounded-full -translate-y-1/2 flex justify-center gap-4">
            <div class="whitespace-nowrap text-lg animate-pulse">
                Booking option
            </div>

            <ArrowLeft class="rotate-90 animate-pulse" />
        </div>
        <div>
            
        </div>    
    </div>
</template>

<script setup>
import ArrowLeft from '../assets/icons/ArrowLeft.vue';


</script>

<style lang="scss" scoped>

</style>