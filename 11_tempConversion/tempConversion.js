const convertToCelsius = function(temp) {
  let celsius = (temp - 32) / 1.8;
  return Math.round(celsius * 10) / 10;

};

const convertToFahrenheit = function(temp) {
  let fahrenheit = temp * 1.8 + 32;
  return Math.round(fahrenheit * 10) /10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
