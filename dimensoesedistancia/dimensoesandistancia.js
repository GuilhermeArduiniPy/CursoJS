// const listaAnimais = document.querySelector(".animais-lista");
// const animaisTop = listaAnimais.offsetTop;
// console.log(animaisTop);
// //distancia da classe ate o top
// const primeiroh2 = document.querySelector("h2");
// console.log(primeiroh2.offsetLeft);
// //distancia do selecionado pra esquerda
// const rect = primeiroh2.getBoundingClientRect();
// console.log(rect);

// //window para saber a tela do usuario

// console.log(
//   window.innerWidth,
//   window.innerHeight,
//   window.outerHeight,
//   window.outerWidth,
//   window.pageYOffset
// );
// //innerwidth e innerhight, vai retornar a largura e altura da janela visivel dentro do navegador. o outerwidth e outerheight vai retornar o tamanho total da tela, incluindo bordas, barra de ferramentas etc
// //mathMedia -> semelhante ao medie query do css
// const small = window.matchMedia("(max-width:300px)");
// console.log(small);
// //exemplo:
// if (small.matches) {
//   console.log("Usuario Mobile");
// } else {
//   console.log("Usuario Tablet");
// }
//Exercicios
//Verifique a distância da primeira imagem em relacao ao topo da página
const primeiraImg = document.querySelector("img");
const distTopo = primeiraImg.offsetTop;
console.log(distTopo);
//Retorne a soma da largura de todas as imagens
const imgs = document.querySelectorAll("img");
let soma = 0;
imgs.forEach(function (img) {
  const dados = img.getBoundingClientRect();
  soma += dados.width;
});
console.log(`Soma total das larguras: ${soma}`);
//Logica do Professor
// const imagens = document.querySelectorAll("img");
// let soma = 0;
// imagens.forEach((imagem) => {
//   soma += imagem.offsetWidth;
// });
// console.log(`Soma = ${soma}`);

//Verifique se os links da pagina possuem o minimo recomendado para telas utilizadas com o dedo. (48px/48px de acordo com o google)

const links = document.querySelectorAll("a");
links.forEach(function (link) {
  const Link = link.getBoundingClientRect();
  console.log(Link.width, Link.height);
  if (Link.width >= 48 && Link.height >= 48) {
    console.log("Possui o mínimo recomendado!");
  } else {
    console.log("Não possui!");
  }
});
//Para conferir é ir no style css e alterar pra maior e ver se cai na condição e retorna a mensagem.
//Se o browser for menor que 720px, adicione a classe menu-mobile ao menu
const menu = document.querySelector(".menu");
const tamanhoBrowser = window.innerWidth;
console.log(menu);
if (tamanhoBrowser < 720) {
  menu.classList.add("menu-mobile");
}
