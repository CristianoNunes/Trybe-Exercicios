let phrase = 'Antônio foi no banheiro e não sabemos o que aconteceu';
const longestWord = (phrase) => {
    let arrStr = phrase.split(" ");
    let biggerWord = arrStr[0];
    for (let i in arrStr){
        let word = arrStr[i];
        let lengthWord = word.length;
        if (lengthWord > biggerWord.length){
            biggerWord = word;
        }
    }
    return biggerWord;
}

console.log(longestWord(phrase))