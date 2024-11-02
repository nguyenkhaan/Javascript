const readLine = require('prompt-sync')(); 
var a = readLine().split(' ').map(x => Number(x.trim())); 
a = a.map(x => x*2);  //phai thuc hien gan lai 
console.log(a); 