var http = require('http');
var fs = require('fs');



var server = http.createServer(function (req, res) {
    console.log("URL: " + req.url);
    if(req.url === '/index' || req.url == '/') {
        res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
        fs.createReadStream(__dirname + '/index.html').pipe(res);
    }
    else if (req.url === '/about'){
        res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
        fs.createReadStream(__dirname + '/about').pipe(res);
    }
});

server.listen(3000, '127.0.0.1');
console.log("See 3000");