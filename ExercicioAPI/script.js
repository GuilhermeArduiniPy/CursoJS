// Utilizando a API https://viacep.com.br/ws/${CEP}/json/
// crie um formulário onde o usuário pode digitar o cep
// e o endereço completo é retornado ao clicar em buscar
const inputCep = document.getElementById("cep");
const btnCep = document.getElementById("btnCep");
const resultadoCep = document.querySelector(".resultadoCep");

btnCep.addEventListener("click", handleClick);

function handleClick(event) {
  event.preventDefault();
  const cep = inputCep.value;
  buscaCep(cep);
}

function buscaCep(cep) {
  fetch(`https://viacep.com.br/ws/${cep}/json/`)
    .then((response) => response.text())
    .then((body) => {
      resultadoCep.innerText = body;
    });
}

const btcDisplay = document.querySelector(".btc");

// Utilizando a API https://blockchain.info/ticker
// retorne no DOM o valor de compra da bitcoin and reais.
// atualize este valor a cada 30s

function fetchBTC() {
  fetch("https://blockchain.info/ticker")
    .then((response) => response.json())
    .then((btcJson) => {
      const valorBTC = btcJson.BRL.buy;
      const valorFormatado = valorBTC.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
      });
      btcDisplay.innerText = valorFormatado;
    });
}
fetchBTC();
setInterval(fetchBTC, 30000);

// Utilizando a API https://api.chucknorris.io/jokes/random
// retorne uma piada randomica do chucknorris, toda vez que
// clicar em próxima

const btnPiada = document.querySelector(".proxima");
const paragrafoPiada = document.querySelector(".piada");

btnPiada.addEventListener("click", apiChuck);

function apiChuck() {
  fetch("https://api.chucknorris.io/jokes/random")
    .then((response) => response.json())
    .then((piada) => {
      traduzirPiada(piada.value);
    });
}

function traduzirPiada(texto) {
  const url = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(
    texto
  )}&langpair=en|pt`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const traducao = data.responseData.translatedText;
      paragrafoPiada.innerText = traducao;
    })
    .catch((erro) => {
      console.error("Erro na tradução: ", erro);
    });
}

apiChuck();
