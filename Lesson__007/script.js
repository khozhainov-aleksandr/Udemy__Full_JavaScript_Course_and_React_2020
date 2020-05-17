"use strict";

/*
	alert('No need close Me'); // > Используеться для того что бы предупредить пользователя
*/

// 

/*
	const result = confirm('Are you Here ???') // > Спрашиваем у пользователя и получаем ответ в консоль true или false
	console.log(result);
*/

// 

/*
	const answer = prompt('Вам есть 18 ???', '18');
	console.log(typeof(answer)); // > typeof() указывает какой тип данных будет лежать в нутри переменной answer

	// ! Вся информация которая приходит от пользователя, всегда будет в виде строк (string) !
*/

// 

/*
	const answers = [];

	answers[0] = prompt('Как ваше Имя ?', '');
	answers[1] = prompt('Как ваша Фамилия ?', '');
	answers[2] = prompt('Сколько вам лет ?', '');

	// document.write(answers); // > Выводит ответ на страницу (на практике не подходит)
	console.log(typeof(answers));
*/

// 

/*
	// > Самостоятельная работа !
	const firstQuestions = [];

	firstQuestions[0] = prompt('Как тебя зовут?', 'Имя');
	firstQuestions[1] = prompt('Как твоя фамилия?', 'Фамилия');
	firstQuestions[2] = prompt('Ты женат?', 'Да или Нет');
	firstQuestions[3] = prompt('Сколько у тебя детей?', 'В цифрах');
	firstQuestions[4] = prompt('Сколько детям лет?', 'По возростанию');
	firstQuestions[5] = prompt('Кем ты работаешь?', 'Професия');
	firstQuestions[6] = prompt('Сколько лет ты работаешь?', 'Опыт');
	firstQuestions[7] = prompt('В каком городе ты живешь?', 'Город');

	console.log(firstQuestions);
*/

// 

/*
	function newContent() {
		alert('Загрузка нового контента');
		document.open();
		document.write('<h1>Долой все старое !!!</h1>');
		document.close();
	}
*/

// 

/*
	console.log(typeof 42); // > number
	console.log(typeof 'black'); // > string
	console.log(typeof true); // > boolean
	console.log(typeof undVariable); // > undefined
*/

// 