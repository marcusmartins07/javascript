const nome = 'Marcus';
const sobrenome = 'Martins';

const falaNome = () => nome + ' ' + sobrenome;

/* module.exports.nome = nome;
module.exports.sobrenome = sobrenome;
module.exports.falaNome = falaNome; 
console.log(module.exports);*/

//Maneira Simples
exports.nome = nome;
exports.sobrenome = sobrenome;
exports.falaNome = falaNome;
this.qualquerCoisa = 'O que eu quiser exportar;'
//console.log(exports);
