<template>
    <div>
        <!-- _____________________________ -->
        <div 
            class="fixed left-0 right-0 bottom-0 sm:right-[calc(50%-384px)] sm:left-[calc(50%-384px)] transform duration-300 ease-in"
            :class="toggle ? 'h-full':'h-0'"
            @click="toggle = false"
        >
        </div>
        <!-- ^^^^ fake div for animation -->
        
        <div
            class="fixed left-0 right-0 bottom-0 sm:right-[calc(50%-384px)] sm:left-[calc(50%-384px)] bg-green-600 text-gray-200 z-50 flex flex-col items-center sm:hover:cursor-pointer rounded-t transform duration-300 ease-in"
            :class="toggle ? 'h-1/3':'h-8'"
            @click="toggle = !toggle"  
        >
            <div class="bg-green-600 px-10 pt-2 rounded -translate-y-1/2 flex justify-center gap-4">
                <div class="whitespace-nowrap text-lg animate-pulse">
                    Booking option
                </div>

                <ArrowLeft
                    class="animate-pulse" 
                    :class="toggle ? '-rotate-90 ':'rotate-90'"
                />
            </div>
            <div>
                
            </div>    
        </div>    
    </div>
</template>

<script setup>
import { ref } from 'vue';
import ArrowLeft from '../assets/icons/ArrowLeft.vue';

const toggle = ref(false)
</script>

<style lang="scss" scoped>

</style>