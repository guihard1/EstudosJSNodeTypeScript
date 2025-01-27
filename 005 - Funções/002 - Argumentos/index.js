// function soma (num1, num2) {
//     if (typeof num1 === 'number' && typeof num2 === 'number') {
//         return num1 + num2;
//     }
//     return 'Por favor, informe dois números';
// }

// console.log(soma(soma(1,5), soma (1,4))); //Exemplo de função dentro de função

function subtracao() {
    return arguments; //Usar arguments em coisas bem específicas e com cautela pois ele não é um array, é um objeto array-like
}

console.log(subtracao(1, 2, "Abc"));


// Exemplo com arrow function
                //parâmetros ou argumentos
const subtracao = (num1 = 0, num2 = 0) => {
    if (typeof num1 === 'number' && typeof num2 === 'number') {  //se o tipo de num1 for number e o tipo de num2 for number
        return num1 - num2;
    }  //É sempre bom criar uma validação para os parâmetros

    return "Você passou dados diferentes de números";
};

console.log(subtracao(1, 2)); //1
