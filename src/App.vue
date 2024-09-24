<script setup>
import { ref } from 'vue'
import Header from './components/Header.vue'
import Sidebar from './components/Sidebar.vue'
import BlackLogo from './assets/icons/BlackLogo.vue'

const togSidebar = ref(false)
</script>

<template>
  <BlackLogo class="opacity-5 w-full fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-none" /> 
    <div class="max-w-[768px] m-auto bg-transparent font-main">
      <Sidebar :toggleSidebar="togSidebar" @closeSidebar = "togSidebar = false" />
      <Header :toggleSidebar="togSidebar" @toggleSidebar="togSidebar = !togSidebar" @closeSidebar="togSidebar = false" />
      <div class="bg-gradient-to-br w-full p-2 font-main" @click="togSidebar = false">
        <router-view v-slot="{ Component, route }">
          <transition :name="route.meta.transition">
            <component :is="Component" />
          </transition>
        </router-view>
      </div>
    </div>
</template>

<style>
.slide-fade-route-enter-active {
  transition: all 0.5s ease-out;
}

.slide-fade-route-leave-active {
  transition: all 0s ease-in
  
}

.slide-fade-route-enter-from,
.slide-fade-route-leave-to {
  transform: translateY(100%)
}
</style>
