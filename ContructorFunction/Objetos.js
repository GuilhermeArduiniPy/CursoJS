// const carro = {
//   marca: "honda",
//   preco: 0,
// };

// const honda = carro;
// honda.marca = "FIAT";
// honda.preco = 3000;

//Esse é o metodo errado

//metodo correto
// function Carro() {
//   this.marca = "marca";
//   this.preco = 0;
// }

// const honda = new Carro();
// const fiat = new Carro();
// honda.marca = "honda";
// honda.preco = 3000;

// fiat.marca = "Fiat";
// fiat.preco = 10000

//Modelo indicado

// function Carro(marca, preco) {
//   this.marca = marca;
//   this.preco = preco;
// }

// const fiat = new Carro("fiat", 2000);
// const honda = new Carro("Honda", 1500);

// function Carro2(marca, precoInicial) {
//   const taxa = 1.2;
//   const precoFinal = precoInicial * taxa;
//   this.marca = marca; //Só fica exposto o que está com this
//   this.preco = precoFinal;
// }

// const mazda = new Carro2("Mazda", 5000);

// const Dom = {
//   seletor: "li",
//   element() {
//     return document.querySelector(this.seletor);
//   },
//   ativar() {
//     const elementoSelecionado = this.element();
//     elementoSelecionado.classList.add("ativado");
//   },
// };
// Dom.ativar();
// Dom.seletor = "ul";
// Dom.ativar();

//Transformando o codigo acima em uma função construtora

function Dom(seletor) {
  (this.element = function () {
    return document.querySelector(seletor);
  }),
    (this.ativar = function () {
      this.element().classList.add("Ativo");
    });
}

const li = new Dom("li");
const ul = new Dom("ul");
const lastLi = new Dom("li:last-child");
//pode usar os mesmos parametros que uma busca queryselector

//Exercicio
//criando constructor function

function Pessoa(nome, idade) {
  this.nome = nome;
  this.idade = idade;
  this.andar = function () {
    console.log(this.nome + " Andou... ");
  };
}

const Maria = new Pessoa();
Maria.nome = "Maria";
Maria.idade = 25;
const joão = new Pessoa("João", 20);

const Rafael = new Pessoa();
Rafael.nome = "Rafael";
Rafael.idade = 15;

//Crie uma contructor function (Dom) para manipulação de listas de lementos do dom. Deve conter as seguintes propriedades e métodos:
//elements, retorna NodeList com os elementos selecionados addClass(classe), adiciona a classe a todos os elementos, removeClass(classe), remove a classe a todos os elementos.

function Dom(seletor) {
  const elementosList = document.querySelectorAll(seletor);
  this.elemento = elementosList;
  this.addClass = function (classe) {
    elementosList.forEach((element) => {
      element.classList.add(classe);
    });
  };
  this.removeClass = function (classe) {
    elementosList.forEach((element) => {
      element.classList.remove(classe);
    });
  };
}
const lista = new Dom("li");
