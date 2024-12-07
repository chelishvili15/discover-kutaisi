<script setup>
import { ref } from 'vue';
import Reviews from '../components/Reviews.vue';

const cls = ref('flex items-center gap-4 bg-white  py-1 px-12 rounded-full border-green-700 border-[1px]')
</script>

<template>
    <div class="w-full h-[calc(100vh-200px)] flex justify-center pt-24">
        <Reviews />

        <div class="w-full h-full flex flex-col justify-center gap-5 text-green-700 font-semibold">
            <a 
                href="#/locations" 
                class="pot0"
                :class="cls"
            >
                <p class="underline">Locations</p>
            </a>
            <a 
                href="#/tours" 
                class="pot1"
                :class="cls"
            >
                <p class="underline">Tours</p>
            </a>
            <a 
                href="#/transfers" 
                class="pot2"
                :class="cls"
            >
                <p class="underline">Transfers</p>
            </a>
            <a 
                href="#/about" 
                class="pot3"
                :class="cls"
            >
                <p class="underline">About</p>
            </a>
            <a 
                href="#/contact" 
                class="pot4"
                :class="cls"
            >
                <p class="underline">Contact</p>
            </a>
        </div>

        
    </div>


</template>

<style>
.pot0 {
  top: 15%;
  left: 50%;
  transform: translateX(-50%);
  position: absolute;
  animation: linear;
  animation-name: runTop;
  animation-duration: 0.8s;
}

.pot1 {
  top: 30%;
  left: 50%;
  transform: translateX(-50%);
  position: absolute;
  animation: linear;
  animation-name: runLeft;
  animation-duration: 0.8s;
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
  animation-duration: 0.5s;
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
    right: 10%;
  }
  50% { 
    right: 20%; 
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