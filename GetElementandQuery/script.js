const animais = document.getElementById("animais");
console.log(animais.innerHTML);
// getElementById voce busca pleo id, porem no getElementsByClassName voce procura pela classe e o getElementByTagName, voce procura pela tag html.
const tagh1 = document.getElementsByTagName("h1");
const classe = document.getElementsByClassName("grid-section");
console.log(tagh1);
console.log(classe[1]); //Posso percorrer por index, e isso me permite por exemplo, puxar o primeiro elemento daquela classe, tbm serve para TagName

//Seleciona todas as UL's, retornando uma HTMLCollection
const ul = document.getElementsByTagName("ul");

const primeiral1 = document.querySelector("li");
console.log(primeiral1);
const primeiraul = document.querySelector("ul");
console.log(primeiraul);

const linkInternos = document.querySelector('[href^="#"]');
console.log(linkInternos);
const img = document.querySelectorAll(" img");
//Vai retornar um NodeList, uma lista de nós, seja classe, tags, etc. Apos colocar isso em uma variavel, por ser uma lista, posso iterar atraves de index.
console.log(img);

//Diferença de HTMLCollection vs NodeList: nos métodos e propriedades de ambas. Alem disso, a NodeList retornada com querySelectorAll é estática.

const gridSectionHTML = document.getElementsByClassName("grid-section");
const gridSectionNode = document.querySelectorAll(".grid-section");

console.log(gridSectionHTML);
console.log(gridSectionNode);
//metodo foreach() existe apenas no Nodelist
//os parametros da funcao no foreah, normalmente é item e index, o primeiro sendo o item da constante e o segundo um indice.
console.log(gridSectionHTML.length);
gridSectionNode.forEach(function (item, index) {
  console.log(item, index);
});
//transformando arraylike em array
const arrayGrid = Array.from(gridSectionHTML);
console.log(arrayGrid);
//agora temos todos os metodos de array de antes
arrayGrid.forEach(function (item) {
  console.log(item);
});

//Exercicios
//Retorne no console todas as imagens do site
const imagem = document.getElementsByTagName("img");
const arrayImg = Array.from(imagem);
console.log(arrayImg);
//Retorne no console apenas as imagens que coemçaram com a palrva imagem
const imagemPalavra = document.querySelectorAll("img[src^='img/imagem']");
console.log(imagemPalavra);
//Selecione todos os links internos (onde o href comeca com #)
const LinkInterno = document.querySelectorAll('[href^="#"]');
console.log(LinkInterno);
//Selecione o primeiro h2 dentro de .animais-descricao
const primeiroh2 = document.querySelector(".animais-descricao h2");
console.log(primeiroh2.innerHTML);
//Selecione o ultimo p do site
const ultimoP = document.querySelectorAll("p");
console.log(ultimoP[ultimoP.length - 1]);
