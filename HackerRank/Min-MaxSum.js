const readLine = require('prompt-sync')(); 
function main() 
{
    let a = readLine().split(' ').map(x=>Number(x.trim())); 
    let n = a.length; 
    let l = 0, r = n-1; 
    function sort() 
    {
        while (l < r) 
        {
            for (let i = l; i<=r-1; ++i) if (a[i] > a[i+1]) [a[i],a[i+1]] = [a[i+1],a[i]]; //Phan ra mang 
            r--; 
            for (let i = r; i>=l+1; --i) if (a[i] < a[i-1]) [a[i],a[i-1]] = [a[i-1],a[i]]; 
            l++;
        }
    }
    sort(); 
    let resMin = a[0] + a[1] + a[2] + a[3]; 
    let resMax = a[n-1] + a[n-2] + a[n-3] + a[n-4]; 
    console.log(resMin,resMax); 
}
main(); 