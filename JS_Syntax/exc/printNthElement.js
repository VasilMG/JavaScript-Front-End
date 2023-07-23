function printNthElement(arr, nmbr){
    let result = []
    for (i=0; i<arr.length; i+=nmbr){
        console.log(arr[i])
    }
    return result;
}

printNthElement(['1',
'2',
'3',
'4',
'5'],
6)