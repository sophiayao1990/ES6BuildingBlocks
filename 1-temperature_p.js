import readlineSync from 'readline-sync';

let nCelsius = readlineSync.question(`What's the temperature in celsius?`);

let nFahrenheit = nCelsius * 1.8 + 32;

console.log(`The temperature in Fahrenheit is ${nFahrenheit}`);