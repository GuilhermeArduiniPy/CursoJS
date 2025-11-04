//Método Get server apenas pra pegar o valor

const button = {
  get tamanho() {
    return this._numero || 100;
  },
  set tamanho(value) {
    this._numero = value;
  },
};

//posso tentar sorbeescrever que nao vai alterar o valor. Para mudar, tenho que criar um metodo set.

const frutas = {
  lista: [],
  set nova(fruta) {
    this.lista.push(fruta);
  },
};
frutas.nova = "Banana";
frutas.nova = "Maçã";

class Button {
  constructor(text, color) {
    this.text = text;
    this.color = color;
  }
  get element() {
    const type = this._element || "button";
    const buttonElement = document.createElement(type);
    buttonElement.innetText = this.text;
    buttonElement.style.color = this.color;
    return buttonElement;
  }
  set element(type) {
    this._element = type;
  }
}

const blueButton = new Button("Comprar", "blue");
