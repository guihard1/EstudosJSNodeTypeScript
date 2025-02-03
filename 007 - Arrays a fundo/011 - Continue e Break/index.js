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

for (let item of myArrayObj) {
  if (item.sobrenome === "Silva") {
    console.log("Encontrei o sobrenome Silva");
    continue; //Continue e pula para a próxima interação
  }

  if (item.nome === "Carlos") {
    console.log("Encontrei o nome Carlos");
    break; //Break para o loop
  }
  console.log(item.nome, item.sobrenome);
}
