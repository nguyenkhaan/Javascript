//Mo phong thuat toan Difference Arrayy 
const get = require('prompt-sync')(); 
let [n,q] = get().split(' ').map(x=>Number(x.trim())); 
let a = get().split(' ').map(x=>Number(x.trim())); 
let d = Array(n+1).fill(0);  
d[0] = a[0]; 
for (let i = 1; i<n; ++i) d[i] = a[i] - a[i-1];  
while (q--) 
{
    let l,r,val; 
    [l,r,val] = get().split(' ').map(x=>Number(x.trim()));  
    d[l] += val; 
    d[r+1] -= val; 
}
a[0] = d[0]; 
for (let i = 1; i<n; i++) a[i] = a[i-1] + d[i]; 
console.log(a); 