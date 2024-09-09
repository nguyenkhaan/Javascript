const input = require('prompt-sync')(); 
let n = input(); 
let a = input().split(' ').map(x=>Number(x.trim())); 
a.sort();  
a.push('a'); 
let d = 0; 
for (let i = 0; i<n; i++) 
{
    if (a[i] != a[i+1]) 
    {
        console.log(a[i],'  ',d+1);
        d = 0; 
    }
    else d++; 
}