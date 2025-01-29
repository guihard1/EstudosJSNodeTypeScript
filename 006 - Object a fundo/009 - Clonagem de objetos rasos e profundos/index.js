let tenis = {
        tamanho: 44,
        estoque: true,
};

let link = { link: {a: "a", b: {c: "c"}}};
function cloneObject(obj) {
    return JSON.parse(JSON.stringify(obj)); //Aqui eu fiz o objeto ir de string para objeto, utilizando o parse.
}

let clone1 = cloneObject(tenis);

console.log(1, clone1);
console.log(2, tenis);

let mesclar1 = Object.assign(  //Pra mesclar os dois objetos, use o Object.assign
        cloneObject(tenis),
        cloneObject(link)       
); 
let mesclar2 = {  //Spread operator
        ...cloneObject(tenis),
        ...cloneObject(link),
};  

clone1.estoque = false;
mesclar1.link.a = "ABC";


console.log(3, clone1);
console.log(4, tenis);
console.log(5, mesclar2);
console.log(6, mesclar1);