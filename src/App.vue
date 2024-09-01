<script setup>
import Header from './components/Header.vue'
</script>

<template>
    <div class="max-w-[768px] m-auto bg-transparent">
      <Header />
      <div class="bg-gradient-to-br w-full p-2 font-main ">
        <router-view></router-view>
      </div>
    </div>
</template>
