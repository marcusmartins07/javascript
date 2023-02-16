const verdadeiro = true;

// let tem escopo de bloco { ... bloco }
// var só tem escopo de função

let nome = 'Marcus';
var nome2 = 'Martins';

var nome2 = 'Silva';

if (verdadeiro) {
    let nome = 'Vinicius'; 
    console.log(nome, nome2);

    if (verdadeiro) {
        let nome = 'Lindita'; 
        var nome2 = 'Silva';
        console.log(nome, nome2);
    }
}

console.log(nome, nome2);

var sobrenome = 'Soares';

function falaOi () {
    var nome3 = 'Gabriela';
    console.log(nome3, sobrenome);
}

falaOi();
console.log(sobrenome);
//console.log(nome3, sobrenome); Ele não consegue puxar a var que esta dentro da funcão