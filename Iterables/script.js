//Iteravéis são objetos que possuem o método [Symbol.iterator], geralmente no protótipo, é dentro dele que a função que lida com a iteração será definida.

const frutas = ["Banana", "Morango", "Uva"];
const frase = "Isso é JavaScript";

// for (const f of frutas) {
//   console.log(f);
// }

// for (const f of frase) {
//   console.log(f);
// }

const buttons = document.querySelectorAll("button");

// for (btn of buttons) {
//   btn.style.color = "red";
// }

// fetch("https://pokeapi.co/api/v2pokemon/").then((response) =>
//   console.log(response)
// );
//Além do for...of
//temos tambem o for...in

const carro = {
  carro: "Honda",
  ano: 2018,
};

for (const prop in carro) {
  console.log(prop, carro[prop]);
}

const btnUnico = document.querySelector("button");

const btnStyle = getComputedStyle(btnUnico);

console.log(btnStyle);

for (prop in btnStyle) {
  console.log(prop, btnStyle[prop]);
}

//do...while

let i = 0;

do {
  console.log(i++);
} while (i <= 5);
