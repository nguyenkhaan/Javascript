const get = require('prompt-sync')(); 
let [n,k] = get().split(' ').map(x=>Number(x.trim())); 
let a = get().split(' ').map(x=>Number(x.trim())); 
a.sort(); 
let ok = false; 
for (let L = 0, R = L+k-1; R<n; ++L,++R) 
{
    if (a[R] - a[L]<=k) 
    {
        ok = true; 
        break; 
    }
}
if (ok) console.log('YES'); 
else console.log('NO'); 