
class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idada = idade;
        this.tipo = tipo.toLowerCase(); 
    }

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
            default:
                ataque = "um ataque genérico";
        }

        
        console.log(`o ${this.tipo} ${this.nome} atacou usando ${ataque}`);
    }
}


const mago = new Heroi("Gandalf", 2000, "mago");
const guerreiro = new Heroi("Aragorn", 87, "guerreiro");
const monge = new Heroi("Lee Sin", 35, "monge");
const ninja = new Heroi("Hanzo", 30, "ninja");


mago.atacar();      // Saída: o mago atacou usando magia
guerreiro.atacar(); // Saída: o guerreiro atacou usando espada
monge.atacar();     // Saída: o monge atacou usando artes marciais
ninja.atacar();     // Saída: o ninja atacou usando shuriken