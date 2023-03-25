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

    esequencia() {
        const sequencia = this.cpfLimpo[0].repeat(this.cpfLimpo.length);
        console.log('passei');
        return sequencia === this.cpfLimpo;
    }

    valida() {
        if(typeof this.cpfLimpo === 'undefined') return false;
        if(this.cpfLimpo.length !== 11) return false;
        return 'aqui';
    }
    

}

const cpf = new ValidaCPF('705.484.450-52');
console.log(cpf.valida());