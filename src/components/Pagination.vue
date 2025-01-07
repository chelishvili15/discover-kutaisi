<template>
    <div class="flex gap-6 fixed bottom-20 right-1/2 translate-x-1/2">
        <div
          class="bg-green-600 text-gray-100 p-3 sm:cursor-pointer"
          @click="goToPrevPage"
        >
            <<
        </div>
        <div
          class="bg-green-600 text-gray-100 p-3 sm:cursor-pointer"
          @click="goToNextPage"
        >
          >>
        </div>
    </div>

</template>

<script setup>

import { ref, watch } from 'vue';
import { useRouter,useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()

const props = defineProps(["totalItems", "itemsPerPage"])

const currentPage = ref(Number(route.params.page) || 1)

watch(
  () => route.params.page,
  (newPage, oldPage) => {
    currentPage.value = +newPage
  }
)

const goToNextPage = () => {
    const maxPage = Math.ceil(props.totalItems / props.itemsPerPage)

    console.log(currentPage.value + 1 > maxPage ? maxPage : currentPage.value + 1)
    const nextPage = currentPage.value + 1 > maxPage ? maxPage : currentPage.value + 1
    router.push({name: 'Places-to-visit-kutaisi', params: {page: nextPage}})
}

const goToPrevPage = () => {
    const prevPage = currentPage.value - 1 > 0 ? currentPage.value - 1 : 1 
    router.push({name: 'Places-to-visit-kutaisi', params: {page: prevPage}})
}
</script>

<style lang="scss" scoped>

</style>