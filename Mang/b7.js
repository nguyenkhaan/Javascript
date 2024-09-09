const input = require('prompt-sync')(); 
let n = Number(input()); 
let a = input().split(' ').map(x=>Number(x.trim())); 
function Sort() 
{
    const swap = (a,b) => 
    {
        let t = a; 
        a = b; 
        b = t; 
        return [a,b]; 
    }
    let l = 0; 
    let r = a.length - 1; 
    while (l<r) 
    {
        for (let i = l; i<=r-1; i++) if (a[i] > a[i+1]) [a[i],a[i+1]] = swap(a[i],a[i+1]); 
        r--; 
        for (let i = r; i>=l+1; i--) if (a[i] < a[i-1]) [a[i],a[i-1]] = swap(a[i],a[i-1]);  
        l++;
    }
}
Sort(); 
console.log(a); 