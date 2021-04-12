"use strict"

// 1.)

// var fruits = ["apple", "banana", "orange", "apple", "pineapple"];
// var newArray = [];
// function allIndexesOf(array, value) {
//     for(var i = 0; i < array.length; i++){
//         if(value === array[i]){
//             newArray.push(i);
//         }
//     } console.log(newArray)
// }
// console.log(allIndexesOf(fruits, "apple"))

// var fruits = ["apple", "banana", "orange", "apple", "pineapple"];
// function allIndexesOf(array,value) {
//     if (fruits.indexOf(value) === -1) {
//         return []
//     } else {
//         return [fruits.indexOf(value)];
//     }
// }
// console.log(allIndexesOf("fruits", "apple"));
// console.log(allIndexesOf("fruits", "guava"));
// console.log(allIndexesOf("fruits", "pineapple"));


// Make a function called randomIntBetween(min, max) that returns a random number between the min and the max.
function randomInt(min, max){
    return Math.floor(Math.random() * (max - min) + min);
}
console.log(randomInt(50,100));

// Make a function called coinFlip() that returns either 0 or 1, randomly
function coinFlip(){
    if (Math.floor(Math.random() * 2) === 0) {
        return "It's heads!";
    } else {
        return "It's tails!";
    }
}
console.log(coinFlip());

// Make a function called twoDice() that returns the sum of rolling two six sided dice.
function twoDice(){
    return (Math.floor(Math.random() * 6) + 1) + (Math.floor(Math.random() * 6) + 1)
}
console.log(twoDice());

// Make a function called twentySidedDie() that returns a random integer between 1 and 20.
function twentySidedDie(){
    return Math.floor(Math.random() * 20) + 1;
}
console.log(twentySidedDie());

// Make a function called twelveSidedDie() that returns a random integer between 1 and 12.
function twelveSidedDie() {
    return Math.floor(Math.random() * 20) + 1;
}
console.log(twelveSidedDie());

// Make a function called tetrahedron() that returns a random integer between 1 and 4.
function tetrahedron() {
    return Math.floor(Math.random() * 4) + 1;
}
console.log(tetrahedron());

// Make a function called rollDie() that returns an integer between 1 and 6.
function rollDie () {
    return Math.floor(Math.random() * 6) + 1;
}
console.log(rollDie());

// Make a function called listOfRolls(num) that takes in a number containing how many 6-sided dice rolls you want to make. The listOfRolls function should return an array of that length, where each element of the array is the result of the rollDie function.
var numberOfRolls = []
function listOfRolls (num) {
    for( var i = 0; i < num; i++) {
        numberOfRolls.push(i);
    } return numberOfRolls
}
console.log(listOfRolls(3));

function listOfRollsFromDieFunc(numberOfRolls, diceFunction) {
    var diceValues = []
    for (var i = 0; i < numberOfRolls; i++) {
        diceValues.push(i);
    } diceValues.forEach(function(number, index) {
        diceValues[index] = twelveSidedDie();
    }); return diceValues;
}
console.log(listOfRollsFromDieFunc(4, twelveSidedDie()));
console.log(listOfRollsFromDieFunc(5, twelveSidedDie()));
console.log(listOfRollsFromDieFunc(3, twentySidedDie()));
