console.log('Hello');
/*
Write basic arithmatic functions
All button names get the value from thier innerText
Write function to display the current pressed button, it will add to existing data of display, so that full operation is visible in display
Now for the calculation part, we can follow two approach
First : Store the num1 when pressing the operator btn
    Then get the second number when pressing = btn, by splitting the current display
Second: when pressing the = btn, split and assing num1, num2, and perform operation

For enabling single decimal, used disable attr of button 
*/


var num1 = "";
var num2 = "";
var operator = "";
var dotPressed = 0;

const buttonDisplay = document.querySelector(".display")
const buttonClear = document.querySelector(".clear")
const buttonDelete = document.querySelector(".delete")
const buttonDot = document.querySelector("#dot");


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
function setDisplay(num) {
    let curData = buttonDisplay.innerText;
    buttonDisplay.innerHTML = `${curData}${num}`;
}

function clearDisplay() {
    buttonDisplay.innerHTML = "";
    resetDecimal(buttonDot);
}

function setDecimal(button) {
    if (dotPressed === 0) {
        button.disabled = true;
        dotPressed = 1;
    } 
}
function resetDecimal(button) {
    dotPressed = 0;
    button.disabled = false;
}


const allBtns = document.querySelectorAll(".numButton");
allBtns.forEach((button) => {
    button.addEventListener('click', () => {
        // logic for pressing dot only one time : 
        if (button.innerText===".") {
            setDecimal(button);
        }
        const num = button.innerText;
        // console.log(num);
        // get cur number from display and append the new number from setDisplay function 
        setDisplay(num);
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
    setDisplay(newNumber);
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
        setDisplay(`${num1}${operator}`);

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
    console.log(`Result: ${result}`);

    //check for overlfow due to display width 
    if (result.toString().split('').length > 13) {
        result = result.toFixed(13);
    }
    setDisplay(result);
    num1="";num2="";operator="";
})

clearDisplay() 
