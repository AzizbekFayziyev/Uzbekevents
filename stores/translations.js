import { defineStore } from 'pinia';

export const useTranslationsStore = defineStore('translations', () => {
	const api = useApi();
	const { locale } = useI18n();

	const translations = ref({});

	async function getTranslations() {
		try {
			let res = await api.get(`/translations/${locale.value}`);
			translations.value = res.data;
		} catch (error) {
			console.log(error);
		}
	}
	return {
		getTranslations,
		translations
	};
});
