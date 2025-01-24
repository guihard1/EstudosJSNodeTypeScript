/*
    Objeto: Tenis (Propriedade) "cadarço", "palmilha"
    Objeto: Celular (Propriedade)
    Objeto: Drone (Propriedade)

    Propriedades / Atributos / Funcionalidades
*/

console.log({
  tenis: {
    // SEMPRE COM 2 PONTOS E {}, NUNCA COM IGUAL SE NAO VAI DAR ERRO DE SINTAX
    preco: 150,
    disponivel: false,
    estoque: 30,
    cadarco: {
      //NUNCA USAR Ç OU ACENTO
      cor: "preto",
      tamanho: "G",
    },
    palmilha: {
      cor: "preta",
      tamanho: 43,
    },
  },
});

console.log([
  {
    tenis: {
      preco: 150,
      disponivel: false,
      estoque: 30,
      cadarco: {
        cor: "preto",
        tamanho: "G",
      },
      palmilha: {
        cor: "preta",
        tamanho: 43,
      },
      celular: {
        preco: 1500,
        disponivel: true,
        estoque: 15,
        carregador: {
          cor: "branco",
          tamanho: "G",
        },
        fone: {
          cor: "preto",
          tamanho: 50,
        },
      },
    },
  },
]);
