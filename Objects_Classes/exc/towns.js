function towns (towns){
    for (let item of towns){
        let [name, latitude, longitude] = item.split(' | ');
        const theTown = {}
        theTown.town = name
        theTown.latitude = parseFloat(latitude).toFixed(2);
        theTown.longitude = parseFloat(longitude).toFixed(2);
        console.log(theTown)
    }
}

towns(['Sofia | 42.696552 | 23.32601',
'Beijing | 39.913818 | 116.363625'])