<script setup>
import Header from './components/Header.vue'
</script>

<template>
  <Header />
  <div class="bg-gradient-to-br w-screen min-h-screen p-2 font-main">
    <router-view></router-view>
  </div>
</template>
