// Con set Timeout
function leerCarta(carta, callback) {
    return setTimeout( () => {
        callback(carta.split("").reverse().join(""));
    }, 2000);
};

function construirJuguete(instruction, callback) {
    return setTimeout( () => {
        const juguete = instruction.split("").reverse().join("");
        if (juguete.includes("madera"))
            return callback(`${juguete} de madera fina`);
        else if (juguete.includes("xbox"))
            return callback(`No te puedo mandar tu ${juguete}`);
        else 
            return callback(`Aqui tienes tu cosa esta ${juguete}`);

        callback(juguete);
    },5000);
};

function envolverRegalo(juguete, callback) {
    return setTimeout( () => {
        callback(`${juguete} envuelto`)
    }, 3000);
};

//Callback Hell
/*leerCarta("carrito de madera", (instruccion) => {
    construirJuguete(instruccion, (juguete) => {
        envolverRegalo(juguete, console.log);
    });
});*/

// modularizar las llamadas
// Hacer funciones aparte para las llamadas
function contruirC(juguete) {
    envolverRegalo(juguete, console.log);
};

function leerC(instruccion) {
    construirJuguete(instruccion, contruirC);
};

leerCarta("carrito de madera", leerC);