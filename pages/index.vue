<template>
    <div class="w-full h-[calc(100vh-200px)] flex justify-center pt-24">
      <div class="absolute top-0 opacity-0">
        <H1 title="Discover Kutaisi"></H1>
        <H2 title="Tours and Transfers from Kutaisi"></H2>
      </div>



        <Transition name="reviews-fade">
          <Reviews
            v-if="showReviews"  
            class="opacity-45"
          />
        </Transition>

        <div class="w-full flex flex-col justify-center gap-5 text-green-700 font-semibold">
            <a 
                href="places-to-visit-kutaisi" 
                class="pot0"
                :class="cls"
            >
                <p class="text-sm">Places to visit Kutaisi</p>
            </a>
            <a 
                href="tours" 
                class="pot1"
                :class="cls"
            >
                <p class="">Tours</p>
            </a>
            <a 
                href="transfers" 
                class="pot2"
                :class="cls"
            >
                <p class="">Transfers</p>
            </a>
            <a 
                href="about" 
                class="pot3"
                :class="cls"
            >
                <p class="">About</p>
            </a>
            <a 
                href="contact" 
                class="pot4"
                :class="cls"
            >
                <p class="">Contact</p>
            </a>
        </div>

        
    </div>


</template>

<script setup>

const cls = ref('flex items-center justify-center gap-4 bg-white w-44 h-8 py-1  rounded-full border-green-700 border-[1px] shadow-md shadow-gray-700')
const showReviews = ref(false)

onMounted(() => {
  setTimeout(() => {
    showReviews.value = true
  }, 1000)
})

// Import Nuxt composables
import { useSeoMeta, useHead } from '#imports'

// ✅ SEO Meta Tags for Homepage
useSeoMeta({
  // Primary SEO
  title: 'Discover Kutaisi | Tours & Transfers in Georgia’s Cultural Capital',
  description: 'Book top-rated tours and private transfers from Kutaisi to Prometheus Cave, Martvili Canyon, Tbilisi, Batumi, and more. Travel Georgia with expert local guides and comfortable vehicles.',

  // Open Graph (Social Sharing)
  ogTitle: 'Discover Kutaisi | Tours & Transfers in Georgia’s Cultural Capital',
  ogDescription: 'Explore Georgia with trusted tours and transfers from Kutaisi. Visit Prometheus Cave, Okatse Canyon, Gelati Monastery, and beyond with experienced drivers and guides.',
  ogImage: 'https://discoverkutaisi.com/images/logo.png',
  ogUrl: 'https://discoverkutaisi.com',
  ogType: 'website',

  // Twitter Card
  twitterTitle: 'Discover Kutaisi | Tours & Transfers in Georgia’s Cultural Capital',
  twitterDescription: 'Plan your adventure with our top-rated Kutaisi tours and private transfers to Georgia’s top sights. Reliable, comfortable, and guided by locals.',
  twitterImage: 'https://discoverkutaisi.com/images/logo.png',
  twitterCard: 'summary_large_image',

  // Optional legacy meta
  keywords: 'Kutaisi tours, Georgia transfers, Prometheus Cave, Okatse Canyon, Martvili Canyon, Tbilisi, Batumi, day trips from Kutaisi, things to do in Kutaisi',
})

// ✅ Canonical URL for Homepage
useHead({
  link: [
    {
      rel: 'canonical',
      href: 'https://discoverkutaisi.com',
    },
  ],
  htmlAttrs: {
    lang: 'en' // Sets language to English
  }
})
</script>

<style>
.reviews-fade-enter-active {
  transition: all 0.5s ease;
}

.reviews-fade-enter-from,
.reviews-fade-leave-to {
  opacity: 0;
}

.pot0 {
  top: 15%;
  left: 50%;
  transform: translateX(-50%);
  position: absolute;
  animation: linear;
  animation-name: runTop;
  animation-duration: 0.5s;
}

.pot1 {
  top: 30%;
  left: 50%;
  transform: translateX(-50%);
  position: absolute;
  animation: linear;
  animation-name: runLeft;
  animation-duration: 0.5s;
}
.pot4 {
  top: 75%;
  left: 50%;
  transform: translateX(-50%);
  position: absolute;
  animation: linear;
  animation-name: runLeft;
  animation-duration: 0.5s;
}

@keyframes runLeft {
  0% {
    left: 10%;
    opacity: 0;
  }
  50% { 
    left: 20%;
    opacity: 20%; 
   }
  100% {
    left: 50%;
    opacity: 100%;     
  }
}

.pot2 {
  top: 45%;
  right: 50%;
  transform: translateX(50%);
  position: absolute;
  animation: linear;
  animation-name: runRight;
  animation-duration: 0.3s;
}
.pot3 {
  top: 60%;
  right: 50%;
  transform: translateX(50%);
  position: absolute;
  animation: linear;
  animation-name: runRight;
  animation-duration: 0.8s;
}

@keyframes runRight {
  0% {
    right: 25%;
    opacity: 0;
  }
  50% { 
    right: 40%; 
    opacity: 60%;
   }
  100% {
    right: 50%;     
    opacity: 100%;
  }
}

@keyframes runTop {
  0% {
    top: -10%;
    opacity: 0;
  }
  50% { 
    top: -0%; 
    opacity: 10%;
   }
  100% {
    top: 15%;     
    opacity: 100%;
  }
}
</style>