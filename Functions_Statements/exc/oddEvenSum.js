function oddEvenSum(nmbr) {
    let asString = String(nmbr)
    let oddSum = 0
    let evenSum = 0
    for (const currNmbr of asString) {
        let currInt = parseInt(currNmbr)
        if (currInt % 2 === 0 ) {
            evenSum += currInt;
        }else {
            oddSum += currInt;
        }
    }

    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`)
}
oddEvenSum(3495892137259234)