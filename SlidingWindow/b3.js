const get = require('prompt-sync')(); 
let [n,k,b] = get().split(' ').map(x=>Number(x.trim())); 
let a = Array(n+2).fill(1); 
let B = []; 
for (let i = 0; i < b; ++i) 
{
    B.push(1); 
    B[i] = Number(get()); 
    a[B[i]-1] = 0; 
}
let d = 0 , ans = 0 , res = 0; 
for (let i = 0; i<k; ++i) if (a[i]) ++d;  
ans = d; 
for (let L = 1 , R = k+L-1 ; R<n; ++L, R++) 
{
    if (d>=1 && a[L-1] == 1) --d; 
    if (a[R]) ++d; 
    ans = Math.max(ans,d); 
}
console.log(k-ans); 
