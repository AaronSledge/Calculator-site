
class Calculator {
    constructor(currentValueText, nextValueText) {
        this.currentValueText = currentValueText;
        this.nextValueText = nextValueText;
        this.currentOperand = "";
        this.nextValue = "";
        this.results = 0;
    }

    store(numButton) {
       if (this.currentOperand == "") {
        this.currentValue = numButton;
       }

       else {
        this.nextValue = numButton;
       }
    }
    display() {
        
        if (this.currentOperand == "") {
            this.currentValueText.append(this.currentValue);
        }

        else {
            this.nextValueText.append(this.nextValue);
        }
    }

    clear() {
        this.currentValue = "";
        this.currentValueText.innerText = "";
        this.nextValueText.innerText ="";
        this.currentOperand = "";
    }

    operand(text) {
        this.currentOperand = text;
        this.currentValueText.append(this.currentOperand);
    }

    equals() {
        let num1 = parseInt(this.currentValueText.innerText);
        let num2 = parseInt(this.nextValueText.innerText);
        
        if (this.currentOperand == '+') {
            this.results = num1 + num2;
        }
        else if (this.currentOperand == '-') {
            this.results = num1 - num2;
        }

        else if (this.currentOperand == 'x') {
            this.results = num1 * num2;
        }

        else if (this.currentOperand == '/') {
            this.results = num1 / num2;
        }

        this.currentValueText.innerText = this.results;
        this.nextValueText.innerText = "";
        this.currentOperand = "";
    }
}

let numButtons = document.querySelectorAll('[data-number]');
let currentValueText = document.getElementById('first');
let nextValueText = document.getElementById('next');
let clearButton = document.getElementById('clear');
let operandButtons = document.querySelectorAll('[data-operand]');
let equalButton = document.getElementById('equals');

const calculator = new Calculator(currentValueText, nextValueText);

numButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.store(button.innerText);
        calculator.display();
    })
})

clearButton.addEventListener('click', () => {
    calculator.clear();
})

operandButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.operand(button.innerText);
    })
})

equalButton.addEventListener('click', () => {
    calculator.equals();
})
