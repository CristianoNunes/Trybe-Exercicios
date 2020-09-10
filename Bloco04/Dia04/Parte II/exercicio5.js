let arrTeste = [2,3,2,5,8,2,3];

function numQMaisRepete(arrTeste){
let nTeste = 0;
let contador = 0;
let contRepetido = 0;
let nMaisRepetido;

for(let i in arrTeste){
    nTeste = arrTeste[i]
    for(let indice in arrTeste){
        if(nTeste == arrTeste[indice]){
            contador += 1;
            
        }
    }
    if(contador > contRepetido){
        contRepetido = contador;
        nMaisRepetido = arrTeste[i];
    }
    contador = 0;
}
return contRepetido;
}

console.log(numQMaisRepete(arrTeste));