<script setup>
import { useApplication } from '~/stores/application';
import { useTranslationsStore } from '~/stores/translations.js';

const props = defineProps({
	tariffId: Number
});

const translationsStore = useTranslationsStore();

const { translations } = storeToRefs(translationsStore);

const applicationStore = useApplication();
const { orderCreate } = applicationStore;
const { loading } = storeToRefs(applicationStore);

const { showToast } = useCustomToast();

const isOpen = ref(false);

const form = reactive({
	name: '',
	company: '',
	email: '',
	owner: '',
	staff: '',
	phone: ''
});

const formatPhoneNumber = (phone) => {
	return phone.replace(/[^\d]/g, '');
};

const isNumber = (evt) => {
	evt = evt || window.event;
	let charCode = evt.which ? evt.which : evt.keyCode;
	if (charCode > 31 && (charCode < 48 || charCode > 57) && charCode !== 46) {
		evt.preventDefault();
	} else {
		return true;
	}
};

const sendConsultationForm = async () => {
	try {
		let res = await orderCreate({
			first_name: form.name,
			phone_number: formatPhoneNumber(form.phone),
			company: form.company,
			email: form.email,
			owner: form.owner,
			staff: props.staff,
			id: props.tariffId
		});
		if (res) {
			isOpen.value = false;
			showToast(translations.value['main.success-text'], 'success');
			form.name = '';
			form.company = '';
			form.email = '';
			form.owner = '';
			form.staff = '';
		}
	} catch (error) {
		showToast(translations.value['main.success-error'], 'error');
	}
};
</script>

<template>
	<div>
		<Dialog v-model:open="isOpen">
			<DialogTrigger as-child> <slot></slot> </DialogTrigger>
			<DialogScrollContent class="sm:max-w-[708px] p-6 !rounded-3xl">
				<DialogHeader>
					<DialogTitle class="text-2xl flex items-center justify-between">
						Средняя команда
						{{ props.tariffId }}
						<DialogClose>
							<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
								<path d="M27.0708 12.9288L12.9287 27.0709M27.0708 27.0708L12.9287 12.9287" stroke="#020105" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
							</svg>
						</DialogClose>
					</DialogTitle>
				</DialogHeader>
				<div class="w-full">
					<VForm @submit="sendConsultationForm" v-slot="{ errors }" class="w-full">
						<div class="grid gap-6 grid-cols-1 lg:grid-cols-2">
							<div class="grid gap-2 relative">
								<VField name="name" rules="required" v-model="form.name">
									<Input
										v-model="form.name"
										id="login"
										type="text"
										placeholder="Ваше имя"
										class="border-0 border-b rounded-none py-3 px-0 placeholder:text-grey-1"
										:class="{ '!border-destructive !bg-destructive/5': errors.name }"
									/>
								</VField>
							</div>
							<div class="grid gap-2 relative">
								<VField name="staff" rules="required" v-model="form.staff">
									<Input
										@keypress="isNumber($event)"
										v-model="form.staff"
										id="staff"
										type="text"
										placeholder="Количество сотрудников"
										class="border-0 border-b rounded-none py-3 px-0 placeholder:text-grey-1"
										:class="{ '!border-destructive !bg-destructive/5': errors.staff }"
									/>
								</VField>
							</div>
							<div class="grid gap-2 relative">
								<VField name="company">
									<Input v-model="form.company" id="company" type="text" placeholder="Название компании" class="border-0 border-b rounded-none py-3 px-0 placeholder:text-grey-1" />
								</VField>
							</div>
							<div class="grid gap-2 relative">
								<VField name="name">
									<Input v-model="form.owner" id="owner" type="text" placeholder="Ваша позиция" class="border-0 border-b rounded-none py-3 px-0 placeholder:text-grey-1" />
								</VField>
							</div>
							<div class="grid gap-2 relative">
								<VField name="phone" rules="required" v-model="form.phone">
									<div class="relative">
										<Input
											placeholder="00 000 00 00"
											v-model="form.phone"
											v-maska="'## ### ## ##'"
											class="py-3 border-0 border-b rounded-none pl-10"
											:class="{ '!border-destructive !bg-destructive/5': errors.phone }"
										/>
										<span class="absolute start-0 inset-y-0 flex items-center justify-center text-black">+998</span>
									</div>
								</VField>
							</div>
							<div class="grid gap-2 relative">
								<VField name="email" rules="required|email" v-model="form.email">
									<Input
										v-model="form.email"
										id="email"
										type="text"
										placeholder="Ваш электронный адрес"
										class="border-0 border-b rounded-none py-3 px-0 placeholder:text-grey-1"
										:class="{ '!border-destructive !bg-destructive/5': errors.email }"
									/>
								</VField>
							</div>
						</div>
						<div class="flex justify-end mt-6">
							<Button class="bg-[#1878F3] text-white" :disabled="loading">
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
								Отправить
								<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
									<path
										d="M11.6667 6.6665L15 9.99984M15 9.99984L11.6667 13.3332M15 9.99984L5 9.99984"
										stroke="white"
										stroke-width="1.5"
										stroke-linecap="round"
										stroke-linejoin="round"
									/>
								</svg>
							</Button>
						</div>
					</VForm>
				</div>
			</DialogScrollContent>
		</Dialog>
	</div>
</template>
