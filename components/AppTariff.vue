<template>
	<div class="md:container">
		<div class="bg-[url(~/assets/images/hero-bg.png)] bg-no-repeat bg-cover bg-top rounded-3xl py-10 lg:py-24">
			<h2 class="text-xl sm:text-2xl md:text-3xl font-semibold text-white text-center mb-4 sm:mb-6">
				{{ translations['main.Our amazing pricing plans'] }}
			</h2>
			<p class="text-sm sm:text-base text-center text-white mb-10 sm:mb-20">
				{{ translations['main.Need more than 13 digital business cards/mini sites?'] }}
			</p>
			<div class="max-sm:container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 sm:gap-6 max-w-[1200px] mx-auto">
				<div class="flex flex-col gap-6 rounded-3xl py-10 px-6 relative" style="background: rgba(210, 215, 221, 0.24)" v-for="item in services" :key="item.id">
					<div class="flex flex-col items-center gap-2 text-white">
						<span class="text-base font-medium">{{ item.name }}</span>
						<h3 class="text-2xl sm:text-3xl font-semibold">{{ formatPrice(item.price) }} <span class="text-base font-normal">sum</span></h3>
						<p class="text-sm sm:text-base text-center">{{ item.title }}</p>
					</div>
					<ModalOrderCreate :tariff-id="item.id">
						<Button class="w-full text-white sm:text-base border-2 border-white/[0.16]" style="background: rgba(210, 215, 221, 0.24)">Выберать план</Button>
					</ModalOrderCreate>
					<ul class="flex flex-col gap-6">
						<li class="flex items-center gap-3 text-base text-white" v-for="(desc, b) in parseHtmlWithRegex(item.descriptions)" :key="b">
							<span class="flex-shrink-0">
								<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
									<path
										fill-rule="evenodd"
										clip-rule="evenodd"
										d="M9.99984 18.3332C14.6022 18.3332 18.3332 14.6022 18.3332 9.99984C18.3332 5.39746 14.6022 1.6665 9.99984 1.6665C5.39746 1.6665 1.6665 5.39746 1.6665 9.99984C1.6665 14.6022 5.39746 18.3332 9.99984 18.3332ZM13.8265 7.88358C14.0384 7.61111 13.9894 7.21844 13.7169 7.00652C13.4444 6.7946 13.0518 6.84369 12.8398 7.11615L9.50066 11.4094C9.42641 11.5048 9.28674 11.5172 9.19685 11.4363L7.08461 9.53531C6.82804 9.3044 6.43286 9.32519 6.20195 9.58176C5.97104 9.83833 5.99184 10.2335 6.24841 10.4644L8.36064 12.3654C8.98992 12.9318 9.96759 12.8451 10.4874 12.1768L13.8265 7.88358Z"
										fill="white"
									/>
								</svg>
							</span>
							<span>{{ desc }}</span>
						</li>
					</ul>
					<div class="absolute top-[-22.5px] left-1/2 -translate-x-1/2" v-if="item.status === 'active'">
						<span class="py-3 px-6 h-[45px] flex items-center justify-center bg-blue text-white rounded-[8px]"> Eng mashhur tarif </span>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
import { useServicesStore } from '~/stores/services.js';
import { useTranslationsStore } from '~/stores/translations.js';

const servicesStore = useServicesStore();
const translationsStore = useTranslationsStore();

const { services } = storeToRefs(servicesStore);
const { translations } = storeToRefs(translationsStore);

const showModal = ref(false);

function parseHtmlWithRegex(htmlString) {
	const regex = /<p>(.*?)<\/p>/g;
	let result;
	const parsedArray = [];

	while ((result = regex.exec(htmlString)) !== null) {
		parsedArray.push(result[1].trim());
	}

	return parsedArray;
}
</script>
