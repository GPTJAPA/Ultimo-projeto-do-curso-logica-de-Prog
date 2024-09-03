// Classe que representa um herói
class Heroi {
  constructor(nome, idade, tipo) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
  }

  // Método para atacar
  atacar() {
    let ataque;
    switch (this.tipo) {
      case "mago":
        ataque = "magia";
        break;
      case "guerreiro":
        ataque = "espada";
        break;
      case "monge":
        ataque = "artes marciais";
        break;
      case "ninja":
        ataque = "shuriken";
        break;
    }
    console.log(`O ${this.tipo} atacou usando ${ataque}`);
  }
}

// Exemplo de uso
const heroi1 = new Heroi("Arthur", 30, "guerreiro");
heroi1.atacar(); // Saída: O guerreiro atacou usando espada

const heroi2 = new Heroi("Merlin", 150, "mago");
heroi2.atacar(); // Saída: O mago atacou usando magia

const heroi3 = new Heroi("Bruce", 40, "monge");
heroi3.atacar(); // Saída: O monge atacou usando artes marciais

const heroi4 = new Heroi("Naruto", 17, "ninja");
heroi4.atacar(); // Saída: O ninja atacou usando shuriken
