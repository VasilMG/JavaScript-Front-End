function wordCount(data) {
    let output = []
    class Word {
        constructor(word, occurances){
            this.word = word;
            this.occurances = occurances;
        }
        prinWrd(){
            console.log(`${this.word} - ${this.occurances}`)
        }
    }
    let words = data.shift()
    for ( let currWord of words.split(' ')) {
        let newWord = new Word(currWord, data.filter(x => x === currWord).length)
        output.push(newWord);
    }
    output.sort((a, b) => b.occurances - a.occurances)
    
    for (let item of output){
        item.prinWrd();
    }
}

wordCount([
    'this sentence',
    'In', 'this', 'sentence', 'you', 'have',
    'to', 'count', 'the', 'occurrences', 'of',
    'the', 'words', 'this', 'and', 'sentence',
    'because', 'this', 'is', 'your', 'task'
    ])