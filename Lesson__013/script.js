"use strict";

let number = 100;

// while (number < 200) {
	
// 	console.log(number);
// 	number++;
// }


// На практике Циклы позволяют в пару строчек покрасить 10-20 кнопок в определенный цвет.
for (let i = 1; i < 8; i++) { // этот цикл будет работать 7 итераций (7 раз)
	console.log(number);
	number++;
}

// for (let i = 1; i < 0; i++) { // Закончит работать когда i будет меньше нуля, Бесконечный цикл при котором браузер зависнет.
// 	console.log(number);
// 	number++;
// }

for (let i = 1; i < 10; i++) {
	if (i === 6) { 
		// break; // Когда цикл дойдет до 5 команда break уго остановит!
		continue; // Работает по другому он выводит от 1 до 9 и так же пропускает 6
	}
}