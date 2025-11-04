//É criada a partir da declaração de uma variável, na qual assinalamos uma função. Esta função pode ser anônima ou nomeada. A mesma poderá ser ativada através da variável assinalada.

const somar = function (a, b) {
  return a + b;
};

console.log(somar(2, 3));

const quadrado = (a) => a * a;
console.log(quadrado(4));

//Tambem funciona para arrow functions, como no exemplo acima.

//Exercicios Basicos

//Remova o erro

const priceNumber = (n) => +n.replace("R$", "").replace(",", ".");
console.log(priceNumber("R$99,99"));
//Resposta = foi so colocar depois da declaração da função.

//Crie uma IIFE e isole o escopo de qualquer código JS.

(function () {
  const nome = "IIFE";
  console.log(nome);
})();

//Respota = foi so colocar os parenteses na função e no final da função para ativar a IIFE.

//Como podemos utilizar a função abaixo.
const active = (callback) => callback();
active(() => console.log("ativou"));
//Resposta = foi so passar uma função anonima como parametro da função active.

//Factory function são funções que retornam objetos sem utilizarmos a palavra chave new. Possuem basicamente a mesma função que o constructo functions/classes.

function criarPessoa(nome, sobrenome) {
  return {
    nome: nome,
    sobrenome: sobrenome,
    nomeCompleto() {
      return `${this.nome} ${this.sobrenome}`;
    },
  };
}

const pessoa = criarPessoa("Luiz", "Otávio");
pessoa.nome = "João"; //Podemos alterar normalmente.
//Ice Factory - Função que retorna um objeto congelado (impede alterações no objeto).

function criarPessoaCongelado(nome, sobrenome) {
  return Object.freeze({
    nome: nome,
    sobrenome: sobrenome,
    nomeCompleto() {
      return `${this.nome} ${this.sobrenome}`;
    },
  });
}

const pessoaFreeze = criarPessoaCongelado("Luiz", "Otávio");
pessoaFreeze.nome = "João"; //Não altera, pois o objeto está congelado.

//Se estivessemos criados como modo, usariamos use strict para evitar alterações.

function Pessoa(nome) {
  if (!(this instanceof Pessoa)) return new Pessoa(nome); //Verifica se a função foi chamada com new. Caso nao tenha sido, chama a funcao novamente com new. É uma forma de garantir que a funcao sempre retorna um objheto Pessoa.
  this.nome = nome;
}

Pessoa.prototype.andar = function () {
  return `${this.nome} andou!`;
};

const p1 = Pessoa("Luiz");

console.log(p1);
