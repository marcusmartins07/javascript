/* Operação Ternária (condição)
* ? = (valor para verdadeiro) 
* : = (valor para falso)
* serve basicamente para avaliar variaveis, se verdade ele procede
*/
const pontuaçãoUsuario = 1000;
const nivelUsuario = pontuaçãoUsuario >= 1000 ? 'Usuario VIP' :'Usuario normal';
console.log(nivelUsuario);