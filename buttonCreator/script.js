const controles = document.getElementById("controles");
const cssText = document.querySelector(".css");
const btn = document.querySelector(".btn");
controles.addEventListener("change", handleChange);

const HandleStyle = {
  element: btn,
  backgroundColor(value) {
    this.element.style.backgroundColor = value;
  },

  height(value) {
    this.element.style.height = value + "px";
  },
  width(value) {
    this.element.style.width = value + "px";
  },
  texto(value) {
    this.element.innerText = value;
  },
  color(value) {
    this.element.style.color = value;
  },
  border(value) {
    this.element.style.border = value;
  },
  borderRadius(value) {
    this.element.style.borderRadius = value + "px";
  },
  fontFamily(value) {
    this.element.style.fontFamily = value;
  },
  fontSize(value) {
    this.element.style.fontSize = value + "rem";
  },
};

function handleChange(event) {
  const name = event.target.name;
  const value = event.target.value;

  HandleStyle[name](value);
  saveValues(name, value);
  showCss();
}

function saveValues(name, value) {
  localStorage[name] = value;
}

function setValues() {
  const properties = Object.keys(localStorage);
  properties.forEach((propertie) => {
    HandleStyle[propertie](localStorage[propertie]);
    controles.elements[propertie].value = localStorage[propertie];
  });
}
setValues();
function showCss() {
  cssText.innerHTML =
    "<span>" + btn.style.cssText.split(";").join(";</span><span>");
}

//Local Storage - mesmo fechando o browser ele ainda fica salvo no local storage. Sessao storage fica salvo so os dados da sessao
//quando dizemos limpar o cache é pra limpar todasa essas informações setadas que ficaram salvas nesses campos.
