const readLine = require('prompt-sync')(); 
var a = readLine().split(' '); 
var [name,age,position = 'Unknown'] = a; 
console.log(name,age,position); 