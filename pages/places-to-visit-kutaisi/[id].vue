<template>
    <div>
        <Article :location="location" />
    </div>
</template>

<script setup>
import locations from '@/public/locations.json'

const route = useRoute()

const id = ref(route.params.id)
const location = ref(locations.filter(val => val.id == id.value)[0])

onMounted(() => {
    window.scrollTo(0, 0)
})

</script>