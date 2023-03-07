    // factory functions / constructor functions / classes

function criaPessoa(nome, sobrenome) {
    return {
        nome,
        sobrenome,
        nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`;
        }
    };
}

const p1 = criaPessoa('Marcus', 'Martins');
console.log(p1.nomeCompleto());


// Função Construtora
function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
//  Object.freeze(this); bloqueia alterações nas variaveis 
}
//   p2  =  (EndereçoMemoria) -> 'Valor'
//   p2  =  EndereçoMemoria -> {nome: 'Outra coisa'}
//   p2  =  (EndereçoMemoria...) //Não funciona

const p2 = new Pessoa('Linda', 'Fernandez');
//p2 = 'Outra coisa'; // não funciona
p2.sobrenome = 'Martins';
const p3 = new Pessoa('Marcus', 'Martins');
console.log(p2);
console.log(p3);

Object.freeze(p3);
