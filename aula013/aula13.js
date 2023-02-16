let umaString = "Um texto \"escrito\" aqui";
console.log(umaString);

umaString = "Um texto \\escrito aqui";
console.log(umaString);

             01234567   
umaString = "Um texto";
console.log(umaString[4]);

             01234567   
umaString = "Um texto";
console.log(umaString.charAt(3));

umaString = "Um texto";
console.log(umaString.concat(' escrito aqui'));
console.log(umaString + ' escrito aqui');
console.log(`${umaString} escrito aqui`)

umaString = "Um texto";
console.log(umaString.indexOf('texto'));

umaString = "Um texto";
console.log(umaString.match(/[a-z]/g));

umaString = "Um texto";
console.log(umaString.search(/x/));

umaString = "Um texto";
console.log(umaString.replace("Um", "Outro"));

umaString = "O rato roeu a roupa do rei de roma";
console.log(umaString.replace(/r/g, "#"));

umaString = "O rato roeu a roupa do rei de roma";
console.log(umaString.length);

umaString = "O rato roeu";
console.log(umaString.slice(2, 6));

umaString = "O rato roeu a roupa do rei de roma.";
console.log(umaString.slice(-5, -1));

umaString = "O rato roeu a roupa do rei de roma.";
console.log(umaString.substring(umaString.length - 5));

umaString = "O rato roeu a roupa do rei de roma.";
console.log(umaString.split(' ',3));

umaString = "O rato roeu a roupa do rei de roma.";
console.log(umaString.toUpperCase());

umaString = "O rato roeu a roupa do rei de roma.";
console.log(umaString.toLowerCase());