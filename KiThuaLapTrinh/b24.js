const prompt = require('prompt-sync')(); 
let c = prompt('Nhap do C: '); 
[c] = c.split().map(item=>parseFloat(c)); 
var f = 9*c/5 + 32; 
console.log(f); 