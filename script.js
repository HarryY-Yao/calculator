let add = function(x, y) {
    return x + y;
}

let subtract = function(x, y) {
    return x - y;
}

let multiply = function(x, y) {
    return x * y;
}

let divide = function(x, y) {
    return x / y;
}

let number1;
let number2;
let operation;

let operate = function(x, y, operation) {
    return operation(x, y);
}

const buttons = document.querySelectorAll(".btn");
const numButtons = document.querySelectorAll(".num-btn");
const onScreen = document.querySelector(".on-screen");
const clear = document.querySelector("#AC");

clear.addEventListener("click", () => {
    onScreen.textContent = ""
});

let display = function(button) {
    onScreen.textContent += button.textContent
}


numButtons.forEach((button) => {

    button.addEventListener("click", () =>{
        if (onScreen.textContent.length < 10)
        display(button);
    });


});

buttons.forEach((button) => {
    button.addEventListener("mouseenter", () => {
        button.style.backgroundColor = "lightgray";

    button.addEventListener("mouseleave", () => {
        button.style.backgroundColor = "";
    });

    button.addEventListener("mousedown", () => {
        button.style.cssText = "border: 2px solid black"
        button.style.backgroundColor = "lightgray";
    });

    button.addEventListener("mouseup", () => {
        button.style.cssText = "border: 0;"
        button.style.backgroundColor = "lightgray";
    });
      
    });
});