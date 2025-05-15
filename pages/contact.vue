<template>
    <div class="w-full h-[calc(100vh-200px)] flex justify-center pt-24"> 
        <div class="w-min h-min flex flex-col gap-3 text-green-700 font-semibold">
            <a
                href="mailto:discoverkutaisi@gmail.com" 
                class="flex items-center gap-4"
            >
                <Gmail />  
                <p class="underline">discoverkutaisi@gmail.com </p>
            </a>
            <a 
                href="https://api.whatsapp.com/send?phone=+995557669179" 
                class="flex items-center gap-4"
            >
                <Whatsapp /> 
                <p class="underline">Whatsapp</p>
            </a>
            <a 
                href="https://t.me/+995557669179"  
                class="flex items-center gap-4">
                <Telegram /> 
                <p class="underline">Telegram</p>
            </a>
            <a 
                href="https://www.youtube.com/@DiscoverKutaisi" 
                class="flex items-center gap-4"
            >
                <Youtube /> 
                <p class="underline">@DiscoverKutaisi</p>
            </a>
            <a 
                href="https://maps.app.goo.gl/XRrGhEsdh4BahJcE7"
                target="_blank" 
                class="flex items-center gap-4"
            >
                <Maps /> 
                <p class="underline">Find us on map</p>
            </a>
        </div>
    </div>
</template>