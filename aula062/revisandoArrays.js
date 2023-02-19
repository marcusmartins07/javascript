// const nomes = new Array ('Eduardo', 'Maria', 'Joana'); 

//indices         0          1        2
const nomes = ['Eduardo', 'Maria', 'Joana'];
// atribuindo o valor por referencia
const novo = [...nomes]; // spread operator = copia e espalha os elementos

nomes[2] = 'Joao';
delete nomes[2]; // deleta o conteudo do ultimo elemento selecionado
novo.pop(); // deleta o ultimo elemento
nomes[2] = 'Marcus';

console.log(nomes);
console.log(novo);
console.log(nomes.length); // Mostra a quantidade de elementos no array

//posso deletar o elemento e atribuir ele a uma variavel
const removido = nomes.shift(); // shift = deleta o primeiro elemento
console.log(nomes, removido);

//adicionar elemento no final do array
nomes.push('Linda');
console.log(nomes);

//adicionar elemento no inicio do array
nomes.unshift('Vinicius'); // pode trazer problemas em grandes arrays
console.log(nomes);

// 'fatiando' array
const fatiar = nomes.slice(2,4);
console.log(fatiar);

// 'fatiando' string
const fatiaString = 'Marcus Vinicius Martins';
const stringFatiada = fatiaString.split(' ');
console.log(stringFatiada);

// unir elementos da array em uma string
const arrayUnido = stringFatiada.join(' ');
console.log(arrayUnido);