import faker from 'faker';
const mount = (el) => {
	let products = '';

	for (let index = 0; index < 5; index++) {
		const name = faker.commerce.productName();
		products += `<div>${name}</div>`;
	}
	// console.log(products);
	el.innerHTML = products;
};
if (process.env.NODE_ENV === 'development') {
	const el = document.querySelector('#dev-products');

    // Assuming our container doesnt have an element with id
    // 'dev-products'
	if (el) {
        // We are propably running in isolation
		mount(el);
	}
}

export { mount };
