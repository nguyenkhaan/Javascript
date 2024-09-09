const prompt = require('prompt-sync')(); 
let input = prompt(); 
let [r,p,n] = input.split(',').map(item=>parseFloat(item.trim())); 
let a = p * ((1+r/100)**n); 
console.log('So tien thu duoc sau',n,' nam la: ',a.toFixed(3)); 