function add(num1, num2) {
    return num1 + num2;
}
function subtract(num1, num2) {
    return num1 - num2;
}
function multiply(num1, num2) {
    return num1 * num2;
}
function divide(num1, num2) {
    return Math.round((num1 / num2) * 100) / 100;
}

function operate(num1, num2, operator) {
    if (operator == "+") {
        return add(num1, num2);
    } else if (operator == "-") {
        return subtract(num1, num2);
    } else if (operator == "*") {
        return multiply(num1, num2);
    } else if (operator == "/") {
        return divide(num1, num2);
    }
}


let display = document.getElementById("display");


let num1 = 0;
let num2 = 0;
let numOneArr = [];
let numTwoArr = [];
let operator = "";
let step = 0;


function getNum(num) {
    if (step === 0 || step == 1) {
        numOneArr.push(num);
        num1 = Number(numOneArr.join(''));
        display.textContent = num1;
        step = 1;
    } else if (step === 2) {
        numTwoArr.push(num);
        num2 = Number(numTwoArr.join(''));
        display.textContent = num2;
    }
}

function getOperator(op) {
    if (operator) {
        num1 = operate(num1, num2, operator);
        num2 = 0;
        numTwoArr = [];
        operator = op;
        step = 2;
        display.textContent = op;
        
    } else {
        step = 2;
        display.textContent = op;
        operator = op;
    }
    
}


function clearDisplay() {
    display.textContent = "";
    num1 = 0;
    num2 = 0;
    numOneArr = [];
    numTwoArr = [];
    operator = "";
    step = 0;
    result = 0;
}


function calculate() {
    
    let result = operate(num1, num2, operator);
    
    display.textContent = result;


    // content = display.textContent;
    // contentSplit = content.match(/(\d+\.\d+|\d+|[+\-*/()]|(?<=\d|\))-\d+)/g);
    // num1 = Number(contentSplit[0]);
    // num2 = Number(contentSplit[2]);
    // operator = contentSplit[1];

    // let result = operate(num1, num2, operator);
}