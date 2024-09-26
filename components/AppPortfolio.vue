<template>
	<div class="bg-black rounded-[40px] pt-10 pb-4 md:py-[120px] relative z-50">
		<div class="container">
			<h3 class="text-base sm:text-xl md:text-2xl lg:text-3xl xl:text-[40px] font-semibold text-center mb-3 text-white">
				{{ translations['main.designed_to_help_you_earn'] }}
			</h3>
			<p class="text-sm sm:text-xl text-center mb-6 sm:mb-10 text-white">
				{{ translations['main.designed_to_help_you_earn_more_income'] }}
			</p>
			<div class="overflow-hidden pr-[300px] -mr-[300px]">
				<Swiper
					class="!overflow-visible z-40"
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
							slidesPerView: 1.2
						},
						640: {
							slidesPerView: 2
						},
						1024: {
							slidesPerView: 3.4
						},
						1440: {
							slidesPerView: 3.2
						}
					}"
				>
					<SwiperSlide v-for="(item, i) in posts.data" :key="i">
						<div class="flex flex-col gap-4 sm:gap-6">
							<div class="bg-[#1F1E20] border-2 border-white/[0.08] rounded-3xl p-[0px_37px_0px_37px] md:p-[20px_82px_0px_80px] overflow-hidden">
								<div class="w-full translate-y-[38px] md:translate-y-[60px]">
									<img :src="item.photo" alt="" class="w-full object-contain" />
								</div>
							</div>
							<p class="text-base sm:text-2xl font-medium text-white">
								{{ item?.title }}
							</p>
						</div>
					</SwiperSlide>
				</Swiper>
			</div>
			<div
				class="flex md:items-center md:justify-between gap-6 flex-col md:flex-row p-6 md:p-10 bg-[url(~/assets/images/hero-bg.png)] bg-no-repeat bg-cover bg-left rounded-3xl md:rounded-[40px] mt-16 md:mt-20"
			>
				<p class="text-base sm:text-xl md:text-2xl lg:text-[32px] font-semibold md:max-w-[576px] text-white leading-[120%]">
					{{ translations['main.we_will_take_care_of_filling'] }}
				</p>
				<Button @click="scrollToSection('contact')" class="!bg-white sm:text-base">{{ translations['Header.contact_us'] }}</Button>
			</div>
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

const scrollToSection = (sectionId) => {
	const section = document.getElementById(sectionId);
	if (section) {
		section.scrollIntoView({ behavior: 'smooth' });
	}
};
</script>
