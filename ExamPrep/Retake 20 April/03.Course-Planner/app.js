function solve () {

    // check out the fragments
    // const fragment = document.createDocumentFragment()
    // it is like a fragment of DOM and we can append the create elements to him
    // with append(item1, item2 ...) or appendChild(one by one)
    // and after that we can append the fragment to the parent in the DOM
    // that way we append multiple items simultaniously in the DOM, goos performance

    const BASE_URL = 'http://localhost:3030/jsonstore/tasks'

    const selectors = {
        loadBtn: document.querySelector('#load-course'),
        listLoadCourses: document.querySelector('#progress-course #list'),
        addCourseBtn: document.querySelector('#add-course'),
        confirmEditBtn: document.querySelector('#edit-course'),
        form: document.querySelector('form')
    }

    const inputFields = {
        title: document.querySelector('#course-name'),
        type: document.querySelector('#course-type'),
        description: document.querySelector('#description'),
        teacher: document.querySelector('#teacher-name'),
    }

    selectors.loadBtn.addEventListener('click', loadAllCourses)
    selectors.addCourseBtn.addEventListener('click', addCourse)

    async function loadAllCourses() {

        selectors.listLoadCourses.innerHTML = ''
        Object.values(inputFields).forEach(input => {
            input.value = '';
        })

        const coursesResponse = await(await fetch(BASE_URL)).json()
        console.log(coursesResponse)
        console.log(selectors.form)


        Object.values(coursesResponse).forEach((course) => {
            const divCourse = createElement('div', null, ['container'], course._id)
            const h2title = createElement('h2', course.title, null, null, divCourse)
            const h3teacher = createElement('h3', course.teacher, null, null, divCourse)
            const h3type = createElement('h3', course.type, null, null, divCourse)
            const h4description = createElement('h4', course.description, null, null, divCourse)
            const editBtnDiv = createElement('button', 'Edit Course', ["edit-btn"], null, divCourse)
            editBtnDiv.addEventListener('click', editCourse)

            const finishBtnDiv = createElement('button', 'Finish Course', ["finish-btn"], null, divCourse)
            finishBtnDiv.addEventListener('click', finishCourse)

            selectors.listLoadCourses.appendChild(divCourse)

        })
    }

    async function addCourse (event) {

        if (inputFields.type.value !== 'Long' || inputFields.type.value !== 'Medium' || inputFields.type.value !== 'Short' ) {
            event.preventDefault();
        }

        const newCourse = {
            title: inputFields.title.value,
            type: inputFields.type.value,
            description: inputFields.description.value,
            teacher: inputFields.teacher.value,
        }

        const headers = {
            method: 'POST',
            body: JSON.stringify(newCourse)
        }


        await fetch(BASE_URL, headers)


        Object.values(inputFields).forEach(input => {
            input.value = '';
        })


        loadAllCourses();

    }

    async function editCourse (event) {

        const divCourse = event.target.parentElement

        inputFields.title.value = divCourse.children[0].textContent
        inputFields.teacher.value = divCourse.children[1].textContent
        inputFields.type.value = divCourse.children[2].textContent
        inputFields.description.value = divCourse.children[3].textContent

        selectors.form.setAttribute('id', divCourse.id)
        divCourse.remove()

        


        selectors.addCourseBtn.disabled = true
        selectors.confirmEditBtn.disabled = false

        selectors.confirmEditBtn.addEventListener('click', confirmEdit)

    }

    async function confirmEdit (event) {
        const newInput = {
            title: inputFields.title.value,
            type: inputFields.type.value,
            description: inputFields.description.value,
            teacher: inputFields.teacher.value,
        }
        


        await fetch(`${BASE_URL}/${event.target.parentElement.id}`, {
            method: 'PUT',
            body: JSON.stringify(newInput),
        })

        selectors.addCourseBtn.disabled = false
        selectors.confirmEditBtn.disabled = true

        selectors.form.id = ''

        loadAllCourses()

    }


    async function finishCourse (event) {

        console.log(event.target.parentElement)

        await fetch(`${BASE_URL}/${event.target.parentElement.id}`, {
            method: 'DELETE',
        })

        loadAllCourses()

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




solve()