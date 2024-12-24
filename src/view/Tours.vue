<script setup>
import Card from '../components/Card.vue'
import Tour from '../tours.json'
</script>

<template>
    <div class="flex flex-col gap-4">    
       <Card v-for="tour in Tour.data" :tour="tour" />
    </div>
</template>