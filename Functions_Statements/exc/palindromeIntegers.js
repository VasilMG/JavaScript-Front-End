function palindrome (integers) {
    for ( let item of integers){
        let asString = String(item).split('')
        let arrOne = JSON.stringify(asString)
        let reverse = asString.reverse()
        let arrTwo = JSON.stringify(reverse)
        if (arrOne == arrTwo){
            console.log('true');
        }else {
            console.log('false');
        }
    }
}

palindrome([32,2,232,1010])