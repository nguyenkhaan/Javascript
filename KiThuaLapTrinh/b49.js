const readLine = require('prompt-sync')(); 
let [a,b] = readLine().split(' ').map(x => Number(x.trim())); 
const multi = function(a,b) 
{
    let res = 0;  
    while (b) 
    {
        if (b % 2 != 0) res += a; 
        a += a; 
        b = Math.trunc(b / 2); 
    }
    return res; 
}
console.log(multi(a,b)); 