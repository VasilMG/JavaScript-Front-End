function sameNumbers(nmbr) {
    let stringArr = nmbr.toString().split('');
    let digitArr = stringArr.map(Number)
    let finalSum = digitArr.reduce((a,b) => a + b, 0)
    let count = stringArr.filter(x => x === stringArr[0]).length
    if (count === stringArr.length){
        console.log('true');
    }else{
        console.log('false');
    }
    console.log(finalSum)
    

}

sameNumbers(1234);