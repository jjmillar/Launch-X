let lista = [];

let x = 5
let y = 10

// Asignacion de adicion
x += y // Es exactamente lo mismo que x = x + y
x += y

lista.push(x)
console.log(lista)

// Asignacion de resta
y -= x

console.log(y)

// Asignacion de multiplicacion
x *= y

console.log(x)

// Operador de bit a bit de desplazamiento a la izquierda
x = 5
y = 10

x <<=y

console.log("X = " + x)

// Asignacion de modulo o residuo
x = 5
y = 11

console.log(y % x);

y %= x

console.log("Y = " + y)

// Estructura de control if
let var1 = 3
let var2 = 4

// Operador igual
if (var1 == '3') {
    console.log("Son iguales");
} else {
    console.log("No son iguales");
};

// Operador estrictamente igual
if (var1 === '3') {
    console.log("Son iguales");
} else {
    console.log("No son iguales");
};

// Operador desigualdad
if (var1 != '4') {
    console.log("Son iguales");
} else {
    console.log("No son iguales");
};
