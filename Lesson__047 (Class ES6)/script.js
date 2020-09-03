'use strict';

// TOPIC: Классы конструкторы, стандарта ES6

// SECTION: Основной шаблон.
class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }

  calcArea() {
    return this.height * this.width;
  }
}

// SECTION: Наследование классов через extends
class ColoredRectangleWidthText extends Rectangle {
  constructor(height, width, text, bgColor) {
    // NOTE: Вызывает конструктор родителя и избавляет нас от дублирования кода.
    super(height, width);
    this.text = text;
    this.bgColor = bgColor;
  }

  showMyProps() {
    console.log(
      `Высота: ${this.height}, Ширина: ${this.width}, Текст: ${this.text}, Цвет: ${this.bgColor}.`
    );
  }
}

const square = new Rectangle(5, 11);
console.log(square.calcArea()); // 55

const long = new Rectangle(20, 70);
console.log(long.calcArea()); // 1400

const div = new ColoredRectangleWidthText(200, 50, 'Hello', 'red');
div.showMyProps(); // Высота: 200, Ширина: 50, Текст: Hello, Цвет: red.
console.log(div.calcArea()); // 10000
