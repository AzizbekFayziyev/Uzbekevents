<template>
	<div class="flex min-h-screen flex-col bg-grey-0">
		<AppHeader />
		<div class="flex-1 overflow-x-hidden">
			<slot />
		</div>
		<AppFooter />
	</div>
</template>

<script setup>
import { useTranslationsStore } from '~/stores/translations.js';
import { usePostsStore } from '~/stores/post.js';
import { useAboutStore } from '~/stores/about.js';
import { useReviewsStore } from '~/stores/review.js';
import { useServicesStore } from '~/stores/services.js';

const translationsStore = useTranslationsStore();
const postStore = usePostsStore();
const aboutStore = useAboutStore();
const reviewStore = useReviewsStore();
const servicesStore = useServicesStore();

const { locale } = useI18n();

const { data } = await useAsyncData(
	'layout',
	async () => {
		const [translations, posts, infos, review, services] = await Promise.all([
			translationsStore.getTranslations(),
			postStore.getPosts(),
			aboutStore.getInfos(),
			reviewStore.getReviews(),
			servicesStore.getServices()
		]);
		return { translations, posts, infos, review, services };
	},
	{ watch: [locale] }
);
</script>
