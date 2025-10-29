const contato = document.querySelector("#contato");
const texto = document.querySelector(".texto");
// console.log(contato.elements);
// console.log(document.forms[0]);
// console.log(contato.elements.nome);
// console.log(contato.elements.nome.value);

//nesse ultimo consigo puxar tanto pelo name como pelo id.

// function handleKeyUp(event) {
//   if (event.target.checked) {
//     console.log(event.target.value);
//   }
// }

// contato.addEventListener("change", handleKeyUp);
//O metodo checkValidity verifica se um input com o atributo requried, é     valido ou nao. A propriedade validationMessage possui a mensagem padrao de erro do browser.É possivel modificar com setCustomValidity('').
//posso retornar um erro geral pra uma classe que crio ou um indivual para cada campo que eu desejar!

// document.body.style.backgroundColor = event.target.value;
// const target = event.target;
// if (!target.checkValidity()) {
//   target.classList.add("invalido");
//   target.nextElementSibling.innerText = target.validationMessage;
//   contato.nome.setCustomValidity("Nome é muito importante!");
// }
// console.log(event.target.checkValidity());
// console.log(event.target.value);
// texto.innerText = event.target.value;
const dados = {};
function handleChange(event) {
  console.log(event.target.value);
  dados[event.target.name] = event.target.value;
}

contato.addEventListener("change", handleChange);
