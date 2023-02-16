function criaHoraDosSegundos(segundos) {
    const data = new Date(segundos * 1000)
    return data.toLocaleTimeString('pt-Br', {
        hour12: false,
        timeZone: 'UTC'
    });
}

console.log(criaHoraDosSegundos(10));

const relogio = document.querySelector('.relogio');
const inciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');
let segundos = 0;
let timer;

function iniciaRelogio() {
    timer = setInterval(function() {
        segundos++;
        relogio.innerHTML = criaHoraDosSegundos(segundos);
    }, 1000)
}

inciar.addEventListener('click', function(event) {
    clearInterval(timer);
    iniciaRelogio();
});

pausar.addEventListener('click', function(event) {
    clearInterval(timer);
});

zerar.addEventListener('click', function(event) {
    clearInterval(timer);
    relogio.innerHTML = '00:00:00';
    segundos= 0;
});