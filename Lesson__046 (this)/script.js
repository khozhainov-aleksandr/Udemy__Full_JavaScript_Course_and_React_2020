"use strict";

// TOPIC: Есть 4 методов контекстного вызова this.

// ! 1) Обычная функция: this = window, но если стоит 'use strict' то undefined.
// ! 2) Контекст у методов объектов - это сам объект.
// ! 3) this - в Конструкторах и Классах это новый экземпляр объекта.
// ! 4) Ручная привязка к this. call, apply, bind.

// LEARN: 1) Обычная функция: this = window, но если стоит 'use strict' то undefined.

// function showThis(a, b) {
//   console.log(this); // undefined
//   function sum() {
//     console.log(this); // undefined
//     return a + b;
//   }

//   console.log(sum()); // 9 так как это уже замыкающаяся функция.
// }

// showThis(2, 7);

// ----------

// LEARN: 2) Контекст у методов объектов - это сам объект.

// const obj = {
//   a: 20,
//   b: 15,
//   sum: function() {
//     console.log(this);
//   }
// }

// obj.sum();

// ----------

// LEARN: 3) this - в Конструкторах и Классах это новый экземпляр объекта.

// function User(name, id) {
//   this.name = name;
//   this.id = id;
//   this.human = true;
//   this.hello = function () {
//     console.log(`My name ${this.name}! and I have ${this.id} years old.`);
//   };
// }

// const alex = new User('Alex', 30);

// ----------

// LEARN: 4) Ручная привязка к this. 'call', 'apply'

// const user = {
//   name: 'Alex',
//   age: 31,
//   from: {
//     country: 'Ukrainian',
//     town: 'Odessa',
//   },
// };

// function newUser(surname) {
//  NOTE: Одинаковый результат.
//   console.log(this);
//   console.log(user); //. То же самое что и this.

//   console.log(this.name + ' ' + surname); //. В этом случае выведет 'Alex John'
// }

// NOTE: Отличие только в синтаксисе написания.
// NOTE: Присваиваем контекст в старую функцию.
// newUser.call(user, 'John');
// newUser.apply(user, ['John']);

// ----------

// LEARN: 4) Ручная привязка к this. 'bind'

// function count(num) {
//   return this * num;
// }

// NOTE: В эту переменную помещается новая функция.
// const double = count.bind(5); // 5 занимает позицию this.
// console.log(double(10)); // 50
// console.log(double(15)); // 75
// console.log(double(20)); // 100

// NOTE: Еще один маленький пример.
// function calculate(dollars, percent) {
//   return (dollars * this - percent);
// }

// const smallCalc = calculate.bind(27);
// console.log(smallCalc(100, 1000)); // 1700
// console.log(smallCalc(1200, 7000)); // 25400

// SECTION: Примеры на практике

const btn = document.querySelector("button");

// LEARN: Контекстом вызова будет сам элемент на котором произошло событие.
// LEARN: Стрелочная функция будет вызывать не сам объект а его родителя.
btn.addEventListener("click", buttonClick);

function buttonClick() {
  console.log(this); // Выводит в консоль <button>Touch Me</button>
}

// ----------

const obj = {
  num: 5,
  mat: 74,
  // MARK: 2. Контекст sayNumber ссылается на объект obj в котором он существует.
  sayNumber: function () {
    const say = () => {
      // MARK: 1. Стрелочная функция с this всегда ссылается на родителя, родитель это sayNumber.
      console.log(this); // MARK: 3. Итог того что в этом примере this ссылается на obj.
      console.log(this.num); // MARK: 4. this обратилась к объекту а потом к num и вывела в консоль (5).
    };
    say();
  },
};

obj.sayNumber();
