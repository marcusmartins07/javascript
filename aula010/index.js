/* 
 * Aritméticos 
 * + Adição / Concatenação
 * - / * 
 * ** Potenciação
 * % Resto da Divisão
 */

/* 
  Precedentes 
  **  *  /  %  +  -
 */

/*
    incremento = ++
    decremento = --
 */

const num1 = 5;
const num2 = 10;
const num3 = '15';
console.log(num1 + num2); //Adição
console.log(num1 + num2); //Concatenação
console.log(num1 - num2); //Subtração
console.log(num1 / num2); //Divisão
console.log(num1 * num2); //Multiplicação
console.log(num1 ** num2);//Potenciação
console.log(num2 % num1); //Resto da Divisão
console.log((num2 + num1) * num2); //Precedentes

// NaN = Not a Number (este erro acontece quando eu tentar fazer uma operação com int ou float com string)
// parseInt (inteiro)
// parseFloat (real/decimal

const num4 = 10;
const num5 = Number('5.2');
console.log(num4 + num5);
console.log(typeof num5);