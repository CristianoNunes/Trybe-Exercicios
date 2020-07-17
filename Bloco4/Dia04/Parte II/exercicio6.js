let n = 5;

function somaAteN(n){
    let soma = 0;
    for (let i = 0; i <= n; i++){
        soma = soma + i;
    }
    return soma;
}

console.log(somaAteN(n));