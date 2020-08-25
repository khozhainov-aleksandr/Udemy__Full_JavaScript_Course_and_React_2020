'use strict';

const calc = new Calculator(10);

calc.sum(5);
calc.mult(10);
calc.sub(40);
calc.div(10);
calc.set(100);
calc.getResult();

function Calculator(baseValue) {
  this.expression = baseValue;

  this.sum = (valueSum) => {
    this.expression += ` + ${valueSum}`;
    return `Sum = ${(baseValue += valueSum)}`;
  };
  this.sub = (valueSub) => {
    this.expression += ` - ${valueSub}`;
    return `Sub = ${(baseValue -= valueSub)}`;
  };
  this.div = (valueDiv) => {
    this.expression += ` / ${valueDiv}`;
    return `Div = ${(baseValue /= valueDiv)}`;
  };
  this.mult = (valueMult) => {
    this.expression += ` * ${valueMult}`;
    return `Mult = ${(baseValue *= valueMult)}`;
  };
  this.set = (valueSet) => {
    this.expression = valueSet;
    return `Set = ${(baseValue = valueSet)}`;
  };
  this.getResult = () => `Total: ${this.expression} = ${baseValue}`;
}
