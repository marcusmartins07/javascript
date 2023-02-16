// For clássico - Geralmente com iteráveis (array ou strings)
// For in - Retorna o índice ou chave (string, array ou objeto)
// For out - Retorna o valor em si (iteraveis, arrays ou strings)

const nome = 'Marcus Martins';

for (let valor of nome) {
    console.log(valor);
}

const frutas = ['Pera', 'Maça', 'Uva'];

for (let valor of frutas) {
    console.log(valor);
}

const nomes = ['Marcus', 'Vinicius', 'Martins'];

nomes.forEach(function(el) {
   console.log(el); 
});