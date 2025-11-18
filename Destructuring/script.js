//Destructuring permite a desestruturação de Arrays e Objetos. Atribuindo suas propriedades á novas variáveis.

// const carro = {
//   marca: "honda",
//   ano: 2018,
// };

// // console.log(carro.ano);
// // console.log(carro.marca);
// //Ao invés de ficar repetitivo, ativamos a desestruturação:

// const { marca, ano } = carro;
// // console.log(marca);
// // console.log(ano);

// //vamos para outro exemplo mais complexo:

// const cliente = {
//   nome: "Andre",
//   compras: {
//     digitais: {
//       livros: ["livro 1", "livro 2"],
//       videos: ["video JS", "video HTML"],
//     },
//     fisicas: {
//       cadernos: ["caderno"],
//     },
//   },
// };

// // console.log(cliente.compras.digitais.livros);
// // console.log(cliente.compras.digitais.videos);
// //Vamos imprimir de uma forma mais curta e sem repetir muios codigos

// // const { livros, videos } = cliente.compras.digitais;
// // console.log(livros);
// // console.log(videos);

// const {
//   digitais,
//   fisicas,
//   digitais: { livros, videos },
// } = cliente.compras;
// //Aqui eu tive que indicar que os lviros e videos estavam em outro nivel, no caso dentro de digitais.
// console.log(digitais);
// console.log(fisicas);
// console.log(livros);
// console.log(videos);

// //Para desestruturarmos arrays devemos colocar as veriáveis entre [].

// const frutas = ["banana", "morango", "laranja"];

// const [primeira, segunda, terceira] = frutas;
// //Dessa forma
// console.log(primeira);

// //Tambem podemos desestruturar um objeto quando ele vai ser pego como parametro em uma função

// function handleKeyboard({ key }) {
//   console.log(key);
// }

// document.addEventListener("keyup", handleKeyboard);

// //Exercicio

// const btn = document.querySelector("button");
// const btnStyles = getComputedStyle(btn);
// //pegamos os valores do css atual e depois desestruturamos
// const { backgroundColor, margin, color } = btnStyles;

// console.log(backgroundColor, margin, color);

// //troque os valores das variaveis

// let cursoAtivo = "JavaScript";
// let cursoInativo = "HTML";
// //tecnica de desestruturação pra mudar valores
// [cursoAtivo, cursoInativo] = [cursoInativo, cursoAtivo];

// console.log(cursoAtivo);
// console.log(cursoInativo);

// //corrija o erro abaixo

// const cachorro = {
//   nome: "bob",
//   raca: "labrador",
//   cor: "Amarelo",
// };

// // const { bobCor: cor } = cachorro;
// //correção:
// const { cor: BobCor } = cachorro;

// //parametros rest faz com que atribuimos todos osparametros criados em um unico objeto de array real:

// function perimetroForma(lado, totallados, ...listArgumentos) {
//   console.log(listArgumentos);
//   return lado * totallados;
// }
// console.log(perimetroForma(10, 20, "ola"));
//Só pode existir um parametro rest por função e ele deve ser o ultimo

//outro semelhante a read é o spread. ele vai iterar cobre o valor indicado

// const frutas = ["Banana", "Uva", "Morango"];
// const legumes = ["Cenoura", "Batata"];

// const comidas = [...frutas, "Abacate", ...legumes];

// console.log(comidas);
//ele iterou por cada uma e colocou cada item dos respectivos arrays em um index, se eu colocasse direto o array sem o spread ele colocaria todo aquele array dentro do index 0, enquanto com o spread ele itera e cada valor que passa ele coloca em um indice.

//Exercicios de read e spread
//spread é um jeito dierente de abrir uma lista e iterar sobre os valores,colocando ... antes da variavel e isso vai criar uma lista com cada um dos valores daquela variavel.

//Reescreva a função utilizando valores inciiais de parametros com ES6
function createButton(background = "blue", color = "red") {
  const buttonElement = document.createElement("button");
  buttonElement.style.background = background;
  buttonElement.style.color = color;
  return buttonElement;
}

const redButton = createButton("black", "white");
console.log(redButton);

//utilize o método push para inserir as frutas ao final de comidas.

const frutas = ["Banana", "Uva", "Morango"];
const comidas = ["pizza", "Batata"];

// frutas.forEach((fruta) => comidas.push(fruta));
//ou

comidas.push(...frutas);
console.log(comidas);
