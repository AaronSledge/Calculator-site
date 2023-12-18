
class Calculator {
    constructor(currentValueText) {
        this.currentValueText = currentValueText;
    }

    display(numButton) {
       this.currentValue = numButton;
       this.currentValueText.append(numButton);
    }

    clear() {
        this.currentValue = "";
        this.currentValueText.innerText = "";
    }
}

let numButtons = document.querySelectorAll('[data-number');
let currentValueText = document.getElementById('result');
let clearButton = document.getElementById('clear');

const calculator = new Calculator(currentValueText);

numButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.display(button.innerText);
    })
})

clearButton.addEventListener('click', () => {
    calculator.clear();
})
