//addEventListener adiciona uma funcao ao elemento, esta chamada de callback, que será ativada que assim que certo evento ocorrer neste elemento.
// const img = document.querySelector("img");
// function callBack() {
//   console.log("Clicou");
// }
// img.addEventListener("click", callBack);
// img.addEventListener("click", function () {
//   console.log("clicou");
// });
//Boa pratica é separar a funcao de callback do addEventListener, ou seja, declarar uma funcao ao invés de passar diretamente uma função anônima. Refiz o Evento anterior e comentei a má pratica.
// const animaisLista = document.querySelector(".animais-lista");
// console.log(animaisLista);

// function callbackLista(event) {
//   console.log(event.currentTarget);
//   console.log(event.target);
// }

// animaisLista.addEventListener("click", callbackLista);
//no CurrentTarget ele retorna no console a lista completa, enquanto o Target, retorna o objeto imagem especifico que cliquei com seu src e seu alt.

//event.preventDefault() previne o comportamento padrão do evento no browser. No caso de um link externo, por exemplo, irá previnir que o link seja ativado.

// const linkExterno = document.querySelector("a[href^='http']");

// function handleLinkExterno(event) {
//   event.preventDefault(); //aqui previni e nao deixa encaminhar para o link
//   console.log(event);
// }

// linkExterno.addEventListener("click", handleLinkExterno);

//Diferentes eventos como click, scroll, resize, keydown, keyup, mouseenter e etc. Eventos podem ser adicionados a diferentes elementos, como o window e document também.

// const h1 = document.querySelector("h1");
// function handleEvent(event) {
//   console.log(event.type, event);
// }
// h1.addEventListener("click", handleEvent);
// h1.addEventListener("mousemove", handleEvent); cada movimento
// h1.addEventListener("mouseenter", handleEvent); cada entrada no elemento
// window.addEventListener("scroll", handleEvent);
// window.addEventListener("resize", handleEvent);
// window.addEventListener("keydown", handleEvent);
//Poderoso.....Lembre-se disso!

//keyBoard pode adicionar atalhos para facilitar a navegacao no seu site, através de eventos do keyBoard.
// function handleKeyboard(event) {
//   if (event.key === "a") {
//     document.body.classList.toggle("full-screem");
//   }
//   console.log(event.key);
// }
// window.addEventListener("keydown", handleKeyboard);

//addEventListener é adionado a um unico elemento, entao quando for necessário passar em varios, passa por um forEach

// const imgs = document.querySelectorAll("img");

// function handleImg(event) {
//   console.log(event.currentTarget.getAttribute("src"));
// }

// imgs.forEach((img) => {
//   img.addEventListener("click", handleImg);
// });

//Exercicios
//Quando o usuario clicar nos links internos do site, adicione a classe ativo ao item clicado e remova os demais itens caso eles possuam a mesma. Previna o comportamento padrao desses links

const linksInternos = document.querySelectorAll("a[href^='#']");
// console.log(linksInternos);
function addAtivo(event) {
  event.preventDefault(); //encerro o comportamento
  linksInternos.forEach(function (link) {
    link.classList.remove("Ativo");
  });
  event.currentTarget.classList.add("Ativo");
}

linksInternos.forEach(function (link) {
  link.addEventListener("click", addAtivo);
});

//Selecione todos os elementos do site começando a partir do body, ao clique mostre exatamente quais elementos estão sendo clicados.

const elementos = document.querySelectorAll("body, body *");
// console.log(elementos);

function showElement(event) {
  console.log(event.target);
}
function removeElement(event) {
  event.target.remove();
}
function actionElement(event) {
  showElement(event);
  removeElement(event);
}

// addEventListener("click", actionElement);
// addEventListener("click", removeElement);
//Ultilizando o codigo anterior, ao invés de mostrar no console, remova o elemento que está sendo clicado, o método remove() remove um elemento.
//resolvido no codigo acima
//Se o usuario clicar na tecla(t), aumente todo o texto do site
const texto = document.body.innerText;
let tamanho = 16;

function upTexto(event) {
  if (event.key === "t") {
    document.body.style.fontSize = tamanho + "px";
    tamanho += 10;
  }
}

window.addEventListener("keydown", upTexto);
