<script setup>

const cls = ref('flex items-center justify-center gap-4 bg-white w-44 h-8 py-1  rounded-full border-green-700 border-[1px] shadow-md shadow-gray-700')
const showReviews = ref(false)

onMounted(() => {
  setTimeout(() => {
    showReviews.value = true
  }, 1000)
})
</script>

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
  }
  50% { 
    left: 20%; 
   }
  100% {
    left: 50%;     
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
  }
  50% { 
    right: 40%; 
   }
  100% {
    right: 50%;     
  }
}

@keyframes runTop {
  0% {
    top: -10%;
  }
  50% { 
    top: -0%; 
   }
  100% {
    top: 15%;     
  }
}
</style>