// function Pessoa(nome, idade) {
//   this.nome = nome;
//   this.idade = idade;
// }

// Pessoa.prototype.andar = function () {
//   return this.nome + " Pessoa andou";
// };

// const andre = new Pessoa("Andre", 25);

// //O prototype é o corpo do objeto da funcao, onde posso aninhar métodos e qualquer um que ser instanciado por ela, vai adquirir os metodos aninhados no prototype. POO do JS.

// const pais = "Brasil";
// const cidade = new String("Rio");

// const lista = document.querySelectorAll("li");
// const listaArray1 = Array.prototype.slice.call(lista);
// const listaArray2 = Array.from(lista);

// const Carro = {
//   marca: "fiat",
//   preço: 1000,
//   andar: function () {
//     return true;
//   },
// };

//Exercicios

// function Pessoa(nome, sobrenome, idade) {
//   (this.nome = nome), (this.sobrenome = sobrenome), (this.idade = idade);
// }

// const andre = new Pessoa("Andre", "Ramalho", 25);

// Pessoa.prototype.nomeCompleto = function () {
//   return (
//     this.nome + " " + this.sobrenome + " possui " + this.idade + " de idade "
//   );
// };

// const lista = document.querySelectorAll("li");
// const lista1 = Array.prototype.slice.call(lista);

// //boolean
// //para ver e listar as prop:
// Nodelist.prototype, HTMLCollection.prototype ou
// //Object.getOwnPropertynames(Nodelist.prototype ou outro valor), irá retornar todas propriedades dele.
// const array = document.querySelector("li");
// array; //HTMLLIElement
// array.click; //Function
// array.innerText; //String
// array.value; //Number
// array.hidden; //Boolean
// array.offsetLeft; //Number
// array.click(); //undefined

//Exercicios String 3

// Utilizando o foreach na array abaixo,
// some os valores de Taxa e os valores de Recebimento

const transacoes = [
  {
    descricao: "Taxa do Pão",
    valor: "R$ 39",
  },
  {
    descricao: "Taxa do Mercado",
    valor: "R$ 129",
  },
  {
    descricao: "Recebimento de Cliente",
    valor: "R$ 99",
  },
  {
    descricao: "Taxa do Banco",
    valor: "R$ 129",
  },
  {
    descricao: "Recebimento de Cliente",
    valor: "R$ 49",
  },
];

function toStringtoNumber(valor) {
  let valorlimpo = valor.replace(/[^0-9,]/g, "");
  let valorInt = parseInt(valorlimpo);
  return valorInt;
}

let somaTaxa = 0;
let somaRecebimento = 0;

for (i = 0; i < transacoes.length; i++) {
  let valor = transacoes[i]["valor"];
  let descricao = transacoes[i]["descricao"];
  if (descricao.includes("Taxa")) {
    somaTaxa += toStringtoNumber(valor);
  } else {
    somaRecebimento += toStringtoNumber(valor);
  }
}
console.log(somaTaxa);
console.log(somaRecebimento);

// Retorne uma array com a lista abaixo
const transportes = "Carro;Avião;Trem;Ônibus;Bicicleta";

const arrayTransportes = transportes.split(";");
console.log(arrayTransportes);

// Substitua todos os span's por a's
const html = `<ul>
                 <li><span>Sobre</span></li>
                <li><span>Produtos</span></li>
                 <li><span>Contato</span></li>
               </ul>`;

const htmlFinal = html.replace(/<\/?span>/g, "<a>");
console.log(htmlFinal);
// Retorne o último caracter da frase
const frase = "Melhor do ano!";
console.log(frase.slice(-1));
// Retorne o total de taxas
const transacoes1 = [
  "Taxa do Banco",
  "   TAXA DO PÃO",
  "  taxa do mercado",
  "depósito Bancário",
  "TARIFA especial",
];

let qntTaxa = 0;
for (i = 0; i < transacoes1.length; i++) {
  let item = transacoes1[i].toLowerCase();
  if (item.includes("taxa")) {
    qntTaxa += 1;
  }
}
console.log(qntTaxa);

console.log(parseFloat("151525.521 reais"));
