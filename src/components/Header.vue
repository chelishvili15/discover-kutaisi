<template>
    <div class="sticky top-0 z-50 flex justify-between items-center px-7 bg-green-700 text-gray-200 font-main">
        <div class="w-1/2">
            <Burger
              v-if="!toggleSidebar"
              @click="$emit('toggleSidebar')"
              class="sm:hover:cursor-pointer" />
            <Close
              v-if="toggleSidebar"
              @click="$emit('toggleSidebar')"
              class="sm:hover:cursor-pointer" />
        </div>
        
        <div class="w-1/2 flex flex-start">
            <RouterLink to="/">
                <Logo class="-translate-x-1/2" @click="$emit('closeSidebar')"/>
            </RouterLink>
        </div>
        
    </div>
</template>

<script setup>
import Logo from '../assets/icons/Logo.vue'
import Burger from '../assets/icons/Burger.vue'
import Close from '../assets/icons/Close.vue'

defineEmits(['toggleSidebar', 'closeSidebar'])
defineProps(['toggleSidebar'])
</script>