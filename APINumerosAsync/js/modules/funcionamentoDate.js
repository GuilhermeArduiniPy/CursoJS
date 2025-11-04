export default function initFuncionamento() {
  const funcionamento = document.querySelector("[data-semana");
  const diasSemana = funcionamento.dataset.semana.split(",").map(Number);

  const horarioSemana = funcionamento.dataset.horario.split(",").map(Number);

  const dataAgora = new Date();
  const diaAgora = dataAgora.getDay();
  const horarioAgora = dataAgora.getHours();

  const semanaAberto = diasSemana.indexOf(diaAgora) !== -1;
  const horarioAberto =
    horarioAgora >= horarioSemana[0] && horarioAgora <= horarioSemana[1];

  if (horarioAberto) {
    funcionamento.classList.add("aberto");
  }
}

//usando o split pra gerar um array onde era string e dps o map com o valor Number na funcao pra transformat em int os valores do array.
//mesma coisa com os horarioSemana
//verificando se o diaAgora esta no array dos dias da semana que o local funciona.
