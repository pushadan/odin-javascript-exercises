
// x°F = (x − 32) * (9/5)°C
const convertToCelsius = function(temperature) {
  temperature = Math.round((temperature - 32) * (5/9) * 10) / 10;
  return temperature;
};

// x°C = (x * (9/5) + 32)°F
const convertToFahrenheit = function(temperature) {
  temperature = Math.round((temperature * (9/5) + 32) * 10) / 10;
  return temperature;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
