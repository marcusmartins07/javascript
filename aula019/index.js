/* 
Primitivos - String, number, boolean, undefined, null (bigint, symbol) = valores copiados

Referência (mutável) - array, object, function = Passa valores de referência
 */

let a = [1, 2, 3];  // TESTE COM MUTAVEIS
let b = a;
console.log(a, b);

a.push(4);
console.log(a, b);

b.pop();
console.log(a,b);


const c = {
    nome: 'Luis',
    sobrenome: 'Otávio'
};
const d = c;

d.nome= 'João';
console.log(c);
console.log(d);
