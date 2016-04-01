
exports.linuxCommand = function(req,next) {
	
	// var terminal = require("web-terminal");
	// terminal(server);
	// console.log("Web-terminal accessible at http://127.0.0.1:2437/terminal");


	var http  = require("http");
	var terminal    = require("web-terminal");

	var app = http.createServer().listen(2437);
	console.log("Server running at http://127.0.0.1:2437/");

	terminal(app);
	console.log("Web-terminal accessible at http://127.0.0.1:2437/terminal");
	var url = "http://127.0.0.1:8088/terminal";
	next(url);
};