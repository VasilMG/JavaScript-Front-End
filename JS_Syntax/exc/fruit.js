function fruit (type, gramms, price) {
    let money = gramms / 1000 * price
    console.log(`I need $${money.toFixed(2)} to buy ${(gramms/1000).toFixed(2)} kilograms ${type}.`);
}

fruit('apple', 1563, 2.35);