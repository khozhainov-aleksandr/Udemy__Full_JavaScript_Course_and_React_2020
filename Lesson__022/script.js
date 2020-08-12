'use strict';

// let a = 5;
// let b = a; // Кладет сюда значение

// b = b + 5;

// console.log(a);
// console.log(b);

// ---

// const obj = {
// 	a: 5,
// 	b: 10,
// 	c: 15
// };

// const copy = obj; // Кладет сюда ссылку

// console.log(obj);
// console.log(copy);

// ---

// ! Копия Объектов

// Создание поверхностной копии без вложенности.
// function copy(mainObj) {
// 	let objCopy = {};
// 	let key;

// 	for (key in mainObj) {
// Копирует все ключи по объекту mainObj и копирует все в objCopy
// 		objCopy[key] = mainObj[key];
// 	}
// 	return objCopy;
// }

// const numbers = {
// 	a: 5,
// 	b: 2,
// 	c: { x: 43, y: 78 },
// 	d: 7
// };

// const newObjNumbers = copy(numbers);
// newObjNumbers.b = 30;

// Поменяли копию объекта newObjNumbers.b появилось значение 30.
// console.log(newObjNumbers); // Object { a: 5, b: 30, c: {…}, d: 7 }
// console.log(numbers); // Object { a: 5, b: 2, c: {…}, d: 7 }

// ---

// const numbers = {
// 	a: 5,
// 	b: 2,
// 	c: { x: 43, y: 78 },
// 	d: 7
// };

// const add = {
// 	g: 10,
// 	s: 43,
// 	w: 17
// };

// Object.assign() - объединяет массивы в один (независимая поверхностная копия)
// Первым значением передаем тот объект в который мы хотим положить а вторым, который хотим добавить.
// console.log(Object.assign(numbers, add));

// {} это пустой объект куда поместиться add
// const clone = Object.assign({}, add);
// clone.w = 'Alex';

// console.log(add); // {g: 10, s: 43, w: 17}
// console.log(clone); // {g: 10, s: 43, w: "Alex"}

// ---

// ! Копия Массивов

// const oldArr = [2,4,5,7,9,6,1];
// .slice() - Создает новую копию массива.
// const newArr = oldArr.slice();

// newArr[1] = 'Alex';

// console.log(oldArr); // [2, 4, 5, 7, 9, 6, 1]
// console.log(newArr); // [2, "Alex", 5, 7, 9, 6, 1]

// ---

// использование спрэд оператора
// const video = ['youtube', 'vimeo', 'rutube'],
			// blogs = ['wordpress', 'livejournal', 'bloger'],
			// internet = [...video, 'vk', ...blogs, 'facebook']; // Объединит все массивы в один.

// console.log(internet); // ["youtube", "vimeo", "rutube", "vk", "wordpress", "livejournal", "bloger", "facebook"]

// ---

// function log(a, b, c) {
// 	console.log(a);
// 	console.log(b);
// 	console.log(c);
// }

// const num = [2,10,7];

// спрэд оператор вытащит значения с массива и поместит их в функцию. И это уже будет не массив.
// log(...num);


// ---

// - Спрэд оператор для массива
// const array = [2,4,6,1];
// const newArray = [...array];
// console.log(newArray); // [2, 4, 6, 1]

// - Спрэд оператор для Объекта
// const obj = {
// 	one: 1,
// 	two: 2
// };
// const newObj = {...obj};
// console.log(newObj); // {one: 1, two: 2}