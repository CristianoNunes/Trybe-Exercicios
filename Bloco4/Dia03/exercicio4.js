let n = 8;
let coluna;
let espaco = '';
let simbolo = '*';
let meio = (n + 1) / 2;
let ladoEsquerdo = meio;
let ladoDireito= meio;

for (let i = 0; i <= meio; i+= 1) {
  for (coluna = 1; coluna <= n; coluna += 1) {
    if (coluna > ladoDireito && coluna < ladoEsquerdo) {
      espaco = espaco + simbolo;
    } else {
      espaco = espaco + ' ';
    }
  }
  console.log(espaco);
  espaco = '';
  ladoDireito -= 1;
  ladoEsquerdo += 1;
};