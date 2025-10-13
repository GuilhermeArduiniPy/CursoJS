// const imgs = document.querySelectorAll("img");

// imgs.forEach(function (item) {
//   console.log(item);
// });

//Objetos arraylike é essencial transforma-los em Array.
// const titulos = document.getElementsByClassName("titulo");
// const arrayTitulo = Array.from(titulos);
// arrayTitulo.forEach(function (item, index) {
//   console.log(item, index);
// });

//Arrow Function: Sintaxe curta, basta remover a palavra chave function e adicionar a fat arrow após os argumentos.
// const titulos = document.getElementsByClassName("titulo");
// const arrayTitulos = Array.from(titulos);
// arrayTitulos.forEach((item, index) => {
//   console.log(item, index);
// });

//Mostre no console cada parágrafo do site
const tagP = document.querySelectorAll("p");
tagP.forEach((item, index) => console.log(item, index));
//Mostre o texto dos paragrafos no Console
const textoP = document.querySelectorAll("p");
textoP.forEach((item) => console.log(item.innerText));
//Como corrigir os erros abaixo:
const imgs = document.querySelectorAll("img");
imgs.forEach((item, index) => {
  console.log(item, index);
});
//Foi colocar o item e index entre parenteses, pois retornam mais de um valor e precisa ter nesse caso.
let i = 0;
imgs.forEach(() => {
  console.log(i++);
});
//Acrescentei um parenteses vazio antes da arrow functions, pq precisa ter
