function addItem() {
    const newTxt = document.querySelector('#newItemText');
    const newValue = document.querySelector('#newItemValue');
    const txtValue = newTxt.value
    const valueValue = newValue.value
    const selector = document.querySelector('#menu');
    const newOption = document.createElement('option');
    newOption.value = valueValue;
    newOption.textContent = txtValue;

    selector.appendChild(newOption);

    newTxt.value = ''
    newValue.value = ''
    
}