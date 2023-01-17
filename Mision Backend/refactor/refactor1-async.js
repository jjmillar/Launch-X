// Mi promesa
/**
 * Simplemente devuelve la cadena "Algo"
 * @returns {String} Algo
 */
function miFunction() {
    return "Algo";
}

miFunction()
    .then(data => {
        console.log(data);
    })
    .catch(err => {
        console.log("ERROR");
    });

// Forma mas eficiente
// Async/await

try {
    const data = await miFunction()
    console.log(data);
} catch (err) {
    console.log("ERROR");
}