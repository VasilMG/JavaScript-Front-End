function solve(input) {
    let initial = input.shift().split('!');
    while (true) {
        let details = input.shift()
        if (details === 'Go Shopping!') {
            break;
        }
        let cmd = details.split(' ');
        const item = cmd[1]

        if ( cmd[0] === 'Urgent'){

            if (!initial.includes(item)) {
                initial.unshift(item);
            }


        }else if (cmd[0] === 'Unnecessary'){
            if (initial.includes(cmd[1])){
                let index = initial.indexOf(cmd[1])
                initial.splice(index, 1)

            }
        }else if ( cmd[0] === 'Correct'){
            if (initial.includes(cmd[1])){
                let oldIndex = initial.indexOf(cmd[1])
                initial.splice(oldIndex, 1, cmd[2])

            }
        }else if (cmd[0] === 'Rearrange'){
            if (initial.includes(cmd[1])){
                let rearrangeIndex = initial.indexOf(cmd[1])
                initial.splice(rearrangeIndex, 1)
                initial.push(cmd[1]);

            }
        }

    }console.log(initial.join(', '))


}

// solve((["Tomatoes!Potatoes!Bread",
// "Unnecessary Milk",
// "Urgent Tomatoes",
// "Go Shopping!"]))