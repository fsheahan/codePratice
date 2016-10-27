/*Write a JavaScript program to convert temperatures to and from celsius and
fahrenheit.
*/
var celsius;
var fahrenheit;

// °C to °F conversion
function convToFahrenheit(celsius_input){
  var fahrenheit = celsius_input * 1.8 + 32;
  console.log(celsius_input + "°C is " + fahrenheit + "°F");
}

convToFahrenheit(100);

// °F to °C conversion
function convToCelsius(fahrenheit_input){
  var celsius = (fahrenheit_input - 32) * 5/9;
  console.log(fahrenheit_input + "°F is " + celsius + "°C");
}

convToCelsius(32);
