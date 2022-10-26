const title = document.querySelector(".title")
const box = document.querySelector(".box")

let count = 0

function counter(){
    count++
    console.log(count);
    title.innerHTML = count
}
function coun(){
    count = 0
    console.log(count);
    title.innerHTML = count
}


function violet(){
    box.style.backgroundColor = "violet"
}
function dod(){
    box.style.backgroundColor = "dodgerblue"
}
function bl(){
    box.style.backgroundColor = "black"
}
function wh(){
    box.style.backgroundColor = "white"
}
