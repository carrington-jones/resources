//1. When a user hits the "g" key, the background of the page should turn purple.
var mainBody = document.querySelector("#body")

function bodyPurple() {
    mainBody.style.backgroundColor = "purple";

}

$("#body").on("keyup", function(e){
    if(e.which==71) {
    bodyPurple();
    }
});

//2.Every time the enter key is pressed, increment and display a counter that shows the total number of times the enter key has been pressed.
var count = 0
var counter = document.querySelector("#counter")

function counterIncrease(){
    count++;
    counter.innerHTML = count
}
function counterDecrease(){
    count--;
    counter.innerHTML = count
}

$(document).on("keydown", function(e){
    if(e.which==80) {
        counterIncrease();
    }
    if(e.which==77) {
        counterDecrease();
    }
});

//3.When someone types 1, 2, 3 in a row, show an alert that says "You get a 50% discount!".
var bucket = [];
var secretcode = "495051";
var input = ""
$(document).keydown(function (e) {
    var key = e.keyCode;
    bucket.push(key);
    var newString = bucket.join('');
    console.log(newString)
    if(newString === secretcode) {
        alert("You get a 50% discount!")
    }
});
