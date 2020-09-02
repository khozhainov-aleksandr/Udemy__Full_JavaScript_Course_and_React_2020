'use strict';

//+ Конструкторы нам нужны для создания новых однотипных объектов.
//. К примеру новые пользователи, видео ролики, товары в магазинах везде где есть шаблонизация.
//. Изначально классов не было, они появились в качестве синтаксического сахара.

//* Функция конструктор.
function User(name, id) {
  this.name = name;
  this.id = id;
  this.human = true;
  this.hello = function () {
    console.log(`My name ${this.name}! and I have ${this.id} years old.`);
  };
}

//* Метод Prototype.
//. Прототипно наследуется этот метод в том случае если по какой то причине нельзя назначить этот метод на прямую в функцию конструктор.
User.prototype.exit = function () {
  console.log(`Пользователь ${this.name} решил уйти.`);
};

const alex = new User('Alex', 30);
const ivan = new User('Ivan', 28);

// console.log(alex); // User {name: "Alex", id: 30, human: true}
// console.log(ivan); // User {name: "Ivan", id: 28, human: true}

// alex.hello(); // My name Alex! and I have 30 years old.
// ivan.hello(); // My name Ivan! and I have 28 years old.

// alex.exit(); // Пользователь Alex решил уйти.
