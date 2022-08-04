const http = require('http');
http.createServer(dataControl).listen(4500);

function dataControl(req, res) {
    res.write('<h1>Welcome to basic server, Sumit </h1>');
    res.end();
}