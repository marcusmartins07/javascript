class DispositivoEletronico {
    constructor(nome){
        this.nome = nome;
        this.ligado = false;
    }

    ligar() {
        if (this.ligado){
            console.log(`${this.nome} já ligado`);
            return;
        }
        this.ligado = true;
    }
    
    desligar() {
        if (!this.ligado){
            console.log(`${this.nome} ja desligado`);
            return;
        }
        this.ligado = false;
    }
}

//METODO USADO GERALMENTE
//const d1 = new DispositivoEletronico('Smartphone');

// METEDODO DE HERANCA COM CLASSES
class Smartphone extends DispositivoEletronico{
    constructor(nome, cor, modelo){
        super(nome); // classe pai
        this.cor = cor;
        this.modelo = modelo;
    }
}

class Tablet extends DispositivoEletronico {
    constructor(nome, familia){
    super(nome);
    //this.temWifi = temWifi;
    }
    
    ligar() {
        console.log('Olha, você alterou método ligar.')
    }
}

const d1 = new Smartphone('Iphone', 'Preto', 'Iphone XR');
const d2 = new Tablet('iPad', true)


console.log(d1);
d1.ligar();
console.log(d1);
d1.ligar();
console.log(d1);

console.log(d2.ligado);

