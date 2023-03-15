// new Object -> Object.prop
const objA = {
    chaveA: 'A'
    // __proto__: Object.prototype
};

const objB = {
    chaveB: 'B'
    // __proto__: Object.prototype
};

const objC = new Object();
objC.chaveC = 'C';

// Função para copiar o prototype de objA para o objB
Object.setPrototypeOf(objB, objA);

// Estou copiando o protype b para c e herdando o a
Object.setPrototypeOf(objC, objB);

console.log(objB.chaveA);
console.log(objB.chaveB);
console.log(objC.chaveA);