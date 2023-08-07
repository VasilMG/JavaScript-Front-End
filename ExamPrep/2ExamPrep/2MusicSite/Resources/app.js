window.addEventListener('load', solve);

function solve() {

    const inputItems = {
        genre: document.querySelector('#genre'),
        name: document.querySelector('#name'),
        author: document.querySelector('#author'),
        date: document.querySelector('#date'),
    }

    const selectors = {
        addBtn: document.querySelector('#add-btn'),
        textLikes: document.querySelector('div.likes > p'), 
        allHitsCont: document.querySelector('.all-hits-container'),
        savedContainer: document.querySelector('.saved-container')
    }

    selectors.addBtn.addEventListener('click', addSong)


    function addSong(e) {
        e.preventDefault();

        if (Object.values(inputItems).some(i => i.value === '')){
            return;
        }

        const divSong = createElement('div', null, ['hits-info'])
        const pic = createElement('img')
        pic.setAttribute('src', './static/img/img.png')
        divSong.appendChild(pic)
        const firsth2 = createElement('h2', `Genre:` + ' ' + `${inputItems.genre.value}`)
        divSong.appendChild(firsth2)
        const secondH2 = createElement('h2', `Name:` + " " +  `${inputItems.name.value}`)
        divSong.appendChild(secondH2)
        const thirdH2 = createElement('h2', `Author:` + ' ' +  `${inputItems.author.value}`)
        divSong.appendChild(thirdH2)
        const h3Song = createElement('h3', `Date:` + " " + `${inputItems.date.value}`)
        divSong.appendChild(h3Song)

        const saveBtn = createElement('button', 'Save song', ['save-btn'])
        saveBtn.addEventListener('click', saveSong)
        divSong.appendChild(saveBtn)
        const likeBtn = createElement('button', 'Like song', ['like-btn'])
        likeBtn.addEventListener('click', increaseLikes)
        divSong.appendChild(likeBtn)
        const deleteBtn = createElement('button', 'Delete', ['delete-btn'])
        deleteBtn.addEventListener('click', delSong)
        divSong.appendChild(deleteBtn)

        selectors.allHitsCont.appendChild(divSong)

        Object.values(inputItems).forEach(i => {
            i.value = '';
        })

    }

    function increaseLikes (e) {
        e.preventDefault();

        let [text, number] = selectors.textLikes.textContent.split(': ')
        number = Number(number) + 1;
        selectors.textLikes.textContent = text + ': ' + number 

        e.target.disabled = true;

       
    }

    function saveSong (e) {
        let theDiv = e.target.parentElement
        let theSaveBtn = theDiv.children[5]
        let theLikeBtn = theDiv.children[6]

        theSaveBtn.remove()
        theLikeBtn.remove()

        console.log(theDiv)

        selectors.savedContainer.appendChild(theDiv)

        
    }

    function delSong (e) {
        e.preventDefault()

    const theDiv = e.target.parentElement

    theDiv.remove()
        
    }

    function createElement (type, content, classes, parent, id) {
        const element = document.createElement(type)

        if (content){
            element.textContent = content;
        }

        if (classes) {
            element.classList.add(...classes);
        }

        if (id) {
            element.setAttribute('data-id', id)
        }

        if (parent) {
            parent.appendChild(element)
        }

        return element;
    }

}