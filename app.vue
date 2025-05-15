<script setup>
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
        <nuxt-page v-slot="{ Component, route }">
          <transition :name="route.meta.transition">
            <component 
              :is="Component" 
              :key="route.fullPath" 
            />
          </transition>
        </nuxt-page>
      </div>
      <Footer class="max-w-[768px] m-auto" /> 
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
