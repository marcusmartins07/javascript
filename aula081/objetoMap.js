const pessoas = [
    { id: 2, nome: 'Linda' },
    { id: 3, nome: 'Marcus' },
    { id: 1, nome: 'Vinicius' },
];

/*
const novasPessoas = {};
for (const pessoa of pessoas){
    const { id } = pessoa;
    novasPessoas[id] = { ...pessoa }
}
*/

const novasPessoas = new Map(); // para criar um map
for (const pessoa of pessoas){
    const { id } = pessoa;
    novasPessoas.set(id, {...pessoa}); // para settar valores no map
}

console.log(novasPessoas);
console.log(novasPessoas.get(2));

console.log();

for(const pessoa of novasPessoas.keys()){
    console.log(pessoa);
}

// deletando uma chave
novasPessoas.delete(1);
console.log(novasPessoas);