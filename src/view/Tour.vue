<template>
    <div class="flex mb-10">
        <div 
            v-for="location in tour.locations" 
            class="w-1/3 flex justify-center py-2"
            :class="currentArticle.name == location.name ? 'border-l border-t border-r font-bold border-black' : 'border border-b-black'"
            @click = "currentArticle = location"
        >
            <p>{{ location.name }}</p>
        </div>

    </div> 

    <Article :location="currentArticle" />

</template>

<script setup>
import { ref } from 'vue'
import Article from '../components/Article.vue'
import { useRoute, useRouter } from 'vue-router'
import tours from '../tours.json'

const route = useRoute()
const router = useRouter()

const id = route.params.id
const [tour] = tours.data.filter(ob => ob.id == id)

const currentArticle = ref(tour.locations[0])

</script>