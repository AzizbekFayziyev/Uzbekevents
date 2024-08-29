<template>
    <UI-Title>{{ profile.clients_title }}</UI-Title>

    <Swiper class="mt-6 h-[170px]" :slidesPerView="3" :space-between="30" :loop="true" :autoplay="{
        delay: 3000,
        disableOnInteraction: false,
    }" :pagination="{
        clickable: true,
        dynamicMainBullets: 6,
        dynamicBullets: 6
    }" :modules="[Pagination, Autoplay]">
        <SwiperSlide v-for="client in clients" :key="client.id">
            <div class="bg-white rounded-2xl p-2 min-h-[120px] overflow-hidden grid items-center">
                <img class="w-full pointer-events-none select-none object-contain" :src="client.image" alt="client" />
            </div>
        </SwiperSlide>
    </Swiper>
</template>

<script setup>
// Import Swiper
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Pagination, Autoplay } from 'swiper/modules';

const profileStore = useProfileStore();
const { profileData: profile, clientsData: clients } = storeToRefs(profileStore);
</script>