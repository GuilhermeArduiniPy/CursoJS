//blob() é um tipo de objeto utilizado para representação de dados de um arquivo. O blob pode ser utilizado para transformarmos requisições de imagens por exemplo. o blob gera um URL único.

// const img = fetch("./imagem2.jpg");

// img
//   .then((r) => r.blob())
//   .then((body) => {
//     const blobUrl = URL.createObjectURL(body);
//     const imagemDom = document.querySelector("img");
//     imagemDom.src = blobUrl;
//   });

// const cep = fetch("https://viacep.com.br/ws/38025370/json/");

// cep
//   .then((r) => {
//     const r2 = r.clone();
//     r.text().then((text) => {
//       console.log(text);
//     });
//     r2.json().then((json) => console.log(json));
//     console.log(r);
//   })

//   .then((body) => {
//     console.log(body);
//   });

const cep = fetch("https://viacep.com.br/ws/38025370/json/");

cep.then((r) => {
  if (r.status === 200) {
    console.log("Pagina encontrada!");
    console.log(r.type);
  }
  // r.headers.forEach(console.log);
});

//.status e .ok retorna o status da requisicao e o ok retorna um valor booleano sendo true para uma requisicao de sucesso e false para uma sem sucesso.
