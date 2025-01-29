let tenis = {
        tamanho: 44,
        estoque: true,
};

tenis.tamanho = 42;
tenis.estoque = false;
tenis.preco = "R$ 42";  //Aqui ele adiciona o preco ao objeto tenis
tenis["preco"] = "R$ 42";  //Aqui ele também adiciona o preco ao objeto tenis

console.log(tenis);
console.log(tenis["preco"]); //Outra forma de acessar os dados
