// 705.484.450-52   070.987.720-03

/*
7x 0x 5x 4x 8x 4x 4x 5x 0x
10 09 08 07 06 05 04 03 02
70 00 40 28 48 20 16 15 00 = 237

11 - (237 % 11) = 5 (Primeiro Digito) 
se resultado > 9 entao = primeiro digito é 0

7x 0x 5x 4x 8x 4x 4x 5x 0x 5x
11 10 09 08 07 06 05 04 03 02
77 00 45 32 56 24 20 20 00 10 = 284
se resultado > 9 entao = primeiro digito é 0

11 - (287 % 11) = 2 (segundo digito)

*/

function ValidaCPF(cpfEnviado) {
    // Limpar o CPF
    Object.defineProperty(this, 'cpfLimpo', {
        enumerable: true,
        get: function() {
            return cpfEnviado.replace(/\D+/g, '');
        }
    });
}

ValidaCPF.prototype.valida = function () {
    if(typeof this.cpfLimpo === 'undefined') return false;
    if(this.cpfLimpo.length !== 11) return false;
    if(this.isSequencia()) return false;

    const cpfParcial = this.cpfLimpo.slice(0, -2);
    const digito1 = this.criaDigito(cpfParcial);
    const digito2 = this.criaDigito(cpfParcial+digito1);
    
    const novoCpf = cpfParcial + digito1 + digito2;
    return novoCpf === this.cpfLimpo;

};

// Realizar o calculo
ValidaCPF.prototype.criaDigito = function(cpfParcial) {
    const cpfArray = Array.from(cpfParcial);
    let regressivo = cpfArray.length+1;
    
    const total = cpfArray.reduce((ac, val) => {
        ac += (regressivo * Number(val));
        regressivo--;
        return ac;
    }, 0);
    
    const digito = 11-(total%11);
    return digito > 9 ? '0' : String(digito); // expressao ternaria
    
};

ValidaCPF.prototype.isSequencia = function () {
    const sequencia = this.cpfLimpo[0].repeat(this.cpfLimpo.length);
    return sequencia === this.cpfLimpo;
}

const cpf = new ValidaCPF('705.484.450-52');

if(cpf.valida()) {
    console.log('Cpf válido');
}else{
    console.log('Cpf inválido');
}
