//https://www.hackerrank.com/challenges/simple-array-sum/problem?isFullScreen=t
const readLine = require('prompt-sync')(); 
let n = readLine() 
const a = readLine().split(' ').map(x => Number(x.trim())); 
let ans = a.reduce(((x,y) => x + y),0); 
console.log(ans); 