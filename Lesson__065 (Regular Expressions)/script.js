'use strict';

/* Example !

new RegExp('patern', 'flags');
/patern/f

i - найти не в зависимости от регистра
g - найти сразу несколько вхождений 
m - многострочный режим

/\d/ - только числа
/\w/ - только слова
/\s/ - только пробелы

*/
/* 
const ans = prompt('Ведите ваше имя');

const reg = /n/ig;

// console.log(ans.search(reg)); флаг g не работает с методом search
console.log(ans.match(reg)); // Возвращает массив со всеми найденными n

*/
/* 
const pass = prompt('Password');
console.log(pass.replace(/./g, '*'));
*/

console.log('12-34-48'.replace(/-/g, ':')); // 12:34:48

console.log(/n/ig.test(prompt('your name'))); // Ann = true так как есть совпадение с символом n