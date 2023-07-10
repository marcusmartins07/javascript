class ValidaCPF {
    constructor(cpfEnviado) {
        this.cpfEnviado = cpfEnviado;
        Object.defineProperty(this, 'cpfLimpo', {
            writable: false,
            emunerable: false,
            configurable: false,
            value: this.cpfEnviado.replace(/\D+/g, '')
        });
    }

    eSequencia() {
        return this.cpfLimpo.charAt(0). repeat(11) === this.cpfLimpo;
    }

    geraNovoCpf() {
        const cpfSemDigitos = this.cpfLimpo.slice(0,-2);
        const digito1 = ValidaCPF.geraDigito(cpfSemDigitos);
        const digito2 = ValidaCPF.geraDigito(cpfSemDigitos + digito1);
        this.novoCPF = cpfSemDigitos + digito1 + digito2;
    }

    static geraDigito(cpfSemDigitos) {
        let total = 0;
        let reverso = cpfSemDigitos.length +1;

        for(let stringNumerica of cpfSemDigitos) {
            total += (reverso * Number(stringNumerica));
            reverso--;
        }
        const digito = 11 - (total % 11);
        return digito <= 9 ? String(digito): '0';
    }

    valida() {
        if(!this.cpfLimpo) return false;
        if(typeof this.cpfLimpo !== 'string') return false;
        if(this.cpfLimpo.length !== 11) return false;
        if(this.eSequencia()) return false;
        this.geraNovoCpf();
        return this.novoCPF === this.cpfLimpo;
    }
    

}

let cpf = new ValidaCPF('044.435.430-60');
//cpf = new ValidaCPF('999.999.999-99');

if (cpf.valida()) {
    console.log('CPF válido');
} else {
    console.log('CPF Inválido');
}

