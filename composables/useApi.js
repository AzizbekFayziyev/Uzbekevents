import axios from 'axios';

export const useApi = () => {
	const config = useRuntimeConfig();

	const { locale } = useI18n();

	const api = axios.create({
		headers: { 'Content-Type': 'application/json' }
	});

	api.defaults.baseURL = config.public.apiBaseUrl;

	api.interceptors.request.use(
		(config) => {
			config.headers['Language'] = locale.value;
			return config;
		},
		(error) => Promise.reject(error)
	);

	api.interceptors.response.use(
		(response) => {
			return response;
		},
		(error) => {
			return Promise.reject(error);
		}
	);

	return api;
};
