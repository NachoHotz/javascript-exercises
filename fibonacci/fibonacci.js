const fibonacci = function(number) {
  if (typeof number === 'string') parseInt(number);
  if (number === '1') return parseInt(number);
  if (number === 0 || number === 1) return number;
  if (number < 0) return 'OOPS';

  return fibonacci(number - 1) + fibonacci(number - 2);
};

module.exports = fibonacci;
