// Write a function called sumOfPositives that takes in an array, and returns the sum of all positive numbers in the array.
function sumOfPositives(input) {
    // empty array must be outside of forEach loop, due to scope.
    var positiveNumbers = [];
    input.forEach(function (element) {
        if (element > 0 && typeof element === "number") {
            positiveNumbers.push(element);
        }
    });
    // sum variable must be outside of the loop, or else it will be redefined as zero.
    var sum = 0;
    for (var i = 0; i < positiveNumbers.length; i++) {
        sum += positiveNumbers[i];
    }
    return sum;
}

console.log(sumOfPositives([-10, 5, 15, "12", "twelve"]));
console.log(sumOfPositives([0, 6, -9, 8, "six"]));
console.log(sumOfPositives([44, "15", -10, 1]));

// sumOfPositives([-10, 5, 15, "12", "twelve"]); // should return 20.
// sumOfPositives([0, 6, -9, 8, "six"]); // should return 14.
// sumOfPositives([44, "15", -10, 1]); // should return 45.

// Write a function named averageSales that accepts an array of objects where each object represents a person, and has a sales property. The function should return the average of every object's sales property.
//
// averageSales([
//     {name: 'Jim Halpert', sales: 100},
//     {name: 'Dwight Schrute', sales: 50},
//     {name: 'Andy Bernard', sales: 150},
// ])
// 100
function averagesSales(array) {
    var totalSales =[]
    array.forEach(function(salesPerson){
        totalSales.push(salesPerson.sales);
    })
    return //average of total sales//
}


// Write a function called carCreator that accepts an array of 4 elements
// and returns a car object with the following properties: make, model, year, and color.

function carCreator(input) {
    var newCar = {
        make: input[0],
        model: input[1],
        year: input[2],
        color: input[3]
    }
    return newCar;
};

console.log(carCreator(["Kia", "Forte", 2012, "black"]));


// carCreator(["Kia", "Forte", 2012, "black"]) // should return {make: "Kia", model: "Forte", year: 2012, color: "black"}
// carCreator(["Toyota", "Camry", 2020, "silver"]) // should return {make: "Toyota", model: "Camry", year: 2020, color: "silver"}
// carCreator(["Nissan", "Titan", 2018, "red"]) // should return {make: "Nissan", model: "Titan", year: 2018, color "red"}


// Exercise 1. Write a function called makeCar that takes in two strings, make and model, and returns an object with those properties
// Example: makeCar("VW", "beetle") returns the object {"make": "VW", "model", "beetle"}
function makeCar(input1, input2) {
    var car = {}
    car.make = input1
    car.model = input2
    return car
}

console.log(makeCar("VW", "beetle"));

// Exercise 2. Use the following data to create an object named salesReport.
//     The object should have the following properties:
//       title, date, office, and employees.
//       the employees property should hold an array of objects.
//       each employee should be represented by an object with the following properties:
//         employee-number, first-name, last-name, sales-units

var salesReport = {
    title: "Monthly Sales Report",
    date: "03-17-2015",
    office: "Codeup",
    employees: [
        {
            employeeNumber: 1,
            employeeFirstName: "Jane",
            employeeLastName: "Janeway",
            salesUnits: 3
        },
        {
            employeeNumber: 3,
            employeeName: "Tricia",
            employeeLastName: "Triciason",
            salesUnits: 5
        },
        {
            employeeNumber: 4,
            employeeName: "Jeannette",
            employeeLastName: "Jeanson",
            salesUnits: 4
        },
        {
            employeeNumber: 5,
            employeeName: "CharlesEmmersonIII",
            employeeLastName: "Winchester",
            salesUnits: 2
        },
        {
            employeeNumber: 6,
            employeeName: "Chet",
            employeeLastName: "Chedderson",
            salesUnits: 8
        },
        {
            employeeNumber: 7,
            employeeName: "Chaiam",
            employeeLastName: "Chaiamson",
            salesUnits: 12
        },
        {
            employeeNumber: 8,
            employeeName: "Dale",
            employeeLastName: "Dalesinger",
            salesUnits: 1
        },
        {
            employeeNumber: 9,
            employeeName: "Zig",
            employeeLastName: "Ziglar",
            salesUnits: 50
        },
        {
            employeeNumber: 10,
            employeeName: "Henry",
            employeeLastName: "Kissinger",
            salesUnits: 1
        },
        {
            employeeNumber: 11,
            employeeName: "ArthurHerbert",
            employeeLastName: "Fonzarelli",
            salesUnits: 23
        },
        {
            employeeNumber: 12,
            employeeName: "Betty",
            employeeLastName: "Boop",
            salesUnits: 67
        }
    ]

}

// Exercise 3. On the salesReport object you made, add the following methods.
// getEmployeeCount() should return the total number of employees
// getTotalNumberOfSales() should return the total number of units sold
// getAverageSalesPerEmployee() should return the average units sold per employee

function getEmployeeCount() {
    return salesReport.employees.length;
}

console.log(getEmployeeCount());

function getTotalNumberOfSales() {
    var totalSales = 0
    for (i = 0; i < salesReport.employees.length; i++) {
        totalSales = salesReport.employees[i]["salesUnits"] + totalSales;
    }
    return totalSales
}

console.log(getTotalNumberOfSales());

function getAverageSalesPerEmployee() {
    var employees = getEmployeeCount();
    var employeeSales = getTotalNumberOfSales()
    var averageSales = (employeeSales / employees);
    return averageSales
}

console.log(getAverageSalesPerEmployee());


// Exercise 6. Practice with assignment by reference
// create a variable named person1 with a name property. Assign it a name property.
// Now create a variable named person2 and assign person1 to it.
// Then reassign the name property on person2 with person2.name = "Bob";
// console.log the name property on person 1.
// Why do you think changing person2 altered person1?
// The term for this behavior is assignment by reference.

var obj ={}
var person1 = obj.name
var person2 = person1
person2.name = "Bob"
console.log(person1.name)