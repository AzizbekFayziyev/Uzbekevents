<template>
    <UI-Title>Наши клиенты</UI-Title>

    <Swiper class="mt-6 h-[125px]" :slidesPerView="3" :space-between="30" :loop="true" :autoplay="{
        delay: 3000,
        disableOnInteraction: false,
    }" :pagination="{
        clickable: true,
    }" :modules="[Pagination, Autoplay]">
        <SwiperSlide>
            <div class="bg-white grayscale rounded-2xl p-2 h-[80px] grid items-center">
                <NuxtImg class="w-full 1 pointer-events-none select-none" src="/clients/1.jpg" alt="client" />
            </div>
        </SwiperSlide>

        <SwiperSlide>
            <div class="bg-white grayscale rounded-2xl p-2 h-[80px] grid items-center">
                <NuxtImg class="w-full 1 pointer-events-none select-none" src="/clients/2.jpg" alt="client" />
            </div>
        </SwiperSlide>

        <SwiperSlide>
            <div class="bg-white grayscale rounded-2xl p-2 h-[80px] grid items-center">
                <NuxtImg class="w-full 1 pointer-events-none select-none" src="/clients/3.jpg" alt="client" />
            </div>
        </SwiperSlide>

        <SwiperSlide>
            <div class="bg-white grayscale rounded-2xl p-2 h-[80px] grid items-center">
                <NuxtImg class="w-full 1 pointer-events-none select-none" src="/clients/4.jpg" alt="client" />
            </div>
        </SwiperSlide>
    </Swiper>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/pagination';


// import required modules
import { Pagination, Autoplay } from 'swiper/modules';
</script>