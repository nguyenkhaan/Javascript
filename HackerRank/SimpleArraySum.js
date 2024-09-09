//https://www.hackerrank.com/challenges/simple-array-sum/problem?isFullScreen=t
const prompt = require('prompt-sync')(); 
let n = Number(prompt()); 
let a = prompt().split(' ').map(x=>Number(x.trim())); 
let sum = 0; 
for (let i = 0; i<n; ++i) sum += a[i]; 
console.log(sum); 