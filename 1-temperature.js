import readlineSync from 'readline-sync';
//input
let nCelsius = readlineSync.question("what is the temperature in celsius? ");
//processing
let nFahrenheit = nCelsius * 1.8 + 32;
//output
console.log(`The temperature in fahrenheit is ${nFahrenheit}`);