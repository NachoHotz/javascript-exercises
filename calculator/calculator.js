const add = function(num1, num2) {
  return num1 + num2;
};

const subtract = function(num1, num2) {
  return num1 - num2;
};

const sum = function(numbers) {
  if (numbers.length < 1) return 0;
  if (numbers.length === 1) return numbers[numbers.length - 1];

  return numbers.reduce((acc, el) => acc + el);
};

const multiply = function(numbers) {
  return numbers.reduce((acc, el) => acc * el);
};

const power = function(num, exp) {
  return Math.pow(num, exp);
};

const factorial = function(number) {
  if (number > -1 && number < 2) return 1;
  if (number < 0) return 0;
  
  return number * factorial(number - 1);
};

module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
