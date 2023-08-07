window.addEventListener("load", solve);

function solve() {
  const inputs = {
    firstName: document.querySelector('#first-name'),
    lastName: document.querySelector('#last-name'),
    age: document.querySelector('#age'),
    storyTitle: document.querySelector('#story-title'),
    genre: document.querySelector('#genre'),
    storyText: document.querySelector('#story'),
  }

  const selectors = {
    publushBtn: document.querySelector('#form-btn'),
    priviewUl: document.querySelector('#preview-list'),
    main: document.querySelector('#main'),
  }

  selectors.publushBtn.addEventListener('click', publishStory)


  function publishStory () {
    if (Object.values(inputs).some(i => i.value === '')){
      return;
    }

    const newLi = createElement('li', null, ['story-info'])
    const newArticle = createElement('article')
    const h4New = createElement('h4', `Name: ${inputs.firstName.value} ${inputs.lastName.value}`, null, null, newArticle)
    const newPAge = createElement('p', `Age: ${inputs.age.value}`, null, null, newArticle)
    const newPTitle = createElement('p', `Title: ${inputs.storyTitle.value}`, null, null, newArticle)
    const newPGenre = createElement('p', `Genre: ${inputs.genre.value}`, null, null, newArticle)
    const newPStory = createElement('p', `${inputs.storyText.value}`, null, null, newArticle)
    newLi.appendChild(newArticle)
    const saveBtn = createElement('button', 'Save Story', ['save-btn'], null, newLi)
    saveBtn.addEventListener('click', saveStory)
    const editBtn = createElement('button', 'Edit Story', ['edit-btn'], null, newLi)
    editBtn.addEventListener('click', editStory)
    const deleteBtn = createElement('button', 'Delete Story', ['delete-btn'], null, newLi)
    deleteBtn.addEventListener('click', deleteStory)

    selectors.priviewUl.appendChild(newLi)

    selectors.publushBtn.disabled = true

    Object.values(inputs).forEach(e => {
      e.value = '';
    })

  }


  function saveStory (event) {

    selectors.main.innerHTML = `<h1>Your scary story is saved!</h1>`


  }



  function editStory (event) {
      const theLi = event.target.parentElement
      const theArticle  = theLi.firstChild

      const [_, name] = theArticle.firstChild.textContent.split(': ')
      const [first, last] = name.split(' ')

      inputs.firstName.value = first
      inputs.lastName.value = last
      inputs.age.value = theArticle.children[1].textContent.split(': ')[1]
      inputs.storyTitle.value = theArticle.children[2].textContent.split(': ')[1]
      inputs.genre.value = theArticle.children[3].textContent.split(': ')[1]
      inputs.storyText.value = theArticle.children[4].textContent

      theLi.remove()

      selectors.publushBtn.disabled = false


  }

  function deleteStory (event) {

      event.target.parentElement.remove()

      selectors.publushBtn.disabled = false

  }

  function createElement(type, contentText, classes, id, parent, useInnerHTML) {

    const element = document.createElement(type)

    if (useInnerHTML){
        element.innerHTML = useInnerHTML;
    }

    if (contentText) {
        element.textContent = contentText
    }

    if (classes && classes.length > 0){
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


}
