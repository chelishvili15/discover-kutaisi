<template>
  <div>
    <div class="flex mb-10">
        <div 
            v-for="name in tour.locations" 
            class=" flex justify-center py-2"
            :class="[currentArticle == name ? 'border-l border-t border-r font-bold border-black' : 'border border-b-black', tour.locations.length === 3 ? 'w-1/3' : 'w-1/2']"
            @click = "currentArticle = name"
        >
            <p>{{ name }}</p>
        </div>

    </div> 
    <Article :location="locations.filter(ob => ob.name == currentArticle)[0]" />
        
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import Article from '../components/Article.vue'
import { useRoute, useRouter } from 'vue-router'
import tours from '../tours.json'
import locations from '../locations.json'

const route = useRoute()
const router = useRouter()

const id = route.params.id
const [tour] = tours.data.filter(ob => ob.id == id)

const currentArticle = ref(tour.locations[0])

onMounted(() => {
    window.scrollTo(0, 0)
})

</script>