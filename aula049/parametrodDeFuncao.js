function conta (operador, acumulador, ...numeros) {
    for (let numero of numeros){
        if (operador === '+') acumulador += numero;
        if (operador === '-') acumulador -= numero;
        if (operador === '/') acumulador /= numero;
        if (operador === '*') acumulador *= numero;
    }
    console.log(acumulador);
}
conta('+', 0, 20, 30, 40, 50);

function funcao3([valor1, valor2, valor3]) {
    console.log(valor1, valor2, valor3);
}
funcao3(['Marcus', 'Martins', 21]);
/* funcao3({nome:'Marus', sobrenome:'Martins', idade:21}) */

function funcao(a, b, c, d, e, f) {
    console.log(a, b, c, d, e, f);
}
funcao(1, 2, 3, 4, 5, 6, 7);



function funcao2(g, h = 2, i = 4) {
    console.log(g + h + i);
}
funcao2(2, undefined, 10);

/* 
// arguments = argumentos que sustentam todos os argumentos enviados
function funcao(a, b, c) {
    console.log(arguments);
    let total = 0;
    for (let argumento of arguments){
        total += argumento;
    }
    
    console.log(total, a, b, c);
}

funcao(1, 2, 3, 4, 5, 6); */