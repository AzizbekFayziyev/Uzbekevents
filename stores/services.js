import { defineStore } from 'pinia';

export const useServicesStore = defineStore('services', () => {
	const api = useApi();

	const services = ref([]);

	async function getServices() {
		try {
			let res = await api.get(`/services`);
			services.value = res.data;
		} catch (error) {
			console.log(error);
		}
	}
	return {
		getServices,
		services
	};
});
