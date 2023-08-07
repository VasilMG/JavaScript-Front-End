window.addEventListener("load", solve);

function solve() {
    
  const inputs = {
    name: document.querySelector('#student'),
    university: document.querySelector('#university'),
    score: document.querySelector('#score')
  }

  const selectors = {
    nextBtn: document.querySelector('#next-btn'),
    ulPriview: document.querySelector('#preview-list'),
    candidatesUl: document.querySelector('#candidates-list'),

  }

  selectors.nextBtn.addEventListener('click', addToPriview)


  function addToPriview (e) {
      if (Object.values(inputs).some(e => e.value === '')){
        return;
      }


      const appLi = createElement('li', null, ['application'])
      const article = createElement('article')
      createElement('h4', `${inputs.name.value}`, null, article)
      createElement('p', `University: ${inputs.university.value}`, null, article)
      createElement('p', `Score: ${inputs.score.value}`, null, article)

      appLi.appendChild(article)

      const editBtn = createElement('button', 'edit', ['action-btn', 'edit'])
      editBtn.addEventListener('click', editCandidate)
      appLi.appendChild(editBtn)
      const aplyBtn = createElement('button', 'apply', ['action-btn', 'apply'])
      aplyBtn.addEventListener('click', applyCandidate)
      appLi.appendChild(aplyBtn)

      selectors.ulPriview.appendChild(appLi)


      Object.values(inputs).forEach( i => {
        i.value = '';
      })

      selectors.nextBtn.disabled = true

  } 


  function editCandidate (e) {

    const parentData = e.target.previousSibling

    inputs.name.value = parentData.children[0].textContent
    inputs.university.value = parentData.children[1].textContent.split(' ')[1]
    inputs.score.value = parentData.children[2].textContent.split(' ')[1]

    selectors.ulPriview.innerHTML = ''

    selectors.nextBtn.disabled = false


  }

  function applyCandidate(e) {

    const detailsLi = document.querySelector('.application')

    const editButton = document.querySelector('.edit')
    const applyButton = document.querySelector('.apply')
    editButton.remove()
    applyButton.remove()

    selectors.ulPriview.innerHTML = ''

    selectors.candidatesUl.appendChild(detailsLi)

    selectors.nextBtn.disabled = false

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

  
  }
  