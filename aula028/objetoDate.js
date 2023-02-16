const tresHoras = 60 * 60 * 3 * 1000;
const umDia = 60 * 60 * 24 * 1000;
const data01 = new Date(0 + tresHoras + umDia); // 0 = 01/01/1970 Timestamo unix ou época unix
console.log(data01.toString());

const data02 = new Date(2019, 3, 20, 15, 14, 27, 500);
console.log(data02.toString());

const data03 = new Date('2019-04-20 20:20:59');
console.log('Dia', data03.getDate());
console.log('Mês', data03.getMonth() +1);
console.log('Ano', data03.getFullYear());
console.log('Hora', data03.getHours());
console.log('Minuto', data03.getMinutes());
console.log('Segundos', data03.getSeconds());
console.log('Milisegundos', data03.getMilliseconds());
console.log('Dia da Semana', data03.getDay());
console.log(data03.toString());
console.log(Date.now());

