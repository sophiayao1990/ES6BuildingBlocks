import readlineSync from 'readline-sync';

let getCapital = (sProv)=>{
    let oCapitals = {"ON":"Toronto","MB":"Winnipeg","BC":"Victoria"}
    return oCapitals[sProv];
}

//input
let sProvShortForm = readlineSync.question("Enter a province abbreviation: ");
//processing
let sCapital = getCapital(sProvShortForm);
//output
console.log(`The capital of ${sProvShortForm} is ${sCapital}`);