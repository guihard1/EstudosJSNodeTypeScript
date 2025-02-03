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

/*
 * Como o nome já diz, esse método deve ser utilizado quando temos a necessidade de filtrar nossa lista
 * O filter ele filtra TODOS. O find só o primeiro que ele encontrar.
 */

const filterRefri = pedidos.filter((element, index) => {
  return element.bebida === "refrigerante";
});

console.log(1, pedidos);
console.log(2, filterRefri);
