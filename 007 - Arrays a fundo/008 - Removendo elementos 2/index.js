/*
        slice = pega os dados dentro de um range sem quebrar o array
        splice = remove os dados do Array dentro de um range
*/
let arr = [
  { nome: "Luiz", tel: "(11) 9999-9999" },
  { nome: "Guilherme", tel: "(11) 9999-9999" },
  { nome: "Maria", tel: "(11) 9999-9999" },
  { nome: "Joaquim", tel: "(11) 9999-9999" },
  { nome: "Pedro", tel: "(11) 9999-9999" },
];

arr.splice(0, 3); //Remove os dados do Array dentro de um array

// const newArray = arr.slice(2,4); //Pega os dados dentro de um array
// console.table(newArray);

console.log(arr);
