// É possivel acessarmos o histórico de acesso do browser em uma sessão especifica através do window.history. O objeto history possui diferentes métodos e propriedades.

// window.history.pushState(null, null, "teste.html");
//Aqui mudamos o estado da URL e acrescentamos uma extensao nela podendo mandar ra alguma pagina existente

// window.addEventListener("popstate", () => {
//   console.log("Teste");
// });

const links = document.querySelectorAll("a");
function handleClick(event) {
  event.preventDefault();
  fetchPage(event.target.href);
  window.history.pushState(null, null, event.target.href);
}

async function fetchPage(url) {
  const pageResponse = await fetch(url);
  const textResponse = await pageResponse.text();
  replaceContent(textResponse);
}

function replaceContent(newText) {
  const newHtml = document.createElement("div");
  newHtml.innerHTML = newText;

  const oldContent = document.querySelector(".content");
  const newContent = newHtml.querySelector(".content");

  oldContent.innerHTML = newContent.innerHTML;
  document.title = newHtml.querySelector("title").innerText;
}

window.addEventListener("popstate", () => {
  fetchPage(window.location.href);
});

links.forEach((link) => {
  link.addEventListener("click", handleClick);
});
