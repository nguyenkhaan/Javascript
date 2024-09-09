const prompt = require('prompt-sync')();  
let input = prompt('Nhap so va do chinh xac: '); 
[a,b] = input.split(' ').map(item=>parseFloat(item.trim())); 
a = Math.round(a*(10**b)) / (10**b); 
console.log(a); 