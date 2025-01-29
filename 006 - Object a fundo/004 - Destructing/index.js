//Destructing

const tenis = {
        marcas: [{ nome: "Nike" }, { nome: "Adidas" }],
        tamanho: 45,
        estoque: true,
        secret: 123456,
        n: 5,
        link: { a: "a é = a", b: { c: ", c é = c" } },
};

const { tamanho, estoque, marcas = "Não possui marcas de tênis" } = tenis; //Destructing
console.log(tamanho, estoque, marcas);

const { secret: randomNumber, n: notas } = tenis; //Alias, forma de alterar o nome de uma variável

// console.log(secret); //Aqui não funciona pois ele procura a variável secret no escopo global
console.log(randomNumber);
console.log(notas);


//Nested destructing, pegar dados de um objeto dentro de um objeto
const { 
        link: {
                a,
                b: {C}, //pra acessar o c dentro do b é necessário usar {} pra referenciar o objeto
        },
} = tenis;

console.log(tenis.link.a, tenis.link.b.c);