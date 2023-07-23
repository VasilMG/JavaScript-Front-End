function mathPower(number, power) {
    let sum = number;
    for (let i = 0; i < power - 1; i++) {
        sum *= number
    }
    console.log(sum)
}


mathPower(3, 4)