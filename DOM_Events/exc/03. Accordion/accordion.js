function toggle() {
    const theButton = document.querySelector('.button');
    const moreDiv = document.querySelector('#extra');
    if (theButton.textContent === 'More'){
        moreDiv.style.display = 'block';
        theButton.textContent = 'Less';
    }else {
        moreDiv.style.display = 'none';
        theButton.textContent = 'More';
    }
    // theButton.addEventListener('click', (e) => {
    //     if (e.target.textContent === 'More') {
    //         moreDiv.style.display = 'block';
    //         e.target.textContent = 'Less';
    //     } else {
    //         moreDiv.style.display = 'none';
    //         e.target.textContent = 'More';
    //     }
    // })
    
}