/*
    Objeto: Tenis (Propriedade)
    Objeto: Celular (Propriedade)
    objeto: Drone (Propriedade)

    Propriedades / Atributos / Funcionalidades
*/

let Tenis = {
    tipo: "Tenis de Corrida",
    cadarco : "G",
    preco : 150,
    estoque: 50,
    disponivel: true,
    tamanho: {
        palmilha: 43,
        tenis: 44,
        caixa: {
            altura: 34,
            largura: 40,
            profundidade: 10,
        }
    },
    marca: [
        {
            nome: "nike",
        },
        {
            nome: "adidas",
        },
        {
            nome: "puma",
        },
    ],
    getMarcaArrayValores: function (param) {
        return this.marcaArrayObj[param];
    },
    getMarcaArrayObj: function (param) {
        return this.marcaArrayObj[param].nome;
    },
}

console.log(Tenis);
console.log(Tenis.tipo);
console.log(Tenis.tamanho);
