//Object.getOwnPropertyDescriptor(0, 'prop')

const caneca = {nome: 'Caneca', preco: 1.8};
Object.defineProperty(caneca, 'nome', {
    writable: false,
    configurable: false,
    value: 'camiseta'
});

console.log(Object.getOwnPropertyDescriptor(caneca, 'nome'));

console.log(caneca);
