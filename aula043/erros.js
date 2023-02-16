// try, catch e throw

/* 
try {
    console.log(naoExisto);
} catch(erro) {
    console.log('naoExisto não existe');
    console.log(erro);
} 
*/

function soma (x, y) {
    if (typeof x !== 'number' || typeof y !== 'number') {
    throw ReferenceError('x e y precisam se números.');
    }

    return x + y;
}

try {
    console.log(soma(1, 2));
    console.log(soma('1', 2));
} catch(error) {
    console.log('Alguma coisa amigavel');
}