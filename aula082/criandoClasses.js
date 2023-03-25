// Muito semelhante a constructor functions

class Pessoa { // <- construtor
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome
    }

    falar() { // <- metodo
        console.log(`${this.nome} esta falando`);
    }
    
    comer() {
        console.log(`${this.nome} esta comendo`);
    }
    
    beber() {
        console.log(`${this.nome} esta bebendo`);
    }
}

const p1 = new Pessoa('Marcus', 'Martins');
console.log(p1);
 // qualquer pessoa que eu criar vai herdar os metodos do pai = "Pessoa"
const p2 = new Pessoa('Linda', 'Fernandez');
const p3 = new Pessoa('Vinicius', 'Silva');

//Exemplo com constructor functions
// criado função construtora
function Pessoa2(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
}

// criando metodos pelo prototype
Pessoa2.prototype.falar = function () {
    console.log(`${this.nome} esta falando`);
};

const p4 = new Pessoa2('Luiz', 'Miranda');
console.log(p4);

