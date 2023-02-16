//IEEE 754-2008
let num1 = 1500;
let num2 = 2.5;

console.log(num1.toString()+num2); // concatenação sem virar string
num1=num1.toString(); // inteiro para string
console.log(num1. toString(2)); //para mostrar o valor binario do numero

let num3 = 10.578955125547;
console.log(num3.toFixed(2), 'defini os numeros decimais mostrados');

let num4 = 16;
console.log('Meu número é inteiro? ',Number.isInteger(num4));

let temp = num1 * 'ola';
console.log('o result da minha variavel é naN?' ,Number.isNaN(temp));

//IEEE 754-2008
let num5 = 0.7;
let num6 = 0.1;

num5 += num6;
num5 += num6;
num5 += num6; // num1 = num1 + num2

num5 = parseFloat(num5.toFixed(2));

console.log(num5);
console.log(Number.isInteger(num5))