<template>
	<NuxtLayout>
		<HeroBanner id="hero" />
		<AboutInfo id="about" />
		<AppPortfolio id="portfolio" />
		<AppReferrals id="referrals" />
		<!-- <SuccessfulClients id="clients" /> -->
		<AppSuggestions id="suggestions" />
		<UserReviews id="reviews" />
		<AppTariff id="tariffs" />
		<ContactUs id="contact" />
	</NuxtLayout>
</template>

<script setup>
import { useTranslationsStore } from '~/stores/translations.js';
const translationsStore = useTranslationsStore();
const { translations } = storeToRefs(translationsStore);

useHead({
	title: 'Всего одним нажатием Поделитесь своей контактной информацией:',
	meta: [
		{ name: 'og:title', content: 'Всего одним нажатием Поделитесь своей контактной информацией:' },
		{ name: 'description', content: 'Создайте бренд, позиционируйте себя и отличайтесь от других с первой точки контакта' },
		{ name: 'og:description', content: 'Создайте бренд, позиционируйте себя и отличайтесь от других с первой точки контакта' },
		{ name: 'og:image', content: '/Group.png' },
		{ name: 'og:image:width', content: '1200' },
		{ name: 'og:image:height', content: '630' },
		{ name: 'og:type', content: 'website' },
		{ name: 'og:url', content: `https://uzbekbusinessconnect.com/` },
		{ name: 'twitter:card', content: 'summary_large_image' },
		{ name: 'twitter:image', content: '/Group.png' },
	],
	link: [
		{ rel: 'icon', type: 'image/x-icon', href: '/logo.png' }
	]
})
</script>
