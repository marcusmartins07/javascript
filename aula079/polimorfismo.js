// classe = Função construtora

//superclasse || Funcao mae
function Conta(agencia, conta, saldo) {
    this.agencia=agencia;
    this.conta=conta;
    this.saldo=saldo;
}

Conta.prototype.sacar = function (valor) {
    if (this.saldo < valor) {
        console.log(`Saldo indisponivel para saque ${this.saldo}`);
        return;
    }
    
    this.saldo -= valor;
    this.verSaldo();
};

Conta.prototype.depositar = function (valor) {
    this.saldo += valor;
    this.verSaldo()
};
Conta.prototype.verSaldo = function () {
    console.log(
        `Ag/c: ${this.agencia}/${this.conta} | ` +
        `Saldo: R$ ${this.saldo.toFixed(2)}`
    );
};

function ContaCorrente(agencia, conta, saldo, limite) {
    Conta.call(this, agencia, conta, saldo);
    this.limite=limite;
}

ContaCorrente.prototype = Object.create(Conta.prototype);
ContaCorrente.prototype.constructor = ContaCorrente;

ContaCorrente.prototype.sacar = function(valor) {
    if (valor > (this.saldo + this.limite)) {
        console.log(`Saldo indisponivel para saque ${this.saldo}`);
        return;
    }
    
    this.saldo -= valor;
    this.verSaldo();
};

//CP = Conta Poupança

function CP(agencia, conta, saldo) {
    Conta.call(this, agencia, conta, saldo)
}
CP.prototype = Object.create(Conta.prototype) // copiando o prototype de funcao conta
CP.prototype.constructor = CP;


const conta1 = new Conta(11, 22, 21);
console.log(conta1);
conta1.depositar(11);
conta1.sacar(32);

console.log();

const conta2 = new ContaCorrente(07, 10, 0, 100);
conta2.depositar(10);
conta2.sacar(110);
conta2.sacar(1);

console.log();

const conta3 = new CP (15, 07, 0);
conta3.depositar(10);
conta3.sacar(110);
conta3.sacar(1);