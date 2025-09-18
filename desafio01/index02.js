class Lanche {
    constructor() {
      this.pao = false;
      this.carne = false;
      this.queijo = false;
      this.salada = false;
      this.molho = false;
    }
  
    show() {
      console.log("Lanche:", {
        pao: this.pao,
        carne: this.carne,
        queijo: this.queijo,
        salada: this.salada,
        molho: this.molho,
      });
    }
  }

class LancheBuilder {
    constructor() {
        this.Lanche = new Lanche;
    }

    addPao() {
        this.Lanche.pao = true;
        return this;
    }

    addCarne() {
        this.Lanche.carne = true;
        return this;
    }

    addQueijo() {
        this.Lanche.queijo = true;
        return this;
    }

    addSalada() {
        this.Lanche.salada = true;
        return this;
    }

    addMolho() {
        this.Lanche.molho = true;
        return this;
    }

    build() {
        return this.Lanche;
    }
}

class LancheDiretor {
    static lancheSimples() {
        return new LancheBuilder()
        .addPao()
        .addCarne()
        .build();
    }
    static lancheCompleto() {
        return new LancheBuilder()
        .addPao()
        .addCarne()
        .addQueijo()
        .addSalada()
        .addMolho()
        .build();
    }
}

const simples = LancheDiretor.lancheSimples();
const completo = LancheDiretor.lancheCompleto();

simples.show();
completo.show();