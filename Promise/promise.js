//Promise é uma função construtora de promessas. Existem dois resultados possíveis de uma promessa, ela pode ser resolvida, com a execução do primeiro argumento, ou rejeitada se o segundo argumento dor ativado

// const promessa = new Promise((resolve, reject) => {
//   let condicao = true;
//   if (condicao) {
//     setTimeout(() => {
//       resolve("Imprimido apos 1 segundo");
//     }, 1000);
//   } else {
//     reject(Error("Ocorreu um Erro Inofensivo senhor!"));
//   }
// });

// const retorno = promessa
//   .then((resolucao) => {
//     resolucao.profissao = "Programador";
//     return resolucao;
//   })
//   .then(
//     (resolucao) => {
//       console.log(resolucao);
//     },
//     (rejeitada) => {
//       console.log(rejeitada);
//     }
//   )
//   .finally(() => {
//     console.log("Chamada final do finally");
//   });

//Busca o resultado da condicao true
// console.log(retorno);
//Se eu nao quiser passar um catch, posso passar apenas como um segundo argumento da funcao do then

//o finally() será executado assim que a promise acabar, independente do resultado, seja resolvida ou rejeitada. Seria como se fosse uma chamada final...

// const login = new Promise((resolve) => {
//   setTimeout(() => {
//     resolve("Usuario Logado");
//   }, 1000);
// });

// const dados = new Promise((resolve) => {
//   setTimeout(() => {
//     resolve("Dados Carregados");
//   }, 1500);
// });

// const carregouTudo = Promise.all([login, dados]);
// console.log(carregouTudo);

// carregouTudo.then((resolucao) => {
//   console.log(resolucao);
// });

//Promise.race() retornará uma nova promise assim que a primeira promise for resolvida ou rejeitada. Essa nova promise tera resposta da primeira resolvida.

const login = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Usuario Logado");
  }, 1000);
});

const dados = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Dados Carregados");
  }, 1500);
});

const carregouTudo = Promise.race([login, dados]);
console.log(carregouTudo);

carregouTudo.then((resolucao) => {
  console.log(resolucao);
});

//Como o proprio nome ja diz é uma crrida, a que executar primeiro é o que o Promise.race ira retornar
