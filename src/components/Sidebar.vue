<template>
    <Transition name="slide-fade">
        <div 
            v-if="toggleSidebar"
            class="fixed z-40 w-full h-screen text-gray-100 flex text-2xl"
        >
            <div class="nav flex flex-col items-center justify-center shadow-lg gap-3 w-1/2 bg-green-600 h-full" @click="$emit('closeSidebar')">
                <RouterLink to="/"   :class="route.path == `/` && 'font-bold text-white'">Home</RouterLink>
                <RouterLink to="/tours"   :class="route.path == `/tours` && 'font-bold text-white'">Tours</RouterLink>
                <RouterLink to="/transffers"   :class="route.path == `/transffers` && 'font-bold text-white'">Transffers</RouterLink>
                <RouterLink to="/about"   :class="route.path == `/about` && 'font-bold text-white'">About</RouterLink>
                <RouterLink to="/contact" :class="route.path == `/contact` && 'font-bold text-white'">Contact</RouterLink>
            </div>
            <div class="bg-transparent h-screen w-1/2" @click="$emit('closeSidebar')">

            </div>
        </div>
    </Transition>
</template>

<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
defineProps(['toggleSidebar'])
defineEmits(['closeSidebar'])

const hide = ref(false)
</script>

<style>
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.5s ease-in
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(-100%);
}
</style>