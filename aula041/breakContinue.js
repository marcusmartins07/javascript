const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let numero of numeros) {
    
    if (numero === 2 || numero === 3) {
        continue; // SERVE PARA PULAR O COMANDO 
    }

    if (numero === 7) {
        break; // INTERROMPE O COMANDO 
    }

    console.log (numero);

}