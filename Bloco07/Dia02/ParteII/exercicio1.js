// Crie uma função para adicionar o turno da manhã na lesson2. Essa função deve possuir 
// três parâmetros, sendo eles: o objeto a ser modificado, a 
// chave que deverá ser adicionada e o valor dela.

const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

function addTurno(obj, chave, valor) {
  obj[chave] = valor;
  return obj;
}

console.log(addTurno(lesson2,'turno', 'manhã'));