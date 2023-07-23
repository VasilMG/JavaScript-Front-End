function printSum (start, end) {
    let list = []
    let sum = 0
    for ( let i=start; i<= end; i++){
        list.push(i);
        sum += i;
    }
    console.log(list.join(' '));
    console.log(`Sum: ${sum}`);
}

printSum(50, 60);