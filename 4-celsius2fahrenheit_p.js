import readlineSync from 'readline-sync';

let C2F = (C) => {
    return C * 1.8 +32;
}

let nC = readlineSync.question(`What's the temperature in C?`);

let nF = C2F(nC);

console.log(`The temperature in F is ${nF}`);