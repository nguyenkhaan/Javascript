const readLine = require('prompt-sync')(); 
var a = readLine().split(' ').map(x => Number(x.trim())); 
var obj = {} 
for (let i of a) {
    if (i in obj) obj[i]++; 
    else obj[i] = 1; 
}
console.log(obj); 