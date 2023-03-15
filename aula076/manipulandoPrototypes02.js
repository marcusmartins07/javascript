function Produto (nome, preco) {
    this.nome = nome;
    this.preco = preco;
}

Produto.prototype.desconto = function (percentual) {
    this.preco = this.preco - (this.preco * (percentual/100));
}

Produto.prototype.acrescimo = function (percentual) {
    this.preco = this.preco + (this.preco * (percentual/100));
}

const p1 = new Produto ('Camiseta', 50);
console.log(p1);

p1.acrescimo(50);
console.log(p1);

p1.desconto(100);
console.log(p1);

const p2 = {
    nome: 'Caneca',
    preco: 35
};

// Copiando prototype da constructor function Produto
Object.setPrototypeOf(p2, Produto.prototype);
console.log(p2);

p2.acrescimo(50);
console.log(p2);

p2.desconto(100);
console.log(p2);

// Criando um objeto e set'ando os prototypes
const p3 = Object.create(Produto.prototype, {
    preco: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 130
    },
    tamanho2: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 42
    }
});
console.log(p3);
p3.acrescimo(20);
console.log(p3);
