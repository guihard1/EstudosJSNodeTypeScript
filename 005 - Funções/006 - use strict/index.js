/*
O strict mode elimina alguns erros silenciosos do JavaScript
que passariam batido do JS e os faz emitir erros

Além disso, essa forma corrige alguns erros que tornam o JavaScript
difícil de ser otimizado, então algumas vezes os códigos no modo estrito
rodam mais otimizados e velozes do que os códigos no 'modo normal'.

link: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Strict_mode
*/
"use strict"; //O uso do strict mode é feito com a string "use strict"
//atráves dela o JavaScript é forçado a rodar no modo estrito e não criar coisas sem sentido ou permissão.
//Como por exemplo criar uma variável "teste" fora do escopo global e tentar acessar ela dentro de uma função


(() => {
    let teste = "teste";
    console.log(teste);    
})();

console.log(teste); //Aqui ocorre um erro pois a variável teste não foi declarada no escopo global  
//Mas se tirar o let ele vai entrar no hoisting e a variável teste vai ser declarada no escopo global
//O hoisting é um comportamento padrão do JavaScript de mover a declaração para o topo

//Ao remover o let ele cria um var do lado de fora do escopo da função
//E após isso ele passa dentro do escopo da função e altera o valor da variável teste e retorna no console.log

