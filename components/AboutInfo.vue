<template>
	<div class="container py-16 sm:py-[120px]">
		<div class="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_600px] lg:items-center gap-10">
			<div class="relative overflow-hidden z-20 w-full flex-shrink-0">
				<img src="/assets/images/about.png" alt="" class="rounded-3xl w-full h-full object-cover" />
				<div class="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 flex justify-center items-center z-[12]">
					<div class="md:w-16 md:h-16 w-9 h-9 cursor-pointer flex items-center justify-center bg-white/40 border border-white/80 rounded-full">
						<span class="p-[6.667px_6.667px_6.667px_10px]">
							<svg xmlns="http://www.w3.org/2000/svg" width="24" height="28" viewBox="0 0 24 28" fill="none">
								<path
									d="M17.2556 17.4729L5.98456 23.9135C3.31793 25.4373 0 23.5118 0 20.4405V13.9999V7.55931C0 4.48801 3.31793 2.56254 5.98455 4.08633L17.2556 10.5269C19.9429 12.0625 19.9429 15.9373 17.2556 17.4729Z"
									fill="white"
								/>
							</svg>
						</span>
					</div>
				</div>
				<div class="absolute top-0 left-0 p-4 md:p-10 z-[11]">
					<div class="flex flex-col gap-2 sm:gap-6 text-white">
						<h3 class="text-base sm:text-xl md:text-2xl lg:text-3xl xl:text-[40px] font-semibold">Uzbek Business Connect</h3>
						<p class="text-xs sm:text-xl font-medium">
							{{ translations['Header.Build_a_brand_position'] }}
						</p>
					</div>
				</div>
				<div
					class="absolute inset-0 w-full h-full rounded-3xl z-10"
					style="background: linear-gradient(180deg, rgba(2, 1, 5, 0.64) 0%, rgba(2, 1, 5, 0.24) 42.74%, rgba(2, 1, 5, 0.08) 100%)"
				></div>
			</div>
			<div class="flex flex-col gap-6 sm:gap-8">
				<div class="flex items-center gap-5">
					<img src="/assets/svg/logo.svg" alt="" class="max-sm:w-[50px] max-sm:h-[40px] object-contain" />
					<h3 class="text-xs sm:text-2xl max-w-[130px] sm:max-w-[270px] font-bold uppercase">UZBEK BUSINESS CONNECT</h3>
				</div>
				<div class="text-base sm:text-xl font-semibold" v-html="about[0]?.descriptions" />
			</div>
		</div>
	</div>
</template>

<script setup>
import { useTranslationsStore } from '~/stores/translations.js';
import { useAboutStore } from '~/stores/about.js';

const translationsStore = useTranslationsStore();
const infosStore = useAboutStore();

const { translations } = storeToRefs(translationsStore);
const { about } = storeToRefs(infosStore);
</script>
