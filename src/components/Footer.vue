<template>
    <div class=" fixed bottom-0 left-0 right-0 flex justify-between z-30">
        <a
            href="mailto:d.chelishvili91@gmail.com" 
            :class="cls"
        >
            <Gmail />  
        </a>
        <a 
            href="https://api.whatsapp.com/send?phone=+995557669179" 
            :class="cls"
        >
            <Whatsapp /> 
        </a>
        <a 
            href="https://www.youtube.com/@DiscoverKutaisi" 
            :class="cls"
        >
            <Youtube /> 
        </a>
        <a 
            href="https://maps.app.goo.gl/BTfJWPiJzyUDRkyn7"
            target="_blank" 
            :class="cls"
        >
            <Maps /> 
        </a>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import Gmail from '../assets/icons/Gmail.vue'
import Maps from '../assets/icons/Maps.vue';
import Whatsapp from '../assets/icons/Whatsapp.vue'
import Youtube from '../assets/icons/Youtube.vue'

const cls = ref('flex items-center gap-4 w-1/4 flex justify-center bg-green-700 py-2 border-r-[0.5px] border-gray-300 rounded')
</script>

<style lang="scss" scoped>

</style>