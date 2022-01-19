import readlineSync from 'readline-sync';

let dayofweek = (nDay) =>{
    let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return days[(nDay-1)%8];
}

let userInputDay = readlineSync.question(`What's the days?`);

let weekDay = dayofweek(userInputDay);

console.log(`Today is ${weekDay}`);