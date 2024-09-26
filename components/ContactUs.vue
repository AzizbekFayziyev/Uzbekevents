<template>
	<div class="md:container my-16 sm:my-[120px]">
		<div class="bg-[url(~/assets/images/hero-bg.png)] bg-no-repeat bg-cover bg-top rounded-3xl">
			<div class="grid grid-cols-1 xl:grid-cols-[minmax(0,1fr)_776px] relative">
				<div class="flex flex-col gap-6 sm:gap-10 p-4 xl:py-16 xl:pl-16 w-full flex-shrink-0">
					<h3 class="text-xl sm:text-2xl md:text-3xl font-semibold text-white">
						{{ translations['form.Contact us to learn more about the app'] }}
					</h3>
					<VForm @submit="sendConsultationForm" v-slot="{ errors }">
						<div class="grid gap-6">
							<div class="grid gap-2 relative">
								<VField name="name" rules="required" v-model="form.name">
									<Input
										v-model="form.name"
										id="login"
										type="text"
										placeholder="Ваше имя"
										class="py-3 border-0 text-white border-b rounded-none"
										:class="{ '!border-destructive !bg-destructive/5': errors.name }"
									/>
								</VField>
							</div>
							<div class="grid gap-2 relative">
								<VField name="phone" rules="required" v-model="form.phone">
									<div class="relative">
										<Input
											placeholder="00 000 00 00"
											v-model="form.phone"
											v-maska="'## ### ## ##'"
											class="py-3 border-0 text-white border-b rounded-none pl-10"
											:class="{ '!border-destructive !bg-destructive/5': errors.phone }"
										/>
										<span class="absolute start-0 inset-y-0 flex items-center justify-center text-white">+998</span>
									</div>
								</VField>
							</div>
							<div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
								<p class="text-sm sm:text-base sm:max-w-[280px] text-white flex-1">
									{{ translations['form.By submitting your request, you agree to the privacy policy'] }}
								</p>
								<Button type="submit" class="bg-white sm:text-base" :disabled="loading">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										xmlns:xlink="http://www.w3.org/1999/xlink"
										aria-hidden="true"
										role="img"
										font-size="48"
										class="animate-spin iconify iconify--ph w-5 h-5"
										width="1em"
										height="1em"
										viewBox="0 0 256 256"
										v-if="loading"
									>
										<path
											fill="#000"
											d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m39.11 25.19C170.24 83.71 155 99.44 135 113.61c-2.25-24.48-8.44-49.8-38.37-67.82a87.89 87.89 0 0 1 70.5 3.4ZM40.18 133.54c28.34-20 49.57-14.68 71.87-4.39c-20.05 14.19-38.86 32.21-39.53 67.11a87.92 87.92 0 0 1-32.34-62.72m136.5 67.73c-31.45-14.55-37.47-35.58-39.71-60c12.72 5.86 26.31 10.75 41.3 10.75c11.33 0 23.46-2.8 36.63-10.08a88.2 88.2 0 0 1-38.22 59.33"
										></path>
									</svg>
									{{ translations['Header.contact_us'] }}
								</Button>
							</div>
						</div>
					</VForm>
					<div class="flex items-start flex-wrap justify-between gap-6 text-white">
						<div class="flex flex-col min-w-[170px] gap-2">
							<span class="text-sm">{{ translations['form.Social network'] }}</span>
							<nav class="flex items-center gap-6">
								<a href="" target="_blank">
									<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
										<path
											d="M2.14753 11.8099C7.3949 9.52374 10.894 8.01654 12.6447 7.28833C17.6435 5.20916 18.6822 4.84799 19.3592 4.83606C19.5081 4.83344 19.8411 4.87034 20.0567 5.04534C20.2388 5.1931 20.2889 5.39271 20.3129 5.5328C20.3369 5.6729 20.3667 5.99204 20.343 6.2414C20.0721 9.08763 18.9 15.9947 18.3037 19.1825C18.0514 20.5314 17.5546 20.9836 17.0736 21.0279C16.0283 21.1241 15.2345 20.3371 14.2221 19.6735C12.6379 18.635 11.7429 17.9885 10.2051 16.9751C8.42795 15.804 9.58001 15.1603 10.5928 14.1084C10.8579 13.8331 15.4635 9.64397 15.5526 9.26395C15.5637 9.21642 15.5741 9.03926 15.4688 8.94571C15.3636 8.85216 15.2083 8.88415 15.0962 8.9096C14.9373 8.94566 12.4064 10.6184 7.50365 13.928C6.78528 14.4212 6.13461 14.6616 5.55163 14.649C4.90893 14.6351 3.67265 14.2856 2.7536 13.9869C1.62635 13.6204 0.730432 13.4267 0.808447 12.8044C0.849081 12.4803 1.29544 12.1488 2.14753 11.8099Z"
											fill="white"
										/>
									</svg>
								</a>
								<a href="" target="_blank">
									<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
										<path
											d="M12.001 2C6.47813 2 2.00098 6.47715 2.00098 12C2.00098 16.9913 5.65783 21.1283 10.4385 21.8785V14.8906H7.89941V12H10.4385V9.79688C10.4385 7.29063 11.9314 5.90625 14.2156 5.90625C15.3097 5.90625 16.4541 6.10156 16.4541 6.10156V8.5625H15.1931C13.9509 8.5625 13.5635 9.33334 13.5635 10.1242V12H16.3369L15.8936 14.8906H13.5635V21.8785C18.3441 21.1283 22.001 16.9913 22.001 12C22.001 6.47715 17.5238 2 12.001 2Z"
											fill="white"
										/>
									</svg>
								</a>
								<a href="" target="_blank">
									<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
										<path
											d="M13.0281 2.00098C14.1535 2.00284 14.7238 2.0088 15.2166 2.02347L15.4107 2.02981C15.6349 2.03778 15.8561 2.04778 16.1228 2.06028C17.1869 2.10945 17.9128 2.27778 18.5503 2.52528C19.2094 2.77945 19.7661 3.12278 20.3219 3.67862C20.8769 4.23445 21.2203 4.79278 21.4753 5.45028C21.7219 6.08695 21.8903 6.81362 21.9403 7.87778C21.9522 8.14445 21.9618 8.36565 21.9697 8.58989L21.976 8.78398C21.9906 9.27672 21.9973 9.84711 21.9994 10.9725L22.0002 11.7181C22.0003 11.8092 22.0003 11.9032 22.0003 12.0002L22.0002 12.2823L21.9996 13.028C21.9977 14.1534 21.9918 14.7238 21.9771 15.2165L21.9707 15.4106C21.9628 15.6349 21.9528 15.8561 21.9403 16.1227C21.8911 17.1869 21.7219 17.9127 21.4753 18.5502C21.2211 19.2094 20.8769 19.7661 20.3219 20.3219C19.7661 20.8769 19.2069 21.2202 18.5503 21.4752C17.9128 21.7219 17.1869 21.8902 16.1228 21.9402C15.8561 21.9521 15.6349 21.9618 15.4107 21.9696L15.2166 21.9759C14.7238 21.9906 14.1535 21.9972 13.0281 21.9994L12.2824 22.0002C12.1913 22.0002 12.0973 22.0002 12.0003 22.0002H11.7182L10.9725 21.9995C9.8471 21.9977 9.27672 21.9917 8.78397 21.977L8.58989 21.9707C8.36564 21.9627 8.14444 21.9527 7.87778 21.9402C6.81361 21.8911 6.08861 21.7219 5.45028 21.4752C4.79194 21.2211 4.23444 20.8769 3.67861 20.3219C3.12278 19.7661 2.78028 19.2069 2.52528 18.5502C2.27778 17.9127 2.11028 17.1869 2.06028 16.1227C2.0484 15.8561 2.03871 15.6349 2.03086 15.4106L2.02457 15.2165C2.00994 14.7238 2.00327 14.1534 2.00111 13.028L2.00098 10.9725C2.00284 9.84711 2.00879 9.27672 2.02346 8.78398L2.02981 8.58989C2.03778 8.36565 2.04778 8.14445 2.06028 7.87778C2.10944 6.81278 2.27778 6.08778 2.52528 5.45028C2.77944 4.79195 3.12278 4.23445 3.67861 3.67862C4.23444 3.12278 4.79278 2.78028 5.45028 2.52528C6.08778 2.27778 6.81278 2.11028 7.87778 2.06028C8.14444 2.04841 8.36564 2.03872 8.58989 2.03087L8.78397 2.02458C9.27672 2.00994 9.8471 2.00327 10.9725 2.00111L13.0281 2.00098ZM12.0003 7.00028C9.23738 7.00028 7.00028 9.23981 7.00028 12.0002C7.00028 14.7631 9.23981 17.0002 12.0003 17.0002C14.7632 17.0002 17.0003 14.7607 17.0003 12.0002C17.0003 9.23738 14.7607 7.00028 12.0003 7.00028ZM12.0003 9.00028C13.6572 9.00028 15.0003 10.3429 15.0003 12.0002C15.0003 13.6571 13.6576 15.0002 12.0003 15.0002C10.3434 15.0002 9.00028 13.6576 9.00028 12.0002C9.00028 10.3433 10.3429 9.00028 12.0003 9.00028ZM17.2503 5.50028C16.561 5.50028 16.0003 6.06019 16.0003 6.74943C16.0003 7.43868 16.5602 7.99945 17.2503 7.99945C17.9395 7.99945 18.5003 7.43955 18.5003 6.74943C18.5003 6.06019 17.9386 5.49942 17.2503 5.50028Z"
											fill="white"
										/>
									</svg>
								</a>
							</nav>
						</div>
						<div class="flex flex-col min-w-[170px] gap-2">
							<span class="text-sm">{{translations['form.Phone number']}}</span>
							<a href="" target="_blank" class="text-base sm:text-xl font-medium">+998 99 165 32 45</a>
						</div>
						<div class="flex flex-col min-w-[170px] gap-2">
							<span class="text-sm">Электрон почта</span>
							<a href="" target="_blank" class="text-base sm:text-xl font-medium">uzbc@index.uz</a>
						</div>
					</div>
					<div class="flex items-center flex-col sm:flex-row sm:justify-between rounded-2xl bg-white p-6">
						<div class="flex flex-col">
							<span class="text-grey-4 text-base">{{translations['form.For instant communication']}}</span>
							<span class="text-xl font-medium">+998 99 132 45 62</span>
						</div>
						<a href="" target="_blank" class="flex items-center gap-2 py-4 px-6">
							@uzbcsupport
							<svg xmlns="http://www.w3.org/2000/svg" width="18" height="16" viewBox="0 0 18 16" fill="none">
								<path
									d="M0.896699 7.29686L16.2854 0.646242C17.009 0.333489 17.7932 0.942073 17.6698 1.72072L15.5657 14.9967C15.4358 15.8167 14.4208 16.1304 13.8509 15.5266L10.398 11.8691C9.72083 11.1518 9.66776 10.048 10.273 9.26906L12.711 6.13132C12.8503 5.95195 12.6303 5.71597 12.4416 5.84253L7.5943 9.09435C6.77172 9.64618 5.77366 9.87317 4.79333 9.73139L1.15027 9.2045C0.152284 9.06016 -0.0289275 7.69689 0.896699 7.29686Z"
									fill="#1878F3"
								/>
							</svg>
						</a>
					</div>
				</div>
				<div class="xl:block hidden absolute right-0 bottom-0">
					<img src="/assets/images/woman.png" alt="" class="w-full object-contain" />
				</div>
				<div class="w-full xl:hidden block">
					<img src="/assets/images/woman.png" alt="" class="w-full object-contain" />
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
import { useTranslationsStore } from '~/stores/translations.js';
import { useApplication } from '~/stores/application.js';
import { useCustomToast } from '~/composables/useCustomToast.js';

const { showToast } = useCustomToast();

const translationsStore = useTranslationsStore();
const applicationStore = useApplication();

const { orderCreate } = applicationStore;
const { translations } = storeToRefs(translationsStore);

const { loading } = storeToRefs(applicationStore);

const form = reactive({
	name: '',
	phone: ''
});

const formatPhoneNumber = (phone) => {
	return phone.replace(/[^\d]/g, '');
};

const sendConsultationForm = async () => {
	try {
		let res = await orderCreate({
			first_name: form.name,
			phone_number: formatPhoneNumber(form.phone)
		});
		if (res) {
			showToast(translations.value['main.success-text'], 'success');
			form.name = '';
			form.phone = '';
		}
	} catch (error) {
		console.error(translations.value['main.error-text'], 'sasasasasas');
	}
};
</script>
