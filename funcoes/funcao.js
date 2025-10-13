function areaQuadrado(lado) {
  console.log("função ativa");
  return lado * lado;
}

console.log(areaQuadrado(10));

function pi() {
  return 3.14;
}
var total = 5 * pi();
console.log(total);

function imc(peso, altura) {
  var imc = peso / (altura * altura);
  return imc;
}

console.log(imc(100, 1.75));

function filmeFavorito(filme) {
  if (filme === "rocky") {
    return "Bom gosto";
  } else if (filme === "matrix") {
    return "Mais ou menos nerd";
  } else {
    return "Eu nao gosto de filmes!";
  }
}

console.log(filmeFavorito("rocky"));
console.log(filmeFavorito("matrix"));
console.log(filmeFavorito());

// Funcoes que ocorrem apos algum evento sao chamadas de Callback

addEventListener("click", function () {
  console.log("Oi");
});

function imc2(peso, altura) {
  var imc = peso / (altura * altura);
  console.log(imc);
}

imc2(110, 2.1);

function terceiraIdade(idade) {
  if (typeof idade !== "number") {
    return "Informe uma idade válida!";
  } else if (idade <= 60) {
    return "shoooow";
  } else {
    return false;
  }
}

console.log(terceiraIdade(70));

function faltamVisitar(paisesVisitados) {
  var totalPaises = 193;
  return `Faltam visitar ${totalPaises - paisesVisitados}`;
}
