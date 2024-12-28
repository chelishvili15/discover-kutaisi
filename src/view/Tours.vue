<script setup>
import Card from '../components/Card.vue'
import Tour from '../tours.json'
import H1 from '../components/H1.vue';
</script>

<template>
    <div class="flex flex-col gap-4">
        <H1 title="Tours from Kutaisi"></H1>    
       <Card v-for="tour in Tour.data" :tour="tour" />
    </div>
</template>