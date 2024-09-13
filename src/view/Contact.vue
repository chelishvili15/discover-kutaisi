<template>
    <div class="w-full h-[calc(100vh-200px)] flex justify-center pt-24"> 
        <div class="w-min h-min">
            <a
                href="mailto:d.chelishvili91@gmail.com" 
                class="flex items-center gap-4"
            >
                <Gmail />  
                <p class="underline">d.chelishvili91@gmail.com </p>
            </a>
            <a 
                href="https://api.whatsapp.com/send?phone=+995557669179" 
                class="flex items-center gap-4"
            >
                <Whatsapp /> 
                <p class="underline">+995 557 66 91 79</p>
            </a>
            <a 
                href="https://www.youtube.com/@DiscoverKutaisi" 
                class="flex items-center gap-4"
            >
                <Youtube /> 
                <p class="underline">@DiscoverKutaisi</p>
            </a>
        </div>
    </div>
</template>

<script setup>
import Gmail from '../assets/icons/Gmail.vue'
import Whatsapp from '../assets/icons/Whatsapp.vue'
import Youtube from '../assets/icons/Youtube.vue'
</script>