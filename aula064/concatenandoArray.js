const a1 = [1, 2, 3];
const a2 = [4, 5, 6];
const a3 = a1.concat(a2);
console.log(a3);

const a4 = [7, 8, 9];
const a5 = a3.concat(a4, [10, 11, 12], 'Marcus');
console.log(a5);

// ... rest -> ... spread (funciona com objeto também)
const a6 = [...a2, 'Linda', ...a4, ...[13, 14, 15]];
console.log(a6);

