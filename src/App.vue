<script setup>
import Header from './components/Header.vue'
</script>

<template>
  <Header />
  <div class="bg-gradient-to-br from-green-800 via-green-600 to-green-400 w-screen min-h-screen p-2">
    <router-view></router-view>
  </div>
</template>
