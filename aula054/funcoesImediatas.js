//IIFE -> Imediately invoked function expression

function qualquerCoisa() {
    console.log("Exemplo de function sendo chamada normalmente");
}

qualquerCoisa();

(function () {
    const nome = "Marcus";
    console.log(nome);
})();

const nome = "Martins";
console.log(nome);


(function (idade, peso, altura) {
   
    const sobrenome = 'Martins';
    function criaNome(nome) {
        return nome + ' ' + sobrenome;
    }

function falaNome() {
    console.log(criaNome('Marcus'));
}

falaNome();
console.log(idade, peso, altura);
})(21, 74, 1.86);