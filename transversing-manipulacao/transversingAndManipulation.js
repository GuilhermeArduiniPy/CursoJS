// // const h1 = document.querySelector("h1");
// // h1.innerHTML;
// // //faz aparecer apenas o conteuno, sem as tags
// // const animaisDescricao = document.querySelector(".animais-descricao");
// // console.log(animaisDescricao.innerText);
// // h1.innerHTML = "<p>Texto</p>";
// //aqui substitui o conteudo da tag (innerhtml)
// // h1.outerHTML = "<p>Texto</p>";
// //no outerHTML substitui tudo, a tag h1, o conteudo e etc e substitui pra <p> e o conteudo

// //Transversing
// //navegando pelo DOM, utilizando suas propriedades e métodos.

// const lista = document.querySelector(".animais-lista");
// // console.log(lista.parentElement);
// //parentElement vai retornar o pai do elemento e a medida que colocar, vai ser o pai do pai...
// console.log(lista.nextElementSibling); //pegando o elemento abaixo e o .previousElementSibling, puxa o elemento acima.

// console.log(lista.children); //filhos da lista
// //Como retorna um HTMLCollection, podemos percorrer igual uma lista
// console.log(lista.children[0]); //primeiro filho
// console.log(lista.children[lista.children.length - 1]); //ultimo filho
// console.log(lista.querySelector("li:last-child"));
// //tambem puxamos pelo metodo do css, como feito logo acima ↑ ↑ ↑ ↑ ↑ ↑ ↑
// //Manipulando elementos
// const contato = document.querySelector(".contato");
// const titulo = contato.querySelector(".titulo");
// const animais = document.querySelector(".animais");

// // animais.appendChild(titulo); // adicionamos o titulo na sessão da const animais.

// const mapa = document.querySelector(".mapa");
// // contato.insertBefore(animais, mapa); //O mapa, segundo argumento, precisa ser filho do elemento que esta sendo alvo de inserção.
// // contato.removeChild(titulo); //remove o elemento
// // contato.replaceChild(mapa, titulo);

// //Podemos criar novos elementos com o método createElement()

// const novoh1 = document.createElement("h1");
// novoh1.innerText = "Novo Título";
// novoh1.classList.add("titulo");
// //adicionando o novo elemento apos alguma classe:
// mapa.appendChild(novoh1);

//cloneElement

// const h1 = document.querySelector("h1");
// const faq = document.querySelector(".faq");

// const cloneh1 = h1.cloneNode(true); // Cria outro objeto clone, se tornando um proprio. Não afetando nada o objeto primario.

// faq.appendChild(cloneh1);

//Exercicio:
//Duplique o menu e adicione ele em copy
// const menu = document.querySelector(".menu");

// const cloneMenu = menu.cloneNode(true);

// const copy = document.querySelector(".copy");

// copy.appendChild(cloneMenu);
//feito

//Selecione o primeiro DT da DL de Faq
const menu = document.querySelector("dl");
const primeiroDt = menu.children[0];

//Selecione o DD referente ao primeiro DT

const primeiroDD = primeiroDt.nextElementSibling;

//Substitua o conteudo de html de .faq pelo de .animais

const faq = document.querySelector(".faq");
const animais = document.querySelector(".animais");
// faq.innerHTML = animais.innerHTML;
