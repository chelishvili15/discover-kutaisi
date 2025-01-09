<template>
    <div class="flex gap-6 bottom-20 justify-center my-10">
        <div
          class="text-gray-100 p-3 rounded-full"
          :class="disabledPrev ? 'bg-gray-300 sm:cursor-default' : 'bg-green-500  sm:cursor-pointer'"
          @click="goToPrevPage"
        >
            <ArrowLeft />
        </div>
        <div class="flex gap-4 items-center">
            <div 
                v-for="page in maxPage" 
                :key="page"
                class="w-10 h-10 flex items-center justify-center text-gray-100 text-lg rounded-full sm:cursor-pointer"
                :class="currentPage == page ? 'bg-green-700' : 'bg-green-500'"
                @click="changePage(page)"
            >
                {{ page }}
            </div>
        </div>
        <div

          class=" text-gray-100 p-3 rounded-full"
          :class="disabledNext ? 'bg-gray-300 sm:cursor-default' : 'bg-green-500  sm:cursor-pointer'"
          @click="goToNextPage"
        >
          <ArrowLeft class="rotate-180" />
        </div>
    </div>

</template>

<script setup>
import { ref, watch } from 'vue';
import { useRouter,useRoute } from 'vue-router'
import ArrowLeft from "../assets/icons/ArrowLeft.vue"

const router = useRouter()
const route = useRoute()

const props = defineProps(["totalItems", "itemsPerPage", "routeName"])

const currentPage = ref(Number(route.params.page) || 1)
const maxPage = ref(Math.ceil(props.totalItems / props.itemsPerPage))
const disabledPrev = ref(false)
const disabledNext = ref(false)

if (maxPage.value == route.params.page) {
    disabledNext.value = true
}

if (1 == route.params.page) {
    disabledPrev.value = true
}

watch(
  () => route.params.page,
  (newPage, oldPage) => {
    currentPage.value = +newPage
    if (typeof(+oldPage) == 'number') {
        window.scroll(0, 0)
    }
  }
)

const changePage = (pageNumber) => {
    if (pageNumber == maxPage.value && pageNumber > 1) {
        disabledNext.value = true
        disabledPrev.value = false
    } else

    if (pageNumber == 1 && pageNumber < maxPage.value) {
        disabledPrev.value = true
        disabledNext.value = false
    } else {
        disabledPrev.value = false
        disabledNext.value = false
    }

    router.push({name: props.routeName, params: {page: pageNumber}})
}

const goToNextPage = () => {
    if (!disabledNext.value) {
        let nextPage = currentPage.value
        disabledPrev.value = false

        if (currentPage.value + 1 == maxPage.value) {
            disabledNext.value = true

            nextPage = currentPage.value + 1
        } else {
            nextPage = currentPage.value + 1
        }

        router.push({name: props.routeName, params: {page: nextPage}})
    }
}

const goToPrevPage = () => {
    if (!disabledPrev.value) {
        let prevPage = currentPage.value
        disabledNext.value = false

        if (currentPage.value - 1 == 1) {
            disabledPrev.value = true
            prevPage = currentPage.value - 1
        } else {
            prevPage = currentPage.value - 1
        }

        router.push({name: props.routeName, params: {page: prevPage}})
    }
}
</script>

<style lang="scss" scoped>

</style>