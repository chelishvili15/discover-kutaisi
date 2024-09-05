<script setup>
import { ref } from 'vue'
import Header from './components/Header.vue'
import Sidebar from './components/Sidebar.vue'

const togSidebar = ref(false)
</script>

<template>
    <div class="max-w-[768px] m-auto bg-transparent">
      <Sidebar :toggleSidebar="togSidebar" @closeSidebar = "togSidebar = false" />
      <Header @toggleSidebar="togSidebar = !togSidebar" @closeSidebar="togSidebar = false" />
      <div class="bg-gradient-to-br w-full p-2 font-main" @click="togSidebar = false">
        <router-view></router-view>
      </div>
    </div>
</template>
