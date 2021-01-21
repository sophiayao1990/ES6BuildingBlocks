import readlineSync from 'readline-sync';
//input
let nGrade = readlineSync.question("Enter your grade out of 100? ");
//select among letter grades
if(nGrade < 50){
    console.log("you failed");
}else if(nGrade >= 90){
    console.log("A+");
}else{
    console.log("you passed");
}
