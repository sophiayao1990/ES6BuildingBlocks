import readlineSync from 'readline-sync';

let celsius2fahrenheit = (nCelsius)=>{
    return nCelsius * 1.8 + 32;
}

//input
let nCelsiusInput = readlineSync.question("what is the temperature in celsius? ");
//processing
let nFahrenheit = celsius2fahrenheit(nCelsiusInput);
//output
console.log(`The temperature in fahrenheit is ${nFahrenheit}`);
