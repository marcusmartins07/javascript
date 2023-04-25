const multiplicacao = require('./mod1');
console.log(multiplicacao(2, 3));

const criaCachorro = require('./b/c/d/mod2');
const pincher = new criaCachorro('Floquinho');
pincher.latir();

//acessando pastas
const path = require('path');
console.log(path.resolve(__dirname, '..', '..', './aula090'));
console.log(__filename);
console.log(__dirname);
