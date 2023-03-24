// composição = compor um objeto com outros objetos

const falar = {
    falar() {
        console.log(`${this.nome} está falando`);
    },
};

const comer = {
    comer() {
        console.log(`${this.nome} está comendo`);
    },
};

const beber = {
    beber() {
        console.log(`${this.nome} está bebendo`);
    }
};

//const pessoaPrototype = {...falar, ...comer, ...beber}; ou
const pessoaPrototype = Object.assign({}, falar, comer, beber);

// factory function
function criaPessoa(nome, sobrenome) {    
    return Object.create(pessoaPrototype, {
        nome: {value: nome},
        sobrenome: {value: sobrenome}
    });
}

const p1 = criaPessoa('Marcus', 'Martins');// nao se usa o new em factory functions
console.log(p1);
const p2 = criaPessoa('Linda', 'Fernandez');
console.log(p2);