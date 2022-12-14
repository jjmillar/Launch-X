const http = require('http'); // Cargando un modulo de Node.js
const url = require('url');

const rd = require('./modules/retrievedate'); // Cargamos un modulo propio que esta en ./modules/retrievedate.js

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    //res.write("La fecha y hora es: " + rd.RetrieveDate());
    const query = url.parse(req.url, true).query;
    const text = query.year + " " + query.month;
    //res.end("Holaaa Mundi!!!!");
    res.end(text);
}).listen(8080);