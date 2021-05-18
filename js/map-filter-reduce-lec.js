// array iteration methods

//.forEach()
// let output = "";
// let prices = [32.99, 21.99, 6.99, 4.99, 12.99, 8.98, 5.99]

// prices.forEach(function(item, index){
//     output = output + "<p>" + item + " is at index " + index + "</p>"
//     $("#output").html(output)
// });
// prices.forEach(function(item, index){
//     let tax = (item + 0.0825).toFixed(2);
//     let total =( parseFloat(item) + parseFloat(tax)).toFixed(2)
//     output = output + "<p>Item number " + (index + 1) + ". Price: $" + item + ". Tax $" + tax + ". Total: $" + total + "</p>"
//     $("#output").html(output)
// });

// let output = "";
// let prices = [32.99, 21.99, 6.99, 4.99, 12.99, 8.98, 5.99]
// let pricesAfterTax = [];
//
// pricesAfterTax = prices.map(function(price){
//     let tax = (price * 0.0825).toFixed(2);
//     let total = (parseFloat(price) + parseFloat(tax)).toFixed(2);
//     return parseFloat(total);
// });
//
// pricesAfterTax.forEach(function(item){
//     output = output + "<p>" + item + "</p>"
//     $("#output").html(output);
// });

// let things = [ "book", "pencil", "marker", "eraser"];
// let pluralThings = things.map(function(thing){
//     return thing;
// });
//
// pluralThings.forEach(function(thing, index){
//     if (index === 0){
//         output = "<p>You must bring the following items:</p>"
//     }
//     output += `<p>${thing}s</p>`;
//     $("#output").html(output)
// })

//======Filter Method======
const cars = [
    {
        make: "Honda",
        model: "Civic",
        mileage: 10428
    },
    {
        make: "Toyota",
        model: "Corolla",
        mileage: 9425
    },
    {
        make: "Ford",
        model: "Mustang",
        mileage: 2567
    },
    {
        make: "Audi",
        model: "A3",
        mileage: 14500
    },
    {
        make: "Mazda",
        model: "3",
        mileage: 11248
    }
];
let output = "";

const mileages = cars.map((car) => car.mileage);

mileages.forEach(function(mileage){
    output = output + "<p>" + mileage + "</p>"
    $("#output").html(output)
})

const under10k = cars.filter(function(car){
    return car.mileage < 10000;
})

under10k.forEach(function(car){
    output = output + "<p>I found a " + car.make + " " + car.model + " with " + car.mileage + " miles.</p>";
    $("#output").html(output)
})

//======Reduce Method======
//Which is the car with the highest mileages?
let highestMileage = cars.reduce(function(accumulator, car, index, carsArray){
    if (index === carsArray.length -1) {
        accumulator.push(car.mileage);
        accumulator.sort(function(a, b){return b-a});
        return accumulator[0];
    } else {
        accumulator.push(car.mileage);
        return accumulator;
    }
}, []);

console.log("The highest mileage is " + highestMileage)
