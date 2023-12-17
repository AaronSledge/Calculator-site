
class Calculator {
    constructor(currentValueText) {
        this.currentValueText = currentValueText;
    }

    display(numButton) {
       //this.currentValue = numButton;
       this.currentValueText.innerText = numButton;
    }
}

let numButtons = document.querySelectorAll('[data-number');
let currentValueText = document.getElementById('result');

const calculator = new Calculator(currentValueText);

numButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.display(button.innerText);
    })
})

