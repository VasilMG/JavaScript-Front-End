window.addEventListener("load", solve)

function solve() {

    const inputs = {
        title: document.querySelector('#task-title'),
        category: document.querySelector('#task-category'),
        content: document.querySelector('#task-content'),
    }

    const selectors = {
        publishBth: document.querySelector('#publish-btn'),
        reviewUl: document.querySelector('#review-list'),
        publishedUL: document.querySelector('#published-list')
    }

    // if (Object.values(inputs).some(v => v === '')){
    //     window.preventDefault()
    // }

    selectors.publishBth.addEventListener('click', sendToReview)


    function sendToReview () {
        if (Object.values(inputs).some(v => v.value === '')){
            return;
        }

        const newItemLi = createElement('li', null, ['rpost'])
        const newArt = createElement('article', null, null, newItemLi)

        const h4New = createElement('h4', inputs.title.value, null, newArt)

        const newFirstP = createElement('p', `Category: ${inputs.category.value}`, null, newArt )
        const newSecondP = createElement('p', `Content: ${inputs.content.value}`, null, newArt )

        const editBtn = createElement('button', `Edit`, ['action-btn', 'edit'], newItemLi)
        editBtn.addEventListener('click', editTask)
        const posttBtn = createElement('button', `Post`, ['action-btn', 'post'], newItemLi)
        posttBtn.addEventListener('click', postTask)

        selectors.reviewUl.appendChild(newItemLi)

        document.querySelector('#task-title').value =''
        inputs.category.value = ''
        inputs.content.value = ''


    }

    function createElement (type, content,  classes, parent) {
        const element = document.createElement(type);

        if (content) {
            element.textContent = content;
        }

        if (classes) {
            element.classList.add(...classes);
        }

        if (parent) {
            parent.appendChild(element)
        }

        return element;

    }

    function editTask (event) {
        let article = event.target.parentElement.firstChild

        inputs.title.value = article.children[0].textContent
        inputs.category.value = article.children[1].textContent.slice(10)
        inputs.content.value = article.children[2].textContent.slice(9)

        document.querySelector('#review-list').innerHTML = ''
    
    }

    function postTask (event) {
        let theLi = event.target.parentElement

        theLi.removeChild(theLi.lastChild)
        theLi.removeChild(theLi.lastChild)

        document.querySelector('#review-list').innerHTML = ''
        document.querySelector('#published-list').appendChild(theLi);

    }



  
}