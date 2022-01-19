import readlineSync from 'readline-sync';

let prov2City = (sProv) => {
    let city = {'ON': 'Toronto', 'QC': 'Quebec', 'MB':'Winnipeg'};
    return city[sProv.toUpperCase()];
}

let userInputProv = readlineSync.question(`What province?`);

let provCity = prov2City(userInputProv);

console.log(`The City if this province is ${provCity}`);