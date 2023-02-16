//            012345678910    
const nome = 'Luiz Otávio'
console.log(nome[2]); //exibe somente a casa que eu pedi por ser uma variavel

//               0       1        2 
const alunos = ['Luiz', 'Maria', 'João'];
console.log(alunos[2]); //exibe o nome que eu pedi por ser uma array
console.log(alunos[0]);

alunos[0] = 'Eduardo'; // para substituir elementos
//alunos[3] = 'Luiza'; adicionando elementos 
console.log(alunos);

console.log(alunos.length);//quantidade de elemntos na array

/*
//Posso usar para adicionar elementos. att não funciona mais para adicionar elementos
alunos[alunos.lenght] = 'Fabio';  
alunos[alunos.lenght] = 'Luana';
alunos[alunos.lenght] = 'Marcus';
console.log(alunos);
*/

//Posso usar para adicionar elementos no final
alunos.push('Otavio');
alunos.push('Carlos');
console.log(alunos);

//Posso usar para adicionar elementos no inicio
alunos.unshift('Marcus');
console.log(alunos);

alunos.pop(); //elimina o ultimo indice adicionado.
console.log(alunos);
alunos.shift(); //elimina o primeiro indice adicionado.
console.log(alunos);

//posso criar uma variavel antes de dar pop para salvar o removido
const removido = alunos.pop();
console.log(alunos);
console.log(`Aluno removido foi o ${removido}`);

//deletar um nome e deixar o indice vazio
delete alunos[1];
console.log(alunos);

//selecionar os elementos para exibir
alunos[1] = 'Maria';
alunos.push('Marcus');
alunos.push('Lindita');
console.log(alunos.slice(0-2));

//typeof de array
console.log(typeof alunos);
console.log(alunos instanceof Array); //estou perguntando se alunos são arrays

