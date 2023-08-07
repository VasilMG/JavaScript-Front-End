function shoppingList (input) {
    let initial = input.shift().split('!')


    while (true) {
        let line = input.shift()

        if (line === "Go Shopping!" ){
            break;
        }
        
        const [command, firstItem, secondItem] = line.split(' ')

        if ( command === 'Urgent'){
            if (!initial.includes(firstItem)) {
                initial.unshift(firstItem);
            }

        }else if (command === 'Unnecessary'){
            if (initial.includes(firstItem)){
                let index = initial.indexOf(firstItem)
                initial.splice(index, 1)

            }
        }else if ( command === 'Correct'){

            if (initial.includes(firstItem)){
                let oldIndex = initial.indexOf(firstItem)
                initial.splice(oldIndex, 1, secondItem)

            }
        }else if (command === 'Rearrange'){
            if (initial.includes(firstItem)){
                let rearrangeIndex = initial.indexOf(firstItem)
                initial.splice(rearrangeIndex, 1)
                initial.push(firstItem);

            }
        }

        

    }

    console.log(initial.join(', '))

}

shoppingList((["Milk!Pepper!Salt!Water!Banana",
"Urgent Salt",
"Unnecessary Grapes",
"Correct Pepper Onion",
"Rearrange Milk",
"Correct Tomatoes Potatoes",
"Go Shopping!"]))

// shoppingList((["Tomatoes!Potatoes!Bread",
// "Unnecessary Milk",
// "Urgent Tomatoes",
// "Go Shopping!"]))