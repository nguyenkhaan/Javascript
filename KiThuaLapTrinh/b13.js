const input = require('prompt-sync')(); 
var [a,b] = input('Nhap so: ').split(' ').map(x=>Number(x.trim())); 
let t = a 
a = b 
b =t 
console.log(a,' ',b); 