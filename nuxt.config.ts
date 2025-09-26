// https://nuxt.com/docs/api/configuration/nuxt-config

// --- Synchronous Route Calculation Start ---
// We move the route generation logic outside the configuration object to ensure 
// the full, static list of routes is available synchronously for the sitemap module.

const tours = [
  { slug: 'Martvili-Prometheus/Martvili' },
  { slug: 'Martvili-Prometheus/Prometheus' },
  { slug: 'Martvili-Okatse-Prometheus/Prometheus' },
  { slug: 'Martvili-Okatse-Prometheus/Okatse' },
  { slug: 'Martvili-Okatse-Prometheus/Martvili' },
  { slug: 'Tskhrajvari-Shaori-Nikortsminda/Tskhrajvari' },
  { slug: 'Tskhrajvari-Shaori-Nikortsminda/Shaori' },
  { slug: 'Tskhrajvari-Shaori-Nikortsminda/Nikortsminda'},
  { slug: 'Martvili-Okatse-Kinchkha/Okatse' },
  { slug: 'Martvili-Okatse-Kinchkha/Kinchkha' },
  { slug: 'Gelati-Motsameta-Bagrati/Gelati' },
  { slug: 'Gelati-Motsameta-Bagrati/Motsameta' },
  { slug: 'Gelati-Motsameta-Bagrati/Bagrati' },
]

const places = [
  { slug: 'Sataplia' },
  { slug: 'Prometheus' },
  { slug: 'Martvili' },
  { slug: 'TskhraJvari' },
  { slug: 'Shaori' },
  { slug: 'Okatse' },
  { slug: 'Kinchkha' },
  { slug: 'Gelati' },
  { slug: 'Motsameta' },
  { slug: 'Bagrati' },
  { slug: 'Nikortsminda' },
]

// Map to route paths
const dynamicTourRoutes = tours.map(t => `/tours/${t.slug}`)
const dynamicPlaceRoutes = places.map(p => `/places-to-visit-kutaisi/${p.slug}`)

// Corrected '/transfers' to '/Transfers' to match the Nuxt:pages output.
const staticRoutes = [
  '/',
  '/about',
  '/contact', 
  '/tours',
  '/Transfers', // Corrected case to match existing Nuxt pages
  '/places-to-visit-kutaisi',
]

const allRoutes = [...staticRoutes, ...dynamicTourRoutes, ...dynamicPlaceRoutes]
// --- Synchronous Route Calculation End ---


export default defineNuxtConfig({
  app: {
    pageTransition: { name: 'slide-fade-route', mode: 'out-in' }
  },
  compatibilityDate: '2024-11-01',
  devtools: { enabled: false },
  modules: ['@nuxtjs/tailwindcss', 'vue3-carousel-nuxt', '@nuxtjs/sitemap'],
  css: ['~/assets/css/main.css'],

  sitemap: {
    siteUrl: 'https://discoverkutaisi.com',
    
    // DEBUG MODE is enabled as requested.
    debug: true,

    // We assign the synchronously calculated array directly to the routes property.
    urls: allRoutes,
  }
})
