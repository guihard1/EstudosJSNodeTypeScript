console.log(4 % 2); //Dessa forma o resultado é 0, pois 4 dividido por 2 é 2 e não sobra nada.
console.log(4 % 3); //Dessa forma o resultado é 1, pois 4 dividido por 3 é 1 e sobra 1.
// Através do operador % conseguimos saber se um número é par ou ímpar e usando o if abaixo podemos fazer essa verificação.
if  (4 % 2 === 0) {
    console.log("Par");
} else {    
    console.log("Ímpar");
}