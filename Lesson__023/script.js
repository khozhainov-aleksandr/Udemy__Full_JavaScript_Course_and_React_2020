'use strict';

// ! Основы ООП, прототипно-ориентированное наследование

// ! ООП - это наука о том как делать правильную архитектуру
// ! JS - Прототипно ориентированный язык программирования

// let str = 'Alex';
// let strObj = new String(str);

// console.log(typeof(str)); // string
// console.log(typeof(strObj)); // object

// ---

const solder = {
	health: 400,
	armor: 100,
	seyHello: function() {
		console.log('Hello');
	}
}

// const john = {
// 	health: 100
// }

const john = Object.create(solder); // Используется для создания прототипных связей

// john.__proto__ = solder; // Старая версия которая уже не применяется
Object.setPrototypeOf(john, solder); // Новая версия, 


console.log(john);