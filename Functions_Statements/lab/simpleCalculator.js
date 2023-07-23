function simpleColculator(numOne, numTwo, operator){
    let productsPrice = {
        'multiply' : numOne * numTwo,
        'divide' : numOne / numTwo,
        'add' : numOne + numTwo,
        'subtract' : numOne - numTwo
    }
    console.log(`${productsPrice[operator]}`)
}

simpleColculator(5,
5,
'multiply')