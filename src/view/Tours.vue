<script setup>
import { ref, computed } from 'vue';
import { useRoute, useRouter } from 'vue-router'
import Card from '../components/Card.vue'
import Pagination from '../components/Pagination.vue';
import Tours from '../tours.json'
import H1 from '../components/H1.vue';

const router = useRouter()
const route = useRoute()

const itemsPerPage = ref(3)

const slicedTours = computed(() => {
    const first = (route.params.page - 1) * itemsPerPage.value
    const last = (route.params.page - 1) * itemsPerPage.value + itemsPerPage.value
    return Tours.data.slice(first, last)
})
</script>

<template>
    <div class="flex flex-col gap-4">
        <H1 title="Tours from Kutaisi"></H1>    
        <Card 
            v-for="tour in slicedTours" 
            :tour="tour"
            @click="router.push(`/tours/${tour.id}`)"
        />

        <Pagination 
            :totalItems="Tours.data.length" 
            :itemsPerPage="itemsPerPage"
            :routeName="'Tours'" 
        />
    </div>
</template>