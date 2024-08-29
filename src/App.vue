<script setup>
import Header from './components/Header.vue'
</script>

<template>
    <div class="max-w-[428px] m-auto bg-transparent">
      <Header />
      <div class="bg-gradient-to-br w-full min-h-screen p-2 font-main ">
        <router-view></router-view>
      </div>
    </div>
</template>
