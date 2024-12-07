const readLine = require('prompt-sync')(); 
const {trunc,min} = Math; 
const INF = 1e8; 
function solve(a,b) 
{
    let ans = -1; 
    let m = a.length - 1, n = b.length - 1; 
    let l = 0, r = m - 1, k = 0; 
    if ((m + n) % 2 == 0) k = trunc((m + n)/2) - 1; 
    else k = trunc((m + n)/2); 
    while (l <= r) 
    {
        let mid1 = trunc((l + r) / 2); 
        let mid2 = k - (mid1 + 1) - 1; 
        if (a[mid1] > b[mid2 + 1]) r = mid1 - 1; 
        else if (b[mid2] > a[mid1 + 1]) l = mid1 + 1; 
        else if (a[mid1] <= b[mid2 + 1] && b[mid2] <= a[mid1 + 1]) 
        {
            if ((m + n) % 2 != 0) ans = min(a[mid1 + 1],b[mid2 + 1]); 
            else ans = (a[mid1 + 1] + b[mid2 + 1]) / 2; 
            return ans; 
        }
    }
    return ans; 
}
function main() 
{
    const a = readLine().split(' ').map(x => Number(x.trim()));
    const b = readLine().split(' ').map(x => Number(x.trim())); 
    a.push(INF); 
    b.push(INF); 
    const swap = (a,b) => {
        [a,b] = [b,a]; 
    }
    if (a.length < b.length) swap(a,b); 
    else if (a.length > b.length) swap(a,b);  
    console.log(solve(a,b)); 
    
}
main() 