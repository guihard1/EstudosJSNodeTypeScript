/*
    Uma closure ocorre normalmente quando uma função
    é declarada dentro do corpo de outra, e a função interior
    referencia variáveis locais da função exterior
*/

// function QualSeuNome (name) {
//     const msg = `O seu nome é ${name}`;
//     function yourName(){
//         return `${msg} ${name}`;
//     }
//     return yourName();
// }

// console.log(QualSeuNome("Luiz"));

function Calculadora (num1, num2) {
    const msg = "Resultado:";

    const soma = () => {
        return `${msg} ${num1 + num2}`;
    };

    const subtracao = () => {
        return `${msg} ${num1 - num2}`;
    };

    const multiplicacao = () => {
        return `${msg} ${num1 * num2}`;
    };

    const divisao = () => {
        return `${msg} ${num1 / num2}`;
    };

    return {  //Forma de acessar dados de um objeto.
        soma: soma(),
        subtracao: subtracao(),
        multiplicacao: multiplicacao(),
        divisao: divisao(),
    };
}

console.log(Calculadora(10, 5));

