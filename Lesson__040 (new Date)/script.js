'use strict';

const now = new Date();

//* Получаем время.

//. Показывает актуальное время на данный момент.
// console.log(now);

//. Показывает какой сейчас года.
// console.log(now.getFullYear());

//. Отсчет месяцев начинается с 0.
// console.log(now.getMonth());

//. День недели, отсчет начинается с Воскресенья. Отсчет начинается с 0.
// console.log(now.getDay());

//. Показывает разницу часовых поясов с UTC в минутах.
// console.log(now.getTimezoneOffset()); // 180

//. Показывает разницу времени с начала 1970-01-01 в минутах.
// console.log(now.getTime()); // 1598947585449

//* Устанавливаем время.

//. Устанавливаем 12 часов.
// console.log(now.setHours(12));
// console.log(now);

//. В консоль выводим время, за сколько секунд выполниться этот цикл.
let start = new Date();

for (let i = 0; i < 10000000; i++) {
  let some = i ** 3;
}

let end = new Date();

const totalTime = Math.floor((end - start) / 60);
console.log(`Цикл выполнился за ${totalTime} секунд.`);
