const totaleNumeri = 6;
const arrayNumeri = [];

const inputNumbers = document.getElementsByClassName("input-number");
const outputNumbers = document.getElementsByClassName("output-number");
const buttons = document.getElementsByClassName("button");

buttons[0].onclick = () => {
    for (let i = 0; i < totaleNumeri; i++) {
        if (inputNumbers[i].value % 2 == 1) {
            outputNumbers[i].value = inputNumbers[i].value;
            inputNumbers[i].value = null;
        }
    }
}

buttons[1].onclick = () => {
    for (let i = 0; i < totaleNumeri; i++) {
        if (outputNumbers[i].value % 2 == 0 && outputNumbers[i].value > 0) {
            inputNumbers[i].value = outputNumbers[i].value;
            outputNumbers[i].value = null;
        }
    }
}