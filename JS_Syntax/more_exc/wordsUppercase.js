function wordsUppercase(string) {
    const words = string.match(/\b\w+\b/g) || [];
    const upperCaseWords = words.map(word => word.toUpperCase());
    console.log(upperCaseWords.join(', '));
}


wordsUppercase('Functions in JS can be nested, i.e. hold other functions')