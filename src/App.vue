<script setup>
import Card from './components/Card.vue'
import Tour from '../public/tours.json'
</script>

<template>
  <div class="bg-gradient-to-br from-blue-600 via-cyan-500 to-green-200 w-screen min-h-screen p-2 flex flex-col gap-2">
    <Card v-for="tour in Tour.data" :tour="tour" />
  </div>
</template>
