function rand(min, max) {
  min *= 1000;
  max *= 1000;
  return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo) {
  return new Promise((resolve, reject) => {
    if (typeof msg !== 'string') reject(false);
    
    setTimeout(() => {
      resolve(msg);
    }, tempo);
  });  
}

// promisse.all  promisse.race  promisse.resolve  promisse.reject

const promisses = [
  'Primeiro valor',
  esperaAi('Promisse 1', 3000),
  esperaAi('Promisse 2', 500),
  esperaAi('Promisse 3', 1000),
  'outro valor'
];

Promise.all(promisses)
  .then(function(valor){
    console.log(valor);
  })
  .catch(function (erro) {
    console.log(erro);
  });