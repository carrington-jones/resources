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

// Define a function named removeAll(array, value) that takes in two arguments. The first argument should be an array and the second argument should be a value you wish to remove


// removeAll(bugs, "ant") should return ["mosquito", "scorpion",   "mosquito", "typo", "reference error", "type error"]
// var bugs = ["mosquito", "ant", "scorpion", "ant", "ant", "mosquito", "typo", "reference error", "type error"];
//
// function removeAll (array, value){
//     for (var i =0; i < array.length; i++) {
//         if(array[i] === value) {
//             array.splice(i,1)
//             i--;
//         }
//     } return bugs
// }
// console.log(removeAll(bugs,"ant"));
// console.log(removeAll(bugs, "mosquito"));
// console.log(removeAll(bugs, "roach"));

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
    return Math.floor(Math.random() * 12) + 1;
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
        numberOfRolls.push(rollDie());
    } return numberOfRolls
}
console.log(listOfRolls(3));

// Make a function called listOfRollsFromDieFunc(numberOfRolls, diceFunction)

// function listOfRollsFromDieFunc(numberOfRolls,diceFunction) {
//     var rollsArray = []
//     for(var i = 1; i<=numberOfRolls; i++) {
//         var d = diceFunction;
//         rollsArray.push(d)
//     }
//     return rollsArray;
// }

// function listOfRollsFromDieFunc(numOfRolls, diceFunc){
//     var rollsArray = []
//     for(var i = 1; i <= numOfRolls; i++){
//         var d = diceFunc
//         rollsArray.push(d);
//     }
//     return rollsArray
// }
//
// console.log(listOfRollsFromDieFunc(4, rollDie()));
// console.log(listOfRollsFromDieFunc(5, rollDie()));
// console.log(listOfRollsFromDieFunc(3, rollDie()));

// Exercise 0. Write a function named first() that returns only the first element of an array

// var sampleArray = [1, 2, 3, 4, 5]
// function first (input){
//     return [input[0]]
// }
// console.log(first(sampleArray));

// Exercise 1. Write a function named secondToLast() that returns the second to last element
// var sampleArray = [1, 2, 3, 4, 5]
// function secondToLast(input){
//     input.shift();
//     return input
// }
// console.log(secondToLast(sampleArray))

// Exercise 2. Write a function named rest() that takes an an array and returns an array containing everything except the first element.
// var sampleArray = [1, 2, 3, 4, 5]
// function secondToLast(input){
//     input.shift();
//     return input
// }
// console.log(secondToLast(sampleArray))

// Exercise 3. Write a function named getLongestString that takes in an array of strings and returns the longest string of that array
// var arr = [
//     'first item',
//     'second item is longer than the third one',
//     'third longish item'
// ];
// function getLongestString(input) {
//     var lgth = 0;
//     var longest;
//     for (var i = 0; i < input.length; i++) {
//         if (input[i].length > lgth) {
//             var lgth = input[i].length;
//             longest = input[i];
//         }
//     } return longest
// }
// console.log(getLongestString(arr));

// Exercise 3.1 Write a function named getShortestString that takes in an array of strings and returns the shortest string in that array.
var arr = [
    'first item',
    'second item is longer than the third one',
    'third longish item'

];
function getShortestString(input) {
    var lgth = Infinity;
    var shortest;
    for (var i = 0; i < input.length; i++) {
        if (input[i].length < lgth) {
            shortest = input[i];
            var lgth = input[i].length; //This causes shortest string to become "new infinity"
        }
    } return shortest
}
console.log(getShortestString(arr));

// Exercise 4. Write a function named addTwoArrays that takes in two, one dimensional arrays. The function should return a single array containing all of the elements of the first array along with all of the elements of the second array
// Example: addTwoArrays([1, 2, 3], [4, 5, 6]) should return [1, 2, 3, 4, 5, 6]
function addTwoArrays (array1, array2){
    for (var i = 0; i < array2.length; i++ ) {
        array1.push(array2[i]);
    } return array1
}
var arr1 = [1, 2, 3];
var arr2 = [4, 5, 6];

console.log(addTwoArrays(arr1, arr2));

// Exercise 5. Write a function named getUniqueValues that takes in an array and returns the array without any duplicates
// Example: getUniqueValues(["a", "b", "a", "b", "c", "c"]) should return ["a", "b", "c"]
function getUniqueValues (input) {

}

// Exercise 6. Write a function named reverseArray that takes in an array and returns it reversed, but without altering the original array.
var sampleArray = ["a", "b", "c"];

function reverseArray (input) {
    var newArray = input.slice().reverse();
    return newArray;
}
console.log(reverseArray(sampleArray));
console.log(sampleArray);

// Exercies 7. Write a function named getRandomQuote().
//   Inside of the function, create an array of strings where each string is a quote or thought you find inspirational
//   getRandomQuote should generate a random number between 0 and the array's length minus 1
//   use the randomly generated number as your index
//   return a random quote.
function getRandomQuote(input){
    var quotes = [
        "yes",
        "no",
        "maybe",
        "possibly"
    ]
    return quotes[(Math.floor(Math.random() * quotes.length) + 1)];
}
console.log(getRandomQuote());
// Exercise 8. Write a function named getIndexesOf() that takes in two arguments.
// The first argument should be a specific numeral or character
// The second argument should be any given string
// getIndexesOf() should return an array containing all of the indexes of that character in the string
// Example: getIndexesOf("a", "banana") should return the array [1, 3, 5]
// Example: getIndexesOf("z", "banana") should return an empty array [] since there are no "z" characters in "banana".
function getIndexsOf (input1, input2) {
    var str = input2
    var newArray = []
    for (i = 0; i < str.length; i++) {
        if (str.includes(input1) === false) {
            return newArray
        }if (str[i] === input1) {
            newArray.push(i);
        }
    } return newArray
}
console.log(getIndexsOf("a", "banana"));
console.log(getIndexsOf("z", "banana"));

// Exercise 9. Write a function named removeAll.
// It should accept an array and a value
// removeAll should return an array with all of the original contents EXCEPT for the provided value
// iterate across the input array
// output array
// Example: removeAll([1, 2, 3], 2) should return [1, 3]
// Example 2: removeAll([2, 2, 3, 4, 5, 2, 2], 2) should return [3, 4, 5]

function removeAll(array, value){
    for (var i =0; i < array.length; i++) {
        if(array[i] === value) {
            array.splice(i,1)
            i--;
        }
    } return array;
}
// console.log(removeAll([1, 2, 3], 2));
console.log(removeAll([2, 2, 3, 4, 5, 2, 2], 2));

// Exercise 10. Write a function named firstTenFibonacciNumbers() that returns an array of the first ten fibonacci numbers
function firstTenFibonacciNumbers(){
    var fNumbers = []
    fNumbers[0] = 0;
    fNumbers[1] = 1;
    for (var i = 2; i <= 10; i++) {
        fNumbers[i] = fNumbers[i-2] + fNumbers[i - 1];
        fNumbers.push[i];
    } return fNumbers
}
console.log(firstTenFibonacciNumbers());

// Exercise 11. Write a function named getNFibonacci(n) that returns an array containing the first n fibonacci numbers
function nFibonacciNumbers(n) {
    var fNumbers2 = []
    fNumbers2[0] = 0;
    fNumbers2[1] = 1;
    for (var i = 2; i <= n; i++) {
        fNumbers2[i] = fNumbers2[i - 2] + fNumbers2[i - 1];
        fNumbers2.push[i];
    }
    return fNumbers2
}
console.log(nFibonacciNumbers(21));

// Exercise 12. Write a function named moveFirstToLast() that takes in an array
// the function should return the array with the first element at the end
// Example: moveFirstToLast([1, 2, 3, 4]) should return [2, 3, 4, 1]
