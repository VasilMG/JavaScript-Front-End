function addItem() {
    const newText = document.querySelector("#newItemText").value;
    const item = document.createElement('li');
    item.textContent = newText

    const deleteButton = document.createElement('a');
    deleteButton.href = '#';
    deleteButton.textContent = '[Delete]';

    deleteButton.addEventListener('click', (event) => {
        event.target.parentElement.remove();
    })


    item.appendChild(deleteButton)


    const theDIv = document.querySelector('#items').appendChild(item);
}