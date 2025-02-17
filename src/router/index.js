import { createWebHistory, createRouter } from 'vue-router'

import HomeView from '../view/Home.vue'
import AboutView from '../view/About.vue'
import ContactView from '../view/Contact.vue'
import ToursView from '../view/Tours.vue'
import TourView from '../view/Tour.vue'
import TransfersView from '../view/Transfers.vue'
import LocationsView from '../view/Locations.vue'
import LocationView from '../view/Location.vue'

const routes = [
  { 
    path: '/', 
    name: 'Home', 
    component: HomeView,
    meta: {
      title: 'Discover Kutaisi - Best Tours & Day Trips in Georgia',
      metaTags: [
        {
          name: 'description',
          content: 'Book the best Kutaisi tours with a local guide. Explore Georgia’s caves, waterfalls, and cultural sites with expert guidance!'
        },
        {
          property: 'og:description',
          content: 'Discover unforgettable Kutaisi tours and day trips. Explore Georgia’s wonders with a local expert!'
        },
        {
          name: 'twitter:description',
          content: 'Book top Kutaisi tours with a local guide! Explore hidden gems of Georgia like caves, waterfalls, and more.'
        },
        {
          rel: 'canonical',
          href: 'https://discoverkutaisi.com/'
        }
      ],
    } 
  },
  { 
    path: '/tours/:page(\\d+)', 
    name: 'Tours', 
    component: ToursView, 
    meta: {
      title: 'Kutaisi Tours - Explore Georgia’s Hidden Gems',
      metaTags: [
        {
          name: 'description',
          content: 'Browse top-rated Kutaisi tours and excursions. Book guided trips to caves, waterfalls, and cultural landmarks today!'
        },
        {
          property: 'og:description',
          content: 'Join the best Kutaisi tours! Explore nature, history, and culture with a professional guide.'
        },
        {
          name: 'twitter:description',
          content: 'Explore the best Kutaisi tours with a local guide! Book today and visit Georgia’s most beautiful sites.'
        },
        {
          rel: 'canonical',
          href: 'https://discoverkutaisi.com/tours'
        }
      ],
      transition: 'slide-fade-route'
    } 
  },
  { 
    path: '/tours/:id/:location', 
    name: 'Tour', 
    component: TourView, 
    meta: {
      title: 'Tour Details - Discover Kutaisi',
      metaTags: [
        {
          name: 'description',
          content: 'Get detailed information about Kutaisi tours. Find pricing, itineraries, and booking options for your perfect trip.'
        },
        {
          property: 'og:description',
          content: 'View detailed tour information and plan your perfect Kutaisi adventure today!'
        },
        {
          name: 'twitter:description',
          content: 'Plan your dream Kutaisi tour! Detailed info on tours, pricing, and itineraries to help you book your trip.'
        },
        {
          rel: 'canonical',
          href: 'https://discoverkutaisi.com/tours'
        }
      ],
      transition: 'slide-fade-route'
    } 
  },
  { 
    path: '/transfers', 
    name: 'Transfers', 
    component: TransfersView, 
    meta: {
      title: 'Kutaisi Airport Transfers - Safe & Comfortable Rides',
      metaTags: [
        {
          name: 'description',
          content: 'Book a safe and reliable Kutaisi airport transfer. Enjoy comfortable rides to any destination in Georgia.'
        },
        {
          property: 'og:description',
          content: 'Need a reliable airport transfer in Kutaisi? Book your private ride with comfort and ease!'
        },
        {
          name: 'twitter:description',
          content: 'Looking for a reliable Kutaisi airport transfer? Book your private ride for a smooth journey in Georgia.'
        },
        {
          rel: 'canonical',
          href: 'https://discoverkutaisi.com/transfers'
        }
      ],
      transition: 'slide-fade-route'
    } 
  },
  { 
    path: '/about', 
    name: 'About', 
    component: AboutView, 
    meta: {
      title: 'About Us - Discover Kutaisi',
      metaTags: [
        {
          name: 'description',
          content: 'Learn about Discover Kutaisi and our mission to provide top-quality guided tours and experiences in Georgia.'
        },
        {
          property: 'og:description',
          content: 'Discover Kutaisi - A local guide offering unforgettable tours and travel experiences in Georgia.'
        },
        {
          name: 'twitter:description',
          content: 'Get to know Discover Kutaisi. We offer the best local tours and unique experiences in Georgia.'
        },
        {
          rel: 'canonical',
          href: 'https://discoverkutaisi.com/about'
        }
      ],
      transition: 'slide-fade-route'
    } 
  },
  { 
    path: '/contact', 
    name: 'Contact', 
    component: ContactView, 
    meta: {
      title: 'Contact - Book Your Kutaisi Tour Today',
      metaTags: [
        {
          name: 'description',
          content: 'Have questions or want to book a tour? Contact Discover Kutaisi for expert travel advice and personalized tours.'
        },
        {
          property: 'og:description',
          content: 'Contact us for Kutaisi tours, transfers, and travel advice. We’re here to help!'
        },
        {
          name: 'twitter:description',
          content: 'Have any questions? Get in touch with Discover Kutaisi for the best tours, transfers, and travel advice.'
        },
        {
          rel: 'canonical',
          href: 'https://discoverkutaisi.com/contact'
        }
      ],
      transition: 'slide-fade-route'
    } 
  },
  { 
    path: '/places-to-visit-kutaisi/:page(\\d+)', 
    name: 'Places-to-visit-kutaisi', 
    component: LocationsView, 
    meta: {
      title: 'Best Places to Visit in Kutaisi - Travel Guide',
      metaTags: [
        {
          name: 'description',
          content: 'Discover the top places to visit in Kutaisi. Explore canyons, caves, monasteries, and more with expert local guidance.'
        },
        {
          property: 'og:description',
          content: 'Explore Kutaisi’s must-visit attractions! From breathtaking nature to historical sites, find the best places here.'
        },
        {
          name: 'twitter:description',
          content: 'Explore the best places to visit in Kutaisi with our detailed guide. Discover the top attractions and hidden gems of Georgia.'
        },
        {
          rel: 'canonical',
          href: 'https://discoverkutaisi.com/places-to-visit-kutaisi'
        }
      ],
      transition: 'slide-fade-route'
    } 
  },
  { 
    path: '/places-to-visit-kutaisi/:id', 
    name: 'Location', 
    component: LocationView, 
    meta: {
      title: 'Explore Kutaisi - Must-Visit Locations',
      metaTags: [
        {
          name: 'description',
          content: 'Detailed guide to the best locations in Kutaisi. Find top attractions, travel tips, and must-see spots.'
        },
        {
          property: 'og:description',
          content: 'Get detailed travel tips and guides for the best places to visit in Kutaisi.'
        },
        {
          name: 'twitter:description',
          content: 'Detailed travel guide to the best locations in Kutaisi. Discover must-visit spots and hidden gems in Georgia.'
        },
        {
          rel: 'canonical',
          href: 'https://discoverkutaisi.com/places-to-visit-kutaisi'
        }
      ],
      transition: 'slide-fade-route'
    } 
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router;


// ... 

// This callback runs before every route change, including on page load.
router.beforeEach((to, from, next) => {
  // This goes through the matched routes from last to first, finding the closest route with a title.
  // e.g., if we have `/some/deep/nested/route` and `/some`, `/deep`, and `/nested` have titles,
  // `/nested`'s will be chosen.
  const nearestWithTitle = to.matched.slice().reverse().find(r => r.meta && r.meta.title);

  // Find the nearest route element with meta tags.
  const nearestWithMeta = to.matched.slice().reverse().find(r => r.meta && r.meta.metaTags);

  const previousNearestWithMeta = from.matched.slice().reverse().find(r => r.meta && r.meta.metaTags);

  // If a route with a title was found, set the document (page) title to that value.
  if(nearestWithTitle) {
    document.title = nearestWithTitle.meta.title;
  } else if(previousNearestWithMeta) {
    document.title = previousNearestWithMeta.meta.title;
  }

  // Remove any stale meta tags from the document using the key attribute we set below.
  Array.from(document.querySelectorAll('[data-vue-router-controlled]')).map(el => el.parentNode.removeChild(el));

  // Skip rendering meta tags if there are none.
  if(!nearestWithMeta) return next();

  // Turn the meta tag definitions into actual elements in the head.
  nearestWithMeta.meta.metaTags.map(tagDef => {
    const tag = document.createElement('meta');

    Object.keys(tagDef).forEach(key => {
      tag.setAttribute(key, tagDef[key]);
    });

    // We use this to track which meta tags we create so we don't interfere with other ones.
    tag.setAttribute('data-vue-router-controlled', '');

    return tag;
  })
  // Add the meta tags to the document head.
  .forEach(tag => document.head.appendChild(tag));

  next();
});

// ...