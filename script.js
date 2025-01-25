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

let isDecimal = function(str) {
    for (let i = 0; i < str.length; i++) {
        if(str.charAt(i) == ".") {
            return true;
        }}
    return false;
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
const equalsBtn = document.querySelector("#equals");
const decimalBtn = document.querySelector("#decimal");

// button functionality

let decimalprsnt = false;
let activated = false;

decimalBtn.addEventListener("click", () => {
    if (!(isDecimal(onScreen.textContent))) {
        onScreen.textContent += decimalBtn.textContent;
        decimalprsnt = true;
        decimalBtn.classList.toggle("decimalpresent");
    }
});


addBtn.addEventListener("click", () => {
    if (!(Number(isNaN(onScreen.textContent)))) {
    if (lastPressed && lastPressed != equalsBtn) {
        lastPressed.classList.toggle("active");
        lastPressed = addBtn;
        operation = add;
        lastPressed.classList.toggle("active");
    }
    
    if (lastPressed != addBtn) {
    if (operation) {
        number2 = Number(onScreen.textContent);

        let result = operate(number1, number2, operation);

        if (Number(result) > Math.abs(999999999)) {
            result = Number(result).toExponential(2) 
        }

        onScreen.textContent = result;
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
    if (lastPressed && lastPressed != equalsBtn) {
        lastPressed.classList.toggle("active");
        lastPressed = subtractBtn;
        operation = subtract;
        lastPressed.classList.toggle("active");
    }


    if (lastPressed != subtractBtn) {
        if (operation) {
            number2 = Number(onScreen.textContent);

            let result = operate(number1, number2, operation);

            if (Number(result) > Math.abs(999999999)) {
                result = Number(result).toExponential(2) 
            }

    
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
        if (lastPressed && lastPressed != equalsBtn) {
            lastPressed.classList.toggle("active");
            lastPressed = divideBtn;
            operation = divide;
            lastPressed.classList.toggle("active");
    }


    if (lastPressed != divideBtn) {
        if (operation) {
            number2 = Number(onScreen.textContent);
            let result = operate(number1, number2, operation) + "";
            
            if (Number(result) > Math.abs(999999999)) {
                result = Number(result).toExponential(2)
            
            } else if (result.length > 9) {
                if (Number(result) < Math.abs(9)) {
                    result = Math.round((Number(result) * 10 ** 7)) / 10 ** 7;
                } else if (Number(result) < Math.abs(100) && Number(result) >= Math.abs(10)) {
                    result = Math.round((Number(result) * 10 ** 6)) / 10 ** 6;
                } else if (Number(result) < Math.abs(1000) && Number(result) >= Math.abs(100)) {
                    result = Math.round((Number(result) * 10 ** 5)) / 10 ** 5;
                } else if (Number(result) < Math.abs(10000) && Number(result) >= 10000) {
                    result = Math.round((Number(result) * 10 ** 4)) / 10 ** 4;
                } else {
                    result = Math.round((Number(result) * 10)) / 10;
                }
            }
    

            onScreen.textContent = result;
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
        if (lastPressed && lastPressed != equalsBtn) {
            lastPressed.classList.toggle("active");
            lastPressed = multiplyBtn;
            operation = multiply;
            lastPressed.classList.toggle("active");
    }
    
    
    if (lastPressed != multiplyBtn) {
        if (operation) {
            number2 = Number(onScreen.textContent);
            let result = operate(number1, number2, operation) + "";

            if (Number(result) > Math.abs(999999999)) {
                result = Number(result).toExponential(2)
            
            } else if (result.length > 9) {
                if (Number(result) < Math.abs(9)) {
                    result = Math.round((Number(result) * 10 ** 7)) / 10 ** 7;
                } else if (Number(result) < Math.abs(100) && Number(result) >= Math.abs(10)) {
                    result = Math.round((Number(result) * 10 ** 6)) / 10 ** 6;
                } else if (Number(result) < Math.abs(1000) && Number(result) >= Math.abs(100)) {
                    result = Math.round((Number(result) * 10 ** 5)) / 10 ** 5;
                } else if (Number(result) < Math.abs(10000) && Number(result) >= 10000) {
                    result = Math.round((Number(result) * 10 ** 4)) / 10 ** 4;
                } else {
                    result = Math.round((Number(result) * 10)) / 10;
                }
            }
    
            onScreen.textContent = result;
            number1 = undefined;
            number2 = undefined;
        }
        operation = multiply;
        
        if (lastPressed && lastPressed != equalsBtn) {
            lastPressed.classList.toggle("active");
        }
        
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
        if (Number(result) < Math.abs(9)) {
            result = Math.round((Number(result) * 10 ** 7)) / 10 ** 7;
        } else if (Number(result) < Math.abs(100) && Number(result) >= Math.abs(10)) {
            result = Math.round((Number(result) * 10 ** 6)) / 10 ** 6;
        } else if (Number(result) < Math.abs(1000) && Number(result) >= Math.abs(100)) {
            result = Math.round((Number(result) * 10 ** 5)) / 10 ** 5;
        } else if (Number(result) < Math.abs(10000) && Number(result) >= 10000) {
            result = Math.round((Number(result) * 10 ** 4)) / 10 ** 4;
        } else {
            result = Math.round((Number(result) * 10)) / 10;
        }
    }
    onScreen.textContent = result;
    }
    if (lastPressed) {
        lastPressed.classList.remove("active");
    }
    number1 = 0;
    number2 = 0;
    operation = null;
    lastPressed = equalsBtn;
    if (decimalprsnt) {
        decimalBtn.classList.toggle("decimalpresent");
        decimalprsnt = false;
    }
}});

clear.addEventListener("click", () => {
    onScreen.textContent = "";
    number1 = 0;
    number2 = 0;
    operation = null;
    if (decimalprsnt) {
        decimalBtn.classList.toggle("decimalpresent");
        decimalprsnt = false;
    }
    if (lastPressed && lastPressed != equalsBtn) {
        lastPressed.classList.remove("active")};
});

let display = function(button) {
    onScreen.textContent += button.textContent
}


numButtons.forEach((button) => {
    button.addEventListener("click", () =>{
        if (onScreen.textContent.length < 10 || ((onScreen.textContent.length == 10) && operation)) {
            if (lastPressed) {
                onScreen.textContent = "";
                if (decimalprsnt) {
                    decimalBtn.classList.toggle("decimalpresent");
                    decimalprsnt = false;
                }
            }
        if (lastPressed && lastPressed != equalsBtn) {       
        lastPressed.classList.remove("active");
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

