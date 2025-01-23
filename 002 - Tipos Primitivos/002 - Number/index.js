console.log(123);
console.log(Number("123") + 1); //Aqui ele converte a string "123" para number e soma 1
console.log(typeof 123); //typeof é uma função que retorna o tipo da variavel
console.log(typeof Number("123")); //aqui ele retorna o tipo da variavel Number("123")
console.log(typeof "123");




/*
    Evite Bugs, sempre use Number + Number
    Number 123
    Number 123 + 123 = 246
    Number ("123") - 1 = 122

    //Assim pode gerar um bug
    Number "123" -1 = 122
    Number "123" *2 = 246
 */