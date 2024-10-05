<template>
	<NuxtLayout>
		<HeroBanner id="hero" />
		<AboutInfo id="about" />
		<AppPortfolio id="portfolio" />
		<AppReferrals id="referrals" />
		<SuccessfulClients id="clients" />
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
	title: translations.value['Header.just_one_click'],
	meta: [
		{ name: 'og:title', content: translations.value['Header.just_one_click'] },
		{ name: 'description', content: translations.value['Header.Build_a_brand_position'] },
		{ name: 'og:description', content: translations.value['Header.Build_a_brand_position'] },
		{ name: 'og:image', content: '/assets/images/Group.png' },
		{ name: 'og:image:width', content: '1200' },
		{ name: 'og:image:height', content: '630' },
		{ name: 'og:type', content: 'website' },
		{ name: 'og:url', content: `https://uzbekbusinessconnect.com/` },
		{ name: 'twitter:card', content: 'summary_large_image' },
		{ name: 'twitter:image', content: '/assets/images/Group.png' },
	],
	link: [
		{ rel: 'icon', type: 'image/x-icon', href: '/logo.png' }
	]
})
</script>
