import readlineSync from 'readline-sync';

let countUpperCase = (sInput) =>{
    let nUpper = 0;
    for(let n = 0; n < sInput.length; n = n+ 1){
        if(sInput[n] != sInput[n].toLowerCase()){
            nUpper = nUpper + 1;
        }
    }
    return nUpper;
}

//input
let sInput = readlineSync.question("Please enter a string with both upper and lower case: ");
//processing
let nUpper = countUpperCase(sInput);
//output
console.log(`Your string has ${nUpper} uppercase letters`)