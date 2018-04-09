http = require("http");
fs = require("fs");

http.createServer(function(req, res) {
	fs.readFile("./index.html", function(err, html) {
		res.writeHead(200, {"Content-Type":"text/html"});
		res.write(html);
		res.end();
	});
}).listen(8080);


/*
Enlace: https://nodejs.org/docs/latest-v5.x/api/http.html
Mensajes:
2xx --> Todo esta correcto
3xx --> La informacion ha sido actualizada
4xx --> Existe algun error en el servidor
5xx --> Existe algun error en el cliente
*/