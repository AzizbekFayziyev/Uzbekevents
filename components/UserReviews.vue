<template>
	<div class="bg-white py-16 md:py-[120px]">
		<div class="container">
			<div class="flex items-center justify-between">
				<h2 class="text-base sm:text-xl md:text-2xl lg:text-3xl font-semibold mb-6 sm:mb-10">
					{{ translations['main.What our wonderful users say'] }}
				</h2>
				<div class="hidden md:flex items-center gap-4">
					<button @click="swiperReview.slidePrev()">
						<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
							<path
								d="M16.6667 13.3335L10 20.0002M10 20.0002L16.6667 26.6668M10 20.0002L30 20.0002"
								stroke="#28303F"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
						</svg>
					</button>
					<button @click="swiperReview.slideNext()">
						<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
							<path
								d="M23.3333 26.6665L30 19.9998M30 19.9998L23.3333 13.3332M30 19.9998L10 19.9998"
								stroke="#28303F"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
						</svg>
					</button>
				</div>
			</div>
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
						slidesPerView: 1.4
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
				<SwiperSlide v-for="(review, i) in review" :key="i" class="!h-auto">
					<div class="flex flex-col gap-4 p-6 bg-grey-0 rounded-3xl min-h-[250px]">
						<div class="flex items-center gap-3">
							<img :src="review.photo" alt="" class="w-16 h-16 rounded-full object-cover" v-if="review.photo" />
							<img src="/assets/images/hero-bg.png" alt="" class="w-16 h-16 rounded-full object-cover" v-else />

							<div class="flex flex-col gap-1">
								<span class="text-base font-medium">{{ review.FIO }}</span>
								<p class="text-xs sm:text-sm">{{ review.job_title }}</p>
							</div>
						</div>
						<div class="text-xs sm:text-base" v-html="review.descriptions" />
					</div>
				</SwiperSlide>
			</Swiper>
		</div>
	</div>
</template>

<script setup>
import { useReviewsStore } from '~/stores/review.js';
import { useTranslationsStore } from '~/stores/translations.js';

const reviewStore = useReviewsStore();
const translationsStore = useTranslationsStore();

const { review } = storeToRefs(reviewStore);
const { translations } = storeToRefs(translationsStore);

const swiperReview = ref(null);

const onSwiper = (swiper) => {
	swiperReview.value = swiper;
};
</script>
