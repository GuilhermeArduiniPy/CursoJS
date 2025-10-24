// function espera(texto) {
//   console.log(texto);
// }

// setTimeout(espera, 2000, "depois de 2 segundos");

// function loop(texto) {
//   console.log(texto);
// }

// let i = 0;

// const meuLoop = setInterval(() => {
//   console.log(i++);
//   if (i > 10) {
//     clearInterval(meuLoop);
//   }
// }, 300);

//Exercicios
//Mude a cor da tela para azul e depois para vermelho a cada 2s.

// function telaAzul() {
//   document.body.style.backgroundColor = "Blue";
//   return setTimeout(telaBranca, 2000);
// }

// function telaBranca() {
//   document.body.style.backgroundColor = "white";
//   return setTimeout(telaAzul, 2000);
// }

// setTimeout(telaAzul, 2000);

//Crie um cronometro utilizando o setInterval. Deve ser possivel iniciar, pausar e resetar (duplo clique no pausar)

const iniciar = document.querySelector(".iniciar");
const pausar = document.querySelector(".pausar");
const tempo = document.querySelector(".tempo");

iniciar.addEventListener("click", iniciarTempo);
pausar.addEventListener("click", pausarTempo);
pausar.addEventListener("dblclick", resetarTempo);

let i = 0;
let timer;

function iniciarTempo() {
  timer = setInterval(() => {
    tempo.innerText = i++;
  }, 100);
  iniciar.setAttribute("disabled", "");
}

function pausarTempo() {
  clearInterval(timer);
  iniciar.removeAttribute("disabled");
}
function resetarTempo() {
  tempo.innerText = 0;
  i = 0;
}
