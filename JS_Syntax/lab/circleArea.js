function circleArea (item) {
    if (typeof item != 'number'){
        console.log(`We can not calculate the circle area, because we receive a ${typeof item}.`);
    } else {
        console.log(`${(Math.PI * (item * item)).toFixed(2)}`)
    }
}

circleArea(5)