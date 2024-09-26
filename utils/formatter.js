export function formatPrice(price, locale = 'en-US', currency = 'USD') {
	const formatter = new Intl.NumberFormat(locale, {
		currency: currency,
		minimumFractionDigits: 0,
		maximumFractionDigits: 0 
	});
	return formatter.format(price);
}
