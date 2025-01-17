import { createWebHashHistory, createRouter } from 'vue-router'

import HomeView from '../view/Home.vue'
import AboutView from '../view/About.vue'
import ContactView from '../view/Contact.vue'
import ToursView from '../view/Tours.vue'
import TourView from '../view/Tour.vue'
import TransfersView from '../view/Transfers.vue'
import LocationsView from '../view/Locations.vue'
import LocationView from '../view/Location.vue'

const routes = [
  { path: '/', 
    name: 'Home', 
    component: HomeView,
  },
  { 
    path: '/tours/:page(\\d+)', 
    name: 'Tours', 
    component: ToursView, 
    meta: {
      transition: 'slide-fade-route'
    } 
  },
  { 
    path: '/tours/:id/:location', 
    name: 'Tour', 
    component: TourView, 
    meta: {
      transition: 'slide-fade-route'} 
    },
  { 
    path: '/transfers', 
    name: 'Transfers', 
    component: TransfersView, 
    meta: {
      transition: 'slide-fade-route'
    } 
  },
  { 
    path: '/about', 
    name:'About', 
    component: AboutView, 
    meta: {
      transition: 'slide-fade-route'
    } 
  },
  { 
    path: '/contact', 
    name:'Contact', 
    component: ContactView, 
    meta: {
      transition: 'slide-fade-route'
    } 
  },
  { 
    path: '/places-to-visit-kutaisi/:page(\\d+)', 
    name:'Places-to-visit-kutaisi', 
    component: LocationsView, 
    meta: {
      transition: 'slide-fade-route'
    } 
  },
  { 
    path: '/places-to-visit-kutaisi/:id', 
    name:'Location', 
    component: LocationView, 
    meta: {
      transition: 'slide-fade-route'
    } 
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router