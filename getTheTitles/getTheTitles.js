const getTheTitles = function(object) {
  let objectValues = [];

  for (let firstValue in object) {
    objectValues.push(object[firstValue].title);
  }
  return objectValues;
};

module.exports = getTheTitles;
