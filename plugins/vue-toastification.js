import Toast from 'vue-toastification';
import 'vue-toastification/dist/index.css';

import UIToast from '@/components/Common/Toast.vue';

const options = {
	component: UIToast,
	closeButton: false,
	icon: false,
	hideProgressBar: true
};

export default defineNuxtPlugin((nuxtApp) => {
	nuxtApp.vueApp.use(Toast, options);
});
