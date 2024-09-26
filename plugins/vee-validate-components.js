import { Form, Field } from 'vee-validate';

export default defineNuxtPlugin((nuxtApp) => {
   nuxtApp.vueApp.component('VForm', Form);
   nuxtApp.vueApp.component('VField', Field);
});
