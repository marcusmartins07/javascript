function* geradora1() {
    // Código qualquer...
    yield 'Valor 1;';
    // Código qualquer...
    yield 'Valor 2;';
    // Código qualquer...
    yield 'Valor 3;';
}

/*
const g1 = geradora1();
console.log(g1.next().value);
console.log(g1.next().value); */

/*
const g1 = geradora1();
for (let valor of g1) {
    console.log(valor);
} 
*/

 function* geradora2(){
    let i = 0;

    while(true) {
        yield i;
        i++;
    }
 }

const g2 = geradora2();
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);