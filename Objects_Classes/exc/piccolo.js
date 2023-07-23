function piccolo(data){
    class Parking {
        constructor(){
            this.cars = [];
        }
    }
    let theParking = new Parking()
    let list = []
    for (i=0; i < data.length; i ++){
        list.push(data[i].split(', '));
    }

    for ( let car of list){
        if (car[0] === 'IN'){
            theParking.cars.push(car[1]);
        }else{
            theParking.cars.pop(car[1]);
        }
    }
    if (theParking.cars.length === 0){
        console.log("Parking Lot is Empty");
    }else {
        theParking.cars.sort();
        console.log(theParking.cars.join('\n'));
    }
}

piccolo(['IN, CA2844AA',
'IN, CA1234TA',
'OUT, CA2844AA',
'IN, CA9999TT',
'IN, CA2866HI',
'OUT, CA1234TA',
'IN, CA2844AA',
'OUT, CA2866HI',
'IN, CA9876HH',
'IN, CA2822UU',
'IN, AA1111AA'])

// piccolo(['IN, CA2844AA',
// 'IN, CA1234TA',
// 'OUT, CA2844AA',
// 'OUT, CA1234TA'])