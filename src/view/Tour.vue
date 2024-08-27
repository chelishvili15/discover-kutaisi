<template>
    <div v-for="location in tour.locations">
        <Article :location="location" />
    </div>
</template>

<script setup>
import Article from '../components/Article.vue'
import { useRoute, useRouter } from 'vue-router'
import tours from '../tours.json'

const route = useRoute()
const router = useRouter()

const id = route.params.id
const [tour] = tours.data.filter(ob => ob.id == id)

</script>