const arr=['giraffe','tiger','lion'];
const arr2=[1,2,3,4];
arr.push('cheetah');//add elemnts to array
arr2.push(6);
arr.forEach(element=>{
    console.log(element);
});

arr2.forEach(element=>{
    console.log(element);
});

const fruits=['banana','orange'];
fruits.unshift('apple');// add elements to array at beginning of array.
console.log(fruits);
fruits.findIndex(findFruit('apple'));
fruits.findIndex();

function findFruit(fruit)
{
    return fruit=="banana";
}

 const ages=[6,2,3,4];
 ages.findIndex(checkAge);
 ages.sort();//ascending
 ages.reverse();//descending

 function checkAge(age)
 {
    return age>3;
 }

 const cars=["bmw","mercedes"];
 const car={type:"fiat",model:"400",color:"white"};// name: value pair
