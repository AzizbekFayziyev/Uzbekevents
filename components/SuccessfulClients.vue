<template>
	<div class="pt-15 sm:pt-[120px] container !max-w-[1960px]">
		<h3 class="text-base sm:text-xl md:text-2xl lg:text-3xl xl:text-[40px] font-semibold text-center mb-6 sm:mb-10">{{ translations['main.Successful_clients'] }}</h3>

		<Swiper
			@swiper="onSwiper"
			:modules="[SwiperAutoplay]"
			:space-between="24"
			:slides-per-view="1"
			:grab-cursor="true"
			:loop="true"
			:speed="500"
			:autoplay="{
				delay: 2000,
				disableOnInteraction: false
			}"
			:breakpoints="{
				0: {
					slidesPerView: 1.4,
					centeredSlides: true,
					spaceBetween: 16
				},
				640: {
					slidesPerView: 2
				},
				1024: {
					slidesPerView: 3
				},
				1440: {
					slidesPerView: 4
				}
			}"
		>
			<SwiperSlide v-for="(item, i) in posts.data" :key="i">
				<div class="bg-white rounded-[40px] flex flex-col items-center gap-6 sm:gap-8 px-10 pb-10 md:px-20 pt-6 md:pb-20">
					<span class="text-base text-grey-1 font-medium">{{ item.owner }}</span>
					<div class="flex-shrink-0 rounded-3xl overflow-hidden" style="box-shadow: 9px 17px 41px 0px rgba(2, 1, 5, 0.15)">
						<img :src="item.photo" alt="" class="w-full object-contain" />
					</div>
				</div>
			</SwiperSlide>
		</Swiper>

		<div class="flex items-center justify-center gap-4 mt-6">
			<button @click="swiperReview.slidePrev()">
				<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
					<path d="M16.6667 13.3335L10 20.0002M10 20.0002L16.6667 26.6668M10 20.0002L30 20.0002" stroke="#28303F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
				</svg>
			</button>
			<button @click="swiperReview.slideNext()">
				<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
					<path d="M23.3333 26.6665L30 19.9998M30 19.9998L23.3333 13.3332M30 19.9998L10 19.9998" stroke="#28303F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
				</svg>
			</button>
		</div>
	</div>
</template>

<script setup>
import { useTranslationsStore } from '~/stores/translations.js';
import { usePostsStore } from '~/stores/post.js';

const translationsStore = useTranslationsStore();
const postsStore = usePostsStore();

const { translations } = storeToRefs(translationsStore);

const { posts } = storeToRefs(postsStore);

const swiperReview = ref(null);

const onSwiper = (swiper) => {
	swiperReview.value = swiper;
};
</script>
