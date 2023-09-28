const http = require("http");

const path = require("path");

const url = require("url");

const fs = require("fs");

http.createServer(function(req, res){
	
	console.log(url.parse(req.url, true));
	let currentURL = url.parse(req.url, true);
	
	
	if(currentURL.pathname === "/"){
	
	res.write('<!DOCTYPE html>	<html>	<head>	<meta charset="utf-8">	<title>Ander Laansalu</title>	</head>	<body>')
	res.writeHead(200, {"Content-Type":"text/html"})
	res.write('\n\t<img src="public/banners/banner.png" alt="lehe bänner">\n')
	res.write('<h1> Ander Laansalu </h1><p>   see leht on loodud uhkelt <a href="https://www.tlu.ee" target="_blank">TLÜ</a> </p> <p>   digitehnoloogia instituudi õppetöö raames :)) </p><hr><hr> <hr><p>Kursus, mille raames see leht tehti, on veebi proge</p></body></html>')
	return res.end();
	} else if (currentURL.pathname ===  "/banner.png")
		console.log("tahan pilti");
		let filePath = path.join(__dirname, "public", "banner/banner.png")
		fs.readFile(filePath, (err, data) => {
			if(err){
				throw err;
			}
			else {
				res.writeHead(200, {"Content-Type":"image/png"})
				//res.end(data)
			}
		});


			
	
}).listen(5219);

//5219  laansalu

