var btnLeft = document.querySelector(".btn-left")
var btnRight = document.querySelector(".btn-right")
var imgContainer = document.querySelector(".img-container")

var counter = 0;

btnLeft.addEventListener("click", function(e) {
    if (counter !== 0) {
        counter--
imgContainer.style.backgroundImage = 'url(“../img/contBcg-${counter}.jpeg”)'
    }
})

btnRight.addEventListener("click", function(e) {
    if (counter !== 4) {
        counter++
        imgContainer.style.backgroundImage = 'url(“../img/contBcg-${counter}.jpeg”)'
    }
})