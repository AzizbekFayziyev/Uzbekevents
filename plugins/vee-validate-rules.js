import { defineRule } from 'vee-validate';
// import { required } from '@vee-validate/rules';

export default defineNuxtPlugin(() => {
	defineRule('required', (value) => {
		if (!value) {
			return "Maydon to'ldirilishi shart!";
		}
		return true;
	});
	defineRule('email', (value) => {
		if (!value || !value.length) {
			return true;
		}
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		if (!emailRegex.test(value)) {
			return "Email manzilning to'g'ri formatda bo'lishi kerak!";
		}

		const domain = value.split('@')[1];
		const allowedDomains = ['gmail.com', 'yahoo.com', 'hotmail.com'];
		if (!allowedDomains.includes(domain)) {
			return 'Faqat gmail.com, yahoo.com, hotmail.com dominlariga ruxsat berilgan!';
		}

		return true;
	});

	defineRule('min', (value, [length]) => {
		if (!value || !value.length) {
			return true;
		}
		if (value.length < length) {
			return `Maydon kamida ${length} belgidan iborat bo'lishi kerak!`;
		}
		return true;
	});

	defineRule('max', (value, [length]) => {
		if (!value || !value.length) {
			return true;
		}
		if (value.length > length) {
			return `Maydon maksimum ${length} belgidan iborat bo'lishi kerak!`;
		}
		return true;
	});

	defineRule('phone', (value) => {
		if (!value || !value.length) {
			return true;
		}
		if (!/^\+?\d{9,}$/g.test(value)) {
			return "Telefon raqam to'g'ri formatda emas";
		}
		return true;
	});

	defineRule('passwordformat', (value) => {
		if (!value || !value.length) {
			return true;
		}

		return true;
	});

	defineRule('confirmed', (value, [target]) => {
		if (value === target) {
			return true;
		}
		return 'Parol mos kelmadi!';
	});

	defineRule('integer', (value) => {
		if (value === undefined || value === null || value === '') {
			return true;
		}
		if (!Number.isInteger(Number(value))) {
			return "Son butun bo'lishi kerak!";
		}
		return true;
	});

	defineRule('minSum', (value, [min]) => {
		if (!value) {
			return true;
		}
		const numericValue = Number(value.replace(/\s+/g, ''));
		if (numericValue < min) {
			return `Summa kamida ${min} so'm bo'lishi kerak!`;
		}
		return true;
	});

	defineRule('maxSum', (value, [max]) => {
		if (!value) {
			return true;
		}
		if (Number(value) > max) {
			return `Summa maksimum ${max} so'm bo'lishi kerak!`;
		}
		return true;
	});
});
