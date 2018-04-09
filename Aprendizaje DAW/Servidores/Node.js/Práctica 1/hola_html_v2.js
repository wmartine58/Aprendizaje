http = require("http");
fs = require("fs");

fs.readFile("./index.html", function(err, html) {
	http.createServer(function(req, res) {
		res.write(html);
		res.end();
	}).listen(8080);
});

/*
Enlace: https://nodejs.org/docs/latest-v5.x/api/fs.html#fs_fs_readfile_file_options_callback
*/

