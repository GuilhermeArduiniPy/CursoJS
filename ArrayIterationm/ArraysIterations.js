//método .map
//Funciona do mesmo modo que o forEach(), porem ao inves de retornar undefined, retorna uma nova array com valroes atualizados de acordo com o return de cada iteração.

const aulas = [
  {
    nome: "HTML",
    min: 25,
  },
  {
    nome: "JS",
    min: 20,
  },
  {
    nome: "Python",
    min: 15,
  },
];

// const tempoAulas = aulas.map((aula) => aula.min);

// const aulas = [10, 25, 30];

// const reduceAulas = aulas.reduce((acumulador, item, index, array) => {
//   console.log(acumulador, item, index, array);
//   return item;
// }, 100);

// const numeros = [2, 25, 58, 18, 30, 9];

// const maiorNumero = numeros.reduce(
//   (anterior, atual) => (anterior > atual ? anterior : atual),
//   0
// );

const listaAulas = aulas.reduce((acumulador, atual, index) => {
  acumulador[index] = atual.nome;
  return acumulador;
}, {});
