/* 
OPERADORES DE COMPARAÇÃO
> maior que
<= maior ou igual a
< menor que
<= menor ou igual a
== igualdade (valor) *************
=== igualdade estrita (valor e tipo)
!= diferente (valor) ***********
!== diferente estrito (valor e tipo)
 */ 

let comp = 10 > 5;
console.log(comp);

let comp1 = 10 >= 5;
console.log(comp);

//PROBLEMA DA IGUALDADE (==) (o mesmo problema acontece com != )
let num1 = 10; //number
let num2 = '10'; //string
let comp2 = num1==num2
console.log(comp2);

//IGUALDADE ESTRITA (===)
let comp3 = num1===num2
console.log(comp3);

//DIFERENÇA ESTRITA (!==)
let comp4 = num1!==num2
console.log(comp4);