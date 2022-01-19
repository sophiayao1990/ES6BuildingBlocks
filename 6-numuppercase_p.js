import readlineSync from 'readline-sync';

let uppercaseCounter = (sInput) => {
    let nUpper = 0;
    for (let n =0; n<sInput.length; n++){
        if (sInput[n] != sInput[n].toLowerCase()){
            nUpper += 1;
            console.log(`${sInput[n]}`);
        }      
    }
    return nUpper;
}

let userInput = readlineSync.question(`What word do you want to test?`);

let upperCounter = uppercaseCounter(userInput);

console.log(`The number of upper case is ${upperCounter}`);
