http = require("http");
fs = require("fs");

html = fs.readFileSync("./index.html");

http.createServer(function(req, res) {
	res.write(html);
	res.end();
}).listen(8080);

/*
Enlace: https://nodejs.org/docs/latest-v5.x/api/fs.html#fs_fs_readfilesync_file_options
*/
