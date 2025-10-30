// const cep = fetch("https://viacep.com.br/ws/38025370/json/");
// //fetch faz requisições HTTP

// cep
//   .then((resolucao) => resolucao.json())
//   .then((body) => {
//     console.log(body.bairro); //como retorna um objeto, posso iterar nele normalmente
//     const conteudo = document.querySelector(".conteudo");
//     conteudo.innerText = body.bairro;
//   });

//O objeto Response, possui um corpo com o conteúdo da resposta. Esse corpo pode ser transformado utilizando métodos do protótipo do objeto Response. Estes retornam outras promises.

// const cep = fetch("./style.css");

// cep
//   .then((r) => r.text())
//   .then((body) => {
//     const conteudo = document.querySelector(".conteudo");
//     const style = document.createElement("style");
//     style.innerHTML = body;
//     conteudo.appendChild(style);
//   });

//Podemos pegar um arquivo inteiro em HTML, transformar o corpo em texto e insetir em uma div com o innetHTML. A partir dai podemos manipular esses dados como um DOM qualquer.

const sobre = fetch("./sobre.html");
const div = document.createElement("div");

sobre
  .then((r) => r.text())
  .then((body) => {
    // console.log(body);
    div.innerHTML = body;
    const titulo = div.querySelector("h1"); //consigo selecionar normalmente e rtabalhar em cima dele
    console.log(titulo);
  });
