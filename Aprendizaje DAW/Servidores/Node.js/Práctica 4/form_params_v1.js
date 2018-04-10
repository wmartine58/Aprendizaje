http = require("http");
fs = require("fs");

http.createServer(function(req, res) {
	if (req.url.indexOf("wellinmart32") > 0)
		return;
	console.log("\n=======\n\n");
	console.log(req);
	console.log("\n=======\n\n");
	fs.readFile("./index.html", function(err, html) {
		html_string = html.toString();
		arreglo_parametros = [];
		parametros = {};
		variables = html_string.match(/[^\{\}]+(?=\})/g);
		nombre = "";
		if (req.url.indexOf("?") > 0) {
			url_data = req.url.split("?");
			arreglo_parametros = url_data[1].split("&");
		}
		for (i = arreglo_parametros.length - 1; i >= 0; i--) {
			parametro = arreglo_parametros[i];
			param_data = parametro.split("=");
			parametros[param_data[0]] = param_data[1];
		}
		for (i = variables.length - 1; i >= 0; i--) {
			variable = variables[i];
			html_string = html_string.replace("{" + variables[i] + "}", parametros[variables[i]]);
		}
		res.writeHead(200, {"Content-Type":"text/html"});
		res.write(html_string);
		res.end();
	});
}).listen(8080);

/*
video: https://www.youtube.com/watch?v=XHqX7VBqxos
*/