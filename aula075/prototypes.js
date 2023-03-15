


// Construtora -> molde (classe)

function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
}

Pessoa.prototype.nomeCompleto = function() {
    return this.nome + ' ' + this.sobrenome;
};

//instancia
const pessoa1 = new Pessoa('Marcus', 'Martins'); // <- Pessoa = função construtora
const pessoa2 = new Pessoa('Linda', 'Fernandez'); // <- Pessoa = função construtora
const data = new Date(); // <- Date = Função construtora

// pessoa1 -> Pessoa.prototype  - > Object.prototype


console.dir(pessoa1);
console.dir(pessoa2);
console.dir(data);