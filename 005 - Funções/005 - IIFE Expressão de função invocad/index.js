// IIFE = Immediately Invoked Function Expression
// ()(); //Isso é uma IIFE

(function(){  //Esse bloco de código carrega assim que é inicializado
    console.log("Luiz Guilherme");
    
})();

function consol(con){
    return console.log(con);
}

consol("Luiz Guilherme");

//Exemplo com var
//    ( () => {} ) (); //Isso é uma IIFE
(() => {
    var nome = "Luiz Guilherme1";
    console.log(nome);
})(); //Tudo que estiver aqui dentro fica apenas aqui dentro

(() => {
    var nome = "Luiz Guilherme2";
    console.log(nome);
})(); //Tudo que estiver aqui dentro fica apenas aqui dentro

//Acima está um exemplo com IIFE onde o var fica isolado dentro do bloco de código
//E não passa para o escopo global, evitando assim a poluição do código