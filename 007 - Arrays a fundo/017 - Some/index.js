const pedidos = [
  {
    id: 420,
    nome: "Luiz Guilherme",
    alimento: "pizza",
    bebida: "refrigerante",
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
 
**/

const existeAlimento = pedidos.some((element, index) => {
  return element.alimento === "hamburguer";
});

console.log(existeAlimento);
