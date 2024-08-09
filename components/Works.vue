<template>
    <section>
        <UI-Title>{{ profile.our_projects_title }}</UI-Title>

        <Swiper class="mt-6 h-[240px]" :slidesPerView="1" :space-between="30" :loop="true" :pagination="{
            clickable: true,
        }" :autoplay="{
            delay: 4000,
            disableOnInteraction: false,
        }" :modules="[Pagination, Autoplay]">
            <SwiperSlide v-for="(work, id) in works" :key="work.id">
                <div @click="onModalOpen(id)" class="rounded-2xl overflow-hidden relative cursor-pointer">
                    <img class="w-full h-[200px] object-cover select-none" :src="work.image" alt="works image" />

                    <i class="fa-regular fa-circle-play absolute left-[50%] top-[50%] z-10 text-7xl"></i>
                </div>
            </SwiperSlide>
        </Swiper>
    </section>

    <transition>
        <div @click.stop="isModalOpen = false" v-if="isModalOpen"
            class="w-full h-full fixed bg-black/80 z-50 left-0 top-0 px-10 flex items-center justify-center">
            <i class="fa-solid fa-x fixed top-8 right-3 text-3xl z-30 cursor-pointer"></i>

            <div class="select-none" @click.stop>
                <span class="absolute top-2 left-2 text-lg">{{ video_index + 1 }} / {{ works.length }}</span>
                <div @click.stop="onSlideLeft" class="absolute mt-5 p-2 left-0 top-0 h-full grid items-center cursor-pointer">
                    <i class="fa-solid fa-chevron-left text-3xl pl-5"></i>
                </div>

                <iframe v-for="(work, id) in works" allowfullscreen
                    :class="{ hidden: id !== video_index, block: id === video_index }"
                    class="w-dvw sm:max-w-[500px] h-auto min-h-[300px]" :src="work.video_url" title="work video"
                    frameborder="0" referrerpolicy="strict-origin-when-cross-origin"></iframe>

                <div @click.stop="onSlideRight" class="absolute mt-5 p-2 right-0 top-0 h-full grid items-center cursor-pointer">
                    <i class="fa-solid fa-chevron-right text-3xl"></i>
                </div>
            </div>
        </div>
    </transition>
</template>

<script setup>
// Import Swiper
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Autoplay, Pagination } from 'swiper/modules';

const video_index = ref(0);
const isModalOpen = ref(false);

const onModalOpen = (index) => {
    isModalOpen.value = true;
    video_index.value = index;
}

const onSlideLeft = () => {
    if (video_index.value !== 0) {
        video_index.value -= 1;
    } else {
        video_index.value = works.value.length - 1;
    }
}

const onSlideRight = () => {
    if (video_index.value !== works.value.length - 1) {
        video_index.value += 1;
    } else {
        video_index.value = 0;
    }
}

const profileStore = useProfileStore();
const { profileData: profile, projectsData: works } = storeToRefs(profileStore);
</script>

<style scoped>
i {
    transform: translate(-50%, -50%);
}

.v-enter-active,
.v-leave-active {
    transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
    opacity: 0;
}
</style>