let n = 5;
let linha = "";
let simbolo = "*";
let posicaoColunaInicial = n;

for(let i = 0; i < n; i += 1){
    for(let j = 0; j < n; j += 1){
        if( j < posicaoColunaInicial) {
            linha += " ";
        } else{
            linha += simbolo;
        }
    }
    console.log(linha);
    linha = "";
    posicaoColunaInicial = posicaoColunaInicial -1;

}
