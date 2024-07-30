<template>
    <section>
        <UI-Title>Наши работы</UI-Title>

        <Swiper class="mt-6 h-[240px]" :slidesPerView="1" :space-between="30" :loop="true" :pagination="{
            clickable: true,
        }" :autoplay="{
        delay: 4000,
        disableOnInteraction: false,
    }" :modules="[Pagination, Autoplay]">
            <SwiperSlide>
                <NuxtLink href="https://www.youtube.com/watch?v=zYMe4uhytYo" target="_blank" class="rounded-2xl overflow-hidden relative cursor-pointer">
                    <NuxtImg class="w-full h-[200px] object-cover select-none" src="/works/1.png" alt="work" />

                    <i class="fa-regular fa-circle-play absolute left-[50%] top-[50%] z-10 text-7xl"></i>
                </NuxtLink>
            </SwiperSlide>

            <SwiperSlide>
                <NuxtLink href="https://www.youtube.com/watch?v=xjzNu7KyAg0" target="_blank" class="rounded-2xl overflow-hidden relative cursor-pointer">
                    <NuxtImg class="w-full h-[200px] object-cover select-none" src="/works/2.png" alt="work" />

                    <i class="fa-regular fa-circle-play absolute left-[50%] top-[50%] z-10 text-7xl"></i>
                </NuxtLink>
            </SwiperSlide>

            <SwiperSlide>
                <NuxtLink href="https://www.youtube.com/watch?v=9EqUveTiEeU" target="_blank" class="rounded-2xl overflow-hidden relative cursor-pointer">
                    <NuxtImg class="w-full h-[200px] object-cover select-none" src="/works/3.png" alt="work" />

                    <i class="fa-regular fa-circle-play absolute left-[50%] top-[50%] z-10 text-7xl"></i>
                </NuxtLink>
            </SwiperSlide>
        </Swiper>
    </section>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/pagination';


// import required modules
import { Autoplay, Pagination } from 'swiper/modules';
</script>

<style scoped>
i {
    transform: translate(-50%, -50%);
}
</style>