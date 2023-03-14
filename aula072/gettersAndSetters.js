function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;

    let estoquePrivado = estoque;
    
    Object.defineProperty(this, 'estoque', {
        enumerable: true, // mostra a chave
        configurable: true, // configuravel
        get: function () {
            return estoquePrivado;
        },
        set: function (valor) {
            if (typeof valor !== 'number') {
                console.log('Valor incorreto');
                return;
            }
        }
    });
}

const p1 =new Produto('Camiseta', 20, 3);
console.log(p1);
p1.estoque = 'O valor que eu quero';
console.log(p1.estoque);
p1.estoque = 7;
console.log(p1.estoque);

function criaProduto(nome) {
    return {
        get nome(){
            return nome;
        },
        set nome(valor) {
            valor=valor.replace('azul', '');
            nome=valor;
        }
    };
}

const p2 =criaProduto('Camiseta');
console.log(p2);
p2.nome = 'Calca azul';
console.log(p2.nome);