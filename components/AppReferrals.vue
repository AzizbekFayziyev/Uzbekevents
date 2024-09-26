<template>
	<div class="bg-white py-16 sm:py-[120px]">
		<div class="container">
			<div class="flex flex-col gap-3 sm:gap-4 mb-6 sm:mb-10">
				<h2 class="text-base sm:text-xl md:text-2xl lg:text-3xl xl:text-[42px] xl:leading-[120%] font-semibold text-center">
					{{ translations['main.4_ways_to_share'] }}
				</h2>
				<p class="text-sm sm:text-xl text-center">
					{{ translations['Header.Build_a_brand_position'] }}
				</p>
			</div>
		</div>
		<div class="sm:container mb-4 sm:mb-6">
			<div class="bg-grey-0 max-sm:pt-10 max-sm:px-4 max-sm:pb-20 sm:p-12 rounded-[40px]">
				<div class="flex flex-col items-center gap-3 sm:gap-4 max-w-[530px] mx-auto mb-6 sm:mb-10">
					<h3 class="text-base sm:text-2xl text-center font-semibold leading-[130%]">{{ translations['main.Through_NFS_technology'] }}</h3>
					<p class="text-sm sm:text-xl text-center sm:leading-[28px]">
						{{ translations['Header.Build_a_brand_position'] }}
					</p>
				</div>
				<div class="grid md:grid-cols-12 gap-20 sm:gap-6">
					<div
						class="col-span-1 md:col-span-6 lg:col-span-3 flex flex-col items-center justify-center sm:min-h-[450px] overflow-hidden gap-6 sm:gap-10 sm:rounded-2xl sm:hover:bg-[#E9E9EF] sm:py-10 sm:px-8 group transition-300"
					>
						<div class="max-w-[135px] max-h-[135px]">
							<img src="/assets/images/1.png" alt="" class="w-full h-full object-contain transition-300 group-hover:scale-105" />
						</div>
						<p class="text-base sm:text-2xl font-medium transition-300 sm:translate-y-[200px] group-hover:translate-y-0">
							{{ translations['main.NFC_icon'] }}
						</p>
					</div>
					<div
						class="col-span-1 md:col-span-6 lg:col-span-6 flex flex-col items-center justify-center sm:min-h-[450px] overflow-hidden gap-6 sm:gap-10 sm:rounded-2xl sm:hover:bg-[#E9E9EF] sm:py-10 sm:px-8 group transition-300"
					>
						<div class="max-w-[500px] max-h-[300px]">
							<img src="/assets/images/2.png" alt="" class="w-full h-full object-contain transition-300 group-hover:scale-105" />
						</div>
						<p class="text-base sm:text-2xl font-medium transition-300 sm:translate-y-[200px] group-hover:translate-y-0">{{ translations['main.NFC_icon'] }}</p>
					</div>
					<div
						class="col-span-1 md:col-span-6 lg:col-span-3 flex flex-col items-center justify-center sm:min-h-[450px] overflow-hidden gap-6 sm:gap-10 sm:rounded-2xl sm:hover:bg-[#E9E9EF] sm:py-10 sm:px-8 group transition-300"
					>
						<div class="max-w-[185px] max-h-[185px]">
							<img src="/assets/images/3.png" alt="" class="w-full h-full object-contain transition-300 group-hover:scale-105" />
						</div>
						<p class="text-base sm:text-2xl font-medium transition-300 sm:translate-y-[200px] group-hover:translate-y-0">{{ translations['main.NFC_icon'] }}</p>
					</div>
				</div>
			</div>
		</div>
		<div class="container">
			<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
				<div class="flex flex-col items-center sm:min-h-[470px] gap-6 sm:gap-7 bg-grey-0 rounded-[40px] px-4 sm:px-14 pt-6 sm:pt-10">
					<h1 class="text-base sm:text-2xl font-medium">{{ translations['main.QR_Code'] }}</h1>
					<div class="max-w-[196px] sm:max-w-[280px]">
						<img src="/assets/images/4.png" alt="" class="w-full object-contain" />
					</div>
				</div>
				<div class="flex flex-col items-center sm:min-h-[470px] overflow-hidden gap-6 sm:gap-7 bg-grey-0 rounded-[40px] pt-6 sm:pt-10">
					<h1 class="text-base sm:text-2xl font-medium">{{ translations['main.get_Referrals'] }}</h1>
					<div class="w-full h-full rounded-tl-[18px] pl-12">
						<img src="/assets/images/5.png" alt="" class="w-full h-full rounded-tl-[18px] object-cover" />
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
import { useTranslationsStore } from '~/stores/translations.js';

const translationsStore = useTranslationsStore();

const { translations } = storeToRefs(translationsStore);
</script>
