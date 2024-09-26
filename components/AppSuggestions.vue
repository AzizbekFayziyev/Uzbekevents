<template>
	<div class="container py-16 sm:py-[120px]">
		<h3 class="text-base sm:text-xl md:text-2xl lg:text-3xl xl:text-[40px] font-semibold text-center mb-3">{{ translations['main.designed_to_help_you_earn'] }}</h3>
		<p class="text-sm sm:text-xl text-center mb-6 sm:mb-10">
			{{ translations['main.designed_to_help_you_earn_more_income'] }}
		</p>
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
			<SwiperSlide class="!h-auto">
				<div class="flex flex-col gap-4 p-4 sm:p-8 bg-white sm:gap-8 rounded-3xl min-h-[400px]">
					<div class="w-[80px] h-[80px] flex items-center justify-center bg-grey-0 rounded-full">
						<svg xmlns="http://www.w3.org/2000/svg" width="28" height="24" viewBox="0 0 28 24" fill="none">
							<path
								fill-rule="evenodd"
								clip-rule="evenodd"
								d="M12.6665 0H15.3332C21.9606 0 27.3332 5.37258 27.3332 12C27.3332 18.6274 21.9606 24 15.3332 24H5.99984C3.05432 24 0.666504 21.6122 0.666504 18.6667V12C0.666504 5.37258 6.03909 0 12.6665 0ZM13.9998 13.3333C14.7362 13.3333 15.3332 12.7364 15.3332 12C15.3332 11.2636 14.7362 10.6667 13.9998 10.6667C13.2635 10.6667 12.6665 11.2636 12.6665 12C12.6665 12.7364 13.2635 13.3333 13.9998 13.3333ZM20.6665 12C20.6665 12.7364 20.0696 13.3333 19.3332 13.3333C18.5968 13.3333 17.9998 12.7364 17.9998 12C17.9998 11.2636 18.5968 10.6667 19.3332 10.6667C20.0696 10.6667 20.6665 11.2636 20.6665 12ZM8.6665 13.3333C9.40288 13.3333 9.99984 12.7364 9.99984 12C9.99984 11.2636 9.40288 10.6667 8.6665 10.6667C7.93012 10.6667 7.33317 11.2636 7.33317 12C7.33317 12.7364 7.93012 13.3333 8.6665 13.3333Z"
								fill="#1878F3"
							/>
						</svg>
					</div>
					<div class="flex flex-col gap-4">
						<h4 class="text-base sm:text-xl font-medium">{{ translations['main.individual_corporate_design'] }}</h4>
						<p class="text-xs sm:text-base">
							{{ translations['main.Make your Uzbek Business Connect card stand out. We will develop a custom'] }}
						</p>
					</div>
				</div>
			</SwiperSlide>
			<SwiperSlide class="!h-auto">
				<div class="flex flex-col gap-4 p-4 sm:p-8 bg-white sm:gap-8 rounded-3xl min-h-[400px]">
					<div class="w-[80px] h-[80px] flex items-center justify-center bg-grey-0 rounded-full">
						<svg xmlns="http://www.w3.org/2000/svg" width="28" height="24" viewBox="0 0 28 24" fill="none">
							<path
								fill-rule="evenodd"
								clip-rule="evenodd"
								d="M12.6665 0H15.3332C21.9606 0 27.3332 5.37258 27.3332 12C27.3332 18.6274 21.9606 24 15.3332 24H5.99984C3.05432 24 0.666504 21.6122 0.666504 18.6667V12C0.666504 5.37258 6.03909 0 12.6665 0ZM13.9998 13.3333C14.7362 13.3333 15.3332 12.7364 15.3332 12C15.3332 11.2636 14.7362 10.6667 13.9998 10.6667C13.2635 10.6667 12.6665 11.2636 12.6665 12C12.6665 12.7364 13.2635 13.3333 13.9998 13.3333ZM20.6665 12C20.6665 12.7364 20.0696 13.3333 19.3332 13.3333C18.5968 13.3333 17.9998 12.7364 17.9998 12C17.9998 11.2636 18.5968 10.6667 19.3332 10.6667C20.0696 10.6667 20.6665 11.2636 20.6665 12ZM8.6665 13.3333C9.40288 13.3333 9.99984 12.7364 9.99984 12C9.99984 11.2636 9.40288 10.6667 8.6665 10.6667C7.93012 10.6667 7.33317 11.2636 7.33317 12C7.33317 12.7364 7.93012 13.3333 8.6665 13.3333Z"
								fill="#1878F3"
							/>
						</svg>
					</div>
					<div class="flex flex-col gap-4">
						<h4 class="text-base sm:text-xl font-medium">{{ translations['main.Call to action'] }}</h4>
						<p class="text-xs sm:text-base">
							{{ translations['main.Allow your potential and current customers to send you emails, calls and text'] }}
						</p>
					</div>
				</div>
			</SwiperSlide>
			<SwiperSlide class="!h-auto">
				<div class="flex flex-col gap-4 p-4 sm:p-8 bg-white sm:gap-8 rounded-3xl min-h-[400px]">
					<div class="w-[80px] h-[80px] flex items-center justify-center bg-grey-0 rounded-full">
						<svg xmlns="http://www.w3.org/2000/svg" width="28" height="24" viewBox="0 0 28 24" fill="none">
							<path
								fill-rule="evenodd"
								clip-rule="evenodd"
								d="M12.6665 0H15.3332C21.9606 0 27.3332 5.37258 27.3332 12C27.3332 18.6274 21.9606 24 15.3332 24H5.99984C3.05432 24 0.666504 21.6122 0.666504 18.6667V12C0.666504 5.37258 6.03909 0 12.6665 0ZM13.9998 13.3333C14.7362 13.3333 15.3332 12.7364 15.3332 12C15.3332 11.2636 14.7362 10.6667 13.9998 10.6667C13.2635 10.6667 12.6665 11.2636 12.6665 12C12.6665 12.7364 13.2635 13.3333 13.9998 13.3333ZM20.6665 12C20.6665 12.7364 20.0696 13.3333 19.3332 13.3333C18.5968 13.3333 17.9998 12.7364 17.9998 12C17.9998 11.2636 18.5968 10.6667 19.3332 10.6667C20.0696 10.6667 20.6665 11.2636 20.6665 12ZM8.6665 13.3333C9.40288 13.3333 9.99984 12.7364 9.99984 12C9.99984 11.2636 9.40288 10.6667 8.6665 10.6667C7.93012 10.6667 7.33317 11.2636 7.33317 12C7.33317 12.7364 7.93012 13.3333 8.6665 13.3333Z"
								fill="#1878F3"
							/>
						</svg>
					</div>
					<div class="flex flex-col gap-4">
						<h4 class="text-base sm:text-xl font-medium">{{ translations['main.Social Profile Center and Custom Links'] }}</h4>
						<p class="text-xs sm:text-base">
							{{
								translations[
									'main.Поделитесь своим каналом на LinkedIn, Facebook, YouTube или любой другой социальной платформе, а также любыми онлайн-сервисами, которые использует ваш бизнес.'
								]
							}}
						</p>
					</div>
				</div>
			</SwiperSlide>
			<SwiperSlide class="!h-auto">
				<div class="flex flex-col gap-4 p-4 sm:p-8 bg-white sm:gap-8 rounded-3xl min-h-[400px]">
					<div class="w-[80px] h-[80px] flex items-center justify-center bg-grey-0 rounded-full">
						<svg xmlns="http://www.w3.org/2000/svg" width="28" height="24" viewBox="0 0 28 24" fill="none">
							<path
								fill-rule="evenodd"
								clip-rule="evenodd"
								d="M12.6665 0H15.3332C21.9606 0 27.3332 5.37258 27.3332 12C27.3332 18.6274 21.9606 24 15.3332 24H5.99984C3.05432 24 0.666504 21.6122 0.666504 18.6667V12C0.666504 5.37258 6.03909 0 12.6665 0ZM13.9998 13.3333C14.7362 13.3333 15.3332 12.7364 15.3332 12C15.3332 11.2636 14.7362 10.6667 13.9998 10.6667C13.2635 10.6667 12.6665 11.2636 12.6665 12C12.6665 12.7364 13.2635 13.3333 13.9998 13.3333ZM20.6665 12C20.6665 12.7364 20.0696 13.3333 19.3332 13.3333C18.5968 13.3333 17.9998 12.7364 17.9998 12C17.9998 11.2636 18.5968 10.6667 19.3332 10.6667C20.0696 10.6667 20.6665 11.2636 20.6665 12ZM8.6665 13.3333C9.40288 13.3333 9.99984 12.7364 9.99984 12C9.99984 11.2636 9.40288 10.6667 8.6665 10.6667C7.93012 10.6667 7.33317 11.2636 7.33317 12C7.33317 12.7364 7.93012 13.3333 8.6665 13.3333Z"
								fill="#1878F3"
							/>
						</svg>
					</div>
					<div class="flex flex-col gap-4">
						<h4 class="text-base sm:text-xl font-medium">{{ translations['main.Connect button'] }}</h4>
						<p class="text-xs sm:text-base">
							{{ translations['main.Instantly contact your new potential customer by providing them with your mobile number,'] }}
						</p>
					</div>
				</div>
			</SwiperSlide>
		</Swiper>
	</div>
</template>

<script setup>
import { useTranslationsStore } from '~/stores/translations.js';

const translationsStore = useTranslationsStore();

const { translations } = storeToRefs(translationsStore);
const swiperReview = ref(null);

const onSwiper = (swiper) => {
	swiperReview.value = swiper;
};
</script>
