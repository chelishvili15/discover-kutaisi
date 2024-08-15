<script setup>
import Header from './components/Header.vue'
</script>

<template>
  <Header />
  <div class="bg-gradient-to-br from-blue-600 via-cyan-500 to-green-200 w-screen min-h-screen p-2">
    <router-view></router-view>
  </div>
</template>
