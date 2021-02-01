let custoProduto = 40;
let valorVenda = 50;

if(custoProduto > 0 && valorVenda >0 ){
    let lucro = (valorVenda - custoProduto) * 0.8 * 1000;
    console.log("Lucro foi: " +lucro);
}else {
    console.log("Mensagem de erro");
}

