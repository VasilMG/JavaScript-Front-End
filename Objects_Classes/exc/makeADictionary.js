function makeADict(data) {
    let dict = {}
    for ( let item of data ) {
        let obj = JSON.parse(item);
        dict[Object.keys(obj)[0]] = obj
    }
    let entries = Object.entries(dict).sort((a, b) => a[0].localeCompare(b[0]))
    for ( let word of entries) {
        console.log(`Term: ${word[0]} => Definition: ${word[1][word[0]]}`)
    }
}

makeADict(['{"Cup":"A small bowl-shaped container for drinking from, typically having a handle"}',
'{"Cake":"An item of soft sweet food made from a mixture of flour, fat, eggs, sugar, and other ingredients, baked and sometimes iced or decorated."} ',
'{"Watermelon":"The large fruit of a plant of the gourd family, with smooth green skin, red pulp, and watery juice."} ',
'{"Music":"Vocal or instrumental sounds (or both) combined in such a way as to produce beauty of form, harmony, and expression of emotion."} ',
'{"Art":"The expression or application of human creative skill and imagination, typically in a visual form such as painting or sculpture, producing works to be appreciated primarily for their beauty or emotional power."} ',
'{"Art":"The expression" } '])