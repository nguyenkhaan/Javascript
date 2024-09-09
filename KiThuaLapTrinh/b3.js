const prompt = require("prompt-sync")(); 
var input = prompt('Enter your first number: ');
let [a1,a2,a3] = input.split(' ').map(x=>x.trim()); 
console.log(a1.trim());