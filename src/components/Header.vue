<template>
    <div class="sticky top-0 z-50 flex justify-between items-center px-7 bg-green-700 text-gray-200 font-main">
        <RouterLink to="/">
            <Logo />
        </RouterLink>
        <div class="nav flex gap-3 justify-end">
            <RouterLink to="/tours"   :class="route.path == `/tours` && 'font-bold'">Tours</RouterLink>
            <RouterLink to="/about"   :class="route.path == `/about` && 'font-bold'">About</RouterLink>
            <RouterLink to="/contact" :class="route.path == `/contact` && 'font-bold'">Contact</RouterLink>
        </div>
    </div>
</template>

<script setup>
import Logo from '../assets/icons/Logo.vue'
import { useRoute } from 'vue-router'

const route = useRoute()
</script>