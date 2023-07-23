function employees (employees) {
    for (let item of employees){
        let currentEmployee = {}
        currentEmployee.name = item
        // let [firstName, lastName] = item.split(' ');
        // currentEmployee.firstName = firstName
        // currentEmployee.lastName = lastName
        currentEmployee.personaNmbr = item.length
        console.log(`Name: ${currentEmployee.name} -- Personal Number: ${currentEmployee.personaNmbr}`)
    }

}

employees(['Silas Butler', 'Adnaan Buckley', 'Juan Peterson', 'Brendan Villarreal'])