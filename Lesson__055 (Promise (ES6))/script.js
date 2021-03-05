'use strict';

console.log('Запрос данных...');

const req = new Promise((resolve, reject) => {

	setTimeout(() => {
		console.log('Поиск товаров на складе...');

		const product = {
			name: 'TV',
			price: 600
		};

		resolve(product);
	}, 1000);

});

req.then((product) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			product.status = 'order';
			resolve(product);
		}, 1000);
	}).then(data => {
		data.modify = true;
		return data;
	}).then(data => {
		console.log(data);
	}).finally(() => {
		console.info('Finally !');
	});
}); 

// ----------

// NOTE: Дополнительные возможности Промиссов.

const test = ((time) => {
	return new Promise((resolve) => {
		setTimeout(() => resolve(), time);
	});
});

test(1000).then(() => console.log('1000ms'));
test(2000).then(() => console.log('2000ms'));
test(3000).then(() => console.log('3000ms'));


// NOTE: Promise.all - ждет всех и только потом выполняет загрузку всех файлов сразу.
Promise.all([test(1000), test(2000), test(3000)]).then(() => {
	console.log('Download All File');
});

// NOTE: Promise.race - загружает первым тот файл который быстрее всего загрузиться.
Promise.race([test(1000), test(2000), test(3000)]).then(() => {
	console.log('Download First (faster) File');
});