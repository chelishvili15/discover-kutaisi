<script setup>
import { ref } from 'vue'
import Header from './components/Header.vue'
import Sidebar from './components/Sidebar.vue'

const togSidebar = ref(false)
</script>

<template>
    <div class="max-w-[768px] m-auto bg-transparent font-main">
      <Sidebar :toggleSidebar="togSidebar" @closeSidebar = "togSidebar = false" />
      <Header @toggleSidebar="togSidebar = !togSidebar" @closeSidebar="togSidebar = false" />
      <div class="bg-gradient-to-br w-full p-2 font-main" @click="togSidebar = false">
        <router-view v-slot="{ Component }">
          <transition name="slide-fade-route">
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
