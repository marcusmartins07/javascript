class CriaCarro {
    constructor(marca, modelo, ano) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
        this.motor = false;
    }
    
    ligar(){
        if (this.motor){
            console.log(`${this.modelo} já ligado`);
            return;
        }
        console.log(`${this.modelo} esta dando partida`);
        this.motor = true;
    }
        
    desligar(){
        if (!this.motor){
            console.log(`${this.modelo} já desligado`);
            return;
        }
        console.log(`${this.modelo} esta desligando o motor`);
        this.motor = false;
    }
}



const c1 = new CriaCarro('Ford', 'Ka', '2001');
console.log(c1);
c1.ligar();
console.log(c1);
c1.ligar();
console.log(c1);
c1.desligar();
console.log(c1);
c1.desligar();
console.log(c1);