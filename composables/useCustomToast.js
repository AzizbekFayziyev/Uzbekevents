// composables/useCustomToast.js

import { useToast } from 'vue-toastification';
import CustomToast from '~/components/Common/Toast.vue';

export const useCustomToast = () => {
	const toast = useToast();

	const showToast = async (text, type = 'success') => {
		if (['success', 'error', 'info', 'warning'].includes(type)) {
			toast[type]?.({
				component: CustomToast,
				props: { text, type }
			});
		} else {
			console.warn(`Unknown toast type: ${type}`);
			toast({
				component: CustomToast,
				props: { text, type: 'info' }
			});
		}
	};

	return { showToast };
};
