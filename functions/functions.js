//Com o bind nao precisamos passar todos os argumentos em todas as funções:

// const Carro = {
//   marca: "Ford",
//   ano: 2018,
//   acelerar: function (aceleracao, tempo) {
//     return `${this.marca} acelerrou ${aceleracao} em ${tempo}`;
//   },
// };

// console.log(Carro.acelerar(100, 20));

// const honda = {
//   marca: "honda",
// };

// const acelerarHonda = Carro.acelerar.bind(honda);
// console.log(acelerarHonda(200, 10));
//O this retornou o valor da marca da const honda e nao da ford, dentro do carro.

//Exercicio
// Retorne a soma total de caracteres dos
// parágrafos acima utilizando reduce

const paragrafos = document.querySelectorAll("p");

const totalCaracteres = Array.from(paragrafos).reduce(
  (total, p) => total + p.textContent.length,
  0
);
console.log(`O total de caracteres é ${totalCaracteres}`);

//Meu Método
// const conteudoP = [];
// paragrafos.forEach(function (p) {
//   conteudoP.push(p.textContent);
// });

// const qntCaracter = conteudoP.join("").length;
//775 caracteres

// Crie uma função que retorne novos elementos
// html, com os seguintes parâmetros
// tag, classe e conteudo.

function criarElemento(tag, classe, conteudo) {
  const elemento = document.createElement(tag);
  elemento.classList.add(classe);
  elemento.textContent = conteudo;
  return elemento;
}

// const novoElemento = criarElemento("h1", "criado", "Aos fortes, os desafios!");
// document.body.appendChild(novoElemento);

// Crie uma nova função utilizando a anterior como base
// essa nova função deverá sempre criar h1 com a
// classe titulo. Porém o parâmetro conteudo continuará dinâmico

const criarTitulo = criarElemento.bind(null, "h1", "Titulo");

const novoTitulo = criarTitulo("Aos fortes, os desafios");
