// Factory function (Função Fábrica)
// Constructor Function (Função construtora)
function criaPessoa(nome, sobrenome, a, p) {
    return {
        nome,
        sobrenome,
        // getter
        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`;
        },
        // setter
        set nomeCompleto(valor) {
            valor = valor.split(' ');
            this.nome = valor.shift();
            this.sobrenome = valor.join(' ');
        },
        fala(assunto = 'falando sobre NADA') {
            return `${this.nome} esta ${assunto}.`;
        },
        altura: a,
        peso: p,
        // getter
        get imc() {
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2);
        }
    };
}

const p1 = criaPessoa('Marcus', 'Martins', 1.86, 74);
p1.nomeCompleto = 'Maria Oliveria Silva';
console.log(p1.nome);
console.log(p1.sobrenome);
console.log(p1.fala());

const p2 = criaPessoa('Linda', 'Fernandez', 1.66, 54);
console.log(p2.nome, p2.sobrenome);
console.log(p2.imc);
