const get = require('prompt-sync')(); 
let [n,k] = get().split(' ').map(x=>Number(x.trim())); 
let a = get().split(' ').map(x=>Number(x.trim())); 
let count = Array(10).fill(0); 
function solve() 
{
    for (let i =0; i<k; i++) 
    {
        ++count[a[i]]; 
        if (count[a[i]] == 2) 
        {
            console.log('YES'); 
            return; 
        }
    }
    for (let L = 1 , R = L+k-1; R<n; ++L, ++R) 
    {
        --count[a[L-1]]; 
        ++count[a[R]]; 
        if (count[a[R]]==2) 
        {
            console.log('YES'); 
            return; 
        }
    }
    console.log('NO'); 
}
solve(); 
