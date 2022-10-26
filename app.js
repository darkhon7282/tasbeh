const title = document.querySelector(".title")
let text = document.querySelector("h3")
const box = document.querySelector(".box")

// document = html
console.log(document.head);
console.log(title);
console.log(text);


console.log(box);



function changeH3(){
    text.style.color = "red"
    text.style.fontSize = "32px"
    text.style.backgroundColor = "gold"
}

function eH3(){
    text.style.color = "black"
    text.style.fontSize = "18px"
    text.style.backgroundColor = "white"
}



let number = 0

function rotateBox(){
    number++
    box.style.transform = `rotate(${number * 45}deg)`
}

