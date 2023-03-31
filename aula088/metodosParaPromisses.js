function rand(min, max) {
  min *= 1000;
  max *= 1000;
  return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo) {
  return new Promise((resolve, reject) => {
    if (typeof msg !== 'string') {
      reject('Cai no erro');
      return;
    }
    
    setTimeout(() => {
      resolve(msg);
    }, tempo);
  });  
}

// promisse.all  promisse.race  promisse.resolve  promisse.reject

let promisses = [
  'Primeiro valor',
  esperaAi('Promisse 1', 300),
  esperaAi('Promisse 2', 500),
  esperaAi('Promisse 3', 200),
  'outro valor'
];


// Promise.all() = Ele recebe um array de Promises como parâmetro e retorna uma Promise 
// que é resolvida com um array contendo os resultados de todas as Promises.

Promise.all(promisses)
  .then(function(valor){
    console.log(valor);
  })
  .catch(function (erro) {
    console.log(erro);
  });

  // RACE

  let promisses2 = [
    esperaAi('Promisse 1', rand(1, 5)),
    esperaAi('Promisse 2', rand(1, 5)),
    esperaAi('Promisse 3', rand(1, 5)),
  ];

  // retorna uma Promise que é resolvida ou rejeitada assim que a primeira Promise
  // do array de Promises for resolvida ou rejeitada.
  Promise.race(promisses2)
  .then(function(valor){
    console.log(valor);
  })
  .catch(function (erro) {
    console.log(erro);
  });

  // Promisse.resolve()

  function baixaPagina() {
    const emCahce = true;
    
    if (emCahce) {
      return Promise.resolve('Pagina em cache');
    } else {
      return esperaAi('Baixei a página', 3000);
    }
  }
  
baixaPagina()
  .then(dadosPagina => {
    console.log(dadosPagina);
  })
  .catch(e => console.log(3));