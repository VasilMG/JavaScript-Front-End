function sumDigits(nmbr) {
    let stringArr = nmbr.toString().split('');
    let digitArr = stringArr.map(Number)
    console.log(digitArr.reduce((a,b) => a + b, 0))
}

sumDigits(245678);