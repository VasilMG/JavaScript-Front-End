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
