function mostraHora() {
    let data = new Date();

    return data.toLocaleTimeString('pt-Br', {hour12: false});
}

const timer = setInterval(function() {
    console.log(mostraHora());
}, 1000);

setTimeout(function() {
    clearInterval(timer);
}, 10000);

setTimeout(function() {
    console.log('Acabou....');
}, 11000);