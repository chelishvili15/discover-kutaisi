import { createMemoryHistory, createRouter } from 'vue-router'

import HomeView from '../view/Home.vue'
import AboutView from '../view/About.vue'

const routes = [
  { path: '/', name: 'Home', component: HomeView },
  { path: '/about', name:'About', component: AboutView },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router