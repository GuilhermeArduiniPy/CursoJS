import Countdown from "./countdown.js";

const diasParaoNatal = new Countdown("24 December 2025 23:59:59 GMT-0300");

const diasParaAniversario = new Countdown(
  "15 september 2026 00:00:00 GMT-0300"
);
console.log(diasParaoNatal.total);

console.log(diasParaAniversario.total);

//Exemplo de um plugin real para ser usado em qualquer projeto que seja necessario um contador regressivo.
