import { createWebHashHistory, createRouter } from 'vue-router'

import HomeView from '../view/Home.vue'
import AboutView from '../view/About.vue'
import ContactView from '../view/Contact.vue'
import ToursView from '../view/Tours.vue'
import TourView from '../view/Tour.vue'
import TransfersView from '../view/Transfers.vue'
import LocationsView from '../view/Locations.vue'

const routes = [
  { path: '/', 
    name: 'Home', 
    component: HomeView,
  },
  { path: '/tours', name: 'Tours', component: ToursView, meta: {transition: 'slide-fade-route'} },
  { path: '/tours/:id', name: 'Tour', component: TourView, meta: {transition: 'slide-fade-route'} },
  { path: '/transfers', name: 'Transfer', component: TransfersView, meta: {transition: 'slide-fade-route'} },
  { path: '/about', name:'About', component: AboutView, meta: {transition: 'slide-fade-route'} },
  { path: '/contact', name:'Contact', component: ContactView, meta: {transition: 'slide-fade-route'} },
  { path: '/locations', name:'Locations', component: LocationsView, meta: {transition: 'slide-fade-route'} },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router