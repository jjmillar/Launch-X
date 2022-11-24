console.log('Hola mundo');

const http = require('http');

const host = '0.0.0.0';
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/plain')
    res.end("Hola Mundo uwu")
});

server.listen(port, host, () => {
    console.log("Server encendido en " + host + "/" + port);
});