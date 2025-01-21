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
            :class="toggle ? 'h-96':'h-8'"
            @click="toggle = !toggle"  
        >
            <div class="bg-green-600 px-10 pt-2 rounded -translate-y-1/2 flex justify-center gap-4 font-semibold">
                <div class="whitespace-nowrap text-lg animate-pulse">
                    Booking option
                </div>

                <ArrowLeft
                    class="animate-pulse transform duration-300 ease-in" 
                    :class="toggle ? '-rotate-90 ':'rotate-90'"
                />
            </div>
            <div class="flex flex-col items-center w-full">
                <p class="text-2xl font-semibold">{{ tour.id }}</p>
                <p>{{ tour.type }}</p>
                <p class="text-xl font-semibold pt-7 text-center">Price :</p>
                <div class="w-full text-lg flex justify-around">
                    <div
                        v-for="car in cars"
                        :key="car" 
                        class="flex flex-col"
                    >
                        <p>{{ car }}: <span class="font-bold text-2xl">{{ tour.price[car] }}</span></p>
                        <p class="text-sm -translate-y-1/3">{{ car == 'Sedan' ? '(1-4 persons)' : '(5-7 persons)'  }}</p>    
                    </div>
                </div>                
            </div>    
            <div class="pt-4 w-full">
                <p class="text-xl font-semibold text-center">Book this tour :</p>
                <div class="flex justify-around pt-2">
                    <a 
                        :href="`mailto:discoverkutaisi@gmail.com?subject=${tour.id}`"
                        class="flex items-end gap-3 underline sm:hover:cursor-pointer"
                    >
                        <Gmail />
                        <span>With e-mail</span>
                    </a>
                    <a
                        :href="`https://api.whatsapp.com/send?phone=+995557669179?text=Is%20'${tour.id}'%20tour%20available?`" 
                        class="flex items-end gap-3 underline sm:hover:cursor-pointer"
                    >
                        <Whatsapp />
                        <span>With Whatsapp</span>
                    </a>
                </div>
            </div>
        </div>    
    </div>
</template>

<script setup>
import { ref } from 'vue';
import ArrowLeft from '../assets/icons/ArrowLeft.vue'
import Gmail from '../assets/icons/Gmail.vue'
import Whatsapp from '../assets/icons/Whatsapp.vue'

defineProps(["tour"])

const toggle = ref(false)
const cars = ref(['Sedan', 'Minivan'])
</script>

<style lang="scss" scoped>

</style>