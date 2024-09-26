import { defineStore } from 'pinia';

export const usePostsStore = defineStore('posts', () => {
	const api = useApi();

	const posts = ref([]);

	async function getPosts() {
		try {
			let res = await api.get(`/posts`);
			posts.value = res.data;
		} catch (error) {
			console.log(error);
		}
	}
	return {
		getPosts,
		posts
	};
});
