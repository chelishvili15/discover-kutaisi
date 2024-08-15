import { createWebHashHistory, createRouter } from 'vue-router'

import HomeView from '../view/Home.vue'
import AboutView from '../view/About.vue'
import ContactView from '../view/Contact.vue'
import ToursView from '../view/Tours.vue'

const routes = [
  { path: '/', name: 'Home', component: HomeView },
  { path: '/tours', name: 'Tours', component: ToursView },
  { path: '/about', name:'About', component: AboutView },
  { path: '/contact', name:'Contact', component: ContactView },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router