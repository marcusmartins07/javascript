class ControleRemoto {
    constructor(tv) {
        this.tv = tv;
        this.volume = 0;
    }

    // Metodo de Instancia
    aumentarVolume() {
        this.volume += 2;
    }

    // Metodo de Instancia
    diminuirVolume() {
        this.volume -= 2;
    }

    // Metodo estático = metodo para aplicar em todas as variaveis filhas
    static trocaPilha(){
        console.log('Ok, vou trocar');
    }
}

const controle1 = new ControleRemoto('LG');
console.log(controle1);
controle1.aumentarVolume();
controle1.aumentarVolume();
controle1.aumentarVolume();
// controle1.trocaPilha(); = não consigo acessar ele pelo metodo/clase, somente pela classe ->
ControleRemoto.trocaPilha();
 console.log(controle1);

// metodo de instancia = somente acessivel pelos metodos/classe
// metodo estatico somente a classe pode acessar (uma funcao dentro de uma classe)