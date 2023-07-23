function sortingNumbers(arr){
    let sorted = arr.sort((a, b) => a - b);
    let result = []
    while (sorted.length > 0){
        if (sorted.length >= 2){
            result.push(sorted.shift());
            result.push(sorted.pop());
        }else{
            result.push(sorted.pop());
        }
    }

    return result;

}
sortingNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56])