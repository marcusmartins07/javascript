// SOLUÇÃO RAPIDA
const h1 = document.querySelector('.container h1');
const data = new Date();
const opcoes = {
    dateStyle: 'full' ,
    timeStyle: 'short'
};
h1.innerHTML = data.toLocaleString('pt-BR', opcoes);



/* NÃO FUNCIONA MAIS
h1.innerHTML = data.toLocaleDateString('pt-BR', { dateStyle : 'full', timeStyle 'full'}); 
*/