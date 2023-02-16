let num1 = 9.54578;
let num2 = Math.floor(num1);//arredonda para baixo
console.log(num2);

let num3 = Math.ceil(num1);//arredonda para cima
console.log(num3);

let num4 = Math.round(num1);//arredonda para o mais próximo
console.log(num4);

console.log(Math.max(1,2,3,4,5,-10,1500,9,8,7,6));//Encontra o maior numero

console.log(Math.min(1,2,3,4,5,-10,-50,1500,9,8,7,6));//Encontra o menor numero

console.log(Math.random());//gera um número aletatório entre 0 e 1 

let aletatório = Math.round(Math.random() * (10 - 5) + 5); // gera um numero aleatorio entre 5 e 10
console.log(aletatório);

console.log(Math.PI); // valor de PI

console.log(Math.pow(8,2)); // potenciação
console.log(8**2);

let num5 = 9;
console.log(num5 ** (1/2)); // raiz quadrada
console.log(num5 ** 0.5);

console.log(100/0); // o interpretador avalia divisão por 0 como true