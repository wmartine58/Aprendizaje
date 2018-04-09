http = require("http");

manejador = function(req, res) {
	console.log("Recibimos una nueva petición");
	res.end("Hola mundo");
};

servidor = http.createServer(manejador);
servidor.listen(8080);