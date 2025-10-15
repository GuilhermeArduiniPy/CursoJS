//método .map
//Funciona do mesmo modo que o forEach(), porem ao inves de retornar undefined, retorna uma nova array com valroes atualizados de acordo com o return de cada iteração.

// const aulas1 = [
//   {
//     nome: "HTML",
//     min: 25,
//   },
//   {
//     nome: "JS",
//     min: 20,
//   },
//   {
//     nome: "Python",
//     min: 15,
//   },
// ];

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

// const listaAulas = aulas.reduce((acumulador, atual, index) => {
//   acumulador[index] = atual.nome;
//   return acumulador;
// }, {});

// const frutas = ["Banana", undefined, null, "", "Uva", 0, "Maça"];

// const arrayFrutas = frutas.filter((item) => {
//   console.log(item);
//   return item === "Uva";
// });

// console.log(arrayFrutas);

// const aulas = [
//   {
//     nome: "HTML",
//     min: 25,
//   },
//   {
//     nome: "JS",
//     min: 20,
//   },
//   {
//     nome: "Python",
//     min: 15,
//   },
// ];

// const maiores15 = aulas.filter((item) => {
//   return item.min > 15;
// });
// console.log(maiores15);

// Selecione cada curso e retorne uma array
// com objetos contendo o título, descricao,
// aulas e horas de cada curso

const cursos = document.querySelectorAll("section");
let arrayCursos = [];
cursos.forEach(function (item) {
  let objCurso = {
    titulo: item.querySelector("h1").textContent,
    descrição: item.querySelector("p").textContent,
    aulas: item.querySelector(".aulas").textContent,
    horas: item.querySelector(".horas").textContent,
  };
  arrayCursos.push(objCurso);
});

// Retorne uma lista com os
// números maiores que 100
const numeros = [3, 44, 333, 23, 122, 322, 33];

const arrayMaiores = numeros.filter((item) => item > 100);

// Verifique se Baixo faz parte
// da lista de instrumentos e retorne true
const instrumentos = ["Guitarra", "Baixo", "Bateria", "Teclado"];

const BaixoFazParte = instrumentos.some((item) => item === "Baixo");

// Retorne o valor total das compras
const compras = [
  {
    item: "Banana",
    preco: "R$ 4,99",
  },
  {
    item: "Ovo",
    preco: "R$ 2,99",
  },
  {
    item: "Carne",
    preco: "R$ 25,49",
  },
  {
    item: "Refrigerante",
    preco: "R$ 5,35",
  },
  {
    item: "Quejo",
    preco: "R$ 10,60",
  },
];
let preco = [];
const valorTotal = compras.forEach(function (item) {
  item.preco = item.preco.replace("R$", "");
  item.preco = item.preco.replace(",", ".");
  item.preco = parseFloat(item.preco);
  preco.push(item.preco);
});
let p = 0;
const valorFim = preco.reduce((acc, valor) => acc + valor, 0);

//

const li = document.querySelectorAll("li");

const filtro = Array.prototype.filter.call(li, (item) => {
  return item.classList.contains("ativo");
});

console.log(filtro);

//metodo aplly()

const numbers = [2, 22, 526, 225, 663];
