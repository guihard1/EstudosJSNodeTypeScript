let num = 0
let res = 0
let multiplicador = 8  //Numero que o usuário desejar.

res = multiplicador * num

while (num < 10) {
    num = num + 1
    res = multiplicador * num
    console.log(`${multiplicador} x ${num} é igual a: ${res}`);
    }