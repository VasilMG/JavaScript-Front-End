function convertToJSON(...list) {
    const person = {
        name: list.shift(), lastName: list.shift(), hairColor: list.shift()
    }
    console.log(JSON.stringify(person))
}


convertToJSON('George', 'Jones', 'Brown')