"use strict"
// Write a function, filterNumbers() that takes in an array of mixed data types and returns an array of only the numbers type in ascencding order.



// function filterNumber (array) {
//     var arr = array
//     var numberArray = []
//     for( var i = 0; i < arr.length; i++) {
//         if( arr[i] === 5){
//             numberArray.push(arr[i]);
//         }
//     }
// }
// console.log(filterNumber(["fred", true, 5, 3]));


function filterNumber (array) {
    var filtered = array.filter(value => typeof value === "number");
    filtered.sort((a, b) => a - b);
    return filtered
}
console.log(filterNumber(["fred", true, "banana", 5, 3, 7, 1000]));



var ar = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

for( var i = 0; i < ar.length; i++){

    if ( ar[i] === 5) {

        ar.splice(i, 1);
    }

} console.log(ar);
