<template>
	<footer class="py-10">
		<div class="container">
			<div class="flex items-center justify-between">
				<div class="flex items-center gap-14">
					<img src="/assets/svg/logo.svg" alt="" class="w-[80px] sm:w-[98px] object-contain flex-shrink-0" />
					<nav class="hidden lg:flex items-center max-xl:space-x-4 space-x-10 max-xl:text-base text-xl font-normal">
						<button @click.prevent="scrollToSection('hero')" class="transition-300">
						{{ translations['Header.home'] }}
					</button>
					<button @click.prevent="scrollToSection('about')" class="transition-300">
						{{ translations['Header.characteristic'] }}
					</button>
					<button @click.prevent="scrollToSection('portfolio')" class="transition-300">
						{{ translations['Header.plans'] }}
					</button>
					<button @click.prevent="scrollToSection('clients')" class="transition-300">
						{{ translations['Header.clients'] }}
					</button>
					<button @click.prevent="scrollToSection('suggestions')" class="transition-300">
						{{ translations['Header.howtouse'] }}
					</button>
					<button @click.prevent="scrollToSection('contact')" class="transition-300">
						{{ translations['Header.contacts'] }}
					</button>
					</nav>
				</div>
				<a :href="`tel:${about[0].phone_2}`" >
				<Button class="bg-grey-3 text-white flex gap-2">
					<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
						<path
							d="M15.5 13.8333V12.4617C15.5 11.7802 15.0851 11.1674 14.4523 10.9143L12.7572 10.2362C11.9524 9.91429 11.0352 10.263 10.6475 11.0383L10.5 11.3333C10.5 11.3333 8.41667 10.9167 6.75 9.25C5.08333 7.58333 4.66667 5.5 4.66667 5.5L4.96168 5.35249C5.73698 4.96484 6.08571 4.04761 5.76379 3.2428L5.08574 1.54768C4.83263 0.914919 4.21979 0.5 3.53828 0.5L2.16667 0.5C1.24619 0.5 0.5 1.24619 0.5 2.16667C0.5 9.53046 6.46954 15.5 13.8333 15.5C14.7538 15.5 15.5 14.7538 15.5 13.8333Z"
							fill="white"
						/>
					</svg>
					{{about[0].phone_2}}
				</Button>
			</a>
			</div>
			<nav class="lg:hidden flex flex-col gap-10 text-base font-normal mt-10">
					<button @click.prevent="scrollToSection('hero')" class="transition-300">
						{{ translations['Header.home'] }}
					</button>
					<button @click.prevent="scrollToSection('about')" class="transition-300">
						{{ translations['Header.characteristic'] }}
					</button>
					<button @click.prevent="scrollToSection('portfolio')" class="transition-300">
						{{ translations['Header.plans'] }}
					</button>
					<button @click.prevent="scrollToSection('clients')" class="transition-300">
						{{ translations['Header.clients'] }}
					</button>
					<button @click.prevent="scrollToSection('suggestions')" class="transition-300">
						{{ translations['Header.howtouse'] }}
					</button>
					<button @click.prevent="scrollToSection('contact')" class="transition-300">
						{{ translations['Header.contacts'] }}
					</button>
				</nav>
	
			<div class="w-full h-px bg-grey-2 my-10"></div>
			<p class="text-base text-grey-1">Privacy policy Terms of conditions</p>
		</div>
	</footer>
</template>

<script setup>
import { useTranslationsStore } from '~/stores/translations.js';
import { useAboutStore } from '~/stores/about.js';

const translationsStore = useTranslationsStore();
const infosStore = useAboutStore();

const { translations } = storeToRefs(translationsStore);
const { about } = storeToRefs(infosStore);

const scrollToSection = (sectionId) => {
	const section = document.getElementById(sectionId);
	if (section) {
		section.scrollIntoView({ behavior: 'smooth' });
	}
};
</script>
