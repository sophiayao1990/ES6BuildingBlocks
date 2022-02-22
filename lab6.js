/*6. If `254` is code for bed write a program that decrypts a string made from an encoded sentence that the user inputs.*/

import readlineSync from 'readline-sync';

let decodeCharacter = (nChar) =>{
    let sAlphabet = "abcdefghijklmnopqrstuvwxyz";
    return sAlphabet[nChar-1];
}



let nInput = readlineSync.question("enter your code: ");

let sOutput = "";
for(let n = 0; n<String(nInput).length; n++){
    sOutput = sOutput + decodeCharacter(String(nInput)[n]);
}

console.log(sOutput);