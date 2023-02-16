console.log(math.PI);
 
const num = prompt('Digite um número: ');
        document.body.innerHTML = (`Seu número é ${num}</br>`);
        document.body.innerHTML += (`Raiz quadrada: ${(num ** 0.5)}</br>`);
        document.body.innerHTML += (`${num} é inteiro: ${(Number.isInteger(num))} </br>`);
        document.body.innerHTML += (`É NaN: ${Number.isNaN(num)} </br>`);
        document.body.innerHTML += (`Arrendodando para baixo: ${Math.floor(num)} </br>`);
        document.body.innerHTML += (`Arrendodando para cima: ${Math.ceil(num)} </br>`);
        document.body.innerHTML += (`Com duas casas decimais: ${num.toFixed(2)} </br>`);





/*       
    const nome = prompt('Digite seu nome completo');
    document.body.innerHTML = (`O seu nome é: ${nome} </br>`);
    document.body.innerHTML += (`Seu nome tem ${nome.length} letras </br>`);
    document.body.innerHTML += (`A segunda letra do seu nome é: ${nome[1]}</br>`);
    document.body.innerHTML += (`Qual o primeiro índice da LETRA a no seu nome?: ${nome.indexOf('a')}</br>`);
    document.body.innerHTML += (`Qual o ultimo índice da LETRA no seu nome?: ${nome.lastIndexOf('a')}</br>`);
    document.body.innerHTML += (`As ultimas 3 letras do seu nome são: ${nome.slice(-3)}</br>`);
    document.body.innerHTML += (`As as palavras do meu nome divididas são: ${nome.split(' ')}</br>`);
    document.body.innerHTML += (`Seu nome com letras maiúsculas: ${nome.toUpperCase()}</br>`);
    document.body.innerHTML += (`Seu nome com letras minúsculas: ${nome.toLowerCase()}</br>`);
*/