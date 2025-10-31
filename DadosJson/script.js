// fetch("./dados.json")
//   .then((r) => r.json())
//   .then((json) =>
//     json.forEach((element) => {
//       console.log(element);
//     })
//   );

//JSON.parse() vai transformar um texto JSOn em um objeto JavaScript. JSON.stringify() irá transformar um objeto JavaScript em uma string no formato JSON.
fetch("./dados.json")
  .then((r) => r.text())
  .then((jsonText) => {
    //console.log(jsonText);
    const jsonFinal = JSON.parse(jsonText);
    // console.log(jsonFinal);
  });
//Antes era preciso fazer isso, passando pelo JSON.parse(), hoje fazemos de uma forma diferente, atraves do response.json.

const configuracoes = {
  player: "Google",
  tempo: 25.5,
  aula: "2.1 JavaScript",
};
localStorage.config = JSON.stringify(configuracoes);
const stringConfig = JSON.stringify(configuracoes);
console.log(JSON.parse(localStorage.config));

fetch("https://pokeapi.co/api/v2/pokemon/")
  .then((r) => r.json())
  .then((pokemon) => {
    console.log(pokemon);
  });
