"use strict";
const arr = [1, 2, 3, 4, 7, 8, 9];
 
// arr.pop(); // Удаляет последний элемент в массиве.
// arr.push(10); // Добавляет элемент в конец массива, который мы укажем в круглые скобки ()

// for (let i = 0; i < arr.length; i++) {
// 	console.log(arr[i]);
// }

// for (let num of arr) {
// 	console.log(num);
// }

// arr.forEach(function(item, i, arr) {
// 	console.log(`${i}: ${item} inside in function ${arr}`);
// });

const str = prompt('', '');
const products = str.split(', '); // В круглых скобках мы должны указать через какой разделитель будет указаны перечисление.
products.sort(); // Сортирует объекты
console.log(products.join('; ')); // Склеивает массив в строчку (в скобках указываем разделитель)

