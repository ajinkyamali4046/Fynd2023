var http= require('http');
var s=require('./httpeg2.js');

http.createServer(function(req,res)
{
    res.writeHead(200,{'content-type':'text/html'});
    res.write("Its first one");
    res.end();
}).listen(8081);