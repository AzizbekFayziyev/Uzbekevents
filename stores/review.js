import { defineStore } from 'pinia';

export const useReviewsStore = defineStore('reviews', () => {
	const api = useApi();

	const review = ref([]);

	async function getReviews() {
		try {
			let res = await api.get(`/otzivis`);
			review.value = res.data;
		} catch (error) {
			console.log(error);
		}
	}
	return {
		getReviews,
		review
	};
});
