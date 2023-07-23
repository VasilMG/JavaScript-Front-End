function speedRadar(speed, location) {
    const limits = {"motorway": 130, 'interstate': 90, 'city': 50, 'residential': 20}
    let status = ''
    if (speed <= limits[location]){
        console.log(`Driving ${speed} km/h in a ${limits[location]} zone`);
    }else{
        if ((speed - limits[location]) <= 20){
            status = 'speeding'
        }else if ((speed - limits[location]) <= 40 && ((speed - limits[location]) >= 20)){
            status = 'excessive speeding'
        }else{
            status = 'reckless driving'
        }
        console.log(`The speed is ${speed - limits[location]} km/h faster than the allowed speed of ${limits[location]} - ${status}`)
    }

}

speedRadar(200, 'motorway')