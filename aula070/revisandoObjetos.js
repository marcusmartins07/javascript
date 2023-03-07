const pessoa = {
    nome: 'Marcus',
    sobrenome: 'Martins'
};
const chave = 'nome';
console.log(pessoa[chave]); // Melhor opção para trabalhar com valores dinâmicos

console.log(pessoa.nome);
console.log(pessoa['sobrenome']);

// construtor
const pessoa1 = new Object();
pessoa1.nome='Linda';
pessoa1.sobrenome='Fernandez';

console.log(pessoa1.nome);
console.log(pessoa1.sobrenome);

// literal
const pessoa2 = {
    nome: 'Linda',
    sobrenome: 'Fernandez',
    idade: 19
};
console.log(pessoa2.nome);
console.log(pessoa2.sobrenome);

// delete
const pessoa3 = new Object();
pessoa3.nome='Linda';
pessoa3.sobrenome='Fernandez';

delete pessoa3.nome
console.log(pessoa3);

// metdodos (funções que ficam dentro do objeto executando algo)
pessoa2.falaNome = function () {
    console.log(`${this.nome} esta falando seu nome`);
};

pessoa2.getDataNascimento = function () {
    const dataAtual = new Date();
    return dataAtual.getFullYear() - this.idade ;
};

pessoa2.falaNome();
console.log(pessoa2.getDataNascimento());

for (let chave in pessoa2){
    console.log(pessoa2[chave])
};