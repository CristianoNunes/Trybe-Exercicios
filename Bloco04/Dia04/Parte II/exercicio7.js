function verificaFimPalavra(word, ending) {

word = word.split("");
ending = ending.split("");
teste = true;
for (let i = 0; i < ending.length; i++) {
    if (word[word.length-ending.length+i] != ending[i]) {
    teste = false;
    }
}

return teste;

}
console.log(verificaFimPalavra("trybe", "be"));
console.log(verificaFimPalavra("joaofernando", "fernan"));