const pedidos = [
  {
    id: 420,
    nome: "Luiz Guilherme",
    alimento: "pizza",
    bebida: "refrigerante",
    preco: 20,
  },
  {
    id: 153,
    nome: "Maria",
    alimento: "hamburguer",
    bebida: "refrigerante",
    preco: 25,
  },
  { id: 29, nome: "Joaquim", alimento: "coxinha", bebida: "Suco de Uva" },
  {
    id: 33,
    nome: "Carlos",
    alimento: "Churrasco",
    bebida: "Cerveja",
    preco: 30,
  },
  { id: 55, nome: "Rogério", alimento: "Feijoada", bebida: "energético" },
];

/**
 * A ideia dele é pegar todos os valores de um Array e transformar em um unico valor 
**/

const balancete = pedidos.reduce((total, element) => {
  return total + element.preco;
}, 0);

console.log(balancete);