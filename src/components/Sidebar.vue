<template>
    <Transition name="slide-fade">
        <div 
            v-if="toggleSidebar"
            class="fixed z-40 w-full h-screen text-gray-100 flex text-2xl"
        >
            <div class="nav flex flex-col items-center shadow-lg w-1/2 sm:w-1/4  bg-green-600 h-full" @click="$emit('closeSidebar')">
                <div class="h-full w-1/3 flex flex-col justify-around">
                  <div class="flex flex-col ">
                    <RouterLink 
                      to="/"   
                      :class="route.path == `/` && 'font-bold text-white'"
                    >
                      Home
                    </RouterLink>
                  </div>
                  <div class="flex flex-col gap-3">
                    <RouterLink to="/locations"   :class="route.path == `/locations` && 'font-bold text-white'">Locations</RouterLink>
                    <RouterLink to="/tours"   :class="route.path == `/tours` && 'font-bold text-white'">Tours</RouterLink>
                    <RouterLink to="/transfers"   :class="route.path == `/transfers` && 'font-bold text-white'">Transfers</RouterLink>
                  </div>
                  <div class="flex flex-col gap-3">
                    <RouterLink 
                      to="/about"   
                      :class="route.path == `/about` && 'font-bold text-white'"
                    >
                      About
                    </RouterLink>
                    <RouterLink to="/contact" :class="route.path == `/contact` && 'font-bold text-white'">Contact</RouterLink>
                  </div>
                </div>
            </div>
            <div class="bg-transparent h-screen sm:w-3/4 w-1/2" @click="$emit('closeSidebar')">

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