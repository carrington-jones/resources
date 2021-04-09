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

var fruits = ["apple", "banana", "orange", "apple", "pineapple"];
function allIndexesOf(array,value) {
    if (fruits.indexOf(value) === -1) {
        return []
    } else {
        return [fruits.indexOf(value)];
    }
}
console.log(allIndexesOf("fruits", "apple"));
console.log(allIndexesOf("fruits", "guava"));
console.log(allIndexesOf("fruits", "pineapple"));