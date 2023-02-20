// import the other model
var a=require('./event.js');

// closure
function outer() {
    const outer = 'Hello';
  
    function inner() {
      const inner = 'world!';
      console.log(outer + ' ' + inner);
    }
  
    return inner;
  }
  outer();

  // read file
  const fs = require('fs');

function readf()
{
    fs.readFile('./example.txt', 'utf8', (err, data) => {
        if (err) {
          console.error(err);
          return;
        }
        console.log(data);
      });
}
readf("./example.txt");

// compound interest
function calculateCompoundInterest(principal, rate, time) {
    const compoundInterest = principal * Math.pow((1 + rate/100), time) - principal;
    return compoundInterest;
  }

const principal = 10000;
const rate = 8; 
const time = 5; 

const compoundInterest = calculateCompoundInterest(principal, rate, time);

console.log('Compound interest: ', compoundInterest);
 