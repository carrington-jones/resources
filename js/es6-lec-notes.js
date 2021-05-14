"use strict"
// With es6 we can now use calculate exponents with a double asterisk operator instead of having to rely on the Math object.

// var oldWay = Math.pow(4, 2);
// console.log(oldWay)
// var newWay = 4 ** 2;
// console.log(newWay)

// ===== var vs let vs const ====

//var
//variable declared with var are function scoped. This means that if a variable is declared anywhere else besides a function using var. It will always exist in the global scope.

//Ex:
// for (var i = 0; i < 5; i++){
//     console.log(i)
// }
//
// i = "hello"
//
// console.log(i)
//
// if (i === "hello") {
//     var bubbles = "bubububbles";
// }
// bubbles = "pop!"
// console.log(bubbles)
//
// function test() {
//     var logMe = 'Hello'
// }

//CONST
//CONST is block-scoped. This means that the variable declared with const cannot be redeclared or reassigned.

// const num =4
// console.log(num)
// num = 6;
// console.log(num)
//You cannot change const variables

//Block-scope
// var number = 5;

// if(number === 5){
// const cardNumber = 123412341234;
// }

// console.log(cardNumber)
//Above shows you cannot declare const inside curly brace

//LET
// The let keyword lets you define variable that are block-scoped. As with variables declared with const, the variables with let cannot be redeclared.

// let name = "Jay";
// let name = "Javier";
// console.log(name)
//^^^^^ This will not work

// let name = "Jay";
// name = "Javier";
// console.log(name)
//^^^^^This will work

// function foo(n){
//     if(n==6) {
//         let num =2
//     }
//     console.log(num)
// }
// foo(6);
//^^^^^ Throws an error because our let variable is within our if statement scope.
// for (let i = 0; i < 3; i++){
//     console.log(i)
// }
// console.log("i outside of the loop", i)
//^^^^^ Does not work. Needs to be var. Code will throw and error because it is within the for loop scope.

// ======TEMPLATE STRINGS=======
//Template strings allow for interpolation in strings. Variables and expressions can be read in template strings. Template strings use back ticks to recognize variables and expressions.

// let name = `Jay`;
// console.log(`My name is ${name}`)
//
// console.log(`My name is ${name.toUpperCase() + ' Arrendondo'} in all caps!`)
//
//
//
// let parksList = `<ul>
// <li></li>
// <li></li>
// <li></li>
// </ul>`

//====== for ...of loop =====
for (let i = 0; i < 4; i++) {
    console.log(i);
}

// New es6 For ... of loop
//Structure
//for(variable of iterable/collection) {
//statement
//}

//====== ARROW FUNCTION ======

function test() {
    return "Hello from the test function!"
}

console.log(test());
//^^^Function syntax we have been using

//ES6 way

const test2 = () => 'Hello from test2'; // => is points to body of function

console.log(test2())

const sayHello = (firstName, lastName) => {
    return firstName + lastName;
}

console.log(sayHello('Jay', 'Arrendondo'))

let nationalParks = ['Grand Canyon National Park', 'Banff National Park', 'Joshua Tree National Park'];

// ==== Default Function Parameter Values ====

// ES5 Syntax

// function add(num1, num2) {
//     if(num1 === undefined) {
//         num1 = 2;
//     }
//     if(num2 === undefined) {
//         num2 = 2;
//     }
//     return num1+ num2;
// }
//
// console.log(add());
// console.log(add(5))
// console.log(add(5,5))

// ES6 (better) way

// const add = (num1 = 2, num2 = 4) => {
//     return num1 + num2;
// }
//
// console.log(add());
// console.log(add(5));
// console.log(add(5,5));

// ===== Object Property Variable Assignment (shorthand) =====

// ES5 syntax

// var name = 'Loopy Trail';
// var distance = 4.6
// var difficulty = 'moderate';
// var isPaved = true

// var trail = {
//     name: name,
//     distance: distance,
//     difficulty: difficulty,
//     isPaved: isPaved
// }

// console.log(trail);

// ES6 (BETTER) Way

let name = 'Loopy Trail';
let distance = 4.6
let difficulty = 'moderate';
let isPaved = true

let trail = {
    name,
    distance,
    difficulty,
    isPaved
};
console.log(trail);

// ====== Object Destructuring ======

// ES5 Way

// let nameOfTrail = trail.name;
// let distanceOfLoopTrail = trail.distance;
//
// console.log(nameOfTrail);
// console.log(distanceOfLoopTrail);

// ES6 Way

let myObject = {
    movieName: 'The Incredibles',
    length: '1hr 43min'
}

let {movieName, length} = myObject;

console.log(movieName, length);

// ES5 function for object destructuring

// function describeTrail(trailObj) {
//     var name = trailObj.name;
//     var distance = trailObj.distance;
//
//     return name + " " + "is " + distance + "mi long";
// }

// console.log(describeTrail(trail))

let describeTrail = trailObj => {
    var {name, distance} = trailObj;
    return name + " " + "is " + distance + "mi long";

}
console.log(describeTrail(trail));