var fs=require('fs');
//import the filestream from node modules
//fs:filestream is an inbuilt module
// ./ used to push file to the location
var rs= fs.createReadStream('./example.txt');
// event= action performed on the obj
rs.on('open',function()
{
    console.log('this is open file');
});
