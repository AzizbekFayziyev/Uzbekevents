// plugins/vue-toastification.js
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";
import UIToast from "@/components/Common/Toast.vue"; // Your custom component
import { component } from "v-viewer";

const options = {
  component: UIToast,
  closeButton: false,
  icon: false,
  hideProgressBar: true,
  timeout: 5000,
};

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(Toast, options);
});
