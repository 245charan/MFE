import faker from 'faker';
const mount = (el) => {
	const cartMessage = `you have ${faker.datatype.number()} items in your cart`;
	console.log(cartMessage);

	el.innerHTML = cartMessage;
};0

if (process.env.NODE_ENV === 'development') {
	const el = document.querySelector('#my-cart');
	if (el) {
		mount(el);
	}
}

export { mount }