var http= require('http');
var p=require('./httpeg3.js');

http.createServer(function(req,res)
{
    //200 status code is success
    res.writeHead(200,{'content-type':'text/html'});
    res.write("Its second one");
    res.end();
}).listen(8082);