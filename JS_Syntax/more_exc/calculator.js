function calculator (numOne, operator, numTwo) {
    let result = {
        '*': numOne * numTwo,
        '/': numOne / numTwo,
        '+': numOne + numTwo,
        '-': numOne - numTwo,
    }
    console.log(result[operator].toFixed(2))
}

calculator(5,'+',10)