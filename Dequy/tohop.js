const readLine = require('prompt-sync')(); 
const n = Number(readLine()); 
let a = Array(1000); 
let t = Array(1000); 
function Try(i) 
{
    for (let j = 1; j <= n; ++j) if (t[j]) 
    {
        a[i] = j; 
        t[j] = 0; 
        if (i == n - 1) {
            let s = ''; 
            for (let t = 0; t <= i; ++t) s += (a[t]) + ' '; 
            console.log(s); 
        } 
        else Try(i + 1); 
        t[j] = 1; 
    }
}
for (let i = 0; i < 1000; ++i) t[i] = 1; 
Try(0); 