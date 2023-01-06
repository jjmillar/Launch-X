const calcular = (A, B) => {
    console.log("calculando.....");
    let suma = 0;

    suma = A + B + B + A;
    return suma;
};

const num1 = 10;
const num2 = 15;

const resultado = calcular(num1, num2);
console.log(`${num1} + ${num2} = ${resultado}`);