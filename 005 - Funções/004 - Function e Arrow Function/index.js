/*
    1 - Nome da função
    2 - Retorno
    3 - Não tem hoisting
    4 - Arguments
*/
function nomeFunc() {
    return "Luiz Guilherme!";
}

console.log(nomeFunc());

const nomeFuncArrow = () => {
    return "Luiz Guilherme!";
};

console.log(nomeFuncArrow());

const nomeFuncArrowReturn = () => "Luiz Guilherme!";

console.log(nomeFuncArrowReturn());

console.log(nomeFuncArrowHoisting());

const nomeFuncArrowHoisting = () => { //Aqui ocorre um erro pois a função foi chamada antes de ser declarada 
    return "Luiz Guilherme!";
}   
//Não é possível usar arguments em arrow functions
// const nomeFuncArrowArguments = () => {
//     return arguments;
// };

// console.log(nomeFuncArrowArguments());

function nomeFuncArguments() {
    return arguments;
}

console.log(nomeFuncArguments("Luiz", "Guilherme"));


const nomeFuncArrowParams = param => param; //Da pra usar assim, mas o ideal é usar com parenteses

// O arrow function não pode ser usado com o new, pois ele não tem o this
function novaFunc() {
    return 123;
}

new novaFunc();

// const novaFuncArrow = () => {  
//     return 123;
// }

// new novaFuncArrow(); //Aqui ocorre um erro pois o arrow function não tem o this

class newFunc{  //A class foi inicializada com a palavra reservada class
    constructor(nome) {  //o construtor pegou o parametro nome
        this.nome = nome; //adicionou o parametro nome a propriedade nome
    }
}

const a = new newFunc("Luiz Guilherme");
console.log(a.nome);  //Aqui acessamos a propriedade nome do objeto a


/*
    Contexto
    Arrow functions possuem this léxico enquanto o modelo normal possui this dinâmico

    Isso significa que arrow functions herdam o contexto local de onde foi declarado,
    enquanto o modelo normal possui o contexto associado ao objeto que ele está vinculado
    no momento da chamada

    Se ele não estiver associado a ninguém na chamada, ele assumirá this automaticamente
    como o contexto global, que no caso dos navegadores é o window
*/

const lanches = {
    
    cardapio: [
        {nome: "X-Bacon", preco: 20},
        {nome : "X-Tudo", preco: 30},
    ],

    meuPedidoFunc: function(select) {  //Function pega o contexto acima dele ou o contexto global que é o window
        return console.log(this.cardapio[select])  //o this é utilizado pra acessar a função do meu escopo global
    },

    meuPedidoFuncTimeOut: function() {
        setTimeout(function() {
            console.log(this.cardapio[0]);  //Aqui ocorre um erro pois o this não consegue acessar o cardapio
        }.bind, 1000); //Através do .bind eu consigo passar o contexto que eu quero que seja acessado dentro do meu contexto
    }, //MUITO CUIDADO COM O BIND, POIS ELE PODE CAUSAR PROBLEMAS DE PERFORMANCE E DE MEMÓRIA
       //MUITO CUIDADO COM THIS  
    meuPedidoArrowFunc: (select) => {  //Ele não funciona quando tem que pegar um contexto acima dele. Ele não consegue acessar o this do objeto
        return console.log(this.cardapio[select]) //O arrow function é dentro dele, não funciona pra fora
    },
};

lanches.meuPedidoFunc(1);

/*
    Constructor
    Arrow functions não podem ser constructors, então não é possivel usar o operador
    new com arrow functions
*/

class newFunc {  //newFunc tem o métdo constructor porque é uma class
    constructor(nome) {  //Já o arrow function não tem o constructor e devido isso você não consegue criar um constructor ou chamar um new para o arrow function
        this.nome = nome;
    };
};

// const a = new newFunc("Luiz Guilherme");
// console.log(a.nome);