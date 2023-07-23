function reverseArr (number, list) {
    console.log(`${list.slice(0, number).reverse().join(' ')}`)
}

reverseArr(3, [10, 20, 30, 40, 50])