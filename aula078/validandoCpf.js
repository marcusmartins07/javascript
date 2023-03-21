// 705.484.450-52   070.987.720-03

/*
7x 0x 5x 4x 8x 4x 4x 5x 0x
10 09 08 07 06 05 04 03 02
70 00 40 28 48 20 16 15 00 = 237

11 - (237 % 11) = 5 (Primeiro Digito) 
se resultado > 9 entao = primeiro digito é 0

7x 0x 5x 4x 8x 4x 4x 5x 0x 5x
11 10 09 08 07 06 05 04 03 02
77 00 45 32 56 24 20 20 00 10 = 284
se resultado > 9 entao = primeiro digito é 0

11 - (287 % 11) = 2 (segundo digito)

*/

let cpf = '705.484.450-52';
let cpfLimpo = cpf.replace(/\D+/g, '');
cpfArray = Array.from(cpfLimpo);
console.log(cpfArray.splice(9,2));
let cpfSoma = (cpfArray.reduce((ac, val) => ac + Number(val) , 0));
console.log(cpfSoma);