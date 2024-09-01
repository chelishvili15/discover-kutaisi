<template>
    <div class="absolute transform top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div class="flex items-center gap-4">
            <Gmail />  <p>d.chelishvili91@gmail.com </p>
        </div>
        <a 
            href="https://api.whatsapp.com/send?phone=+995557669179" 
            class="flex items-center gap-4"
        >
            <Whatsapp /> 
            <p class="underline">+995 557 66 91 79</p>
        </a>
    </div>
</template>

<script setup>
import Gmail from '../assets/icons/Gmail.vue'
import Whatsapp from '../assets/icons/Whatsapp.vue'
</script>