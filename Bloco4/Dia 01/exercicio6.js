//prompt("Digite o nome da peça que deseja saber a função: ");
let peca = "Bispo";

switch (peca.toLowerCase()){
    case 'peão':
    console.log("Para frente");
    break;

    case 'bispo':
    console.log("Diagonalmente");
    break;

    case 'torre':
    console.log("Linha reta horizontalmente e verticalmente");
    break;

    case 'cavalo':
    console.log("Move-se em L");
    break;

    case 'rainha':
    console.log("Move-se horizontalmente, verticalmente e diagonalmente");
    break;

    case 'rei':
    console.log("Move-se adjacente");
    break;

    default:
    console.log('Essa peça não existe');
}