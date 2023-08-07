function horseRacing (input) {
    const allHorses = input.shift().split('|')
    const raceStatus = []
    for(i=0; i< allHorses.length; i++){
        let horse = {}
        horse['name'] = allHorses[i]
        horse['position'] = allHorses.length - i
        raceStatus.push(horse)
    }

   for(let line of input){
    const [command, nameFirst, nameSecond] = line.split(' ')
    if (command === 'Finish'){
        break;
    }else if (command === 'Retake') { 
        const firstHorse = raceStatus.find((h) => h.name === nameFirst)
        const secondHorse = raceStatus.find((h) => h.name === nameSecond)
        if (firstHorse.position > secondHorse.position){
            let temp = secondHorse.position
            secondHorse.position = firstHorse.position
            firstHorse.position = temp
            console.log(`${nameFirst} retakes ${nameSecond}.`)

        }
    }else if (command === 'Trouble'){
        let nameTrouble = nameFirst
        const troubleHorse = raceStatus.find(h => h.name === nameTrouble)

        
        if ( troubleHorse.position < raceStatus.length){
            const backHorse = raceStatus.find(h => h.position === troubleHorse.position + 1)
            troubleHorse.position += 1
            backHorse.position -= 1
            console.log(`Trouble for ${nameTrouble} - drops one position.`)

        }
    }else if(command === 'Rage') {
        let nameRageHorse = nameFirst
        const rageHorse = raceStatus.find(h => h.name === nameRageHorse)

        if (rageHorse.position === 1){
            console.log(`${nameRageHorse} rages 2 positions ahead.`)
        }else if(rageHorse.position === 2) {
            let leader = raceStatus.find(h => h.position === 1)
            rageHorse.position = 1
            leader.position = 2
            console.log(`${nameRageHorse} rages 2 positions ahead.`)
            // console.log(raceStatus.map(i => `${i.name} - ${i.position}`))
        }else if(rageHorse.position > 2){
            const firsOneAead = raceStatus.find(h => h.position === rageHorse.position - 1)
            const secondOneAead = raceStatus.find(h => h.position === rageHorse.position - 2)
            rageHorse.position -= 2
            firsOneAead.position +=1
            secondOneAead.position +=1
            console.log(`${nameRageHorse} rages 2 positions ahead.`)
            // console.log(raceStatus.map(i => `${i.name} - ${i.position}`))
        }
    }else if( command === 'Miracle'){
        const lastOne = raceStatus.find(h => h.position === raceStatus.length)
        raceStatus.forEach(h => {
            if (h.position < lastOne.position){
                h.position += 1
            }
        })
        lastOne.position = 1
        console.log(`What a miracle - ${lastOne.name} becomes first.`)

    }

    }

    let sorted = raceStatus.sort((a, b) => b.position - a.position)

    console.log(sorted.map(item => item.name).join('->'))

    let winner = raceStatus.find(h => h.position === 1)

    console.log(`The winner is: ${winner.name}`)

}

horseRacing((['Onyx|Domino|Sugar|Fiona',
'Retake Fiona Sugar',
'Trouble Onyx',
'Finish',
'Retake Onyx Sugar',
'Rage Fiona',
'Rage Sugar',
'Trouble Onyx',
'Trouble Onyx',
]))

// horseRacing((['Bella|Alexia|Sugar',
// 'Retake Alexia Sugar',
// 'Rage Bella',
// 'Trouble Bella',
// 'Finish']))


// horseRacing((['Fancy|Lilly',
// 'Finish',
// 'Retake Lilly Fancy',
// 'Trouble Lilly',
// 'Trouble Lilly',

// 'Rage Lilly']))