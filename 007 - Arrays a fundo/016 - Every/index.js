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
 * É bacana entender que, se você tem uma condição, ela vai tratar toda sua array,
 * assim podemos verificar se eles estão ok
 */

const temRefri = pedidos.every((element) => {
  return element.bebida === "refrigerante";
});

console.log(temRefri);
//Ele retorna false porque não tem só refrigerante, se tivesse apenas bebidas refrigerantes ele retornaria true
