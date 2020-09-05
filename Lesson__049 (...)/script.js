'use strict';

// NOTE: ...rest можно назвать как угодно.
const log = function (a, b, c, ...rest) {
  console.log(a, b, c, rest);
};

log('basic', 'rest', 'alex', 'usage', 'red', 'black', 'first');

function calcOrDouble(number, basis) {
  console.log(number * basis);
}

calcOrDouble(5, 5);


