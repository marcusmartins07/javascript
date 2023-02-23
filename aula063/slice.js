//               -5       -4       -3         -2        -1
// indices        0        1        2          3         4
const nomes = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Julia', 'Vitor'];

// nomes.splice(Índice atual, delete, elem1, elem2, elem3);

const removidos = nomes.splice(3, 2); // remover escolhendo o indice e a quantidade a ser removido
console.log(nomes);
console.log(removidos);

nomes.splice(3, 0, 'Luiz'); // adiciono elemento escolhendo qual casa que ele deve ocupar
console.log(nomes);
console.log(removidos);

const removidos2 = nomes.splice(3, 1, 'Tiago'); // removo o "Luiz" e adiciono o "Carlos" no idice dele
console.log(nomes);
console.log(removidos, removidos2);

// pop = remove ultimo elemento
nomes.splice(-1, 1);
console.log(nomes);

// shift = remove primeiro elemento
nomes.splice(0, 1);
console.log(nomes);

//push = adiciona um elemento no final do array (push ainda é o melhor jeito)
nomes.splice(nomes.length, 0, 'Carlos');
console.log(nomes);

// unshift = adiciona um elemento no incio do array
nomes.splice(0, 0, 'Maria');
console.log(nomes);