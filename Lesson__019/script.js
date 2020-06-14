"use strict";

function learnJS(lang, callback) {
	console.log(`I learn: ${lang}`);
	callback();
}

function done() {
	console.log('I finis this lesson!');
}

// done мы не вызываем функцию, мы ее передаем что бы в дальнейшем она была использована.
learnJS('JavaScript', done); // Функция done выполниться только тогда когда function learnJS дойдет до 5 строчки.