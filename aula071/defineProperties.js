// defineProperty - defineProperties

function Produto(nome, preco, estoque) {
    
Object.defineProperty(this, 'estoque', {
        enumerable: true, // mostra a chave
        value: estoque, // valor
        writable: true, // pode alterar ou nao o valor
        configurable: true // configuravel
    });

    Object.defineProperties(this, {
        nome: {
            enumerable: true, // mostra a chave
            value: estoque, // valor
            writable: true, // pode alterar ou nao o valor
            configurable: true // configuravel
        },
        preco: {
            enumerable: true, // mostra a chave
            value: estoque, // valor
            writable: true, // pode alterar ou nao o valor
            configurable: true // configuravel
        },
    });
}

const p1 =new Produto('Camiseta', 20, 3);
p1.estoque = 5000;
console.log(p1);
console.log(Object.keys(p1));

for (let chave in p1) { 
    console.log(chave);
}