/*
    JavaScript sempre vai ser um objeto, atente-se a isso.
*/

function Name(name, sobrenome){
    this.name = name; //Como é um objeto, dentro da funçao temos o this, ele faz parte da função construtora.
    this.sobrenome = () => {
        const nomeCompleto = `${this.name} ${sobrenome}`;	
        return nomeCompleto;
    };
};

const luiz = new Name("Luiz", "Guilherme");

console.log(luiz.sobrenome());

// const guilherme = new Name("Guilherme");
// const luiz = new Name("Luiz");
// console.log(luiz.name); //Aqui acessamos a propriedade name do objeto luiz


function Calculadora(num1, num2) {
    this.soma = () => {
        return `${num1 + num2}`;
    };

    this.subtracao = () => {
        return `${num1 - num2}`;
    };
};

const calc = new Calculadora(1, 2);
console.log(calc.soma());

