const input = require('prompt-sync')(); 
let [n,k] = input().split(' ').map(x=>Number(x.trim())); 
var remain = Array(n+1).fill(1); 
var lostExam = Array(k+1); 
lostExam = input().split(' ').map(x=>Number(x.trim())); 
lostExam.unshift(0); 
for (let i = 1; i<=k; i++) 
{
    remain[lostExam[i]] = 0; 
}
for (let i = 1; i<=n; i++) if (remain[i] == 1) console.log(i); 
