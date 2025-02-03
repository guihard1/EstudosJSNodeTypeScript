const myArray = [1, 2, 3, 4, 5, 6]; //é chamado de nó, até chegar no valor desejado
const myArrayObj = [
  {
    nome: "Luiz",
    sobrenome: "Guilherme",
  },
  {
    nome: "Maria",
    sobrenome: "Silva",
  },
  {
    nome: "Carlos",
    sobrenome: "Silva",
  },
];
//for ([inicialização]; [condição]; [expressão final]) {}

for (let i = 0; i < myArrayObj.length; i++) {
  console.log(myArrayObj[i].nome, myArrayObj[i].sobrenome);
}

//for Of

for (let item of myArrayObj) {
  //for Of trabalha numa sintex reduzida e mais limpa
  console.log(item.nome, item.sobrenome);
}

//for In
const obj = {
  nome: "Luiz",
  sobrenome: "Guilherme",
};

for (let item in obj) {
  //Pra pegar a propriedade do objeto
  console.log(obj[item]);
}
//Através do in da pra acessar  os itens também com a linha (console.log(obj[item]));
//Não usar com array o for in, pois ele vai pegar o index do array e nao o item
