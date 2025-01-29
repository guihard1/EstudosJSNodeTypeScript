let tenis = {
        tamanho: 44,
        estoque: true,
};

let link = { link: {a: "a", b: {c: "c"}}};

let clone1 = tenis;
console.log(clone1);

let mesclar1 = Object.assign(tenis, link); //Pra mesclar os dois objetos, use o Object.assign
console.log(mesclar1);

let mesclar2 = {...tenis, ...link};  //Spread operator
console.log(mesclar2);