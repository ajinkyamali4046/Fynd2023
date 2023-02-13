// var:global scope;
// require: import thr modules
// modulle nam:alert
// npm install alert/
var alert=require('alert');
function init() //function1-parent
{
    var name='chrome';
    function displayname()
    {
        alert(name);
    }
    displayname();
}
init();