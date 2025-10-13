//classList retorna uma lista com as classes do elemento. Permite adicionar, remover e verificar se contém.
// const menu = document.querySelector(".menu");
// menu.classList.add("ativo");
// menu.classList.remove("ativo");
// menu.classList.toggle("ativo");
// menu.classList.toggle("ativo");
// menu.classList.toggle("ativo");
//.toggle, se tiver remove e se nao tiver adiciona.
// if (menu.classList.contains("ativo")) {
//   console.log("Possui Ativo");
// }
//tentei experimentar com o return mas o return so consegue responder dentro de uma function.
// console.log(menu);
//attributes retorna os atributos do elemento
// const animais = document.querySelector(".animais");
// console.log(animais.attributes["data-texto"]);

//getAttribute e setAttribute
//retornam ou definem de acordo com o atributo selecionado

// const img = document.querySelector("img");
// console.log(img);
// console.log(img.getAttribute("src")); //retornando o caminho da imagem, posso pegar qlq outro atributo: EX:alt;
// console.log(img.getAttribute("alt"));
// img.setAttribute("alt", "É uma raposa");
// console.log(img.getAttribute("alt"));
//get eu pego, e posso setar e dps que setar, será aquele valor quando chamar apos o set.
// const possuiAlt = img.hasAttribute("alt");
// console.log(possuiAlt);
//hasAttribute pergunta se possui aquele atributo declarado, retornando um boolean.
//Read Only vs Writable
//Existem propriedades que nao permitem a mudanca de seus valores, essas sao considerados Read Only, ou seja, apenas leitura.Uma delas é attribute!
//Exercicios
//Adicione a classe ativo a todos os itens do menu
const menu = document.querySelectorAll(".menu a");
menu.forEach((item) => {
  item.classList.add("ativo");
});
console.log(menu);
//remove a classe ativo de todos os itens do menu e mantenha apenas no primeiro
menu.forEach((item) => {
  item.classList.remove("ativo");
});
menu[0].classList.add("ativo");
//Aqui eu itero sobre o indice 0. que é o primeiro e executo o metodo class list e add pra ir somente nele.
//Verifique se as imagens possuem o atributo alt
const img = document.querySelectorAll("img");

img.forEach((img) => {
  const possuiAtributo = img.hasAttribute("alt");
  console.log(img, possuiAtributo);
});

//Modifique o href do link externo no menu
const linkExterno = document.querySelectorAll(".menu a");
// console.log(linkExterno);
// var i = 0;
// Minha logica:
// linkExterno.forEach(function (item) {
//   const href = item.getAttribute("href");

//   if (href.startsWith("#")) {
//     console.log("é link interno", href);
//   } else {
//     console.log("é link externo", href);
//   }
// });
//Resposta do Professor:
const link = document.querySelector('a[href^="http"');
console.log(link);
link.setAttribute("href", "https://www.google.com/");
console.log(link);
