// Declaração de função (Function hoisting)

falaOi();
function falaOi() {
    console.log('Oi');
}

// First-class obejects (Objetos de primeira classe)
// Finction expressio
const souUmdDado = function () {
    console.log('Sou um dado.');
};

function executaFuncao(funcao) {
    console.log('Vou executar sua função abaixo: ');
    funcao();
}
executaFuncao(souUmdDado);

//Arrow function
const funcaoArrow = () => {
    console.log('Sou uma arrow function');
};

funcaoArrow();

// Dentro de um objeto eu posso ter uma função

const obj = {
    falar: function() {
        console.log ('Estou falando...'); 
    }
}