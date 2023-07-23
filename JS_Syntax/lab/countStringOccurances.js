
function countOccurances(string, word){
    const matches = string.match(RegExp('\\b' + word + '\\b', 'gi'));
    console.log(`${matches ? matches.length : 0}`);
}


countOccurances('This is a word and it also is a sentence','is')