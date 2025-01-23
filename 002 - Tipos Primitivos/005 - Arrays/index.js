console.log([1, 2, 3, 4, 5]); //O array sempre inicia com 0
console.log(["Luiz", "Guilherme"].length); //Aqui ele retorna o tamanho do array


["Luiz", "Guilherme"].forEach((res, index) => { //aqui o res é o valor e o index é o index do array
    console.log(res, index); //Aqui ele retorna o valor e o index
});