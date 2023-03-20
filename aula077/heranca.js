// Produto -> aumento, desconto
// Camiseta = cor, caneca = material

function Produto (nome, preco) {
    this.nome = nome;
    this.preco = preco;
}

Produto.prototype.aumento = function (quantia) {
    this.preco += quantia;
};

Produto.prototype.desconto = function (quantia) {
    this.preco -= quantia;
};

function Camiseta(nome, preco, cor) {
    Produto.call(this, nome, preco);
    this.cor = cor;
}

function Caneca(nome, preco, material, estoque) {
    Produto.call(this, nome, preco)
    this.material = material;
    
    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        configurable: false,
        get: function () {
            return estoque;
        },
        set: function (valor) {
            if (typeof valor !== 'number') return;
            estoque = valor;
        }
    });
}

Caneca.prototype = Object.create(Produto.prototype);
Caneca.prototype.constructor = Caneca;

Camiseta.prototype = Object.create(Produto.prototype);
Camiseta.prototype.constructor = Camiseta;

Camiseta.prototype.aumento = function (percentual) {
    this.preco = this.preco + (this.preco * (percentual / 100))
    
}

const produto = new Produto('Gen', 111);
const camiseta = new Camiseta ('Regata', 7.5, 'Preta');
camiseta.aumento(100);


const canecaSublimatica = new Caneca('Caneca Sublimatica', 35, 'Porcelana', 60);
canecaSublimatica.estoque = '100'; // retorna falso e nao altera o valor
console.log(canecaSublimatica);
console.log(camiseta);
console.log(produto);