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

function getEmployeeCount(){
    return salesReport.employees.length;
}
console.log(getEmployeeCount());

function getTotalNumberOfSales(){
    var totalSales = 0
    for(i =0; i < salesReport.employees.length; i++) {
       totalSales= salesReport.employees[i]["salesUnits"] + totalSales;
    }return totalSales
}
console.log(getTotalNumberOfSales());

function getAverageSalesPerEmployee() {
    var employees = getEmployeeCount();
    var employeeSales = getTotalNumberOfSales()
    var averageSales = (employeeSales / employees);
    return averageSales
}
console.log(getAverageSalesPerEmployee());