const get = require('prompt-sync')(); 
let [n,k] = get().split(' ').map(x=>Number(x.trim())); 
var a = get().split(' ').map(x=>Number(x.trim())); 
let d = 0; 
for (let i = 0; i<k; ++i) if (a[i] <= k) d++; 
let count = d; 
let ans = d; 
for (let L = 1, R = L + k -1 ; R<n; ++R, ++L)  
{
    if (d>=1) --d; 
    if (a[R] <= k) 
    {
        ++d; 
        ++count; 
    } 
    ans = Math.max(ans,d); 
}
console.log(count - ans);  
