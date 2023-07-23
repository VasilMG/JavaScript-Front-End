function vacation (nmbr, type, day){
    const dailyPrices = {"Friday": {"Students": 8.45, "Business": 10.90, "Regular": 15}, 
    "Saturday": {"Students": 9.80, "Business": 15.60, "Regular": 20},
    "Sunday": {"Students": 10.46, "Business": 16, "Regular": 22.50}}
    let price = nmbr * dailyPrices[day][type]
    switch (type){
        case "Students":
            if (nmbr >= 30){
                price *= 0.85;
            }
        case "Business":
            if (nmbr >= 100){
                price -= 10 * dailyPrices[day[type]];
            }
        case "Refular":
            if (nmbr >= 10 && nmbr <= 20){
                price *= 0.95;
            }
    }
    console.log(`Total price: ${price.toFixed(2)}`);
}

// vacation(30,
//     "Students",
//     "Sunday")

vacation(40,
    "Regular",
    "Saturday")