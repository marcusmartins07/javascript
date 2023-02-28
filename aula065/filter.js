// filter -> Sempre retorna um array, com a mesma quantidade de elementos ou menos.

// Retorne os numeros maiores que 10
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

/* METODO ERRADO
function callbackFilter(valor, indice, array) {
    if (valor > 10) {
        return true;
    } else {
        return false;
    }
}
const numerosFiltrados = numeros.filter(callbackFilter); 
*/

// METODO SIMPLIFICADO
const numerosFiltrados = numeros.filter(valor => valor>10);
console.log(numerosFiltrados); 

/* 
const numerosFiltrados = numeros.filter((valor, indice, array) => {
    console.log(valor, indice, array);
    return valor > 10;
});
console.log(numerosFiltrados); 
 */

// Retorne as pessoas que tem o nome com 5 letras ou mais
// Retorne as pessoas com de 50 anos
// Retorne as pessoas cujo nome termina com a 

 const pessoas = [
    { nome: 'Luiz', idade: 62 },
    { nome: 'Maria', idade: 23 },
    { nome: 'Eduardo', idade: 55 },
    { nome: 'Leticia', idade: 19 },
    { nome: 'Rosana', idade: 32 },
    { nome: 'Wallace', idade: 47 },
]; 
const pessoaComNomeGrande = pessoas.filter(obj => obj.nome.length >= 5); 
console.log(pessoaComNomeGrande);
const pessoasVelhas = pessoas.filter(obj => obj.idade > 50);
console.log(pessoasVelhas);
const nomeTerminaComA = pessoas.filter(obj => obj.nome.toLowerCase(). endsWith('a'));
console.log(nomeTerminaComA);