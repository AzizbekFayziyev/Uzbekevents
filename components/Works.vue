<template>
    <section>
        <UI-Title>{{ profile.our_projects_title }}</UI-Title>

        <Swiper class="mt-6 h-[240px]" :slidesPerView="1" :space-between="30" :loop="true" :pagination="{
            clickable: true,
        }" :autoplay="{
            delay: 4000,
            disableOnInteraction: false,
        }" :modules="[Pagination, Autoplay]">
            <SwiperSlide v-for="work in works" :key="work.id">
                <NuxtLink :href="work.video_url" target="_blank"
                    class="rounded-2xl overflow-hidden relative cursor-pointer">
                    <img class="w-full h-[200px] object-cover select-none" :src="work.image" alt="works image" />

                    <i class="fa-regular fa-circle-play absolute left-[50%] top-[50%] z-10 text-7xl"></i>
                </NuxtLink>
            </SwiperSlide>
        </Swiper>
    </section>
</template>

<script setup>
// Import Swiper
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Autoplay, Pagination } from 'swiper/modules';

const profileStore = useProfileStore();
const { profileData: profile, projectsData: works } = storeToRefs(profileStore);

console.log(works);
</script>

<style scoped>
i {
    transform: translate(-50%, -50%);
}
</style>