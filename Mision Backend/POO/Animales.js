// Herencia

class Animales {

    #especie = "";
    #nombre = "";
    #edad = 0;
    #terrenoAbuela = "Terreno";

    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    };

    canta() {
        return `${this.nombre} puede cantar`;
    };

    correr() {
        return `${this.edad} puede correr`;
    };

    getEspecie() {
        return this.#especie;
    };

    setEspecie(especie) {
        this.#especie = especie;
    };

};

class Gatos extends Animales {

    constructor(nombre, edad, colorBigotes) {
        super(nombre, edad); 
        this.colorBigotes = colorBigotes;
    };

    bigotes() {
        return `Tengo bigotes color ${colorBigotes}`;
    };

    anios() {
        return `Tengo ${this.edad} anios`;
    };

    especiegato() {
        return `Soy un ${this.getEspecie()}`;
    }

};

let animal = new Animales('gato', 5);
animal.setEspecie("Felis Catus");


let gato = new Gatos("gato", 5, "blanco");
gato.setEspecie("Felis Catus");

console.log(gato.anios());
//console.log(animal.especie);
console.log(gato.especiegato());