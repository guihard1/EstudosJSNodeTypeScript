// let velPermitida = 85;
// let velCondutor = 86;

// if (velCondutor > velPermitida) {                       ESSE FOI O CÓDIGO QUE EU FIZ ANTES DE VER A RESOLUÇÃO
//     console.log("Você foi multado");
// } else {
//     console.log("Você está dentro da velocidade permitida");
// };

const velocidade = 75;
const warn = 85;

const condicao =                                      //OS DOIS CÓDIGOS FAZEM A MESMA COISA, PORÉM O DE BAIXO É MAIS LIMPOR E ORGANIZADO
  velocidade >= warn
    ? "Você foi multado"                              //? tem como funcionalidade o if
    : "Você está dentro da velocidade permitida";     //: tem como funcionalidade o else

if (velocidade >= warn) {
  console.log("Recebeu uma multa!");
} else {
    console.log("Continue andando.");
}