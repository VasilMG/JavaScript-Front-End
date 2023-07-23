function addItem() {
    const newText = document.querySelector("#newItemText").value;
    const item = document.createElement('li');
    item.textContent = newText
    const theDIv = document.querySelector('#items').appendChild(item);
}