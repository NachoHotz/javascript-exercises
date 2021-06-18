const ftoc = function(temp) {
  temp = (temp - 32) * 0.55555555555556;
  return Math.round(temp * 10) / 10;
};

const ctof = function(temp) {
  temp = (temp * 1.8) + 32;
  return Math.round(temp * 10) / 10;
};

module.exports = {
  ftoc,
  ctof
};
