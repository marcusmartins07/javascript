const elementos = [
    {tag: 'p', texto: 'Frase 01'},
    {tag: 'div', texto: 'Frase 02'},
    {tag: 'section', texto: 'Frase 03'},
    {tag: 'footer', texto: 'Frase 04'},
];

const container = document.querySelector('.container'); // querySelector seleciona a class ou o id
const div = document.createElement('div'); // createElement cria o elemento no html
/* const p = document.createElement('p');
const section = document.createElement('section');
const footer = document.createElement('footer'); */

for (let i = 0; i < elementos.length; i++) {
    let { tag, texto} = elementos[i];
    let tagCriada = document.createElement(tag);
    let textoCriado = document.createTextNode (texto);
    
    tagCriada.appendChild(textoCriado);
    div.appendChild(tagCriada);
}

container.appendChild(div);