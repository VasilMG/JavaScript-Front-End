function hashTag(str){
    function hasNumber(myString) {
        return /\d/.test(myString);
      }
    const result = []
    const allWords = str.split(' ')
    for (const word of allWords){
        if (word[0] == '#'){
            let newWord = word.replace('#', '')
            if (!hasNumber(newWord) && newWord.length > 0){
                result.push(newWord);
            }
        }
    }
    console.log(result.join('\n'));
}

hashTag('The symbol # is known #variously in English-speaking #regions as the #number sign')