<script setup>
import BlackLogo from '../assets/icons/BlackLogo.vue'
</script>

<template>
    <BlackLogo class="opacity-5 w-full fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" /> 
    

    <div class="w-full h-[calc(100vh-200px)] flex justify-center pt-24">

        <div class="w-full h-full flex flex-col justify-center gap-5 text-green-700">
            <a 
                href="#/tours" 
                class="pot1 flex items-center gap-4"
            >
                <p class="underline">Tours</p>
            </a>
            <a 
                href="#/transfers" 
                class="pot2 flex items-center gap-4"
            >
                <p class="underline">Transfers</p>
            </a>
            <a 
                href="#/about" 
                class="pot3 flex items-center gap-4"
            >
                <p class="underline">About</p>
            </a>
            <a 
                href="#/contact" 
                class="pot4 flex items-center gap-4"
            >
                <p class="underline">Contact</p>
            </a>
        </div>
    </div>


</template>

<style>
.pot1 {
  top: 15%;
  left: 50%;
  transform: translateX(-50%);
  position: absolute;
  animation: linear;
  animation-name: runLeft;
  animation-duration: 3s;
}
.pot4 {
  top: 60%;
  left: 50%;
  transform: translateX(-50%);
  position: absolute;
  animation: linear;
  animation-name: runLeft;
  animation-duration: 2s;
}

@keyframes runLeft {
  0% {
    left: -100%;
  }
  50% { 
    left: 10%; 
   }
  100% {
    left: 50%;     
  }
}

.pot2 {
  top: 30%;
  right: 50%;
  transform: translateX(50%);
  position: absolute;
  animation: linear;
  animation-name: runRight;
  animation-duration: 2s;
}
.pot3 {
  top: 45%;
  right: 50%;
  transform: translateX(50%);
  position: absolute;
  animation: linear;
  animation-name: runRight;
  animation-duration: 3s;
}

@keyframes runRight {
  0% {
    right: -100%;
  }
  50% { 
    right: 10%; 
   }
  100% {
    right: 50%;     
  }
}
</style>