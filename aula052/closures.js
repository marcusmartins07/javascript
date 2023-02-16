function retornaFuncao(nome) {
    return function () {
        return nome;
    };
}

const funcao = retornaFuncao('Marcus');
const funcao2 = retornaFuncao('Martins');

console.log(funcao(), funcao2());
