/* const hora = 10;

if(hora < 12) {
    console.log('Bom dia');
} */

const hora = 10;

if (hora >= 0 && hora <= 11) {
    console.log('Bom dia');
}   else if (hora >=12 && hora <=17) {
    console.log('Boa tarde');
}   else if (hora >= 18 && hora <= 23){
    console.log('Boa noite');
}   else {
    console.log('Ola');
}

const tenhoGrana = true;
if(tenhoGrana) {
    console.log('Vou sair de casa');
} else {
    console.log('Não vou sair de casa');
}