function deleteByEmail() {
    const theInput = document.querySelector('input[name="email"]').value
    // 'input[name="email"]' - selector for input that has attr name == emial

    const emialBoxes = Array.from(document.querySelectorAll('td:nth-child(even)'));

    const userEmail = emialBoxes.find(item => item.textContent === theInput);
    // can be also done with .filter()
    const result = document.querySelector("#result")

    if (userEmail) {
        userEmail.parentElement.remove();
        // otherwise we hav eto make variables with the parent and delete it through the grandparent
        result.textContent = 'Deleted.'
    }else {
        result.textContent = 'Not Found.'
    }


    
}