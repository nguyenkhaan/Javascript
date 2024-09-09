const get = require('prompt-sync')(); 
let [n,k] = get().split(' ').map(x=>Number(x.trim())); 
let a = get().split(' ').map(x=>Number(x.trim())); 
a = a.map(num=>(num+k)); 
console.log(a); 