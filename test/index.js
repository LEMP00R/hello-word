var http = require('http');


var server = http.createServer(function (req, res) {
    console.log("URL: " + req.url);
    res.writeHead(200, {'Content-Type': 'application/json; charset=utf-8'});

    var obj = {
        model: 'Audi',
        speed: '180',
        wheels: 4
    };
    res.end(JSON.stringify(obj));
});

server.listen(3000, '127.0.0.1');
console.log("See 3000");