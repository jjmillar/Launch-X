// En JavaScript
let carro = {
    fabricante: "Toyota",
    modelo: "Prius",
    ano: 2022
}

//En TypeScript
let carroTypeScript: {
    fabricante: string,
    modelo: string,
    ano: number
}

function getCar(car: {
    fabricante: string,
    modelo: string,
    ano: number,
    color?: string //Este campo es opcional
}) {

    let str = ""

    if (typeof car.color === undefined)
        str = `${car.fabricante} ${car.modelo} ${car.ano}`
    else
        str = `${car.fabricante} ${car.modelo} ${car.ano} ${car.color}`
}

getCar(carro)