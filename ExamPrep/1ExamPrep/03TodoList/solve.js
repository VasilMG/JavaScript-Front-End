// TODO
function attachEvents() {


    const BASE_URL = 'http://localhost:3030/jsonstore/tasks/'
  
    const selectors = {
        inputTask: document.querySelector('#title'),
        addBtn: document.querySelector('#add-button'),
        loadAllBtn: document.querySelector('#load-button'),
        ulTasks: document.querySelector('#todo-list'),
    }

    selectors.addBtn.addEventListener('click', addTask)

    selectors.loadAllBtn.addEventListener('click', allLoad)

    async function allLoad (e) {
        
        if (e) {
            e.preventDefault()
        }

        selectors.ulTasks.innerHTML = ''
        

        const data = await (await fetch(BASE_URL)).json()

        console.log(data)



        Object.values(data).forEach(el => {
            const newLi = createElement('li')

            const newSpan = createElement('span', el.name)
            newLi.appendChild(newSpan)

            removeBtn = createElement('button', null, null, null, el._id)
            removeBtn.textContent = "Remove"
            removeBtn.addEventListener('click', removeTask)
            newLi.appendChild(removeBtn)

            editBtn = createElement('button', null, null, null, el._id)
            editBtn.textContent = "Edit"
            editBtn.addEventListener('click', editTask)
            newLi.appendChild(editBtn)

            selectors.ulTasks.appendChild(newLi)

        })

    }

    async function addTask (e) {
        e.preventDefault()


        let headers = {
            method: 'POST',
            body: JSON.stringify({name: selectors.inputTask.value})
        }

        await fetch(BASE_URL, headers)

        allLoad();
    }

    async function removeTask (e) {
        e.preventDefault()


        const headers = {
            method: 'DELETE',
        }

        await fetch(`${BASE_URL}${e.target.attributes['data-id'].value}`, headers)

        allLoad();

    }

    async function editTask (e ) {
        e.preventDefault()

        const currLi = e.target.parentElement 

        console.log(e.target.attributes['data-id'].value)

        const inputEdit = createElement('input')
        inputEdit.value = currLi.children[0].textContent

        removeBtn = createElement('button', null, null, null, e.target.attributes['data-id'].value)
        removeBtn.textContent = "Remove"
        removeBtn.addEventListener('click', removeTask)

        submitBtn = createElement('button', null, null, null, e.target.attributes['data-id'].value)
        submitBtn.textContent = "Submit"
        submitBtn.addEventListener('click', submitTask)

        currLi.innerHTML = ``
        currLi.appendChild(inputEdit)
        currLi.appendChild(removeBtn)
        currLi.appendChild(submitBtn)


    }

    async function submitTask (e) {
        e.preventDefault()

        const headers = {
            method: 'PUT',
            body: JSON.stringify({name: e.target.parentElement.children[0].value, _id: e.target.attributes['data-id'].value })
        }

        await fetch(`${BASE_URL}${e.target.attributes['data-id'].value}`, headers)


        allLoad();
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

attachEvents();
