/* 
Object.value
Object.entries
Object.assign(des, any)
Object.getOwnPropertyDescriptor(0, 'prop') = em outra pag
... (spread)

JA VIMOS:
Object.keys (retorna chaves)
Object.freeze (congela objeto)
Object.defineProperties (define várias propriedades)
Ovject.defineProperty (Define uma propriedade)
*/


// COPIAR OBJETO SEM ALTERAR HERANCA
const caneca = {nome: 'Caneca', preco: 1.8};

// spread = metodo para copiar objeto
const camiseta = { 
    ...caneca,
    material: 'Poliester'
};

// Object.assign = metodo para copiar objeto
const tenis = Object.assign({}, caneca, {tamanho: '42'});

camiseta.nome = 'Camiseta';
camiseta.preco = 2.5;

console.log(caneca);
console.log(camiseta);
console.log(tenis);

// Object.values = mostra somente os valores das variaveis dos objetos
console.log(Object.values(camiseta));

// Object.entries = retorna chave e valor em arrays
for (let [chave, valor] of Object.entries(tenis)) {
    console.log(chave, valor);
}


