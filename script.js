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
let lastPressed;

let operate = function(x = 0, y = 0, operation = add) {
    return operation(x, y);
}

const buttons = document.querySelectorAll(".btn");
const numButtons = document.querySelectorAll(".num-btn");
const onScreen = document.querySelector(".on-screen");
const clear = document.querySelector("#AC");
const operationBtns = document.querySelectorAll(".operator");
const addBtn = document.querySelector("#add");
const subtractBtn = document.querySelector("#subtract");
const multiplyBtn = document.querySelector("#multiply");
const divideBtn = document.querySelector("#divide");
const equalsBtn = document.querySelector("#equals")


addBtn.addEventListener("click", () => {
    if (!(Number(isNaN(onScreen.textContent)))) {
    if (lastPressed == divideBtn || lastPressed == multiplyBtn || lastPressed == subtractBtn) {
        lastPressed = addBtn;
        operation = add;
    }
    
    if (lastPressed != addBtn) {
    if (operation) {
        number2 = Number(onScreen.textContent);

        onScreen.textContent = operate(number1, number2, operation);
        number1 = undefined;
        number2 = undefined;
    }
    
    operation = add;
    if (lastPressed && lastPressed != equalsBtn) {
        lastPressed.classList.toggle("active");
    }
    lastPressed = addBtn;
    lastPressed.classList.toggle("active");
    
    if (onScreen.textContent.length > 0) {
        number1 = Number(onScreen.textContent);
    }
}}
});

subtractBtn.addEventListener("click", () => {
    if (!(Number(isNaN(onScreen.textContent)))) {
    if (lastPressed == divideBtn || lastPressed == multiplyBtn || lastPressed == addBtn) {
        lastPressed = subtractBtn;
        operation = subtract;
    }


    if (lastPressed != subtractBtn) {
        if (operation) {
            number2 = Number(onScreen.textContent);
    
            onScreen.textContent = operate(number1, number2, operation);
            number1 = undefined;
            number2 = undefined;
        }
        
        operation = subtract;
        if (lastPressed && lastPressed != equalsBtn) {
            lastPressed.classList.toggle("active");
        }
        lastPressed = subtractBtn;
        lastPressed.classList.toggle("active");
        
        if (onScreen.textContent.length > 0) {
            number1 = Number(onScreen.textContent);
        }
    }}
});

divideBtn.addEventListener("click", () => {
    if (!(Number(isNaN(onScreen.textContent)))) {
    if (lastPressed == addBtn || lastPressed == multiplyBtn || lastPressed == subtractBtn) {
        lastPressed = divideBtn;
        operation = divide;
    }


    if (lastPressed != divideBtn) {
        if (operation) {
            number2 = Number(onScreen.textContent);
    
            onScreen.textContent = operate(number1, number2, operation);
            number1 = undefined;
            number2 = undefined;
        }
        
        operation = divide;
        if (lastPressed && lastPressed != equalsBtn) {
            lastPressed.classList.toggle("active");
        }

        lastPressed = divideBtn;
        lastPressed.classList.toggle("active");
        if (onScreen.textContent.length > 0) {
            number1 = Number(onScreen.textContent);
        }
    }}
});

multiplyBtn.addEventListener("click", () => {
    if (!(Number(isNaN(onScreen.textContent)))) {
    if (lastPressed == divideBtn || lastPressed == addBtn || lastPressed == subtractBtn) {
        lastPressed = multiplyBtn;
        operation = multiply;
    }
    
    
    if (lastPressed != multiplyBtn) {
        if (operation) {
            number2 = Number(onScreen.textContent);
    
            onScreen.textContent = operate(number1, number2, operation);
            number1 = undefined;
            number2 = undefined;
        }
        if (lastPressed && lastPressed != equalsBtn) {
            lastPressed.classList.toggle("active");
        }
        
        operation = multiply;
        lastPressed = multiplyBtn;
        lastPressed.classList.toggle("active");
        if (onScreen.textContent.length > 0) {
            number1 = Number(onScreen.textContent);
        }
    }}
});

equalsBtn.addEventListener("click", () => {
    if (lastPressed != equalsBtn) {
    number2 = Number(onScreen.textContent);

    if (number2 == 0 && operation == divide) {
        onScreen.textContent = "ERROR"
        
    } else {
    let result = operate(number1, number2, operation) + ""
    
    if (Number(result) > 999999999) {
        result = Number(result).toExponential(2)
    
    } else if (result.length > 9) {
        result = Math.round(Number(result) * 10 ** Math.abs(10 - result.length)) / 10 ** Math.abs(10 - result.length);
    }
    onScreen.textContent = result;
    }
    if (lastPressed) {
        lastPressed.classList.toggle("active");
    }
    number1 = 0;
    number2 = 0;
    operation = null;
    lastPressed = equalsBtn;
}});

clear.addEventListener("click", () => {
    onScreen.textContent = "";
    number1 = 0;
    number2 = 0;
    operation = null;
});

let display = function(button) {
    onScreen.textContent += button.textContent
}


numButtons.forEach((button) => {
    button.addEventListener("click", () =>{
        if (onScreen.textContent.length < 10) {
            if (lastPressed) {
                onScreen.textContent = "";
            }
        if (lastPressed && lastPressed != equalsBtn) {       
        lastPressed.classList.toggle("active");
        }
        lastPressed = undefined;
        display(button)
    }
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

