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
    sobrenome: "Campos",
  },
];

myArrayObj.forEach((item, index) => {
  if (item.nome === "Maria") {
    console.log("Encontrei o nome Maria");
    return; //Não utilizar break dentro do foreach
  }
  console.log(index, item.nome);
});
