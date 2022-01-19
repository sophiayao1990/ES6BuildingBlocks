import readlineSync from 'readline-sync';

let studentScore = readlineSync.question(`What's the score you got?`);

if (studentScore < 55){
    console.log(`Sorry...you failed!`);
}else if(studentScore>90){
    console.log(`Congras! You got A+`);
}else{
    console.log(`Good! you passed the course!`);
}