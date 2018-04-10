http = require("http");
fs = require("fs");

http.createServer(function(req, res) {
	fs.readFile("./index.html", function(err, html) {
		res.writeHead(200, {"Content-Type":"application/json"});
		res.write(html);
		res.end();
	});
}).listen(8080);

/*
Content-Type:application/json muestra la pagina como un json
*/