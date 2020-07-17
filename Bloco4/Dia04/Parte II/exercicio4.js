let arrTeste = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];

function verificaMaiorNome(arr) {
    let maiorNome = arr [0];

    for (let i in arr){
        let nome = arr[i];
        let tamanhoDoNome = nome.length;
        if (tamanhoDoNome > maiorNome.length){
            maiorNome = nome;
        }
    }
    return maiorNome;
}
console.log(verificaMaiorNome(arrTeste));