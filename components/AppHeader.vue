<template>
	<header
		id="header"
		class="fixed w-full top-0 border-b border-white/40 max-lg:py-4 py-6 transition-300 duration-500 z-[60]"
		:class="{ 'bg-[url(~/assets/images/hero-bg.png)] bg-no-repeat bg-cover bg-center max-lg:!py-3 !py-4': dark }"
	>
		<div class="container flex h-16 items-center">
			<div class="flex items-center max-xl:space-x-4 space-x-8">
				<NuxtLink to="/">
					<img src="/assets/svg/logo.svg" alt="" class="h-16 max-lg:w-16 w-[80px] object-contain" />
				</NuxtLink>
				<nav class="hidden lg:flex items-center max-xl:space-x-4 space-x-8 max-xl:text-sm text-xl font-normal">
					<button @click.prevent="scrollToSection('hero')" class="transition-300 text-white">
						{{ translations['Header.home'] }}
					</button>
					<button @click.prevent="scrollToSection('about')" class="transition-300 text-white">
						{{ translations['Header.characteristic'] }}
					</button>
					<button @click.prevent="scrollToSection('portfolio')" class="transition-300 text-white">
						{{ translations['Header.plans'] }}
					</button>
					<button @click.prevent="scrollToSection('clients')" class="transition-300 text-white">
						{{ translations['Header.clients'] }}
					</button>
					<button @click.prevent="scrollToSection('suggestions')" class="transition-300 text-white">
						{{ translations['Header.howtouse'] }}
					</button>
					<button @click.prevent="scrollToSection('contact')" class="transition-300 text-white">
						{{ translations['Header.contacts'] }}
					</button>
				</nav>
			</div>
			<div class="flex gap-3 justify-end flex-1">
				<DropdownMenu v-model:open="languageDropdown">
					<DropdownMenuTrigger>
						<div class="flex items-center justify-center gap-1 sm:gap-2 bg-white/[0.16] border-white/[0.08] px-2 py-3 rounded-lg shrink-0 text-white">
							<img src="/assets/svg/flag/uz.svg" alt="" class="w-5 h-5" v-if="locale === 'uz'" />
							<img src="/assets/svg/flag/ru.svg" alt="" class="w-5 h-5" v-else-if="locale === 'ru'" />
							<img src="/assets/svg/flag/en.svg" alt="" class="w-5 h-5" v-else />
							<span class="">{{ selectedLang.title }}</span>
							<span class="transition-300 text-base" :class="{ ' rotate-180': languageDropdown }">
								<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" class="h-4 w-4 shrink-0 text-muted-foreground">
									<g fill="none" fill-rule="evenodd">
										<path
											d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"
										/>
										<path fill="currentColor" d="M12.707 15.707a1 1 0 0 1-1.414 0L5.636 10.05A1 1 0 1 1 7.05 8.636l4.95 4.95l4.95-4.95a1 1 0 0 1 1.414 1.414z" />
									</g>
								</svg>
							</span>
						</div>
					</DropdownMenuTrigger>
					<DropdownMenuContent align="end" class="w-[180px] z-[999]">
						<DropdownMenuItem class="flex gap-2 py-1.5 px-2 cursor-pointer transition-300 hover:bg-white-100" v-for="(lang, i) in langs" :key="i" @click="selectLang(lang)">
							<!-- <img :src="require(`@/assets/svg/flag/${lang}`)" alt="" class="w-5 h-5" /> -->
							<span class="text-left text-sm">
								{{ lang.label }}
							</span>
						</DropdownMenuItem>
					</DropdownMenuContent>
				</DropdownMenu>
				<a href="" class="max-lg:hidden">
					<Button class="bg-white/[0.16] border-white/[0.08] text-white text-base">
						<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
							<path
								d="M15.5 13.8333V12.4617C15.5 11.7802 15.0851 11.1674 14.4523 10.9143L12.7572 10.2362C11.9524 9.91429 11.0352 10.263 10.6475 11.0383L10.5 11.3333C10.5 11.3333 8.41667 10.9167 6.75 9.25C5.08333 7.58333 4.66667 5.5 4.66667 5.5L4.96168 5.35249C5.73698 4.96484 6.08571 4.04761 5.76379 3.2428L5.08574 1.54768C4.83263 0.914919 4.21979 0.5 3.53828 0.5L2.16667 0.5C1.24619 0.5 0.5 1.24619 0.5 2.16667C0.5 9.53046 6.46954 15.5 13.8333 15.5C14.7538 15.5 15.5 14.7538 15.5 13.8333Z"
								fill="white"
							/>
						</svg>
						+998 99 165 32 41
					</Button>
				</a>

				<button class="w-10 h-10 flex items-center justify-center lg:hidden">
					<svg xmlns="http://www.w3.org/2000/svg" width="20" height="16" viewBox="0 0 20 16" fill="none">
						<path
							fill-rule="evenodd"
							clip-rule="evenodd"
							d="M0.416504 1.33334C0.416504 0.64298 0.976148 0.0833359 1.6665 0.0833359H18.3332C19.0235 0.0833359 19.5832 0.64298 19.5832 1.33334C19.5832 2.02369 19.0235 2.58334 18.3332 2.58334H1.6665C0.976148 2.58334 0.416504 2.02369 0.416504 1.33334ZM0.416504 8C0.416504 7.30965 0.976148 6.75 1.6665 6.75H18.3332C19.0235 6.75 19.5832 7.30965 19.5832 8C19.5832 8.69036 19.0235 9.25 18.3332 9.25H1.6665C0.976148 9.25 0.416504 8.69036 0.416504 8ZM1.6665 13.4167C0.976148 13.4167 0.416504 13.9763 0.416504 14.6667C0.416504 15.357 0.976148 15.9167 1.6665 15.9167H18.3332C19.0235 15.9167 19.5832 15.357 19.5832 14.6667C19.5832 13.9763 19.0235 13.4167 18.3332 13.4167H1.6665Z"
							fill="white"
						/>
					</svg>
				</button>
			</div>
		</div>
	</header>
</template>

<script setup>
import { useTranslationsStore } from '~/stores/translations.js';

const dark = ref(false);

const translationsStore = useTranslationsStore();

const { translations } = storeToRefs(translationsStore);

const localePath = useLocalePath();
const { setLocale, locale } = useI18n();

const languageDropdown = ref(false);

const langs = [
	{
		id: 'uz',
		label: "O'zbekcha",
		title: 'Uz',
		svg: 'uz.svg'
	},
	{
		id: 'ru',
		label: 'Русский',
		title: 'Ru',
		svg: 'ru.svg'
	},
	{
		id: 'en',
		label: 'English',
		title: 'En',
		svg: 'en.svg'
	}
];

const scrollToSection = (sectionId) => {
	const section = document.getElementById(sectionId);
	if (section) {
		section.scrollIntoView({ behavior: 'smooth' });
	}
};

const selectedLang = ref(langs.find((lang) => lang.id === locale.value));

const selectLang = (lang) => {
	selectedLang.value = lang;
	setLocale(lang.id);
};

const eventHeaderShadowHandler = () => {
	const header = document.querySelector('#header');
	if (window.scrollY > 50) {
		dark.value = true;
	} else if (window.scrollY <= 50) {
		dark.value = false;
	}
};

onMounted(() => {
	window.addEventListener('scroll', eventHeaderShadowHandler);
});
</script>
