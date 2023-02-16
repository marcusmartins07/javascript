/* const pessoa1 = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 25
};

console.log(pessoa1.nome); */

/*-----------------------------------------------> FUNÇÃO PARA CRIAR CADASRTOS
function criaPessoa (nome, sobrenome, idade) {
    return {nome,sobrenome,idade};
}

const pessoa1 = criaPessoa('Marcus', 'Martins', 21);
const pessoa2 = criaPessoa('Lindita', 'Fernandes', 19);
const pessoa3 = criaPessoa('Luiz', 'Otavio', 25);
 
console.log(pessoa1);
console.log(pessoa2);
console.log(pessoa3);
 */

const pessoa1 = {
    nome: 'Luis',
    sobrenome: 'Miranda',
    idade: 25,

    fala() {
        console.log(`${this.nome} ${this.sobrenome} está falando oi...`)
        console.log(`A minha idade atual é ${this.idade} anos`)
    },

    incrementaIdade() {
        this.idade++;
    }
};

pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();