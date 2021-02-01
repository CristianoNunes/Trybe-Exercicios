let inteiros = [2,4,6,7,10,0,-3];

function pegandoMenorIndice(inteiros){
    let indiceMenor = 0;

    for (let indice in inteiros) {
        if(inteiros[indiceMenor] > inteiros[indice]){
            indiceMenor = indice;
        }
    }
    return indiceMenor;
}

console.log(pegandoMenorIndice(inteiros));