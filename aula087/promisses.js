function rand(min, max) {
  min *= 1000;
  max *= 1000;
  return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo, cb) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(msg)
      resolve();
    }, tempo);
  });  
}

esperaAi('Frase 01', rand(1, 3))
  .then(resposta => {
    console.log(resposta);
    return esperaAi('Frase 2', rand(1, 3));
  })
  .then(resposta => {
    console.log(resposta);
    return esperaAi('Frase 3', rand(1, 3));
  })
  .catch();

