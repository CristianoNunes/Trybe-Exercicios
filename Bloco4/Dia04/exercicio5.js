let info = {
    personagem: "Margarida",
    origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
    nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
    recorrente: "Sim",
  };

let info2 ={
    personagem: "Tio Patinhas",
    origem: "Pato Donald",
    nota: "O último MacPatinhas",
    recorrente: "Sim",
}

for(indice in info, info2){
    if(info.recorrente === info2.recorrente){
        info.recorrente = "Ambos ";
        info2.recorrente = "recorrentes";
    }
    console.log(info[indice] + " e " + info2[indice]);
}