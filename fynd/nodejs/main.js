var http= require('http');//built in http module
var dt= require('./ownmodule.js');// calling one module from another/user defined module
//dt: todays date
http.createServer(function(req,res)
{
    res.writeHead(200,{'content-type':'text/html'});
    res.write("The date and time are currentely :" + dt.getCurrentDate());
    // datetime is being fetched from the outside module
    // using the content type mentioned above as text/html user defined module
    res.end();//ending the writing functionality for a request response function
}).listen(8080);// mentioning which port our appln will run on server