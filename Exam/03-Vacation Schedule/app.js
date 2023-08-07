const BASE_URL = 'http://localhost:3030/jsonstore/tasks/'

const selectors ={
    loadVacations: document.querySelector('#load-vacations'),
    confirmedDiv: document.querySelector('#list'),
    vacationAdd: document.querySelector('#add-vacation'),
    editVacationBtn: document.querySelector('#edit-vacation'),
    form: document.querySelector('form'),
}

const inputs = {
    name: document.querySelector('#name'),
    days: document.querySelector('#num-days'),
    date: document.querySelector('#from-date'),
}

selectors.loadVacations.addEventListener('click', loadAll)
selectors.vacationAdd.addEventListener('click', addVacation)
selectors.editVacationBtn.addEventListener('click', editVacation)

async function loadAll(e) {
    if (e){
        e.preventDefault()
    }

    selectors.confirmedDiv.innerHTML = ''

    const vacations = await (await fetch(BASE_URL)).json()

    Object.values(vacations).forEach(v => {
        const divContainer = createElement('div', null, ['container'], null, v._id)
        createElement('h2', `${v.name}`, null, divContainer)
        createElement('h3', `${v.date}`, null, divContainer)
        createElement('h3', `${v.days}`, null, divContainer)

        const changeBtn = createElement('button', "Change", ['change-btn'])
        changeBtn.addEventListener('click', funcChange)
        divContainer.appendChild(changeBtn)

        const doneBtn = createElement('button', "Done", ['done-btn'])
        doneBtn.addEventListener('click', doneFunc)
        divContainer.appendChild(doneBtn)

        selectors.confirmedDiv.appendChild(divContainer)
        
    })

    console.log(vacations)
}


async function addVacation (e) {
    e.preventDefault()

    const newVacation = {
        name: inputs.name.value,
        days: inputs.days.value,
        date: inputs.date.value,
    }

    const headers = {
        method: 'POST',
        body: JSON.stringify(newVacation),
    }

    await fetch(BASE_URL, headers)

    Object.values(inputs).forEach( i => {
        i.value = '';
    })

    await loadAll();
}


function funcChange (e){
    e.preventDefault()

    inputs.name.value = e.target.parentElement.children[0].textContent
    inputs.days.value = e.target.parentElement.children[2].textContent
    inputs.date.value = e.target.parentElement.children[1].textContent

    const divToRemove = e.target.parentElement
    selectors.form.setAttribute('id', divToRemove.id)
    divToRemove.remove()

    selectors.editVacationBtn.disabled = false
    selectors.vacationAdd.disabled = true

    

 }


async function editVacation (e) {
    e.preventDefault()

    const editedVacation = {
        name: inputs.name.value,
        days: inputs.days.value,
        date: inputs.date.value,
        _id: selectors.form.id,
    }

    const theHeaders = {
        method: 'PUT',
        body: JSON.stringify(editedVacation),
    }

    await fetch(`${BASE_URL}${e.target.parentElement.id}`, theHeaders)

    selectors.editVacationBtn.disabled = true
    selectors.vacationAdd.disabled = false

    selectors.form.id = ''

    Object.values(inputs).forEach( i => {
        i.value = '';
    })

    await loadAll()


 }


async function doneFunc (e) {
    e.preventDefault()

    await fetch(`${BASE_URL}${e.target.parentElement.id}`, {method: 'DELETE'})
    
    await loadAll()

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
        element.setAttribute('id', id)
    }

    if (parent) {
        parent.appendChild(element)
    }

    return element;
}
