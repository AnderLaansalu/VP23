const http = require("http");

http.createServer(function(req, res){
	res.writeHead(200, {"Content-Type":"text/html"});
	
	res.write('<!DOCTYPE html>	<html>	<head>	<meta charset="utf-8">	<title>Ander Laansalu</title>	</head>	<body>')
	res.write('<h1> Ander Laansalu </h1><p>   see leht on loodud uhkelt <a href="https://www.tlu.ee" target="_blank">TLÜ</a> </p> <p>   digitehnoloogia instituudi õppetöö raames :)) </p><hr><hr> <hr><p>Kursus, mille raames see leht tehti, on veebi proge</p></body></html>')
	
	return res.end();
}).listen(5219);

//5219  laansalu

