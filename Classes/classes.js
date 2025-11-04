// function button(text, background) {
//   this.text = text;
//   this.background = background;
// }
// button.prototype.element = function () {
//   const buttonElement = document.createElement("button");
//   buttonElement.innerText = this.text;
//   return buttonElement;
// };
// const blueButton = new button("Comprar", "blue");
// console.log(blueButton);

//A Classe veio fazer exatamente o que as funções contrutoras ja faziam, só que com uma sintaxe mais especifica e clara.

// class Button {
//   constructor(text, background, color) {
//     this.text = text;
//     this.background = background;
//     this.color = color;
//   }
//   element() {
//     const buttonElement = document.createElement("button");
//     buttonElement.innerText = this.text;
//     buttonElement.style.background = this.background;
//     return buttonElement;
//   }
//   appendTo(target) {
//     const targetElement = document.querySelector(target);
//     targetElement.appendChild(this.element());
//     return targetElement;
//   }
// }

// const blueButton = new Button("Comprar", "blue");

// class Rain {
//   constructor(options) {
//     this.options = options;
//   }

//   static createRain(text, background) {
//     const rainElement = document.createElement("h1");
//     rainElement.innerText = text;
//     rainElement.style.background = background;
//     return rainElement;
//   }
// }

// const optionsRain = {
//   color: "blue",
//   width: 2,
//   speed: 5,
//   height: 20,
// };

// const rain = new Rain(optionsRain);

// const rainStatic = Rain.createRain("Chuva", "gray");

//Vou utilizar static quando eu quiser criar um metodo que nao dependa do this, ou seja, que nao dependa da instancia da classe.

class Button {
  constructor(text, background, color) {
    this.text = text;
    this.background = background;
    this.color = color;
  }
  element() {
    const buttonElement = document.createElement("button");
    buttonElement.innerText = this.text;
    buttonElement.style.background = this.background;
    buttonElement.style.color = this.color;
    return buttonElement;
  }
  appendTo(target) {
    const targetElement = document.querySelector(target);
    targetElement.appendChild(this.element());
    return targetElement;
  }

  static blueButton(text) {
    return new Button(text, "blue", "white");
  }
}

const blueButton = new Button("Comprar", "blue", "white");

const blueStaticButton = Button.blueButton("vender");

//Aqui umas das maiores utilidades da function static, retornando a propria criacao da de uma nova classe.
