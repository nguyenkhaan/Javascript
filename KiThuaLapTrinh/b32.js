const prompt = require('prompt-sync')(); 
let input =  prompt('Nhap hai so: '); 
let [a,b] = input.split(' ').map(x=>Number(x.trim())); 
let temp = a; 
a = b; 
b = temp; 
console.log(a,'  ',b); 