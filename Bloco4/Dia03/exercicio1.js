let n = 5;
let linha = "";

for(let i = 1; i <= n; i += 1){
    console.log(linha);
    for(let coluna = 1; coluna <= n; coluna += 1){
        if(linha.length < n){
            linha = linha + "*";
        }
    }
}