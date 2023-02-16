// For in -> Le os índices ou chaves do objeto

const pessoa = {
    nome: 'Marcus',
    sobrenome: 'Martins',
    idade: 21
};

console.log(pessoa.nome);
console.log(pessoa['nome']);

for (let chave in pessoa) {
    console.log(chave, pessoa[chave]);
}


/* for in com vetor (array basico)

const frutas = ['Pera', 'Maça', 'Uva'];
for (let i in frutas) {
    console.log(frutas[i]);
} 
*/

/* MODO CLÁSSICO

const frutas = ['Pera', 'Maça', 'Uva'];
for (let i = 0; i<frutas.length; i++) {
    console.log(frutas[i]);
} 
*/