function solve (input) {
    const nmbrRiders = input.shift()

    const race = {}
    for (let i=0; i < nmbrRiders; i++) {
        let currRacer = input.shift()
        let dataRacer = currRacer.split('|')
        race[dataRacer[0]] = {}
        race[dataRacer[0]]['name'] = dataRacer[0]
        race[dataRacer[0]]['capacity'] = parseInt(dataRacer[1])
        race[dataRacer[0]]['position'] = dataRacer[2]

    }

    while (true) {
        let command = input.shift()

        if (command === "Finish"){
            break;
        }

        let currentCommand = command.split(' - ')

        if (currentCommand[0] === 'StopForFuel' ){
            let rider = currentCommand[1]
            let minFuel = parseInt(currentCommand[2])
            let changedPosition = currentCommand[3]

            const currRiderData = race[rider]

            if (currRiderData.capacity < minFuel){
                // Object.values(race).forEach(v => {
                //     if (v.position > currRiderData.position && v.position <= changedPosition ){
                //         v.position -= 1;
                //     }
                // })
                race[rider].position = changedPosition
                console.log(`${rider} stopped to refuel but lost his position, now he is ${changedPosition}.`)
            }else{
                console.log(`${rider} does not need to stop for fuel!`)
            }

        }else if (currentCommand[0] === 'Overtaking' ){
            let rider1 = currentCommand[1]
            let rider2 = currentCommand[2]
            if (race[rider1].position < race[rider2].position){
                let temp = race[rider2].position
                race[rider2].position = race[rider1].position
                race[rider1].position = temp

                console.log(`${rider1} overtook ${rider2}!`)
            }

        }else if (currentCommand[0] === 'EngineFail'){
            let failRider = currentCommand[1]
            let lapsLeft = currentCommand[2]
            // Object.values(race).forEach(v => {
            //     if (v.position > race[failRider].position ){
            //         v.position -= 1;
            //     }
            // })

            delete race[failRider]
            console.log(`${failRider} is out of the race because of a technical issue, ${lapsLeft} laps before the finish.`)

        }
    }

    Object.values(race).forEach(racer => {
        console.log(racer.name)
        console.log(` Final position: ${racer.position}`)
    })





}

solve((["4",
"Valentino Rossi|100|1",
"Marc Marquez|90|3",
"Jorge Lorenzo|80|4",
"Johann Zarco|80|2",
"StopForFuel - Johann Zarco - 90 - 5",
"Overtaking - Marc Marquez - Jorge Lorenzo",
"EngineFail - Marc Marquez - 10",
"Finish"]))

// solve((["3",
// "Valentino Rossi|100|1",
// "Marc Marquez|90|2",
// "Jorge Lorenzo|80|3",
// "StopForFuel - Valentino Rossi - 50 - 1",
// "Overtaking - Marc Marquez - Jorge Lorenzo",
// "EngineFail - Marc Marquez - 10",
// "Finish"]))