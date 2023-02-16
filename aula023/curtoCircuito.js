/* 
&& -> false && true -> false "O valor mesmo"
|| -> 

FALSY
false
0 
''  ""  ``
null/undefined
naN
 */



function falaOi () {
    return "oi";
}

const vaiExecutar = false;

console.log(vaiExecutar && falaOi());

console.log (0 || false || null || 'Marcus Martins' || true);

/*******************************************************************/

const corUser = null;
const corPadrao = corUser || 'preto';

console.log(corPadrao);

/*******************************************************************/