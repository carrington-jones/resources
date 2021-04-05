"use strict"

//1.)
// Write a function, filterNumbers() that takes in an array of mixed data types and returns an array of only the numbers type in ascencding order.

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

// 3.)
// Write a function, washCars() that takes in a array of car objects and sets the boolean properties of isDirty to false.

var cars =[
    {
        make: "Volvo",
        color: "red",
        year: 1996,
        isDirty: true
    },
    {
        make: "Toyota",
        color: "black",
        year: 2004,
        isDirty: false
    },
    {
        make: "Ford",
        color: "white",
        year: 2007,
        isDirty: true
    }
]

function washCars(array){
    cars.forEach(function(car) {
        car.isDirty = false
        }); return cars
}
console.log(washCars(cars));

// 4.)
// Write a function, adminList() that takes in an array of user objects and returns a count of all admins based on the isAdmin property. Refactor to return an array of admin-only user emails. Refactor again to return an array of user objects that are admins.

var administration = [
    {
        isAdmin: true,
        email: "user1@email.com"
    },
    {
        isAdmin: true,
        email: "user2@email.com"
    },
    {
        isAdmin: false,
        email: "user3@email.com"
    }
]



// function adminList(array){
//     var adminsCount = 0
//     for(var i = 0; i < administration.length; i++){
//         if (administration[i].isAdmin === true) {
//             adminsCount++;
//         }
//     } return adminsCount
// }
// console.log(adminList(administration));

//1st Refactor
// function adminList(array){
//     var adminEmails = []
//     for(var i = 0; i < administration.length; i++){
//         if (administration[i].isAdmin === true) {
//             adminEmails.push(array[i].email);
//         }
//     } return adminEmails
// }
// console.log(adminList(administration));

// 2nd Refactor
function adminList(array){
    var filtered = array.filter(function(value) {
        return value.isAdmin === true;
    }); return filtered
}
console.log(adminList(administration));

// 5.)
// Create a function, makeSandwhichObjects() that takes in two array of strings, breads and fillings and returns an array of sandwhichObjects that contain properties for bread and filling and values correspond to the same order of the two passed in arrays. Assume the two array inputs are the same length.

var breads = [
    "white",
    "wheat",
    "rhy",
    "white"
];
var fillings = [
    "pb&j",
    "ham",
    "cheese steak",
    "tuna"
];

var breadsObject = breads.reduce(function(bread, a){
    bread.push({bread: a})
    return bread
}, [])
console.log(breadsObject)

var fillingsObject = fillings.reduce(function(filling,a){
    filling.push({filling: a})
    return filling;
}, [])
 console.log(fillingsObject)


var completedSandwhiches = []
for (var i =0; i < breadsObject.length; i++) {
    completedSandwhiches[i] = {bread: breadsObject[i].bread, filling: fillingsObject[i].filling}
} console.log(completedSandwhiches)




// function makeSandwhichObjects(array1, array2){
//
// }
// console.log(makeSandwhichObjects(breads, fillings));


