<script setup>
import tours from '@/tours.json'

const router = useRouter()
const route = useRoute()

const itemsPerPage = ref(4)

// const slicedTours = computed(() => {
//     const first = (route.params.page - 1) * itemsPerPage.value
//     const last = (route.params.page - 1) * itemsPerPage.value + itemsPerPage.value
//     return Tours.data.slice(first, last)
// })
</script>

<template>
    <div class="flex flex-col gap-4">
        <H1 title="Tours from Kutaisi"></H1>    
        <Card 
            v-for="tour in tours.data" 
            :key="tour.id"
            :tour="tour"
            @click="router.push(`/tours/${tour.id}/${tour.id.split('-')[0]}`)"
        />

        <!-- <Pagination 
            :totalItems="Tours.data.length" 
            :itemsPerPage="itemsPerPage"
            :routeName="'Tours'" 
        /> -->
    </div>
</template>