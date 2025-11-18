let item1 = 1;

function funcao1() {
  let item2 = 2;
  function funcao2() {
    let item3 = 3;
    console.log(item1);
    console.log(item2);
    console.log(item3);
  }
  funcao2();
}

funcao1();

//Closure é uma forma de guardar acessp ás variaveis que estavam disponiveis no momento de sua criação, mesmo sendo chamada em outro lugar ou depois que o escopo original terminou de executar.
