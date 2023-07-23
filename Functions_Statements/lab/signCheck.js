function signCheck(...numbers){
    let negativeNumbers = 0
    for (const num of numbers){
        if (num < 0){
            negativeNumbers += 1
        }
    }
    if (negativeNumbers === 0 || negativeNumbers === 2){
        console.log('Positive')
    } else {
        console.log('Negative')
    }
}

signCheck(-6,
-12,
 14)