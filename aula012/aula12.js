let varA = 'A';
let varB = 'B';
let varC = 'C';
let varD = 'D';

/*
varD = varB;
varB = varC;
varC = varA;
varA = varD;
*/

[varA, varB, varC] = [varB, varC, varA]

console.log(varA, varB, varC);