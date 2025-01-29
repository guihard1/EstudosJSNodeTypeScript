//FORMA DE VALIDAÇÃO DE ARRAY (IMPORTANTE)

const tenis = {
  tamanho: 44,
  estoque: 50,
  marcas: [{ nome: "nike" }, { nome: "adidas" }],
  secret: 123456,
  n: 5,
  link: { a: "a é = a", b: { c: ", c é = c" } },
};

// hasOwnProperty | propertyName in tenis

if (tenis.hasOwnProperty("tamanho")) {
  console.log("Existe a propriedade tamanho");
} else {
  console.log("Não existe a propriedade tamanho");
}

if ("tamanho" in tenis) {
  console.log("Existe a propriedade tamanho");
} else {
  console.log("Não existe a propriedade tamanho");
}