var http= require('http');
var s=require('./httpeg1.js');

http.createServer(function(req,res)
{
    res.writeHead(200,{'content-type':'text/html'});
    res.write("Its third one");
    res.end();
}).listen(8083);