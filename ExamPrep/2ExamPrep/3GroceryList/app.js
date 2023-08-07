const BASE_URL = "http://localhost:3030/jsonstore/grocery/"

const selectors = {
    loadProducts: document.querySelector('#load-product'),
    addProductBtn: document.querySelector('#add-product'),
    updateProductBtn: document.querySelector('#update-product'),
    tableBody: document.querySelector('#tbody'),
    form: document.querySelector('form'),

}

const theInputs = {
    productName: document.querySelector('#product'),
    count: document.querySelector('#count'),
    price: document.querySelector('#price'),
}

selectors.loadProducts.addEventListener('click', loadAll)
selectors.addProductBtn.addEventListener('click', addProduct)

async function loadAll (e) {

    if (e) {
        e.preventDefault()
    }
    

    selectors.tableBody.innerHTML = ""

    const products = await (await fetch(BASE_URL)).json()


    Object.values(products).forEach (pr => {
        const theTR = createElement('tr')
        theTR.setAttribute('id', pr._id)
        const tdName = createElement('td', `${pr.product}`, ['name'])
        theTR.appendChild(tdName)

        const tdCount = createElement('td', `${pr.count}`, ["count-product"])
        theTR.appendChild(tdCount)

        const tdPrice = createElement('td', `${pr.price}`, ["product-price"])
        theTR.appendChild(tdPrice)

        const buttonTD = createElement('td', null, ['btn'])

        const updateBtn = createElement('button', 'Update', ['update'])
        updateBtn.addEventListener('click', enableUpdate)
        buttonTD.appendChild(updateBtn)

        const deleteBtn = createElement('button', 'Delete', ['delete'])
        deleteBtn.addEventListener('click', delProduct)
        buttonTD.appendChild(deleteBtn)


        theTR.appendChild(buttonTD)

        selectors.tableBody.appendChild(theTR)

    })

}

async function addProduct (e) {
    e.preventDefault()

    const productNew = {
        product: theInputs.productName.value,
        count: theInputs.count.value,
        price: theInputs.price.value,
    }

    await fetch (BASE_URL, {
        method: 'POST',
        body: JSON.stringify(productNew),
    })

    Object.values(theInputs).forEach(input => {
        input.value = '';
    })


    await loadAll();


}


async function delProduct (e) {
    e.preventDefault()

    const parent = e.target.parentElement.parentElement

    await fetch (`${BASE_URL}${parent.id}`, {
        method: 'DELETE',
    })

    await loadAll();

    
}


function enableUpdate (e) {
    e.preventDefault()

    const parentTR = e.target.parentElement.parentElement

    theInputs.productName.value = parentTR.children[0].textContent
    theInputs.count.value = parentTR.children[1].textContent
    theInputs.price.value = parentTR.children[2].textContent

    selectors.updateProductBtn.disabled = false

    selectors.updateProductBtn.addEventListener('click', updateProduct)

    selectors.form.setAttribute('id', e.target.parentElement.parentElement.id) 

}




async function updateProduct (e) {

    e.preventDefault()

    const changedProduct = {
        product: theInputs.productName.value,
        count: theInputs.count.value,
        price: theInputs.price.value,
    }

    await fetch (`${BASE_URL}${selectors.form.id}`, {
        method: 'PATCH',
        body: JSON.stringify(changedProduct),
    })

    Object.values(theInputs).forEach(input => {
        input.value = '';
    })

    selectors.form.id = ''



    await loadAll();


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