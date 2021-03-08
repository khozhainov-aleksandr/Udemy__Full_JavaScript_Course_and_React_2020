'use strict';

// TOPIC: Filter

// const names = ['Alex', 'Ivan', 'Dima', 'Tolic', 'Ayfnjliy'];

// const filterName = names.filter((name) => {
// NOTE: Возвращает имена только те которые короче 5 символов.
// 	return name.length < 5;
// });

// console.log(filterName);

// TOPIC: Map

// const answers = ['AleX', 'IvAN', 'jOhN'];

// const result = answers.map(item => {
// 	// NOTE: Все имена написаны в нижнем регистре.
// 	return item.toLowerCase();
// });

// console.log(result);

// TOPIC: every/some

// const some = [4, 'asdf', 'sdafsafadf'];

// NOTE: some возвращает true всегда когда хоть один элемент соответствует условию.
// console.log(some.some(item => typeof(item) === 'number'));

// NOTE: every возвращает true только тогда, когда все элементы попадают под условие. 
// console.log(some.every(item => typeof(item) === 'number'));

// TOPIC: reduce

// const arr = [2,3,5,1,7,4,8,5];

// // NOTE: Складывает все числа в массиве.
// const res = arr.reduce((sum,current) => sum + current);
// console.log(res); // 35

// ----------

// const arr = ['apple', 'orange', 'watermelon', 'melon'];

// // NOTE: Складывает все слова в массиве.
// const res = arr.reduce((sum,current) => `${sum}, ${current}`);
// console.log(res); // apple, orange, watermelon, melon

// TOPIC: Example

const obj = {
	alex: 'persona',
	ivan: 'persona',
	dog: 'animal',
	cat: 'animal'
};

// NOTE: entries - переводит Объект в Массив для работы с ним.
// const newArr = Object.entries(obj);
// console.log(newArr);

const newArr = Object.entries(obj)
.filter(item => item[1] === 'persona')
.map(item => item[0]);

console.log(newArr); // ["alex", "ivan"]