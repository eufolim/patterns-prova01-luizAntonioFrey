console.log("Hello, World!");

class Bicicleta {
    move() {
      return "Pedalando a bicicleta no pátio da UNISATC";
    }
  }
  
  class Patinete {
    move() {
      return "Andando de patinete pelo estacionamento da UNISATC";
    }
  }
  
  class Onibus {
    move() {
      return "Andando de ônibus e chegando na UNISATC";
    }
  }

  class TransportrFactory {
    static type = {
        bicicleta: Bicicleta,
        patinete: Patinete,
        onibus: Onibus
    }

    static createTransporte(type) {
        const TransporteClass = this.type[type];
        if (!TransporteClass) {
            throw new Error("Meio de Transporte não suportado.");
        }
        return new TransporteClass;
    }
  }

const type = ["bicicleta","patinete","onibus"];
type.forEach((type) => {
    console.log(TransportrFactory.createTransporte(type).move());
})


  