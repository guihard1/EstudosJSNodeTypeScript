//Calculadora de IMC
//ACHEI QUE INICIALMENTE ERA FEITO COM SWITCH CASE E IF DENTRO, MAS ERA PRA USAR APENAS IF, ELSE IF, ELSE. (ERA FEITO COM SWITCH CASE, POREM ERA PRA SER switch(true) e não switch(imc))
//Pra eliminar os números e usar apenas os 4 primeiros ex: 76,50 é necessário adicionar Number no calculo pra voltar a ser número e não string e usar o .toFixed(2) para casas decimais.
let imc = 0;
let peso = 85;
let altura = 1.80;

imc = Number((peso / (altura * altura)).toFixed(2));

console.log("Resultado do cálculo: ", imc);

if (imc < 17) {
  console.log("Muito abaixo do peso");
} else if (imc >= 17 && imc < 18.5) {
  console.log("Abaixo do peso");
} else if (imc >= 18.5 && imc < 25) {
  console.log("Peso normal");
} else if (imc >= 25 && imc < 30) {
  console.log("Acima do Peso");
} else if (imc >= 30 && imc < 35) {
  console.log("Obesidade I");
} else {
  console.log("Obesidade II");
}
