import { defineStore } from 'pinia';

export const useApplication = defineStore('application', () => {
	const api = useApi();
	const loading = ref(false);

	async function orderCreate(form) {
		loading.value = true;
		try {
			let res = await api.post('/zayavka', form);
			return res.data;
		} catch (error) {
			throw new Error();
		} finally {
			loading.value = false;
		}
	}

	return {
		loading,
		orderCreate
	};
});
