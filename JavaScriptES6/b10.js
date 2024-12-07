const readLine = require('prompt-sync')(); 
const a = readLine().split(' ').map(x => Number(x.trim())); 
const [first,second,...rest] = a; 
console.log(first,second,rest); 