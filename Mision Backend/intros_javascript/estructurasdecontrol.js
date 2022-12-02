// Ciclo for
/*
for (let i = 0; i < 19; i++) {
    if (( i % 2) != 0) {
        continue;
    }
    if (i == 10) {
        break;
    }
    console.log(i);
};
console.log("Aqui ya me sali");

var1 = null;
var3 = "";
var4 = 0;
var5 = false;
var6 = undefined;

console.log(var1);
console.log(var3);
console.log(var4);
console.log(var5);
console.log(var6 + var6);

var6 = 5;
console.log(var6);

console.log("___________________________");

function validadEdad(edad) {
    if (confirm('Estas de acuerdo con seguir con esto?')) {
        console.log("Sigue bajo tu propio riesgo");
        if ( edad >= 18 && edad <= 150) {
            console.log("Puedes comprar cigarritos");
        } else if (edad > 150) {
            console.log("Saludame a la chavela xD");
        } else if (edad >= 0) {
            console.log("Tas muy chiki, vuelve en unos años");
        } else {
            console.log("A caray, tu no deberias existir");
        }
    } else {
        console.log("Que miedoso... XD");
    }
};

function mandarMensajes(edad) {
    switch (edad) {
        case 13:
            console.log("Deberias estar en la secundaria");
            break;
        case 17:
            console.log("Espera un ano mas");
            break;
        default: 
            console.log("UwU");
            break;
    }
};

// If else
let edad = prompt('Introduce tu edad');

if (edad && !isNaN(edad)) {

    edad = Number(edad);

    validadEdad(edad);
    mandarMensajes(edad);
} else {
    alert("Debes introducir tu edad");
    location.reload();
};


//---------------------------------
// While
let boletosDisponibles = 100000;

while (boletosDisponibles > 0) {
    console.log("Boleto comprado para el Corona Capital");
    boletosDisponibles--;
    console.log("Quedan: " + boletosDisponibles);
    console.log("_____________________________");
};

// Do while

do {
    console.log("Boleto comprado para el Corona Capital");
    boletosDisponibles--;
    console.log("Quedan: " + boletosComprados);
} while (boletosDisponibles > 0);

//---------------------
//TRY CATCH finally
try {
    //Codigo suseptible a fallar
    balidarEdad(edad);
} catch (error) {
    console.info("Validar edad no existe");
} finally {
    console.warn("Tu crush no te quiere :(");
};

*/
