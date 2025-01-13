<template>
    <div class="sticky top-0 z-50 flex justify-between items-center px-5 bg-green-700 text-gray-200 font-main">
        <ArrowLeft 
            v-if="route.name=='Tour'"
            @click="router.push({name: 'Tours', params: { page: lastPaginationPage } })"
            class="sm:hover:cursor-pointer"
        />

        <div class="w-1/2 flex justify-end">
            <RouterLink to="/">
                <Logo class="translate-x-1/2" @click="$emit('closeSidebar')"/>
            </RouterLink>
        </div>

        <div class="w-1/2 flex justify-end">
            <Burger
              v-if="!toggleSidebar"
              @click="$emit('toggleSidebar')"
              class="sm:hover:cursor-pointer"
            />
            <Close
              v-if="toggleSidebar"
              @click="$emit('toggleSidebar')"
              class="sm:hover:cursor-pointer" 
            />
        </div>        
    </div>
</template>

<script setup>
import { watch, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import Logo from '../assets/icons/Logo.vue'
import Burger from '../assets/icons/Burger.vue'
import Close from '../assets/icons/Close.vue'
import ArrowLeft from '../assets/icons/ArrowLeft.vue'

const route = useRoute()
const router = useRouter()

defineEmits(['toggleSidebar', 'closeSidebar'])
defineProps(['toggleSidebar'])

const lastPaginationPage = ref(1)

watch(
  () => route.params,
  (newRouteParams, oldRouteParams) => {
    if(Object.keys(oldRouteParams).length && Object.keys(oldRouteParams)[0] === 'page') {
        lastPaginationPage.value = +oldRouteParams.page
    }
  }
)
</script>