http = require("http");
fs = require("fs");

http.createServer(function(req, res) {
	fs.readFile("./index.html", function(err, html) {
		html_string = html.toString();
		variables = html_string.match(/[^\{\}]+(?=\})/g);
		nombre = "Wellington";
		for (i = variables.length - 1; i >= 0; i--) {
			value = eval(variables[i]);
			html_string = html_string.replace("{" + variables[0] + "}", value);
		}
		res.writeHead(200, {"Content-Type":"text/html"});
		res.write(html_string);
		res.end();
	});
}).listen(8080);
