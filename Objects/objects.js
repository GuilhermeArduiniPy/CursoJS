const Carros = {
  marca: "civic",
  rodas: 4,
  acelerar() {
    return this.marca + " acelerou!";
  },
  buzinar() {
    return this.marca + " Buzinou!";
  },
};

const Honda = Object.create(Carros);
Honda.marca = "Honda";
//Se eu uso o Object.create, o novo objeto vai herdar todos os methodos e caso nao passe nenhuma informação sobreescrevendo a da herança, vai continuar usando a que herdou. o primeiro parametro a ser usado é o do this, caso nao tenha, apenas mantem usando a que herdou.

//Posso criar um objeto retornando a variavel que vai usar durante todo meu corpo e methodos, veja:

const moto = {
  init(valor) {
    this.marca = valor;
    return this;
  },
  acelerar() {
    return this.marca + " acelerouuuuu!";
  },
  frear() {
    return this.marca + " Freoooooou";
  },
};

const Hornet = Object.create(moto).init("Hornet");
//é mais uma forma de criar objetos a partir de um prototipo.

const funcaoAutomovel = {
  acelerar() {
    return "Acelerou";
  },
  buzinar() {
    return "Buzinou";
  },
};

const bike = {
  rodas: 2,
  capacete: false,
};

Object.assign(bike, funcaoAutomovel);
//com o Object.asssign, o alvo, primeiro parametro, no caso o alvo dos methodos, terá a partir de entao, os methodos do segundo parametro setado.
