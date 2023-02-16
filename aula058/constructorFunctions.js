// Função contrutora -> objetos
// Funcão Fabrica -> objetos
// Construtora -> Pessoa (new) 

function Pessoa(nome, sobrenome) {
    // Atributos ou metodos privados
    const id = 123456;
    const metodoInterno = function () {
        
    };

    // Atributos ou metodos publicos
    this.nome = nome;
    this.sobrenome = sobrenome;

    this.metodo = function () {
        console.log(this.nome+': sou um método');
    };
}

const p1 = new Pessoa('Marcus', 'Martins');
const p2 = new Pessoa ('Linda', 'Fernandez');
console.log(p1.nome, p1.sobrenome);
console.log(p2.nome, p2.sobrenome);