// const stringArray = ["A", "C", "D", "W", "L", "B"]

// console.log(stringArray.sort()); //Ordena o array
// console.log(stringArray.reverse()); //Reverte o array

/*
 * se retornar um valor negativo, o valor de "a" será ordenado antes de "b".
 * se retornar 0, a ordenação de "a" e "b" não será alterada.
 * se retornar um valor positivo, o valor de "b" sera ordenado antes de "a".
 */
const numberArray = [10, 20, 30, 40, 50, 1000, 1, 55, 15];

console.log(numberArray.sort((a, b) => a - b)); //Para números use o sorte assim
//(a,b) => a - b ou (a,b) => b - a ou também (a,b) => a - b).reverse();

const objArray = [
  { name: "Luiz Guilherme", age: 10 },
  { name: "Maria Campos", age: 20 },
  { name: "Carlos Silva", age: 30 },
  { name: "Rogério Junior", age: 40 },
  { name: "Lucas Trado", age: 50 },
  { name: "Márvio Lima", age: 60 },
];

console.log(objArray.sorte((a, b) => a.nome.localeCompare(b.nome))); //Para Strings use o sorte assim
//Se fosse pra idades seria assim: console.log(objArray.sorte((a, b) => a.age - b.age));
