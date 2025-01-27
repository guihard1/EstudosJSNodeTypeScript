// // Hoisting é o comportamento padrão do JavaScript de mover declarações para o topo do escopo atual (para o topo do script atual ou da função atual).
// console.log(soma()); //Aqui ocorre o hoisting, a função é movida para o topo do escopo
// console.log(x); //Aqui ocorre o hoisting, a variável é movida para o topo do escopo

// function soma() {  //Ao chamar essa função deveria aparecer um erro, mas como o hoisting move a função para o topo do escopo, ela é executada
//     return 1 + 1;
// }

// var x = 10;  //Ao chamar essa variável deveria aparecer um erro, mas como o hoisting move a variável para o topo do escopo, ela é executada 
// x = 10;  //Aqui ocorre o hoisting, a variável é movida para o topo do escopo

console.log(soma()); //Aqui ocorre o hoisting, a função é movida para o topo do escopo  

let soma = () => {  //Aqui não funciona o hoisting, pois o let não permite que a variável seja movida para o topo do escopo
    return 1 + 1; //Isso vale pra const também
}