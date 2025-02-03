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
 * Nome bem subjetivo também, mas ele procura e te retorna o primeiro valor que ele encontrar
 **/

const findId = pedidos.find((element) => {
  return element.bebida === "refrigerante"; //É uma busca acertiva, ele encontra o primeiro e ja retorna.
});

console.log(findId);
