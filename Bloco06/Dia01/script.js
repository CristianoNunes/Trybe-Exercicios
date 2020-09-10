//Gerando Estados
//generateState();
function generateState(){
  const estados = [
    'Acre',
    'Alagoas',
    'Amapá',
    'Amazonas',
    'Bahia',
    'Ceará',
    'Espírito Santo',
    'Goiás',
    'Maranhão',
    'Mato Grosso',
    'Mato Grosso do Sul',
    'Minas Gerais',
    'Pará',
    'Paraíba',
    'Paraná',
    'Pernambuco',
    'Piauí',
    'Rio de Janeiro',
    'Rio Grande do Sul',
    'Rondônia',
    'Roraima',
    'Santa Catarina',
    'São Paulo',
    'Sergipe',
    'Tocatins',
    'Distrito Federal'
  ]
  const listStates = document.getElementById('estado');
  for (let i = 0; i < estados.length; i += 1){
      let uf = document.createElement('option');
      uf.innerText = estados[i]
      listStates.appendChild(uf);
  }
}

window.onload = function () {
  generateState();
}
