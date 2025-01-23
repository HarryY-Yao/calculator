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

console.log(operate(1, 2, add));