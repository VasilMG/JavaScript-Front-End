function subtract() {
    const first = Number(document.querySelector('#firstNumber').value);
    const second = Number(document.querySelector('#secondNumber').value);

    document.querySelector('#result').textContent = first - second
}