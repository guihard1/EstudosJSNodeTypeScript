//3 Maneiras diferentes pro mesmo propósito e de forma limpa.

function tenis(tamanho, estoque, preco){
        return {
                tamanho,
                estoque,
                preco,
        };
}

console.log(tenis(35, true, "R$ 35"));


const tamanho = 35;
const estoque = true;
const preco = "R$ 35";  //String

const tenis2 = {
        tamanho,
        estoque,
        preco,
}

console.log(tenis2);

const tenis3 = {
        getTamanho(){
                return 35;
        },
}

console.log(tenis3.getTamanho());
