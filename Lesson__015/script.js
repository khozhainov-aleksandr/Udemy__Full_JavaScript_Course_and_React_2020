"use strict";

let number = 20;

function showFirstMessage(text) {
    console.log(text);
    let number = 10;
}

showFirstMessage('Hello world!');
console.log(number);


function calc(a, b) {
    return (a + b);
}

console.log(calc(5,3));


function ret() {
    let number = 50;
    return number;
}
console.log(ret());

const anotherNum = ret();
console.log(anotherNum);


const logan = function() {
    console.log('Hello');
};
logan();

const calcSum = (a, b) => a + b;
console.log(calcSum(8, 8));