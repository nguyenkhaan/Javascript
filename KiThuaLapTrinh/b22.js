const prompt = require('prompt-sync')(); 
let input = prompt('Nhap a,b: '); 
let [a,b] = input.split(' ').map(item=>parseInt(item.trim())); 
let myFunction = function myFunction(a,b)
{
    if (b ==0) return a; 
    else return myFunction(b,a%b); 
}; 
console.log(myFunction(a,b)); 