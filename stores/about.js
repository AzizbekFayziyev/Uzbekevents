import { defineStore } from 'pinia';

export const useAboutStore = defineStore('about', () => {
	const api = useApi();

	const about = ref([]);

	async function getInfos() {
		try {
			let res = await api.get(`/about`);
			about.value = res.data;
		} catch (error) {
			console.log(error);
		}
	}
	return {
		getInfos,
		about
	};
});
