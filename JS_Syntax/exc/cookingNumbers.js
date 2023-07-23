function cookingNumbers(nmbr, ...args){
    console.log(args)
    let currentNumber = Number(nmbr)
    for (let command of args){
        if (command === 'chop'){
            currentNumber = currentNumber / 2
            console.log(currentNumber);
        }else if (command === 'dice'){
            currentNumber = Math.sqrt(currentNumber)
            console.log(currentNumber);
        }else if (command === 'spice'){
            currentNumber += 1
            console.log(currentNumber);
        }else if (command === 'bake'){
            currentNumber *= 3
            console.log(currentNumber);
        }else if (command === 'fillet'){
            currentNumber = currentNumber * 0.8
            console.log(currentNumber.toFixed(1));
        }
    }
}

cookingNumbers('9', 'dice', 'spice', 'chop', 'bake','fillet');