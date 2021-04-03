"use strict"

//1.)
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

// 2.)
// Write a function, getOlder() that takes in array of dog objects and increases the value of each object's age property by 1.

var dogs = [
    {
        name: "Chompers",
        breed: "Pug",
        age: 7
    },
    {
        name: "Freddy",
        breed: "Lab",
        age: 4
    },
    {
        name: "Mr. Pig",
        breed: "Mastif",
        age: 10
    }
]

function getOlder(array){
    dogs.forEach(function (dog){
        dog.age++;
    }); return dogs
}
console.log(getOlder(dogs));