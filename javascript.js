console.log('Hello');

var num1 = "";
var num2 = "";
var operator = "";

const buttonDisplay = document.querySelector(".display");
const buttonClear = document.querySelector(".clear");
const buttonDelete = document.querySelector(".delete");


function add(a, b) {
    return a + b;
}
function subtract(a,b) {
    return a - b;
}

function divide(a,b) {
    return a / b;
}

function multiply(a,b) {
    return a * b;
}

// functions to display current number , 
let curData = "";
function displayNum(num) {
    let curData = buttonDisplay.innerText;
    buttonDisplay.innerHTML = `${curData}${num}`;
}

function clearDisplay() {
    buttonDisplay.innerHTML = "";
}



const allBtns = document.querySelectorAll(".numButton");
allBtns.forEach((button) => {
    button.addEventListener('click', () => {
        const num = button.innerText;
        // console.log(num);
        // get cur number from display and append the new number from displayNum function 
        displayNum(num);
    })
})

// logic to clear the data and display
buttonClear.addEventListener('click', () => {
    clearDisplay();
});

// logic to delete the previous number 
buttonDelete.addEventListener('click', () => {
    let currentValue = buttonDisplay.innerText;
    console.log(currentValue);
    const newNumber = Number(currentValue.toString().slice(0,-1));
    console.log(`New Number : ${newNumber}`);
    clearDisplay();
    displayNum(newNumber);
});

console.log(num1)

// logic for operator buttons 
// once the operator button is clicked, curDisplay will be saved to num1, then display will be reset to 0, then operaotr var will be set, then when eq pressed then curDispl will be to num2 , and operation will be performed 
const allOperatorButtons = document.querySelectorAll(".operatorButton");
allOperatorButtons.forEach((button) => {
    button.addEventListener('click', () => {
        operator = button.innerText;
        // console.log(`Operator : ${operator}`);
        switch (operator) {
            case '/':
                console.log(`division : ${operator}`);
                break;
            case '*':
                console.log(`multiply : ${operator}`);
                break;
            case '-':
                console.log(`subtract : ${operator}`);
                break;
            case '+':
                console.log(`add : ${operator}`);
                break;
        }
        //remove the operators from buttonDisplay if any & then save in num1
         let curData = buttonDisplay.innerText;
         num1 = Number(curData.replace(/[/*+-]/g, ''));
        // num1 = buttonDisplay.innerHTML;
        clearDisplay();
        displayNum(`${num1}${operator}`);

    });
})

// logic for eq button 
let result = "";
const equalButton = document.querySelector(".equalButton");
equalButton.addEventListener('click', () => {
    // get the current display which is num1 + num2 , split this with operator 
    // display is additive so always all text entered will be visible, apart from 1 operator and 1 decimal . 
    let curData = buttonDisplay.innerText;
    num2 = Number(curData.split(operator)[1]);
    // num2 = Number(buttonDisplay.innerHTML);
    console.log(`Number1: ${num1}, Number2: ${num2}`);
    switch (operator) {
        case '/':
            result = divide(num1,num2);
            break;
        case '*':
            result = multiply(num1,num2);
            break;
        case '-':
            result = subtract(num1,num2);
            break;
        case '+':
            result = add(num1,num2);
            break;
    }
    //Update the display
    clearDisplay();
    displayNum(result);
    num1="";num2="";operator="";
    console.log(`Result: ${result}`);
})

clearDisplay() 

