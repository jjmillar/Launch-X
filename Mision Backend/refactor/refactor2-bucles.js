let productModel = [
    {
        "id": 1,
        "name": "Lapiz de numero 2",
        "outdated": false
    }
];

const productosActualizar = await productModel.find({outdated: false});

for (const key in productosActualizar) {
    const producto = productosActualizar[key];
    producto.outdated = false;
    await producto.save();
}

// Alternativa mejor
// Escribir una sola consulta

await productModel.update({outdated: true}, {
    $set: {
        outdated: false
    }
});

// Otra forma Promise.all
/**
 * Devuelve ese mismo valor concatenado
 * @param {int} data 
 * @returns {int} suma
 */
function funcionAsync(data) {
    return data + data;
}

const primeraOperacion = funcionAsync("1");
const segundaOperacion = funcionAsync("2");
const terceraOperacion = funcionAsync("3");

await Promise.all([primeraOperacion, segundaOperacion, terceraOperacion]);