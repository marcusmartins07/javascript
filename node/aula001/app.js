/*
const mod1 = require('./mod1');
const falaNome = mod1.falaNome;
console.log(falaNome());
*/

const path = require('path');
const axios = require('axios');

//associação via desistruturação (destructuring assignment)
const { nome, sobrenome, falaNome} = require('./mod1');
console.log(nome, sobrenome);
console.log(falaNome());

const {Pessoa} = require('./mod2');
const p1 = new Pessoa('Marcus');
console.log(p1);

/* axios('https:www.otaviomiranda.com.br/json/pessoas.json')
  .then(Response => console.log(response.data));
  .catch(e => console.log(e)); */