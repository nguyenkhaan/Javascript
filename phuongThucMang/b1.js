const readLine = require('prompt-sync')(); 
let a = readLine().split(' ').map(x => Number(x.trim())); 
var sum = 0; 
a.forEach((x) => (sum += x));  
console.log(sum); 