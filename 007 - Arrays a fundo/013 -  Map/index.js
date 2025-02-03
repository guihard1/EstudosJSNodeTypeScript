const pedidos = [
  {
    id: 420,
    nome: "Luiz Guilherme",
    alimento: "pizza",
    bebida: "agua",
  },
  {
    id: 153,
    nome: "Maria",
    alimento: "hamburguer",
    bebida: "refrigerante",
  },
  { id: 29, nome: "Joaquim", alimento: "coxinha", bebida: "Suco de Uva" },
  {
    id: 33,
    nome: "Carlos",
    alimento: "Churrasco",
    bebida: "Cerveja",
  },
  { id: 55, nome: "Rogério", alimento: "Feijoada", bebida: "energético" },
];

/**
 * O métido map além de iterar todo o Array ele é muito bom para editar o iterado (resumindo os dados do Array )
 **/

pedidos.map((element, index) => {
  //É bom pra percorrer elementos do array e alterar fazendo uma validação etc.
  if (element.id === 29 && element.alimento === "coxinha") {
    return (element.alimento = "kibe");
  }

  console.log(pedidos);
});
