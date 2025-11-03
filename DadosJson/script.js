// fetch("./dados.json")
//   .then((r) => r.json())
//   .then((json) =>
//     json.forEach((element) => {
//       console.log(element);
//     })
//   );

//JSON.parse() vai transformar um texto JSOn em um objeto JavaScript. JSON.stringify() irá transformar um objeto JavaScript em uma string no formato JSON.
// fetch("./dados.json")
//   .then((r) => r.text())
//   .then((jsonText) => {
//     //console.log(jsonText);
//     const jsonFinal = JSON.parse(jsonText);
//     // console.log(jsonFinal);
//   });
//Antes era preciso fazer isso, passando pelo JSON.parse(), hoje fazemos de uma forma diferente, atraves do response.json.

// const configuracoes = {
//   player: "Google",
//   tempo: 25.5,
//   aula: "2.1 JavaScript",
// };
// localStorage.config = JSON.stringify(configuracoes);
// const stringConfig = JSON.stringify(configuracoes);
// console.log(JSON.parse(localStorage.config));

// fetch("https://pokeapi.co/api/v2/pokemon/1/")
//   .then((r) => r.json())
//   .then((pokemon) => {
//     console.log(pokemon);
//   });

//Uma requisicao HTTP é feita atraves de uma URL. O metodo padrão é o GET, mas existem outros como POST, UPDATE, DELETE E HEADER.

const url = "https://jsonplaceholder.typicode.com/posts";

//Vamos simular uma requisicao de POST em uma API criada pra simular isso.

const options = {
  method: "HEAD",
  // body: '{"title":"JavaScript"}',
  // headers: {
  //   "Content-Type": "application/json; charset=utf-8",
  // },
};

// fetch(url, options)
//   .then((r) => r.json())
//   .then((response) => console.log(response));

//Nos Headers consigo controlar o Cache-Control, tempo que oa rquivo deve ficar em cache em segundos. Cont-Type, tipo de conteudo a ser consumido.

fetch(url, options).then((r) => console.log(r.headers.forEach(console.log)));

//CORS - Cross-Origin Resource Sharing, gerencia como deve ser o compartilhamento de recursos entre diferentes origens. É definido no servidor se pe permitido ou não o acesso dos recursos através de scriptspor outros sites. Ultilizando o Access-Control-Allow-Origin.
//Se o servidor não permitir o acesso, este será bloquado, É possivel passar por cima do bloqueio utilizando um proxy.
//CORS é um acordo entre browser/ servidor ou servidor/ servidor. Proege um pouco mais os ervidor mas nao é inviolável.
//Erro no cors é pq n permite a integracao do script com uma fonte diferente.
