// Usando o objeto criado no exercício 5, crie uma função que retorne o 
// número total de estudantes em todas as aulas.

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

const allLessons = Object.assign({}, {lesson1, lesson2, lesson3});

const sumStudents = (obj) => { 
  let sum = 0;
  const arr = Object.keys(obj);
  for(i in arr) {
    sum += obj[arr[i]].numeroEstudantes;
  }
  return sum;
};

console.log(sumStudents(allLessons));