function repeatStrings(string, repeat) {
    let output = string;
    for (let i = 0; i < repeat - 1; i++) {
        output += string
    }
    console.log(output)
}


repeatStrings("String", 2)