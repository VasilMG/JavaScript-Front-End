function censoredWords(string, word){
    console.log(string.replace(new RegExp(word, 'g'), '*'.repeat(word.length)))
}

censoredWords('A small sentence with some words', 'small')