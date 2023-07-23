function revealWords(str, line){
    let words = str.split(', ');
    let newLine = line
    for (let word of words){
        let stars = '*'.repeat(word.length)
        newLine = newLine.replace(stars, word);
    }

    console.log(newLine);

}
revealWords('great, learning',
'softuni is ***** place for ******** new programming languages')