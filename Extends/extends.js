class Veiculos {
  constructor(rodas, combustivel) {
    this.rodas = rodas;
    this.combustivel = combustivel;
  }

  acelerar() {
    console.log("Acelerando");
  }
}

class Moto extends Veiculos {
  constructor(rodas, combustivel, capacete) {
    super(rodas, combustivel);
    this.capacete = capacete;
  }
  acelerar() {
    super.acelerar(); //Chama o metodo da classe pai
    console.log("Acelerou muito rápido!");
  }
  empinar() {
    console.log("Moto empinou com " + this.rodas + " rodas!");
  }
}

const honda = new Moto(2, "gasolina", true);
const civic = new Veiculos(4);
//A classe que extende, recebe todos os atributos e metodos da classe pai. POO classico!
//Se tiver dois metodos com o mesmo nome, ele vai ler o que encontrar primeiro, entao se sobreescrever um metodo em outra classe e chamar aquele emtodo, ele vai imprimir aquele primeiro que encontrar.

//Mas e se eu quiser chamar o metodo da classe pai?
//Para isso usamos a palavra reservada super.

//Posso suar Super no cosntructor também.
