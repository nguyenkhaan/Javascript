const readLine = require('prompt-sync')(); 
let a = readLine().split(' ').map(x => Number(x.trim())); 
const swap = function(a,b) {
    let t = a; 
    a = b; 
    b = t; 
    return [a,b]; 
}
const compare = (a,b) => (a > b); 
function sort(a,swap,compare) 
{
    let l = 0; 
    let r = a.length - 1; 
    while (l < r) 
    {
        for (let i = l; i <= r - 1; ++i) if (compare(a[i],a[i+1])) 
            [a[i] , a[i+1]] = swap(a[i] , a[i+1]);
         
        --r; 
        for (let i = r; i >= l + 1; --i) if (!compare(a[i] , a[i-1])) 
            [a[i] , a[i-1]] = swap(a[i] , a[i-1]);  
        ++l; 
    }
    return a; 
} 
console.log(sort(a,swap,compare)); 