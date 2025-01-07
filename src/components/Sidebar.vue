<template>
    <Transition name="slide-fade">
        <div 
            v-if="toggleSidebar"
            class="fixed right-0 sm:right-[calc(50%-384px)] z-40 w-full h-screen text-gray-100 flex text-lg flex-row-reverse"
        >
            <div
              class="nav flex flex-col items-center shadow-lg w-1/2 sm:w-[280px]  bg-green-600 h-full"
              @click="$emit('closeSidebar')"
            >
                <div class="h-full flex flex-col justify-around">
                  <div class="flex flex-col ">
                    <RouterLink 
                      to="/"   
                      :class="route.path == `/` && 'font-bold text-white'"
                    >
                      Home
                    </RouterLink>
                  </div>
                  <div class="flex flex-col gap-3 whitespace-nowrap">
                    <RouterLink
                      to="/places-to-visit-kutaisi/1"
                      :class="route.path == `/places-to-visit-kutaisi` && 'font-bold text-white'">Places to visit Kutaisi</RouterLink>
                    <RouterLink
                      to="/tours"
                      :class="route.path == `/tours` && 'font-bold text-white'">Tours</RouterLink>
                    <RouterLink to="/transfers"   :class="route.path == `/transfers` && 'font-bold text-white'">Transfers</RouterLink>
                  </div>
                  <div class="flex flex-col gap-3 mb-10">
                    <RouterLink 
                      to="/about"   
                      :class="route.path == `/about` && 'font-bold text-white'"
                    >
                      About
                    </RouterLink>
                    <RouterLink
                      to="/contact"
                      :class="route.path == `/contact` && 'font-bold text-white'">Contact</RouterLink>
                  </div>
                </div>
            </div>
            <div
              class="bg-transparent h-screen sm:w-3/4 w-1/2"
              @click="$emit('closeSidebar')"  
            >

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
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.2s ease-in
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  width: 0;
  opacity: 0
}
</style>