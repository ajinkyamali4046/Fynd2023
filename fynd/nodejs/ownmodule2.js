var url=require('url'); // built in 
var adr= 'http://localhost:8080/default.htm?year=2017&month=february'; // use html file path
var q=url.parse(adr,true);

console.log(q.host);// returns localhost:8080
console.log(q.pathname);// returns /default.htm
console.log(q.search); // return ?year=2017&month=february

var qdata=q.query; // return an object {year:2017, month:february}
console.log(qdata,month); // return february