<template>
    <div class="fixed inset-0 pt-24 flex flex-col gap-10">
        <Reviewcard v-for="review in reviews" :author="review" ></Reviewcard>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import Reviewcard from './Reviewcard.vue';

const reviews = ref([
    {
        fullName: 'Riputarna Sarkar',
        rate: 5,
        avatar: 'avatars/riputana.png',
        review: 'I had an amazing experience with David during our visit to Kutaisi. He took my two girlfriends and me on a trip to the Martvili Canyons and made sure we were comfortable and safe the entire time.',
        rotate: '-rotate-12'
    },
    {
        fullName: 'Merve Karabadan',
        rate: 5,
        avatar: 'avatars/merve.png',
        review: 'During our visit to Kutaisi with our friends, David guided us and we were very pleased. David is both a very good guide and a very sincere and friendly person. He took us to the places we wanted during our trip and introduced us to them. He also suggested places that we would like. We loved the places he suggested. He made us feel comfortable and safe. He cares about your trip as much as you do and plans routes that are suitable for you, he takes his job seriously. If you want to visit Kutaisi, I definitely recommend working with him!',
        rotate: 'rotate-3'
    },
    {
        fullName: 'Fabio De Nio',
        rate: 5,
        avatar: 'avatars/fabio.png',
        review: 'I had the chance to discover kutaisi and neighbourhood thanks to the Wonderful guide David who made me see wonderful places. Recommended 1000%, would go again!',
        rotate: '-rotate-12'
    },
    {
        fullName: 'Andrius',
        rate: 5,
        avatar: 'avatars/andrius.png',
        review: 'David is a great guide and he goes above and beyond to show for his clients as much as possible. He not only tells and shows whats on the itinerary but also puts some extra places that are in the way! He really enjoys getting people to know this beautiful country and it shows! He helps andrecommend best activities on the itinerary and shows the way around! Very good guide and very friendly strongly recommend! 7 hour trip flew by in a second with him!',
        rotate: 'rotate-12'
    },
    {
        fullName: 'Izabela Gajowczyk',
        rate: 5,
        avatar: 'avatars/izabela.png',
        review: 'Świetny kierowca, spędziłyśmy cały dzień  w miłym towarzystwie. Udało nam się zobaczyć kaniony Okatse, Martvili, jaskinię Prometeusza, wodospady i sanatorium, a także porozmawiać o lokalnej kuchni. Zdecydowanie polecam i mam nadzieję, że jeszcze kiedyś uda wybrać się na wspólną wycieczkę :)',
        rotate: '-rotate-6'
    },
    {
        fullName: 'Karin Kugel',
        rate: 5,
        avatar: 'avatars/karin.png',
        review: 'I had a great experience today with David as my guide and driver in Tskaltubo. He took me to the abandoned sanatoriums and was a very safe and attentive driver throughout the trip. The tour was both informative and fun, with no pressure to rush, allowing me to fully enjoy the experience. David was also kind enough to regularly offer to take photos of me and the sights, which made the day even more enjoyable. I would definitely recommend him to anyone interested in exploring Tskaltubo – he is very knowledgeable, professional, and thoughtful.',
        rotate: 'rotate-12'
    },
])

</script>