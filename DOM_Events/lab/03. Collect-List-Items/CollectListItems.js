function extractText() {
    const theList = Array.from(document.querySelectorAll('#items li'));
    const newText = theList.map(item => item.textContent).join('\n');

    document.querySelector('textarea').value = newText
    
}