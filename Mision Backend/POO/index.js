//Intro a objetos y POO

let nombres = {
    nombre: "Jesus",
    apellido: "Guzman",
};

console.log(nombres.nombre);
console.log(nombres.hasOwnProperty("telefono"));

console.log(nombres);

function perro(nombre, edad) {
    perro.nombre = nombre;
    perro.edad = edad;
}

perro.prototype.habla = function() {
    return "Wof Wof Wof! Soy un perro";
}


let firulais = new perro("Firulais", 9);
console.log(firulais);