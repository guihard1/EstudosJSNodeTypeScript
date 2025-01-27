/*
O que é uma function?
É um conjunto de instruções que executa uma tarefa ou calcula um valor.
*/

// 1 - Functions declaration
function isValidDeclaration(){
    const soma = 1 + 2;

    if (soma === 3) {
        return true;  //A função do return é encerrar a função e retornar um valor assim que ele for chamado.
    }

    return false;
}
//console.log(isValid());

//2 - Function expression
const isValidExpression = function(){
    return false;
};

//console.log(isValidExpression());
// 3 - Arrow function
// const isValidArrow = () => {
//     return false;
// };

// function isValidArrow()=>{  //Essa forma está errada pois a seta deve vir antes do sinal de igualdade
//  return false;
// }
// console.log(isValidArrow());

// maneira correta de utlilizar a arrow function
const isValidArrow = () => false; //sempre que a função tiver apenas uma linha de código, podemos omitir as chaves e o return
//Sempre deve usar arrow function no const para não dar erro