// Proceso asicrono clase
http = require('node:http');

console.log("Hola");
http.get('http://httpstat.us/200', (res) => {
    console.log(`LA API devolio: ${res.statusCode}`);
});
console.log("Adios");