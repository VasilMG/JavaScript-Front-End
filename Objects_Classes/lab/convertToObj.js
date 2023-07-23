function convertToObj(string) {
    string = JSON.parse(string);
    for (const [key, value] of Object.entries(string)) {
        console.log(`${key}: ${value}`)
    }
}

convertToObj('{"name": "George", "age": 40, "town": "Sofia"}')