/*
2. Write a loop that asks the user for a number of rows and then prints out a pattern that looks like this:
```
#######
######
#####
####
###
##
#
```
*/

import readlineSync from 'readline-sync';

let nRows = readlineSync.question("How many rows?");

for (let n = nRows; n>0; n=n-1)
{
    console.log("#".repeat(n));
}
