prevButton = document.querySelector("#lowerButton")
nextButton = document.querySelector("#upperButton")

var count = 0
prevButton.addEventListener("click", function(){
    count--
    counter.innerHTML = count
})
nextButton.addEventListener("click", function(){
    count++
    counter.innerHTML = count
})
var counter = document.querySelector("#counter")


if( count < 0){
    // counter.style.color = "red"
    $("counter").css("color", "red");
} else if(count > 0){
    // counter.style.color = "green"
    $("counter").css("color", "green");
}




