let tenis = {
        tamanho: 44,
        estoque: true,
};

delete tenis.estoque;

console.log(tenis);

tenis.estoque = true; //Aqui ele adiciona de volta o "estoque" ao objeto tenis
console.log(tenis);