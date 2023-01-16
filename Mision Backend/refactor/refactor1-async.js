// Mi promesa

function miFuncion() {
    console.log("Algo");
};

miFuncion()
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