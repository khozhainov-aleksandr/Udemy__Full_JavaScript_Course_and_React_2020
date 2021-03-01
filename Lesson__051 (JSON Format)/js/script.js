'use strict';

const person = {
	name: 'Alex',
	surname: 'Khozhainov',
	telephone: '+380681242477'
};

// Первый метод. (stringify) Когда мы объект переводим в JSON файл.
let newGetFile = JSON.stringify(person);

// Второй метод. (parse) Когда мы JSON переводим в Объект.
let newObjectFile = JSON.parse(newGetFile);



// TOPIC: Глубокое копирование объектов.
const newOriginalPerson = {
	name: 'Alex',
	surname: 'Khozhainov',
	telephone: '+380681242477',
	family: {
		mom: {
			name: 'Olga'
		},
		dad: {
			name: 'Valera'
		}
	}
};

let clonePerson = JSON.parse(JSON.stringify(newOriginalPerson));
clonePerson.family.dad.name = 'Dimon';

console.log(newOriginalPerson);

// Содержит новый объект с новым именем Dimon у dad.
console.log(clonePerson);
