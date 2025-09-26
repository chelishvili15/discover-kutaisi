<script setup>
import { routeLocationKey } from 'vue-router';

const togSidebar = ref(false)
</script>

<template>
    <div class="max-w-[768px] m-auto bg-transparent font-main relative">
      <BlackLogo class="opacity-5 w-full fixed -z-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" /> 

      <Sidebar :toggleSidebar="togSidebar" @closeSidebar = "togSidebar = false" />
      <Header
        :toggleSidebar="togSidebar"
        @toggleSidebar="togSidebar = !togSidebar"
        @closeSidebar="togSidebar = false" 
      />
      <div
        class="bg-gradient-to-br w-full p-2 font-main mb-10"
        @click="togSidebar = false"
      >
        <NuxtPage />
      </div>
      <!-- footer should be change in future -->
      <Footer v-if="$route.fullPath.split('/').length <= 3" class="max-w-[768px] m-auto" />
    </div>
</template>

<style>
.slide-fade-route-enter-active {
  transition: all 0.5s ease;
}

.slide-fade-route-enter-from,
.slide-fade-route-leave-to {
  transform: translateY(50%)
}
</style>

<!-- <style>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style> -->
