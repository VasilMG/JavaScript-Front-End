function armies(list) {
    output = {}

    list.forEach(item => {
        if (item.includes('defeated')) {
            item = item.replace(' defeated', '')
            delete output[item]

        } else if (item.includes('arrives') && !output.hasOwnProperty(item.replace(' arrives', ''))) {
            item = item.replace(' arrives', '')
            output[item] = {}
            output[item].armys = []
            output[item].totalArmy = 0

        } else if (item.includes('+')) {
            [armyName, count] = item.split(' + ')
            for (key in output) {
                output[key].armys.forEach(item => {

                    if (item.name === armyName) {
                        count = parseInt(count)
                        item.count += count
                        output[key].totalArmy += count
                    }
                })
            }

        } else {
            [leader, ...armyInfo] = item.split(': ')
            let [armyName, armyCount] = armyInfo[0].split(', ')

            if (output.hasOwnProperty(leader)) {
                armyCount = parseInt(armyCount)
                output[leader].armys.push({name: armyName, count: armyCount})
                output[leader].totalArmy += armyCount
            }
        }
    })

    for (const [name, army] of Object.entries(output)
        .sort(([, a], [, b]) => b.totalArmy - a.totalArmy)) {
        console.log(`${name}: ${army.totalArmy}`)

        for (const {name, count} of army.armys.sort((a, b) => b.count - a.count)) {
            console.log(`>>> ${name} - ${count}`)
        }
    }
}

armies(['Rick Burr arrives', 'Findlay arrives', 'Rick Burr: Juard, 1500', 'Wexamp arrives', 'Findlay: Wexamp, 34540', 'Wexamp + 340', 'Wexamp: Britox, 1155', 'Wexamp: Juard, 43423'])