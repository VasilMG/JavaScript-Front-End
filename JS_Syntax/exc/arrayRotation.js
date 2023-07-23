function arrayRotation(arr, nmbr){
    for (i=0; i<nmbr; i++){
        let item = arr.shift()
        arr.push(item)
    }
    console.log(arr.join(' '));
}

arrayRotation([2, 4, 15, 31], 5)