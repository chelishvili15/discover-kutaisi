<template>
    <div class="sticky top-0 z-50 flex justify-between items-center px-7 py-3 bg-green-700 text-gray-200 font-main">
        <RouterLink to="/">
            <Logo />
        </RouterLink>
        <div class="nav flex gap-3 justify-end">
            <RouterLink to="/tours">Tours</RouterLink>
            <RouterLink to="/about">About</RouterLink>
            <RouterLink to="/contact">Contact</RouterLink>
        </div>
    </div>
</template>

<script setup>
import Logo from '../assets/icons/Logo.vue';
</script>