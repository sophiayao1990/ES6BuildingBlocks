//1. Take a distance in kilometers as input and output the same distance converted to miles.

import readlineSync from 'readline-sync';

let distanceKm = readlineSync.question(`What's the distance in km?`);

let km2Mile = (km) => {
    return km * 1.609;
}

let distanceMile = km2Mile(distanceKm);

console.log(`The distance of ${distanceKm} in mile is ${distanceMile}`);