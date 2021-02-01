const readline = require('readline-sync');

function calculaIMC(){
  const peso = readline.questionFloat('Digite seu peso: ');
  const altura = readline.questionFloat('Digite sua altura: ');
  const imc = (peso / (altura * altura)).toFixed(2);
  let msg = '';
  if(imc < 18.5) {
    msg = 'Seu IMC é: ' + imc + '\n\Situação: Abaixo do peso (magreza)';    
  } else if( imc > 18.5 && imc < 24.9) {
    msg = 'Seu IMC é: ' + imc + '\n\Situação: Peso normal';
  } else if( imc > 25 && imc < 29.9) {
    msg = 'Seu IMC é: ' + imc + '\n\Situação: Acima do peso (sobrepeso)';
  } else if( imc > 30 && imc < 34.9) {
    msg = 'Seu IMC é: ' + imc + '\n\Situação: Obesidade grau I';
  } else if( imc > 35 && imc < 39.9) {
    msg = 'Seu IMC é: ' + imc + '\n\Situação: Obesidade grau II';
  } else if( imc > 40) {
    msg = 'Seu IMC é: ' + imc + '\n\Situação: Obesidade grau III e IV';
  }
  return msg;
}

const IMC = calculaIMC();
console.log(IMC);