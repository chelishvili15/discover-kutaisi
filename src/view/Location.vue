<template>
    <div>
        <Article :location="location" />
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import Article from '../components/Article.vue'
import locations from '../locations.json'

const route = useRoute()

const id = ref(route.params.id)
const location = ref(locations.filter(val => val.id == id.value)[0])

onMounted(() => {
    window.scrollTo(0, 0)
})

</script>