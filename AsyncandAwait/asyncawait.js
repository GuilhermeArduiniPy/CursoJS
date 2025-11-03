//A Palavra chave async indica que a função possui partes assíncronas e que voce pretende esperar a resolução da mesma antes de continuar. O await irá indicar a promise que devemos esperar. Faz parte da ES8.
//É uma forma melhor e mais atualizada de usar .then porém await só será usado dentro de uma função, caso precise usar fora de função, terá que manter o .then.
//Para tratarmos os erros e capturarmos segue da mesma maneira com o catch
// async function puxarDados() {
//   try {
//     const responseDados = await fetch("./dados.json");
//     const jsonDados = await responseDados.json();
//     console.log(jsonDados.aula);
//     document.body.innerText = jsonDados.aula;
//   } catch (erro) {
//     console.log(erro);
//   }
// }

// puxarDados();

async function puxarDados() {
  const responseDados = fetch("./dados.json");
  const responseClientes = fetch("./clientes.json");

  const jsonDados = await (await responseDados).json();
  const jsonClientes = await (await responseClientes).json();
  console.log(jsonDados);
  console.log(jsonClientes);
}

puxarDados();

// async function asyncSemPromise() {
//   //Console não irá esperar.
//   await setTimeout(() => console.log("depois de 1 segundo"), 1000);
//   console.log("Acabou");
// }
// asyncSemPromise();
//O console.log não espera pq o setTimeOut nao retorna uma promise, e o await só funciona quando recebe uma promise.
//Versao resolvida:

async function asyncComPromise() {
  await new Promise((resolve) => {
    setTimeout(() => {
      console.log("depois de 1 segundo");
      resolve();
    }, 1000);
  });
  console.log("acabou");
}

asyncComPromise();
